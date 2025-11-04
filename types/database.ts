// Database types - auto-generated from Supabase schema
// For now, we'll define basic types. Later, generate with: npx supabase gen types typescript

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          code: string;
          name: string;
          description: string | null;
          icon_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          name: string;
          description?: string | null;
          icon_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          code?: string;
          name?: string;
          description?: string | null;
          icon_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      topics: {
        Row: {
          id: string;
          product_id: string;
          position: number;
          title: string;
          description: string | null;
          prerequisites: Json;
          duration_minutes: number;
          content: Json;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          position: number;
          title: string;
          description?: string | null;
          prerequisites?: Json;
          duration_minutes?: number;
          content?: Json;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          position?: number;
          title?: string;
          description?: string | null;
          prerequisites?: Json;
          duration_minutes?: number;
          content?: Json;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          first_name: string | null;
          last_name: string | null;
          email: string;
          assumed_persona: string | null;
          resume_url: string | null;
          preferred_product_id: string | null;
          role: 'user' | 'admin';
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          first_name?: string | null;
          last_name?: string | null;
          email: string;
          assumed_persona?: string | null;
          resume_url?: string | null;
          preferred_product_id?: string | null;
          role?: 'user' | 'admin';
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string | null;
          last_name?: string | null;
          email?: string;
          assumed_persona?: string | null;
          resume_url?: string | null;
          preferred_product_id?: string | null;
          role?: 'user' | 'admin';
          onboarding_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      topic_completions: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          started_at: string;
          completed_at: string | null;
          completion_percentage: number;
          time_spent_seconds: number;
          video_progress_seconds: number;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          started_at?: string;
          completed_at?: string | null;
          completion_percentage?: number;
          time_spent_seconds?: number;
          video_progress_seconds?: number;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_id?: string;
          started_at?: string;
          completed_at?: string | null;
          completion_percentage?: number;
          time_spent_seconds?: number;
          video_progress_seconds?: number;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      ai_conversations: {
        Row: {
          id: string;
          user_id: string;
          conversation_type: 'mentor' | 'interview' | 'general';
          topic_id: string | null;
          status: 'active' | 'completed' | 'archived';
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          conversation_type: 'mentor' | 'interview' | 'general';
          topic_id?: string | null;
          status?: 'active' | 'completed' | 'archived';
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          conversation_type?: 'mentor' | 'interview' | 'general';
          topic_id?: string | null;
          status?: 'active' | 'completed' | 'archived';
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      ai_messages: {
        Row: {
          id: string;
          conversation_id: string;
          role: 'system' | 'user' | 'assistant';
          content: string;
          tokens_used: number;
          model_used: string | null;
          metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          role: 'system' | 'user' | 'assistant';
          content: string;
          tokens_used?: number;
          model_used?: string | null;
          metadata?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          role?: 'system' | 'user' | 'assistant';
          content?: string;
          tokens_used?: number;
          model_used?: string | null;
          metadata?: Json;
          created_at?: string;
        };
      };
      quiz_questions: {
        Row: {
          id: string;
          topic_id: string;
          question_type: 'multiple_choice' | 'true_false' | 'fill_blank' | 'drag_drop';
          question_text: string;
          options: Json | null;
          correct_answer: string;
          explanation: string | null;
          points: number;
          difficulty: 'easy' | 'medium' | 'hard' | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          question_type: 'multiple_choice' | 'true_false' | 'fill_blank' | 'drag_drop';
          question_text: string;
          options?: Json | null;
          correct_answer: string;
          explanation?: string | null;
          points?: number;
          difficulty?: 'easy' | 'medium' | 'hard' | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          question_type?: 'multiple_choice' | 'true_false' | 'fill_blank' | 'drag_drop';
          question_text?: string;
          options?: Json | null;
          correct_answer?: string;
          explanation?: string | null;
          points?: number;
          difficulty?: 'easy' | 'medium' | 'hard' | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      quiz_attempts: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          score: number;
          max_score: number;
          percentage: number;
          passed: boolean;
          answers: Json;
          time_taken_seconds: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          score?: number;
          max_score: number;
          percentage?: number;
          passed?: boolean;
          answers: Json;
          time_taken_seconds?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_id?: string;
          score?: number;
          max_score?: number;
          percentage?: number;
          passed?: boolean;
          answers?: Json;
          time_taken_seconds?: number | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      check_prerequisites: {
        Args: {
          p_user_id: string;
          p_topic_id: string;
        };
        Returns: boolean;
      };
      get_next_topic: {
        Args: {
          p_user_id: string;
          p_product_id: string;
        };
        Returns: string;
      };
      update_topic_completion: {
        Args: {
          p_user_id: string;
          p_topic_id: string;
          p_completion_percentage?: number;
          p_time_spent_seconds?: number;
        };
        Returns: Json;
      };
      refresh_user_progress: {
        Args: {};
        Returns: void;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

