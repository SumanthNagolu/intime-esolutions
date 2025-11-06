# AI Features Testing Guide

## Quick Test Checklist

### 1. AI Mentor Test (Ready Now!)

**URL**: `https://your-app.vercel.app/ai-mentor`

#### Test Scenario 1: Socratic Method
1. Ask: **"What is a Claim in ClaimCenter?"**
2. ✅ **Expected**: AI should respond with guiding questions, NOT a direct answer
   - Example: "Great question! Before I explain, what do you already know about insurance claims?"
3. ❌ **Fail**: If AI gives a direct definition without guiding you to discover it

#### Test Scenario 2: Streaming
1. Ask any Guidewire question
2. ✅ **Expected**: Response appears word-by-word in real-time (not all at once)
3. ✅ **Expected**: No long wait before response starts

#### Test Scenario 3: Conversation Memory
1. Ask: **"What are the main entities in ClaimCenter?"**
2. AI responds (with questions)
3. Ask: **"Tell me more about what we just discussed"**
4. ✅ **Expected**: AI remembers previous context

#### Verify in Supabase
```sql
-- Check conversation was saved
SELECT * FROM ai_conversations WHERE user_id = 'YOUR_USER_ID' ORDER BY created_at DESC LIMIT 1;

-- Check messages were saved with tokens
SELECT role, LEFT(content, 50) as content_preview, tokens_used, model_used
FROM ai_messages 
WHERE conversation_id = 'CONVERSATION_ID_FROM_ABOVE'
ORDER BY created_at;
```

---

### 2. Interview Simulator Test (After SQL Import)

**Prerequisites**: 
1. Run `database/INSERT-INTERVIEW-TEMPLATES-FIXED.sql` in Supabase
2. Verify templates exist:
   ```sql
   SELECT title, persona, focus_area FROM interview_templates WHERE is_active = true;
   ```

**URL**: `https://your-app.vercel.app/assessments/interview`

#### Test Scenario 1: Start Interview
1. Select "ClaimCenter Data Model Discussion" template
2. Click "Start Interview"
3. ✅ **Expected**: AI asks an opening question about ClaimCenter
4. ✅ **Expected**: Question appears in real-time (streaming)

#### Test Scenario 2: Answer Questions
1. Type a response (e.g., "Claim is the main entity representing an insurance claim")
2. Click "Send Response"
3. ✅ **Expected**: AI provides structured feedback:
   - Clarity: X/10 - comment
   - Completeness: X/10 - comment
   - Guidewire Alignment: X/10 - comment
   - NEXT_STEP: suggestion
4. ✅ **Expected**: AI asks a follow-up question

#### Test Scenario 3: Complete Interview
1. Answer 3-5 questions
2. Click "Complete Interview"
3. ✅ **Expected**: Interview Summary appears with:
   - Readiness Score (0-100)
   - Overview
   - Strengths
   - Growth Areas
   - Recommendations
4. ✅ **Expected**: Readiness Score badge (green if ≥70, red if <70)

#### Verify in Supabase
```sql
-- Check session was created
SELECT * FROM interview_sessions 
WHERE user_id = 'YOUR_USER_ID' 
ORDER BY created_at DESC LIMIT 1;

-- Check messages were saved
SELECT role, LEFT(content, 50) as content_preview
FROM interview_messages 
WHERE session_id = 'SESSION_ID_FROM_ABOVE'
ORDER BY created_at;

-- Check final feedback was saved
SELECT readiness_score, summary, strengths, improvements, recommendations
FROM interview_feedback
WHERE session_id = 'SESSION_ID_FROM_ABOVE';
```

---

### 3. Rate Limiting Test (AI Mentor Only)

#### Test Scenario: Hit Daily Limit
1. Open browser console (F12)
2. Run this script to spam 50 messages quickly:
   ```javascript
   (async () => {
     for (let i = 0; i < 55; i++) {
       try {
         const res = await fetch('/api/ai/mentor', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ message: `Test ${i}` })
         });
         console.log(`${i}: ${res.status}`);
         if (res.status === 429) {
           console.log('Rate limit hit!', await res.json());
           break;
         }
       } catch (e) {
         console.error(e);
       }
     }
   })();
   ```
3. ✅ **Expected**: After 50 requests, you get HTTP 429 with error message
4. ✅ **Expected**: Error says "Daily mentor limit reached. Try again tomorrow."

---

### 4. Token Tracking Test

#### Check AI Messages Table
```sql
-- Get recent AI messages with token counts
SELECT 
  c.id as conversation_id,
  c.conversation_type,
  m.role,
  m.model_used,
  m.tokens_used,
  m.metadata->>'usage' as usage_details,
  m.created_at
FROM ai_messages m
JOIN ai_conversations c ON m.conversation_id = c.id
WHERE c.user_id = 'YOUR_USER_ID'
ORDER BY m.created_at DESC
LIMIT 20;
```

✅ **Expected**: 
- All messages have `tokens_used > 0`
- `metadata` contains `usage` object with `prompt_tokens`, `completion_tokens`, `total_tokens`
- `model_used` = 'gpt-4o-mini'

#### Calculate Total Cost
```sql
-- Estimate total AI cost for your user
SELECT 
  conversation_type,
  COUNT(*) as message_count,
  SUM(tokens_used) as total_tokens,
  ROUND((SUM(tokens_used)::numeric / 1000000) * 0.15, 4) as estimated_cost_usd
FROM ai_messages m
JOIN ai_conversations c ON m.conversation_id = c.id
WHERE c.user_id = 'YOUR_USER_ID'
GROUP BY conversation_type;
```

**GPT-4o-mini pricing**: ~$0.15 per 1M tokens (combined input+output)

---

## Common Issues & Fixes

### Issue: "OPENAI_API_KEY not found"
**Fix**: Add `OPENAI_API_KEY=sk-...` to Vercel environment variables and redeploy

### Issue: AI Mentor shows "Failed to get response"
**Check**:
1. Vercel logs for API errors
2. Supabase RLS policies on `ai_conversations` and `ai_messages`
3. `user_id` matches authenticated user

### Issue: Interview templates not showing
**Fix**: Run `INSERT-INTERVIEW-TEMPLATES-FIXED.sql` in Supabase SQL editor

### Issue: Streaming not working (response appears all at once)
**Check**: 
1. Browser supports Server-Sent Events (all modern browsers do)
2. No proxy/CDN buffering the stream
3. Check browser Network tab for `text/event-stream` content type

---

## Success Metrics

| Feature | Metric | Target |
|---------|--------|--------|
| AI Mentor | Response start time | <2 seconds |
| AI Mentor | Streaming visible | Yes (word-by-word) |
| AI Mentor | Socratic method | No direct answers |
| Interview | Structured feedback | All 3 scores present |
| Interview | Final evaluation | Readiness score 0-100 |
| Token Tracking | Tokens recorded | 100% of messages |
| Rate Limiting | Enforced at 50 msgs | Yes (HTTP 429) |

---

## Next Steps After Testing

1. ✅ Confirm both AI features work end-to-end
2. 📊 Monitor token usage in production (first week)
3. 🎯 Adjust rate limits based on usage patterns
4. 📝 Gather user feedback on AI quality
5. 🔧 Fine-tune system prompts based on responses

---

**Ready to test?** Start with AI Mentor (available now), then Interview Simulator (after SQL import). 🚀

