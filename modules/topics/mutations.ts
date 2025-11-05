import { createClient } from '@/lib/supabase/client';

export async function markTopicStarted(
  userId: string,
  topicId: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();

  const { error } = await (supabase
    .from('topic_completions') as any)
    .upsert(
      {
        user_id: userId,
        topic_id: topicId,
        started_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,topic_id',
        ignoreDuplicates: true,
      }
    );

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function updateTopicProgress(
  userId: string,
  topicId: string,
  completionPercentage: number,
  timeSpentSeconds: number = 0
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();

  const { error } = await supabase.rpc('update_topic_completion', {
    p_user_id: userId,
    p_topic_id: topicId,
    p_completion_percentage: completionPercentage,
    p_time_spent_seconds: timeSpentSeconds,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}


