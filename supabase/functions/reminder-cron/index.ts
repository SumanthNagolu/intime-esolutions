import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

const REMINDER_CRON_SECRET = Deno.env.get('REMINDER_CRON_SECRET');
const REMINDER_CRON_TARGET_URL = Deno.env.get('REMINDER_CRON_TARGET_URL');

if (!REMINDER_CRON_SECRET) {
  console.error('REMINDER_CRON_SECRET is not set for the reminder-cron function.');
}

if (!REMINDER_CRON_TARGET_URL) {
  console.error('REMINDER_CRON_TARGET_URL is not set for the reminder-cron function.');
}

type CronResponse = {
  success: boolean;
  status: number;
  body?: unknown;
  error?: string;
};

serve(async (req) => {
  if (!REMINDER_CRON_SECRET || !REMINDER_CRON_TARGET_URL) {
    const errorMessage =
      'Reminder cron environment variables are not configured. Set REMINDER_CRON_SECRET and REMINDER_CRON_TARGET_URL.';
    console.error(errorMessage);

    return new Response(JSON.stringify({
      success: false,
      error: errorMessage,
    } satisfies CronResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({
      success: false,
      status: 405,
      error: 'Method not allowed. Use POST.',
    } satisfies CronResponse), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(REMINDER_CRON_TARGET_URL, {
      method: 'POST',
      headers: {
        'x-cron-secret': REMINDER_CRON_SECRET,
      },
    });

    const contentType = response.headers.get('Content-Type');
    let body: unknown;

    if (contentType?.includes('application/json')) {
      body = await response.json();
    } else {
      body = await response.text();
    }

    const result: CronResponse = {
      success: response.ok,
      status: response.status,
      body,
    };

    const status = response.ok ? 200 : 502;

    return new Response(JSON.stringify(result), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error invoking reminder cron.';

    console.error(message);

    return new Response(JSON.stringify({
      success: false,
      status: 500,
      error: message,
    } satisfies CronResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});


