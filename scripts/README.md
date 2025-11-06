# Content Reorganization Scripts

## Overview

This directory contains scripts for reorganizing training content from the current `data/` structure to the new clean `content/` structure.

## Quick Start

### 1. Preview Changes (Dry Run)

```bash
python scripts/reorganize-content.py
```

This will show you:
- What files will be moved
- New directory structure
- File count summary
- **No files are changed**

### 2. Execute Reorganization

```bash
python scripts/reorganize-content.py --execute
```

This will:
- Create `content/` directory with new structure
- Copy all files to new locations
- Generate `metadata.json` for each topic
- Preserve original files in `data/`

### 3. Generate Database Import Script

```bash
python scripts/reorganize-content.py --sql
```

This creates `import-topics.sql` which you can run in Supabase to populate the database.

## Safety Features

✅ **Backup First**: Original `data/` folder is NOT deleted  
✅ **Dry Run Default**: Must explicitly use `--execute` flag  
✅ **Confirmation Required**: Script asks "Are you sure?" before executing  
✅ **No Destructive Actions**: Only copies files, never deletes

## What the Script Does

### 1. File Organization

**Before:**
```
data/
└── Chapter 4 - Policy Center Introduction/
    └── In_policy_01/
        ├── In_policy_01_01.mp4
        ├── In_policy_01_02.mp4
        └── PC_Intro_01_Accounts.pptx
```

**After:**
```
content/
└── policycenter/
    └── 01-introduction/
        └── 001-accounts/
            ├── metadata.json
            ├── slides.pptx
            ├── demo-01.mp4
            └── demo-02.mp4
```

### 2. Metadata Generation

Each topic gets a `metadata.json`:

```json
{
  "id": "pc-01-001",
  "product": "policycenter",
  "module": "01-introduction",
  "position": 1,
  "title": "PolicyCenter Accounts",
  "description": "Learn about PolicyCenter Accounts",
  "duration_minutes": 35,
  "prerequisites": [],
  "learning_objectives": [
    "Understand PolicyCenter Accounts concepts",
    "Apply PolicyCenter Accounts in practice",
    "Complete hands-on exercises"
  ],
  "files": {
    "slides": "slides.pptx",
    "demos": ["demo-01.mp4", "demo-02.mp4"],
    "assignment": null
  },
  "keywords": ["policycenter", "accounts"]
}
```

### 3. SQL Import Script

Generates INSERT statements for the `topics` table:

```sql
INSERT INTO topics (id, product_id, position, title, content)
VALUES (
  'pc-01-001',
  (SELECT id FROM products WHERE code = 'PC'),
  1,
  'PolicyCenter Accounts',
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"]}'::jsonb
);
```

## File Naming Conventions

| File Type | Convention | Example |
|-----------|-----------|---------|
| Metadata | `metadata.json` | `metadata.json` |
| Slides | `slides.{ext}` | `slides.pptx` |
| Demos | `demo-{##}.mp4` | `demo-01.mp4`, `demo-02.mp4` |
| Assignments | `assignment.{ext}` | `assignment.pdf` |

## Directory Structure

```
content/
├── common/                    # Foundation content
│   ├── 001-guidewire-cloud/
│   ├── 002-surepath/
│   ├── 003-implementation-tools/
│   ├── 004-developer-fundamentals/
│   └── 005-integration/
│
├── policycenter/
│   ├── 01-introduction/       # 31 topics
│   ├── 02-configuration/      # 14 topics
│   ├── 03-rating/             # 12 topics
│   └── 04-apd/                # 1 topic
│
├── claimcenter/
│   ├── 01-introduction/       # 19 topics
│   └── 02-configuration/      # 18 topics
│
└── billingcenter/
    └── 01-introduction/       # 19 topics
```

## Troubleshooting

### "Unknown chapter" warning

If you see:
```
⚠️  Unknown chapter: Chapter XX - Some Name
```

**Fix**: Add the chapter mapping to `CHAPTER_TO_PRODUCT` in the script:

```python
CHAPTER_TO_PRODUCT = {
    "Chapter XX - Some Name": ("product", "module"),
    # ...
}
```

### Files not copying

**Check**:
1. Permissions on `data/` folder
2. Disk space available
3. File paths don't have special characters

### Metadata looks wrong

After reorganization, you can:
1. Edit any `metadata.json` file manually
2. Re-run the SQL generation: `python scripts/reorganize-content.py --sql`

## Next Steps After Reorganization

1. ✅ Verify all files copied correctly
2. ✅ Review a few `metadata.json` files
3. ✅ Run `import-topics.sql` in Supabase
4. ✅ Test topic display in dashboard
5. ✅ Update file paths if needed
6. ✅ Delete old `data/` folder (after verification!)

## Need Help?

- Check `NEW-CONTENT-STRUCTURE.md` for design rationale
- Check `CONTENT-STRUCTURE-COMPARISON.md` for detailed comparison
- Check `CONTENT-STRUCTURE-ANALYSIS.md` for original analysis

