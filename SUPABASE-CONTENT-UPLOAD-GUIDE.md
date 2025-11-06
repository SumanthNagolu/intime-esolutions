# Supabase Content Upload Guide

## 🎯 Overview

Due to the large size of your training content (73GB), we're uploading files **directly** to Supabase Storage instead of reorganizing locally. This guide walks you through the process.

---

## 📊 What We Have

✅ **SQL Import Script**: `import-topics.sql` (98KB)
- Contains 160 topics with metadata
- Maps to 4 products (PolicyCenter, ClaimCenter, BillingCenter, Common)
- Sequential positioning (001-160)
- **Ready to run in Supabase**

✅ **Original Content**: `data/` folder (73GB)
- 14 chapters of training material
- 443 files (PPTX slides, MP4 demos, PDF assignments)
- All organized and ready to upload

---

## 🚀 Upload Process

### Step 1: Run SQL Import Script

This creates the topic records in your database.

1. **Open Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Select your project: `guidewire-training platform`

2. **Go to SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy & Paste SQL Script**
   ```bash
   # Copy the entire contents of import-topics.sql
   cat import-topics.sql | pbcopy  # macOS - copies to clipboard
   ```
   - Paste into the SQL Editor
   - Click "Run" or press Cmd+Enter

4. **Verify Import**
   ```sql
   -- Check that topics were created
   SELECT product_id, COUNT(*) as topic_count
   FROM topics
   GROUP BY product_id;
   
   -- Should show:
   -- PolicyCenter: 58 topics
   -- ClaimCenter: 37 topics  
   -- BillingCenter: 19 topics
   -- Common: ~44 topics
   ```

---

### Step 2: Create Storage Bucket

1. **Go to Storage**
   - Click "Storage" in the left sidebar
   - Click "Create a new bucket"

2. **Bucket Settings**
   ```
   Name: training-content
   Public bucket: ✅ Yes (so files can be accessed)
   File size limit: 100MB (or whatever suits your largest video)
   Allowed MIME types: 
     - application/vnd.openxmlformats-officedocument.presentationml.presentation (PPTX)
     - video/mp4
     - application/pdf
     - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (XLSX)
     - application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX)
   ```

---

### Step 3: Upload Files to Storage

You have **3 options**:

#### **Option A: Upload via Supabase Web UI** (Easiest for small batches)

1. Go to Storage → training-content
2. Click "Upload file" or "Upload folder"
3. Select folders from your `data/` directory
4. Upload chapter by chapter

**Pros**: No setup required, visual interface  
**Cons**: Slow for 73GB, may timeout on large files

---

#### **Option B: Upload via Supabase CLI** (Recommended)

1. **Install Supabase CLI**
   ```bash
   brew install supabase/tap/supabase
   ```

2. **Login to Supabase**
   ```bash
   supabase login
   ```

3. **Link to Your Project**
   ```bash
   cd "/Users/sumanthrajkumarnagolu/Projects/guidewire-training platform"
   supabase link --project-ref YOUR_PROJECT_REF
   ```
   Get YOUR_PROJECT_REF from: https://supabase.com/dashboard/project/_/settings/general

4. **Upload Files**
   ```bash
   # Upload entire data folder
   supabase storage upload training-content/ data/ --recursive
   
   # Or upload chapter by chapter
   supabase storage upload training-content/chapter-1 "data/Chapter 1 - Guidewire Cloud Overview/" --recursive
   ```

**Pros**: Fast, handles large files, resumable  
**Cons**: Requires CLI installation

---

#### **Option C: Use Supabase Storage API** (For automation)

Create a simple Node.js/Python script to upload files programmatically.

**Example (JavaScript)**:
```javascript
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
)

async function uploadFile(filePath, storagePath) {
  const fileBuffer = fs.readFileSync(filePath)
  const { data, error } = await supabase.storage
    .from('training-content')
    .upload(storagePath, fileBuffer)
  
  if (error) console.error('Upload error:', error)
  else console.log('Uploaded:', storagePath)
}
```

---

### Step 4: Update Database with Storage URLs

After uploading, you need to update the database to point to the actual file URLs.

