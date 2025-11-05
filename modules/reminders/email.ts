const RESEND_API_BASE_URL = 'https://api.resend.com/emails';

export type ReminderEmailPayload = {
  to: string;
  firstName: string | null;
  hoursStalled: number;
  thresholdHours: number;
};

export type ReminderEmailResult = {
  id?: string;
};

const resolveConfig = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.REMINDER_EMAIL_FROM;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  if (!fromAddress) {
    throw new Error('REMINDER_EMAIL_FROM is not configured.');
  }

  return { apiKey, fromAddress };
};

const buildEmailContent = ({
  firstName,
  hoursStalled,
  thresholdHours,
}: ReminderEmailPayload) => {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';
  const subject = 'Quick win reminder: ClaimCenter Topic 1 awaits';
  const stalledHours = Math.max(hoursStalled, thresholdHours);

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <p>${greeting}</p>
      <p>
        You&apos;re ${stalledHours} hours past your last ClaimCenter progress. We reserve these nudges
        for learners who are serious about getting job-ready faster.
      </p>
      <p>
        Jump back into your next guided topic now—complete it today and jot down three interview-ready takeaways.
      </p>
      <p style="margin-top: 24px;">
        Need accountability or have a blocker? Reply to this email and we&apos;ll help you get unstuck.
      </p>
      <p style="margin-top: 24px;">In your corner,<br />Guidewire Training Platform Mentor Team</p>
      <hr style="margin: 32px 0; border-color: #E5E7EB;" />
      <p style="font-size: 12px; color: #6B7280;">
        You&apos;re receiving this because you opted into stalled-learner reminders. Turn them off anytime from your dashboard.
      </p>
    </div>
  `;

  const text = `${greeting}

You are ${stalledHours} hours past your last ClaimCenter progress. Complete your next guided topic today and capture three interview-ready takeaways.

Need accountability or a hand? Reply and we will help you get unstuck.

— Guidewire Training Platform Mentor Team

You received this because you opted into stalled-learner reminders. Turn them off any time from your dashboard.`;

  return { subject, html, text };
};

export async function sendReminderEmail(
  payload: ReminderEmailPayload
): Promise<ReminderEmailResult> {
  const { apiKey, fromAddress } = resolveConfig();
  const { subject, html, text } = buildEmailContent(payload);

  const response = await fetch(RESEND_API_BASE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [payload.to],
      subject,
      html,
      text,
      tags: [
        { name: 'category', value: 'stalled_learner_reminder' },
        { name: 'threshold_hours', value: String(payload.thresholdHours) },
      ],
    }),
  });

  if (!response.ok) {
    let errorDetail: unknown;
    try {
      errorDetail = await response.json();
    } catch (jsonError) {
      errorDetail = jsonError instanceof Error ? jsonError.message : 'Unknown error';
    }

    throw new Error(
      `Failed to send reminder email (status ${response.status}): ${JSON.stringify(errorDetail)}`
    );
  }

  const data = (await response.json()) as { id?: string } | null;
  return data ?? {};
}


