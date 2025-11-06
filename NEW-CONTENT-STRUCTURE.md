# New Content Structure - Option B (Clean Architecture)

## 🏗️ Design Principles

Based on your requirements:
- ✅ **Foundation/Common** content separate from product-specific
- ✅ **Product → Module → Topic** hierarchy
- ✅ **Sequential numbering** for indexing and prerequisites
- ✅ **Consistent file naming** across all products
- ✅ Each topic has: **Slides + Demos + Assignment/Solution**
- ✅ **Scalable** to other GW products (future-proof)

---

## 📁 New Structure

```
content/
├── common/                           # Foundation content
│   ├── 001-guidewire-cloud/
│   │   ├── metadata.json
│   │   └── overview.mp4
│   ├── 002-surepath/
│   │   ├── metadata.json
│   │   ├── project-phases.mp4
│   │   └── surepath-overview.pdf
│   ├── 003-implementation-tools/
│   │   ├── metadata.json
│   │   ├── user-story-cards.pdf
│   │   ├── exercise.xlsx
│   │   └── solution.xlsx
│   ├── 004-developer-fundamentals/
│   │   └── [25 lessons with sequential numbering]
│   └── 005-integration/
│       └── [20 lessons]
│
├── policycenter/
│   ├── 01-introduction/              # Module 1
│   │   ├── 001-accounts/             # Topic 1
│   │   │   ├── metadata.json
│   │   │   ├── slides.pptx
│   │   │   ├── demo-01.mp4
│   │   │   ├── demo-02.mp4
│   │   │   └── assignment.pdf       # Includes solution
│   │   ├── 002-contacts/            # Topic 2
│   │   │   ├── metadata.json
│   │   │   ├── slides.pptx
│   │   │   ├── demo-01.mp4
│   │   │   └── assignment.pdf
│   │   ├── 003-locations/
│   │   └── ... (31 topics total)
│   │
│   ├── 02-configuration/             # Module 2
│   │   ├── 001-product-model/
│   │   ├── 002-coverage-types/
│   │   └── ... (14 topics)
│   │
│   ├── 03-rating/                    # Module 3
│   │   ├── 001-rating-basics/
│   │   ├── 002-rate-tables/
│   │   └── ... (12 topics)
│   │
│   └── 04-advanced-product-designer/ # Module 4
│       └── 001-apd-overview/
│
├── claimcenter/
│   ├── 01-introduction/              # Module 1
│   │   ├── 001-navigation/
│   │   │   ├── metadata.json
│   │   │   ├── slides.pptx
│   │   │   ├── demo-01.mp4
│   │   │   ├── demo-02.mp4
│   │   │   ├── demo-03.mp4
│   │   │   └── assignment.pdf
│   │   ├── 002-fnol/
│   │   ├── 003-exposures/
│   │   └── ... (19 topics)
│   │
│   └── 02-configuration/             # Module 2
│       ├── 001-user-interface/
│       │   ├── metadata.json
│       │   ├── slides.pptx
│       │   ├── demo-01.mp4
│       │   ├── demo-02.mp4
│       │   └── assignment.pdf
│       ├── 002-line-of-business/
│       ├── 003-claim-intake/
│       └── ... (18 topics)
│
└── billingcenter/
    └── 01-introduction/              # Module 1
        ├── 001-billing-basics/
        │   ├── metadata.json
        │   ├── slides.pptx
        │   ├── demo-01.mp4
        │   └── assignment.pdf
        ├── 002-invoice-processing/
        └── ... (19 topics)
```

---

## 📋 Naming Conventions

### Folders:
- **Products**: `lowercase` (policycenter, claimcenter, billingcenter, common)
- **Modules**: `##-kebab-case` (01-introduction, 02-configuration)
- **Topics**: `###-kebab-case` (001-accounts, 002-contacts)

### Files:
- **Metadata**: `metadata.json` (always this name)
- **Slides**: `slides.pptx` or `slides.pdf`
- **Demos**: `demo-01.mp4`, `demo-02.mp4`, etc.
- **Assignments**: `assignment.pdf` or `assignment.docx` (includes solution)

---

## 🎯 Metadata Structure

Each `metadata.json` contains:

```json
{
  "id": "pc-01-001",
  "product": "policycenter",
  "module": "01-introduction",
  "position": 1,
  "title": "PolicyCenter Accounts",
  "description": "Learn how to create and manage accounts in PolicyCenter, including account types and relationships.",
  "duration_minutes": 30,
  "prerequisites": [],
  "learning_objectives": [
    "Create a new account in PolicyCenter",
    "Understand different account types",
    "Navigate account details and relationships",
    "Manage account contacts"
  ],
  "files": {
    "slides": "slides.pptx",
    "demos": ["demo-01.mp4", "demo-02.mp4"],
    "assignment": "assignment.pdf"
  },
  "keywords": [
    "account",
    "policycenter",
    "account types",
    "contacts"
  ]
}
```

---

## 🔢 Sequential Numbering System

### Common Content:
- `001-guidewire-cloud`
- `002-surepath`
- `003-implementation-tools`
- `004-developer-fundamentals`
- `005-integration`

### PolicyCenter:
- Module 01: Topics 001-031
- Module 02: Topics 032-045
- Module 03: Topics 046-057
- Module 04: Topic 058

### ClaimCenter:
- Module 01: Topics 001-019
- Module 02: Topics 020-037

### BillingCenter:
- Module 01: Topics 001-019

