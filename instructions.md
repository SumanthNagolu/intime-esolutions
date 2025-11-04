# Guidewire Training Platform - Instructions for Cursor AI

## Project Overview
This is an AI-powered Guidewire training platform that scales proven 1:1 training methodology to 1,000+ students. The platform delivers sequential learning across 250 topics (CC/PC/BC) with AI mentoring, progress tracking, and job-readiness focus.

## Tech Stack
- **Framework**: Next.js 15 with App Router (TypeScript strict mode)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Supabase (PostgreSQL with Row Level Security)
- **Auth**: Supabase Auth (email/password + Google OAuth)
- **AI**: GPT-4o-mini (primary), Claude 3.5 Sonnet (complex tasks)
- **AI SDK**: Vercel AI SDK for streaming responses
- **State**: Zustand for global state
- **Validation**: Zod schemas
- **Deployment**: Vercel (frontend) + Supabase (backend)

## Architecture Decisions

### Modular Monolith (NOT Microservices)
- Single Next.js deployment with clear module boundaries
- Feature-based organization in `/modules`
- Can extract to microservices later if needed

### File Organization
```
/app                    # Next.js App Router
  /(auth)              # Auth pages (login, signup, profile-setup)
  /(dashboard)         # Protected pages (dashboard, topics, progress)
  /api                 # API routes
/modules               # Business logic modules
  /auth                # Authentication logic
  /topics              # Topic management & prerequisites
  /progress            # Progress tracking
  /ai-mentor           # AI mentoring system
  /assessments         # Quiz & assignment logic
/lib                   # Utilities
  /supabase           # Supabase clients (browser, server)
  /ai-providers       # AI provider abstractions
/components            # React components
  /ui                 # shadcn/ui components
  /features           # Feature-specific components
/providers            # React context providers
/database             # Schema & migrations
```

## Code Standards

### TypeScript
- Always use strict mode
- No `any` type without justification
- Prefer interfaces for objects, types for unions
- Use Zod for runtime validation

### React Components
- Functional components with hooks only (no classes)
- One component per file
- Keep components under 200 lines
- Extract logic to custom hooks

### Functions
- Keep functions under 20 lines when possible
- Use early returns for error handling
- Single responsibility principle
- Descriptive names (no abbreviations)

### Error Handling
```typescript
// API Response Pattern - ALWAYS use this
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Error handling with early returns
if (!user) {
  return { success: false, error: "User not found" };
}

// Try-catch for async operations
try {
  const result = await someAsyncOperation();
  return { success: true, data: result };
} catch (error) {
  return { success: false, error: error.message };
}
```

## Database Patterns

### Always Use Row Level Security (RLS)
```sql
-- Example: Users can only see their own profiles
CREATE POLICY "Users can view own profile"
ON user_profiles FOR SELECT
USING (auth.uid() = id);
```

### Supabase Client Usage
```typescript
// Browser client (client-side)
import { createClient } from '@/lib/supabase/client';

// Server client (server components, API routes)
import { createClient } from '@/lib/supabase/server';
```

### Progress Tracking
- Use materialized views for aggregated stats (100x faster)
- Index on (user_id, topic_id) for completions
- Real-time subscriptions for live updates

## AI Integration Patterns

### Cost Controls (CRITICAL)
- Limit context to last 12 messages (6 pairs)
- Max 500 tokens for mentor responses
- Max 200 tokens for quick responses
- Route 80% to GPT-4o-mini, 20% to premium models
- Rate limit: 50 queries per user per day

### Streaming Responses (ALWAYS)
```typescript
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Stream for perceived performance
const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: messages,
  stream: true,
  max_tokens: 500,
});

const stream = OpenAIStream(response);
return new StreamingTextResponse(stream);
```

### Socratic Method System Prompt
```typescript
const systemPrompt = `You are a Guidewire training mentor.

CRITICAL RULES:
1. NEVER give direct answers
2. Guide with Socratic questions
3. Help students discover solutions themselves
4. Provide hints when stuck, not solutions
5. Keep responses under 150 words

Student Context:
- Name: ${studentName}
- Topic: ${currentTopic.title}
- Level: ${profile.assumed_persona}

Current lesson: ${lessonContent}`;
```

### API Key Security
- NEVER expose API keys in client code
- Only use in Supabase Edge Functions or API routes
- Use environment variables

## Sequential Learning Implementation

### Prerequisite Checking
```typescript
// Check if user can access topic
const canAccess = await checkPrerequisites(userId, topicId);

// Lock topics until prerequisites are complete
if (!canAccess) {
  return { success: false, error: "Complete prerequisites first" };
}
```

### Topic Structure (JSONB in Database)
```typescript
type Topic = {
  id: string;
  product_id: string;
  position: number;
  title: string;
  description: string;
  prerequisites: string[]; // Array of topic IDs
  duration_minutes: number;
  content: {
    video_url: string;      // YouTube/Loom embed
    slides_url: string;     // Google Slides/PDF link
    notes: string;          // Markdown content
    learning_objectives: string[];
  };
  published: boolean;
};
```

## Performance Requirements
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Bundle size: <200KB initial
- Lighthouse Score: >90

## Security Non-Negotiables
1. All Supabase tables MUST have RLS policies
2. API keys ONLY in server-side code
3. Validate all user input with Zod
4. Sanitize user-generated content
5. Check prerequisites server-side (not just UI)

## Video Hosting Strategy
- MVP: YouTube/Loom unlisted videos (free CDN)
- Post-MVP: Migrate to Cloudflare Stream or Mux
- Track video progress in topic_completions table

## Testing Approach
- Focus on critical paths for MVP
- Test: Auth flow, progress tracking, prerequisite checks
- Skip: Extensive unit tests until post-MVP

## Deployment Checklist
- [ ] Environment variables set in Vercel
- [ ] Supabase project created
- [ ] Database migrations run
- [ ] RLS policies enabled
- [ ] Storage buckets created
- [ ] Test auth flow in production
- [ ] Verify AI responses streaming

## Budget Constraints
- Month 1-2: $0 (free tiers)
- Month 3: $35 (Supabase Pro + AI)
- Month 6: $100-150 max
- Stay under $600 total for 6 months

## Vision Alignment Check
Every feature must answer: **"Does this help students get JOBS?"**
- Not just certificates - actual employment
- Hands-on experience over theory
- Sequential learning is non-negotiable
- AI maintains quality standards

## Common Patterns

### Loading States
```typescript
const [loading, setLoading] = useState(false);

// Always show loading UI
if (loading) {
  return <div>Loading...</div>;
}
```

### Error Boundaries
```typescript
// Wrap all async operations in try-catch
try {
  const data = await fetchData();
} catch (error) {
  toast.error("Something went wrong");
  console.error(error);
}
```

### Optimistic Updates
```typescript
// Update UI immediately, rollback on error
const optimisticUpdate = async () => {
  setData(newData); // Update UI first
  try {
    await saveToDatabase(newData);
  } catch (error) {
    setData(oldData); // Rollback on error
  }
};
```

## References
- Next.js 15 Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- shadcn/ui: https://ui.shadcn.com
- Vercel AI SDK: https://sdk.vercel.ai

## Important Notes for Cursor
- Read files before editing
- Stop after 3 failed attempts and ask for guidance
- Follow the API response pattern consistently
- Always implement loading states
- Never skip error handling
- Test database queries before implementing
