# Quiz Creation Guide 📝

This guide explains how to extract quiz questions from your PPT slides and add them to the platform.

---

## 📋 Quick Start (3 Easy Steps)

### Step 1: Copy the Template
```bash
cp content/QUIZ-TEMPLATE.md content/my-first-quiz.md
```

### Step 2: Fill It In

1. Open `content/my-first-quiz.md` in any text editor
2. Find the topic code (e.g., `cc-01-001`) from your topics list or PPT filename
3. Open your PPT and go to the last few slides (where quiz questions are)
4. Copy/paste the questions into the template
5. Mark the correct answers
6. Save the file

**See `content/QUIZ-EXAMPLE.md` for a filled-in reference!**

### Step 3: Generate SQL

```bash
python scripts/generate-quiz-sql.py content/my-first-quiz.md
```

This creates: `database/INSERT-QUIZ-[topic-code].sql`

### Step 4: Run in Supabase

1. Open the generated SQL file
2. Copy all the content
3. Paste in Supabase SQL Editor
4. Run it!
5. Test the quiz in your app

---

## 🎯 Finding Your Topic Code

### Method 1: From Database

```sql
SELECT code, title, products.code as product_code
FROM topics
JOIN products ON topics.product_id = products.id
ORDER BY position
LIMIT 20;
```

### Method 2: From Your Content Structure

Your topic codes follow this pattern:
- `cc-01-001` = ClaimCenter, Module 01, Topic 001
- `pc-02-003` = PolicyCenter, Module 02, Topic 003
- `fw-01-001` = Foundation, Module 01, Topic 001
- `bc-01-002` = BillingCenter, Module 01, Topic 002

Match your PPT filename to the topic code.

---

## 📁 File Organization

```
content/
├── README-QUIZZES.md         ← You are here!
├── QUIZ-TEMPLATE.md          ← Empty template (copy this)
├── QUIZ-EXAMPLE.md           ← Filled example (reference)
└── [your-quiz-files].md      ← Your filled quizzes

scripts/
└── generate-quiz-sql.py      ← Converts quiz → SQL

database/
└── INSERT-QUIZ-*.sql         ← Generated SQL files
```

---

## ✍️ Tips for Writing Good Quiz Questions

### ✅ Do:
- Use clear, unambiguous language
- Test one concept per question
- Make all options plausible (no obvious wrong answers)
- Include explanations to reinforce learning
- Use real-world scenarios when possible

### ❌ Don't:
- Use "all of the above" or "none of the above" (confusing)
- Make correct answers consistently longer/shorter
- Use negative phrasing ("Which is NOT...")
- Include trick questions (this is learning, not testing)

---

## 📊 Quiz Best Practices

| Quiz Type | Questions | Time Limit | Passing Score |
|-----------|-----------|------------|---------------|
| Quick Check | 3-5 | 5-10 min | 70% |
| Module Quiz | 5-7 | 10-15 min | 70% |
| Final Assessment | 10-15 | 20-30 min | 80% |

---

## 🔄 Bulk Processing (Advanced)

If you have many quizzes to create, you can:

1. **Create multiple quiz files:**
   ```bash
   cp content/QUIZ-TEMPLATE.md content/quiz-cc-01-001.md
   cp content/QUIZ-TEMPLATE.md content/quiz-cc-01-002.md
   cp content/QUIZ-TEMPLATE.md content/quiz-pc-01-001.md
   ```

2. **Fill them all in** (can be done in parallel or over time)

3. **Generate SQL for all:**
   ```bash
   python scripts/generate-quiz-sql.py content/quiz-cc-01-001.md
   python scripts/generate-quiz-sql.py content/quiz-cc-01-002.md
   python scripts/generate-quiz-sql.py content/quiz-pc-01-001.md
   ```

4. **Combine SQL files** (optional):
   ```bash
   cat database/INSERT-QUIZ-*.sql > database/ALL-QUIZZES.sql
   ```

5. **Run in Supabase** (all at once or one by one)

---

## 🐛 Troubleshooting

### Error: "No valid questions found"
- Make sure you've replaced `[Your question here]` with actual questions
- Check that options are formatted as `A) Option text`
- Verify correct answer is one of A, B, C, or D

### Error: "Topic code not found"
- Verify the topic code exists in your database
- Run: `SELECT code, title FROM topics WHERE code = 'your-code';`
- Make sure the code matches exactly (case-sensitive)

### Quiz not showing in app
- Check quiz was created: `SELECT * FROM quizzes WHERE topic_id = (SELECT id FROM topics WHERE code = 'your-code');`
- Verify questions exist: `SELECT COUNT(*) FROM quiz_questions WHERE quiz_id = 'your-quiz-id';`
- Make sure `published = true` in the quizzes table

---

## 🎯 Next Steps

1. ✅ **Start with 1 quiz** - Pick your easiest topic, create one quiz
2. ✅ **Test it end-to-end** - Make sure the flow works
3. ✅ **Batch process 5-10 more** - High-priority topics
4. ✅ **Decide on automation** - Build bulk extraction script if needed

---

## 💡 Example Workflow

```bash
# Day 1: Create first quiz
cp content/QUIZ-TEMPLATE.md content/quiz-cc-01-001.md
# [Fill it in from PPT]
python scripts/generate-quiz-sql.py content/quiz-cc-01-001.md
# [Run SQL in Supabase]
# [Test in app]

# Day 2-3: Create 5 more quizzes
# [Repeat for high-priority topics]

# Day 4: Decide if you want to build automation or continue manually

# Week 2: Have 20-30 quizzes complete
# Week 3: Full quiz coverage (160 quizzes)
```

---

## 📞 Need Help?

If you get stuck, check:
1. The example file: `content/QUIZ-EXAMPLE.md`
2. Generated SQL output for errors
3. Supabase error messages

**You've got this!** 🚀

