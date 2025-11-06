# 🚀 Content Reorganization - Ready to Execute

## ✅ Status: READY

The reorganization script has been tested and validated. It successfully identifies:

- **160 training topics**
- **443 content files** (.pptx, .mp4, .pdf, .docx, .xlsx)
- **4 product areas** (Common, PolicyCenter, ClaimCenter, BillingCenter)
- **12 modules** across all products

---

## 📋 What Will Happen

### Current Structure (data/)
```
data/
├── Chapter 1 - Guidewire Cloud Overview/
├── Chapter 2 - Surepath Overview/
├── Chapter 3 - InsuranceSuite Implementation Tools/
├── Chapter 4 - Policy Center Introduction/
│   ├── In_policy_01/ ... In_policy_31/
├── Chapter 5 - Claim Center Introduction/
│   ├── In_Claim_01/ ... In_Claim_19/
├── Chapter 6 - Billing Center Introduction/
│   ├── BillingCenter_01/ ... BillingCenter_19/
├── Chapter 7 - Rating Introduction/
├── Chapter 8 - InsuranceSuite Developer Fundamentals/
├── Chapter 9 - PolicyCenter Configuration/
├── Chapter 10 - ClaimCenter Configuration/
├── Chapter 12 - Rating Configuration/
├── Chapter 13 - Introduction to Integration/
└── Chapter 14 - Advanced product Designer/
```

### New Structure (content/)
```
content/
├── common/
│   ├── 001-guidewire-cloud/ (1 topic)
│   ├── 002-surepath/ (TBD)
│   ├── 003-implementation-tools/ (TBD)
│   ├── 004-developer-fundamentals/ (22 topics)
│   └── 005-integration/ (21 topics)
│
├── policycenter/
│   ├── 01-introduction/ (31 topics)
│   ├── 02-configuration/ (14 topics)
│   ├── 03-rating/ (12 topics)
│   └── 04-apd/ (1 topic)
│
├── claimcenter/
│   ├── 01-introduction/ (19 topics)
│   └── 02-configuration/ (18 topics)
│
└── billingcenter/
    └── 01-introduction/ (19 topics)
```

---

## 🔍 What the Script Does

### 1. File Organization
- Copies all files to new structure
- Renames files consistently (`slides.pptx`, `demo-01.mp4`, `assignment.pdf`)
- Creates clean folder hierarchy

### 2. Metadata Generation
- Creates `metadata.json` for each topic
- Auto-populates: id, title, duration, files
- Ready for manual enhancement (descriptions, learning objectives)

### 3. SQL Import Script
- Generates `import-topics.sql`
- Populates Supabase `topics` table
- Links to existing `products` table

---

## 📊 Content Breakdown

| Product | Modules | Topics | Files |
|---------|---------|--------|-------|
| **Common** | 5 | ~44 | ~120 |
| **PolicyCenter** | 4 | 58 | ~150 |
| **ClaimCenter** | 2 | 37 | ~100 |
| **BillingCenter** | 1 | 19 | ~60 |
| **TOTAL** | **12** | **160** | **443** |

---

## 🎯 Execution Steps

### Step 1: Dry Run (Review)
```bash
python3 scripts/reorganize-content.py
```
**This is safe** - no files are changed. Review the plan.

### Step 2: Execute Reorganization
```bash
python3 scripts/reorganize-content.py --execute
```
**Important:** This will:
- Create `content/` directory
- Copy all 443 files to new locations
- Generate 160 `metadata.json` files
- Keep original `data/` folder intact (safe!)

### Step 3: Generate SQL Import
```bash
python3 scripts/reorganize-content.py --sql
```
Creates `import-topics.sql` for Supabase.

### Step 4: Import to Database
```bash
# In Supabase SQL Editor
# Run: import-topics.sql
```

### Step 5: Verify
- Check a few topics in `content/` directory
- Review a few `metadata.json` files
- Test database queries

### Step 6: Clean Up (Optional)
```bash
# After verifying everything works
rm -rf data/  # Delete old structure
```

---

## 🛡️ Safety Features

✅ **Original files are preserved** - Script only copies, never deletes  
✅ **Dry run by default** - Must explicitly use `--execute` flag  
✅ **Confirmation required** - Script asks "Are you sure?"  
✅ **No destructive actions** - Safe to run multiple times  
✅ **Backup recommended** - User has backup already ✅

---

## 🔧 Script Features

### Handles Complex Nesting
- ✅ Files directly in chapter folders (Chapter 1)
- ✅ Single lesson folders (most chapters)
- ✅ Nested lesson folders (IS_Fund_01-10: folder/folder/files)
- ✅ Deep nesting (Chapter 13: 3 levels deep!)

### Auto-Detection
- ✅ Detects slides (.pptx, .pdf)
- ✅ Detects demos (.mp4, .mkv)
- ✅ Detects assignments (.pdf, .docx, .xlsx with keywords)
- ✅ Handles all other files

### Metadata Generation
- ✅ Auto-generates topic IDs (`pc-01-001`, `cc-02-020`, etc.)
- ✅ Auto-extracts titles from filenames
- ✅ Auto-calculates estimated duration
- ✅ Auto-maps to products

---

## 📝 Post-Reorganization Tasks

### 1. Enhance Metadata (Recommended)
After reorganization, you can manually enhance `metadata.json` files:

```json
{
  "id": "pc-01-001",
  "title": "PolicyCenter Accounts",
  "description": "← Add detailed description here",
  "learning_objectives": [
    "← Add specific objectives"
  ],
  "prerequisites": ["← Add prerequisite topic IDs"],
  "keywords": ["← Add searchable keywords"]
}
```

### 2. Update File Paths in Database
If you upload files to Supabase Storage:
```sql
UPDATE topics 
SET content = jsonb_set(
  content, 
  '{slides_url}', 
  '"https://supabase.co/storage/..."'::jsonb
)
WHERE id = 'pc-01-001';
```

### 3. Set up Prerequisites
Link topics sequentially:
```bash
# Script can auto-generate prerequisite chains
python3 scripts/generate-prerequisites.py
```

### 4. Upload to Supabase Storage (Optional)
```bash
# Use Supabase CLI to upload files
supabase storage cp content/ supabase://training-content/ --recursive
```

---

## ✅ Ready to Execute!

### Quick Start
```bash
# 1. Review the plan
python3 scripts/reorganize-content.py

# 2. If everything looks good, execute
python3 scripts/reorganize-content.py --execute

# 3. Generate SQL import
python3 scripts/reorganize-content.py --sql

# 4. Import to Supabase
# Copy contents of import-topics.sql to Supabase SQL Editor
```

---

## 🆘 If Something Goes Wrong

### Files look wrong?
- Original `data/` folder is still intact
- Delete `content/` and try again
- Update script and re-run

### Metadata needs changes?
- Edit `metadata.json` files manually
- Re-run SQL generation: `python3 scripts/reorganize-content.py --sql`
- Re-import to database

### Want to start over?
```bash
rm -rf content/
rm import-topics.sql
python3 scripts/reorganize-content.py --execute
```

---

## 📞 Support

- Check `scripts/README.md` for detailed documentation
- Check `NEW-CONTENT-STRUCTURE.md` for design rationale
- Check `CONTENT-STRUCTURE-COMPARISON.md` for Option A vs B comparison

---

## 🎉 Next Steps After Import

1. ✅ Test topic display in dashboard
2. ✅ Verify file paths work
3. ✅ Test AI search with new structure
4. ✅ Set up prerequisite chains
5. ✅ Enable topics for users
6. ✅ Start testing with real learners!

---

**Ready when you are!** 🚀