**For each topic**, the `content` JSONB field should have URLs like:
```json
{
  "slides_url": "https://your-project.supabase.co/storage/v1/object/public/training-content/chapter-4/In_policy_01/PC_Intro_01_Accounts.pptx",
  "video_urls": [
    "https://your-project.supabase.co/storage/v1/object/public/training-content/chapter-4/In_policy_01/In_policy_01_01.mp4",
    "https://your-project.supabase.co/storage/v1/object/public/training-content/chapter-4/In_policy_01/In_policy_01_02.mp4"
  ],
  "assignment_url": "https://your-project.supabase.co/storage/v1/object/public/training-content/chapter-4/In_policy_01/assignment.pdf"
}
```

**Update SQL** (after uploading):
```sql
-- Update PolicyCenter topic 1 (example)
UPDATE topics
SET content = jsonb_set(
  content,
  '{slides_url}',
  '"https://YOUR_PROJECT.supabase.co/storage/v1/object/public/training-content/chapter-4/In_policy_01/PC_Intro_01_Accounts.pptx"'::jsonb
)
WHERE id = 'pc-01-001';

-- Do this for all 160 topics (or script it)
```

---

## 🔧 Automated URL Update Script

Create `scripts/update-storage-urls.js`:

```javascript
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key
)

async function updateStorageUrls() {
  // 1. List all files in storage
  const { data: files } = await supabase.storage
    .from('training-content')
    .list('', { limit: 1000, sortBy: { column: 'name', order: 'asc' } })
  
  // 2. Get all topics
  const { data: topics } = await supabase
    .from('topics')
    .select('id, position')
  
  // 3. Match files to topics based on position/chapter
  // 4. Update each topic's content JSONB with actual URLs
  
  for (const topic of topics) {
    // Find matching files for this topic
    // Update content with URLs
    await supabase
      .from('topics')
      .update({
        content: {
          slides_url: '...generated URL...',
          video_urls: ['...', '...'],
          assignment_url: '...'
        }
      })
      .eq('id', topic.id)
  }
}
```

---

## 📋 Simplified Recommended Workflow

### Quick Path (Manual but works):

1. **Run SQL Import** (5 min)
   - Copy `import-topics.sql` to Supabase SQL Editor
   - Run it
   - Verify 160 topics created

2. **Create Storage Bucket** (2 min)
   - Name: `training-content`
   - Public: Yes

3. **Upload Files** (depends on internet speed for 73GB)
   - Use Supabase CLI for best results
   - Or upload via web UI chapter by chapter

4. **Update URLs** (30 min)
   - Write a script or manually update a few key topics
   - Test one topic end-to-end first

5. **Test in Dashboard** (5 min)
   - View a topic in your app
   - Click to open slides/videos
   - Verify everything works

---

### Advanced Path (Automated):

1. Run SQL import
2. Create storage bucket
3. Write upload script that:
   - Uploads files
   - Generates public URLs
   - Updates database automatically
4. Test

---

## 🎯 Current File Structure in `data/`

```
data/
├── Chapter 1 - Guidewire Cloud Overview/
├── Chapter 2 - Surepath Overview/
├── Chapter 3 - InsuranceSuite Implementation Tools/
├── Chapter 4 - Policy Center Introduction/
│   ├── In_policy_01/  ← Upload as-is
│   ├── In_policy_02/
│   └── ... (31 lessons)
├── Chapter 5 - Claim Center Introduction/
└── ... (14 chapters total)
```

**You can upload the entire `data/` folder structure as-is!**
The reorganization isn't necessary - just keep the original paths in the database URLs.

---

## ✅ Testing Checklist

After upload, verify:

- [ ] All 160 topics appear in database (`SELECT COUNT(*) FROM topics`)
- [ ] Storage bucket contains all files
- [ ] Pick one topic and verify:
  - [ ] Slides URL works
  - [ ] Video URLs work
  - [ ] Assignment URL works (if applicable)
- [ ] Topic displays correctly in your app dashboard
- [ ] Video player works
- [ ] Slides open/download correctly

---

## 🆘 Troubleshooting

### "File too large" error
- Increase bucket file size limit in Supabase Storage settings
- Or compress videos before uploading

### "Upload timeout" error
- Use Supabase CLI instead of web UI
- Upload smaller batches

### "Public URL not working"
- Verify bucket is set to Public
- Check RLS policies on storage bucket

### "CORS error when accessing files"
- Add CORS policy to your storage bucket
- Go to Storage → training-content → Configuration

---

## 📞 Next Steps

1. **Import SQL first** - This creates the structure
2. **Upload a test chapter** - Verify the process works
3. **Update one topic with URLs** - Test end-to-end
4. **Scale to all content** - Once proven, upload everything

Want me to help with any specific step?

