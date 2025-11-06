# Import Topics to Supabase - Fixed Guide

## 🐛 Issue Fixed

**Original Problem**: 
```
ERROR: 22P02: invalid input syntax for type uuid: "pc-04-001"
```

**Root Cause**: The `topics` table uses UUID for the `id` column, but we need human-readable sequential IDs like "pc-04-001" for prerequisites.

**Solution**: Use **two columns**:
- `id` (UUID) - Primary key for database relationships
- `code` (TEXT) - Human-readable sequential ID for prerequisites (e.g., "pc-04-001")

---

## 🚀 Import Steps (Updated)

### Step 0: Add COMMON Product (if missing)

Run **`database/ADD-COMMON-PRODUCT.sql`** in Supabase SQL Editor:

```sql
-- This script:
-- ✅ Creates COMMON product for foundation content
-- ✅ Verifies all products exist (BC, CC, COMMON, PC)
```

**To run**:
1. Open Supabase Dashboard → SQL Editor
2. Copy contents of `database/ADD-COMMON-PRODUCT.sql`
3. Paste and click "Run"

---

### Step 1: Add the `code` Column

Run **`database/FIX-TOPICS-SCHEMA.sql`** in Supabase SQL Editor:

```sql
-- This script:
-- ✅ Cleans existing topics data (TRUNCATE)
-- ✅ Adds 'code' column for sequential IDs
-- ✅ Creates index on code
-- ✅ Sets up RLS policies
```

**To run**:
1. Open Supabase Dashboard → SQL Editor
2. Copy contents of `database/FIX-TOPICS-SCHEMA.sql`
3. Paste and click "Run"

---

### Step 2: Import All Topics

Run **`import-topics-fixed.sql`** in Supabase SQL Editor:

```sql
-- This script:
-- ✅ Uses gen_random_uuid() for id (UUID primary key)
-- ✅ Uses 'pc-04-001' etc. for code (sequential reference)
-- ✅ Imports all 160 topics with metadata
-- ✅ Uses ON CONFLICT (code) to handle duplicates
```

**To run**:
1. Copy contents of `import-topics-fixed.sql` (4,600+ lines)
2. Paste into Supabase SQL Editor
3. Click "Run" (may take 10-20 seconds)

---

### Step 3: Verify Import

```sql
-- Check total count
SELECT COUNT(*) as total_topics FROM topics;
-- Expected: 160

-- Check by product
SELECT 
  p.name as product,
  COUNT(t.id) as topic_count
FROM topics t
JOIN products p ON t.product_id = p.id
GROUP BY p.name
ORDER BY p.name;

-- Expected results:
-- BillingCenter: 19
-- ClaimCenter: 37
-- PolicyCenter: 58
-- (Plus ~44 Common/Foundation topics)

-- View first few topics
SELECT code, title, position 
FROM topics 
ORDER BY position 
LIMIT 10;
```

---

## 📋 What Changed

### Before (Broken)
```sql
INSERT INTO topics (
  id,              -- ❌ Trying to insert "pc-04-001" as UUID
  product_id,
  ...
) VALUES (
  'pc-04-001',     -- ❌ Not a valid UUID!
  ...
);
```

### After (Fixed)
```sql
INSERT INTO topics (
  id,                    -- ✅ UUID primary key
  code,                  -- ✅ NEW: Sequential ID
  product_id,
  ...
) VALUES (
  gen_random_uuid(),     -- ✅ Generates UUID automatically
  'pc-04-001',          -- ✅ Sequential code for prerequisites
  ...
);
```

---

## 🎯 Why This Structure is Better

### Database Best Practices:
- ✅ **UUID for `id`**: Database relationships, foreign keys, internal refs
- ✅ **TEXT for `code`**: Human-readable, stable, meaningful to users
- ✅ **Both are unique**: Separate indices for fast lookups

### For Prerequisites:
```jsonb
{
  "prerequisites": ["pc-01-001", "pc-01-002"]  // Easy to read and debug
}
```

### For Lookups:
```sql
-- By UUID (fast, for internal operations)
SELECT * FROM topics WHERE id = 'a1b2c3d4-...';

-- By code (readable, for user-facing operations)
SELECT * FROM topics WHERE code = 'pc-04-001';
```

---

## ✅ Data Cleanup

The `FIX-TOPICS-SCHEMA.sql` script includes:

```sql
TRUNCATE TABLE topics CASCADE;
```

This **clears all existing topics** before import. If you have existing data you want to keep, remove this line.

---

## 🔍 Schema After Import

```sql
topics table:
├── id (UUID)                    -- Primary key, auto-generated
├── code (VARCHAR(50))           -- Sequential: pc-04-001, cc-01-001, etc.
├── product_id (UUID)            -- References products(id)
├── position (INTEGER)           -- Sequential: 1, 2, 3...
├── title (VARCHAR(255))
├── description (TEXT)
├── prerequisites (JSONB)        -- Array of codes: ["pc-01-001"]
├── duration_minutes (INTEGER)
├── content (JSONB)              -- {slides_url, video_urls, assignment_url}
├── published (BOOLEAN)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

---

## 🚨 Troubleshooting

### Error: "null value in column 'product_id' violates not-null constraint"
**Fix**: Run `ADD-COMMON-PRODUCT.sql` first (Step 0). The COMMON product is missing for foundation topics.

### Error: "column 'code' does not exist"
**Fix**: Run `FIX-TOPICS-SCHEMA.sql` first (Step 1)

### Error: "duplicate key value violates unique constraint"
**Fix**: The script uses `ON CONFLICT (code) DO UPDATE`, so this shouldn't happen. If it does, clear data first:
```sql
TRUNCATE TABLE topics CASCADE;
```

### Import is slow
**Normal**: 160 topics with large JSONB content takes 10-20 seconds. Be patient!

### Want to check a specific topic
```sql
SELECT * FROM topics WHERE code = 'pc-04-001';
```

---

## 📦 Files You Need

1. **`database/ADD-COMMON-PRODUCT.sql`** - Adds COMMON product (run first)
2. **`database/FIX-TOPICS-SCHEMA.sql`** - Adds code column (run second)
3. **`import-topics-fixed.sql`** - Imports all 160 topics (run third)

---

## 🎉 After Import

Once both scripts run successfully:

- ✅ 160 topics in database
- ✅ Sequential codes for prerequisites
- ✅ UUIDs for relationships
- ✅ Ready to connect to frontend!

Next steps:
1. Upload content files to Supabase Storage
2. Update `content` JSONB with actual file URLs
3. Test topic display in dashboard
4. Fix profile setup issue (if not done yet)

---

## 💡 Pro Tip

You can re-run `import-topics-fixed.sql` anytime - it uses `ON CONFLICT (code) DO UPDATE`, so it will:
- **Insert** new topics
- **Update** existing topics (by code)
- **Not create duplicates**

This makes it safe to run multiple times!