**Total Sequential IDs: ~162 topics**

This allows:
- ✅ Easy prerequisite tracking: "002 requires 001"
- ✅ Clear learning path: Start at 001, end at 162
- ✅ AI can understand progression: "Topic 050 builds on 001-049"

---

## 🗺️ Current → New Mapping

### Example 1: PolicyCenter Introduction

**CURRENT:**
```
Chapter 4 - Policy Center Introduction/In_policy_01/
├── In_policy_01_01.mp4
├── In_policy_01_02.mp4
└── PC_Intro_01_Accounts.pptx
```

**NEW:**
```
content/policycenter/01-introduction/001-accounts/
├── metadata.json
├── slides.pptx
├── demo-01.mp4
└── demo-02.mp4
```

---

### Example 2: ClaimCenter Configuration

**CURRENT:**
```
Chapter 10 - ClaimCenter Configuration/01 - Configuring the ClaimCenter User Interface/
├── 01 - Configuring the ClaimCenter User Interface.pptx
├── CC_01_01.mp4
└── CC_01_02.mp4
```

**NEW:**
```
content/claimcenter/02-configuration/001-user-interface/
├── metadata.json
├── slides.pptx
├── demo-01.mp4
└── demo-02.mp4
```

---

### Example 3: Foundation Content

**CURRENT:**
```
Chapter 2 - Surepath Overview/
├── 01_ProjectPhases.mp4
├── 04_SurePathOverview.pdf
└── Chapter 2 - Surepath Overview - Lesson 2 - Surepath Overview.pdf
```

**NEW:**
```
content/common/002-surepath/
├── metadata.json
├── project-phases.mp4
└── surepath-overview.pdf
```

---

## 📊 Complete Content Map

### Common (Foundation) - 5 modules, ~50 lessons
```
common/
├── 001-guidewire-cloud/          [1 lesson]
├── 002-surepath/                 [2 lessons]
├── 003-implementation-tools/     [1 lesson]
├── 004-developer-fundamentals/   [~25 lessons]
└── 005-integration/              [~20 lessons]
```

### PolicyCenter - 4 modules, 58 lessons
```
policycenter/
├── 01-introduction/      [31 lessons: 001-031]
├── 02-configuration/     [14 lessons: 032-045]
├── 03-rating/           [12 lessons: 046-057]
└── 04-apd/              [1 lesson:  058]
```

### ClaimCenter - 2 modules, 37 lessons
```
claimcenter/
├── 01-introduction/      [19 lessons: 001-019]
└── 02-configuration/     [18 lessons: 020-037]
```

### BillingCenter - 1 module, 19 lessons
```
billingcenter/
└── 01-introduction/      [19 lessons: 001-019]
```

**TOTAL: 164 lessons across 12 modules and 4 product areas**

---

## 🔍 Why This Structure is Perfect for AI/Search

### 1. Sequential Context
```
Topic 050 metadata includes:
- position: 50
- prerequisite_positions: [1, 2, 3, ..., 49]
```
**AI knows**: "This topic builds on 49 previous topics"

### 2. Vector Embeddings
```
Embedding for "PolicyCenter Rating Configuration" will be near:
- Other rating topics (spatial proximity)
- Sequential topics (logical progression)
```

### 3. Prerequisite Chains
```
Topic 058 (APD) → requires 057 (Advanced Rating)
Topic 057 → requires 046 (Rating Basics)
Topic 046 → requires 031 (PC Introduction)
```
**AI can trace**: Full learning path automatically

### 4. Keyword Indexing
```
metadata.json keywords:
["policy", "rating", "premium", "calculation"]
```
**Search**: "How to calculate premium?" → Returns relevant topics in order

---

## 🛠️ Implementation Script

I'll create a Python script that will:

1. ✅ Scan current `data/` folder
2. ✅ Read file structure
3. ✅ Map to new structure
4. ✅ Rename and move files
5. ✅ Generate `metadata.json` for each topic
6. ✅ Auto-populate metadata from filenames
7. ✅ Preserve all original files (backup first!)
8. ✅ Generate import SQL for database
9. ✅ Create verification report

---

## 📦 Database Schema Alignment

Your new structure maps perfectly to the database:

```sql
CREATE TABLE topics (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  position INTEGER,              -- Sequential: 1, 2, 3...
  title TEXT,
  description TEXT,
  duration_minutes INTEGER,
  prerequisites JSONB,           -- ["pc-01-001", "pc-01-002"]
  content JSONB,                 -- {slides_url, demos[], assignment}
  published BOOLEAN DEFAULT true
);
```

**Mapping:**
- `metadata.id` → `topics.id`
- `metadata.position` → `topics.position`
- `metadata.prerequisites` → `topics.prerequisites`
- `metadata.files` → `topics.content`

---

## ✅ Verification Checklist

After reorganization, the script will verify:

- [ ] All 450 files accounted for
- [ ] 164 `metadata.json` files created
- [ ] Each topic has slides
- [ ] Each topic has at least 1 demo video
- [ ] Sequential numbering is correct
- [ ] No duplicate IDs
- [ ] Prerequisites reference valid topics
- [ ] All file paths are relative and correct

---

## 🚀 Next Steps

1. **I'll create the reorganization script**
2. **Script will do dry-run first** (show what will change)
3. **You review the plan**
4. **Script executes reorganization**
5. **Generate metadata JSON files**
6. **Import to database**
7. **Verify everything works**

Ready to proceed? I'll start building the script!

