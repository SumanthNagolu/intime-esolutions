'use server';

import { revalidatePath } from 'next/cache';
import { createAdminClient, createClient } from '@/lib/supabase/server';
import { bulkUpsertTopics, type IngestionTopic } from '@/modules/topics/admin';

type ImportState = {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
};

const initialState: ImportState = {
  success: false,
};

const parseTopics = (payload: string): IngestionTopic[] => {
  const data = JSON.parse(payload);

  if (!Array.isArray(data)) {
    throw new Error('JSON payload must be an array of topics.');
  }

  return data as IngestionTopic[];
};

export async function importTopicsAction(
  _: ImportState = initialState,
  formData: FormData
): Promise<ImportState> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Unauthorized: Please sign in.' };
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { success: false, error: 'Only admins can import topics.' };
    }

    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return { success: false, error: 'Please select a JSON file to upload.' };
    }

    const payload = await file.text();
    let topics: IngestionTopic[];

    try {
      topics = parseTopics(payload);
    } catch (error) {
      const details =
        error instanceof Error ? error.message : 'Unable to parse file contents.';
      return {
        success: false,
        error: `Invalid JSON file. ${details}`,
      };
    }

    const adminClient = createAdminClient();
    const result = await bulkUpsertTopics(adminClient, topics);

    if (!result.success) {
      return {
        success: false,
        error: result.errors?.join('\n') ?? 'Failed to import topics.',
      };
    }

    revalidatePath('/admin/topics');

    return {
      success: true,
      count: result.count,
      message: `Imported ${result.count ?? topics.length} topics successfully.`,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred.';
    return { success: false, error: message };
  }
}

export { initialState as importTopicsInitialState };

