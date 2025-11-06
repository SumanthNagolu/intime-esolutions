#!/usr/bin/env python3
"""
Content Reorganization Script
Converts current data/ structure to clean product/module/topic hierarchy
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List, Tuple
import re

# Base paths
CURRENT_DATA_DIR = Path("data")
NEW_CONTENT_DIR = Path("content")
BACKUP_DIR = Path("content-backup")

# Product and module mapping
CHAPTER_TO_PRODUCT = {
    "Chapter 1 - Guidewire Cloud Overview": ("common", "001-guidewire-cloud"),
    "Chapter 2 - Surepath Overview": ("common", "002-surepath"),
    "Chapter 3 - InsuranceSuite Implementation Tools": ("common", "003-implementation-tools"),
    "Chapter 4 - Policy Center Introduction": ("policycenter", "01-introduction"),
    "Chapter 5 - Claim Center Introduction": ("claimcenter", "01-introduction"),
    "Chapter 6 - Billing Center Introduction": ("billingcenter", "01-introduction"),
    "Chapter 7 - Rating Introduction": ("policycenter", "03-rating"),
    "Chapter 8 - InsuranceSuite Developer Fundamentals": ("common", "004-developer-fundamentals"),
    "Chapter 9 - Policy center configuration": ("policycenter", "02-configuration"),
    "Chapter 9 - PolicyCenter Configuration": ("policycenter", "02-configuration"),
    "Chapter 10 - ClaimCenter Configuration": ("claimcenter", "02-configuration"),
    "Chapter 12 - Rating Configuration": ("policycenter", "03-rating"),
    "Chapter 13 - Introduction to Integration": ("common", "005-integration"),
    "Chapter 14 - Advanced product Designer": ("policycenter", "04-apd"),
}

# Lesson name cleaning
def clean_topic_name(name: str) -> str:
    """Convert lesson folder name to clean topic name"""
    # Remove common prefixes
    name = re.sub(r'^(In_policy_|In_Claim_|BillingCenter_|Ra_Intro_|Ra_Conf_|CC_)', '', name)
    # Remove leading numbers and special chars
    name = re.sub(r'^\d+[\s\-_]*', '', name)
    # Convert to kebab-case
    name = name.lower()
    name = re.sub(r'[^a-z0-9]+', '-', name)
    name = name.strip('-')
    return name

def get_topic_title_from_pptx(filepath: Path) -> str:
    """Extract topic title from PPTX filename"""
    name = filepath.stem
    # Remove common prefixes
    name = re.sub(r'^(PC_Intro_|CC_|BC_|Ra_)', '', name)
    name = re.sub(r'^\d+[\s\-_]*', '', name)
    # Clean up
    name = name.replace('_', ' ').replace('-', ' ')
    # Title case
    return name.title()

def drill_down_nested_folders(folder: Path) -> Path:
    """Recursively drill down nested single-subfolder structures"""
    # Get all non-hidden subfolders and files
    subfolders = [f for f in folder.iterdir() if f.is_dir() and not f.name.startswith('.')]
    files = [f for f in folder.iterdir() if f.is_file() and not f.name.startswith('.')]
    
    # If there's exactly one subfolder and no files (or files are all lesson folders)
    if len(subfolders) == 1 and len(files) == 0:
        # Drill down one level
        return drill_down_nested_folders(subfolders[0])
    elif len(subfolders) == 1 and all(f.suffix.lower() not in ['.pptx', '.pdf', '.mp4', '.mkv', '.docx', '.xlsx'] for f in files):
        # Has one subfolder but files are not lesson files (maybe README, etc)
        return drill_down_nested_folders(subfolders[0])
    else:
        # Multiple subfolders or has actual lesson files
        return folder

def scan_current_structure() -> Dict:
    """Scan current data/ directory and build file map"""
    structure = {}
    
    for chapter_dir in CURRENT_DATA_DIR.iterdir():
        if not chapter_dir.is_dir() or chapter_dir.name.startswith('.'):
            continue
            
        chapter_name = chapter_dir.name
        if chapter_name not in CHAPTER_TO_PRODUCT:
            print(f"⚠️  Unknown chapter: {chapter_name}")
            continue
        
        product, module = CHAPTER_TO_PRODUCT[chapter_name]
        
        if product not in structure:
            structure[product] = {}
        if module not in structure[product]:
            structure[product][module] = []
        
        # Check if chapter has lesson subfolders or files directly
        has_subfolders = any(item.is_dir() and not item.name.startswith('.') for item in chapter_dir.iterdir())
        
        if has_subfolders:
            # Scan for lesson folders
            lesson_folders = []
            for item in chapter_dir.iterdir():
                if item.is_dir() and not item.name.startswith('.'):
                    lesson_folders.append(item)
            
            # Sort lesson folders
            lesson_folders.sort()
            
            # Process lesson folders
            for lesson_dir in lesson_folders:
                # Recursively drill down if there's only one subfolder and no files
                actual_lesson_dir = drill_down_nested_folders(lesson_dir)
                
                # Check if the drilled-down folder itself has lesson subfolders
                sub_lessons = [f for f in actual_lesson_dir.iterdir() if f.is_dir() and not f.name.startswith('.')]
                if sub_lessons:
                    # It has subfolders - process each as a lesson
                    for sub_lesson in sub_lessons:
                        process_lesson_folder(sub_lesson, product, module, structure)
                else:
                    # It has files - process as single lesson
                    process_lesson_folder(actual_lesson_dir, product, module, structure)
        else:
            # Files directly in chapter folder - treat chapter as single lesson
            process_lesson_folder(chapter_dir, product, module, structure)
    
    return structure

def process_lesson_folder(lesson_dir: Path, product: str, module: str, structure: Dict):
    """Process a single lesson folder and add to structure"""
    if product not in structure:
        structure[product] = {}
    if module not in structure[product]:
        structure[product][module] = []
    
    files = {
        'slides': [],
        'demos': [],
        'assignments': [],
        'other': []
    }
    
    for file in lesson_dir.iterdir():
        if file.name.startswith('.') or not file.is_file():
            continue
            
        ext = file.suffix.lower()
        if ext in ['.pptx', '.pdf'] and 'assignment' not in file.name.lower():
            files['slides'].append(file)
        elif ext in ['.mp4', '.mkv']:
            files['demos'].append(file)
        elif ext in ['.pdf', '.docx', '.xlsx'] and any(x in file.name.lower() for x in ['assignment', 'exercise', 'solution']):
            files['assignments'].append(file)
        else:
            files['other'].append(file)
    
    # Sort files
    for category in files:
        files[category].sort()
    
    # Only add if there are actually files
    if files['slides'] or files['demos'] or files['assignments'] or files['other']:
        topic_data = {
            'original_path': lesson_dir,
            'original_name': lesson_dir.name,
            'clean_name': clean_topic_name(lesson_dir.name),
            'files': files,
            'title': get_topic_title_from_pptx(files['slides'][0]) if files['slides'] else lesson_dir.name
        }
        
        structure[product][module].append(topic_data)

def generate_new_structure(structure: Dict) -> Dict:
    """Generate new directory structure and file mappings"""
    new_structure = {}
    position_counter = {}
    
    # Initialize counters
    for product in structure:
        position_counter[product] = 1
    
    for product, modules in structure.items():
        new_structure[product] = {}
        
        for module, topics in modules.items():
            new_structure[product][module] = []
            
            for topic in topics:
                position = position_counter[product]
                position_counter[product] += 1
                
                # Generate topic ID
                if product == 'common':
                    topic_id = f"common-{position:03d}"
                    topic_folder = f"{position:03d}-{topic['clean_name']}"
                else:
                    product_code = {'policycenter': 'pc', 'claimcenter': 'cc', 'billingcenter': 'bc'}[product]
                    module_num = module.split('-')[0]
                    topic_id = f"{product_code}-{module_num}-{position:03d}"
                    topic_folder = f"{position:03d}-{topic['clean_name']}"
                
                # New path
                new_path = NEW_CONTENT_DIR / product / module / topic_folder
                
                # File mappings
                file_mappings = []
                
                # Slides
                if topic['files']['slides']:
                    source = topic['files']['slides'][0]
                    dest = new_path / f"slides{source.suffix}"
                    file_mappings.append(('slides', source, dest))
                
                # Demos
                for i, demo_file in enumerate(topic['files']['demos'], 1):
                    dest = new_path / f"demo-{i:02d}{demo_file.suffix}"
                    file_mappings.append(('demo', demo_file, dest))
                
                # Assignments
                if topic['files']['assignments']:
                    source = topic['files']['assignments'][0]
                    dest = new_path / f"assignment{source.suffix}"
                    file_mappings.append(('assignment', source, dest))
                
                # Other files
                for other_file in topic['files']['other']:
                    dest = new_path / other_file.name
                    file_mappings.append(('other', other_file, dest))
                
                new_topic = {
                    'id': topic_id,
                    'product': product,
                    'module': module,
                    'position': position,
                    'title': topic['title'],
                    'original_path': topic['original_path'],
                    'new_path': new_path,
                    'file_mappings': file_mappings
                }
                
                new_structure[product][module].append(new_topic)
    
    return new_structure

def generate_metadata(topic: Dict) -> Dict:
    """Generate metadata.json content for a topic"""
    files_dict = {
        'slides': None,
        'demos': [],
        'assignment': None
    }
    
    for file_type, source, dest in topic['file_mappings']:
        if file_type == 'slides':
            files_dict['slides'] = dest.name
        elif file_type == 'demo':
            files_dict['demos'].append(dest.name)
        elif file_type == 'assignment':
            files_dict['assignment'] = dest.name
    
    # Estimate duration based on number of demos
    num_demos = len(files_dict['demos'])
    duration = 15 + (num_demos * 10)  # Base 15 min + 10 min per demo
    
    metadata = {
        'id': topic['id'],
        'product': topic['product'],
        'module': topic['module'],
        'position': topic['position'],
        'title': topic['title'],
        'description': f"Learn about {topic['title']} in {topic['product'].replace('center', ' Center').title()}",
        'duration_minutes': duration,
        'prerequisites': [] if topic['position'] == 1 else [f"{topic['product']}-xxx-{topic['position']-1:03d}"],
        'learning_objectives': [
            f"Understand {topic['title']} concepts",
            f"Apply {topic['title']} in practice",
            "Complete hands-on exercises"
        ],
        'files': files_dict,
        'keywords': [word.lower() for word in topic['title'].split() if len(word) > 3]
    }
    
    return metadata

def print_dry_run_report(new_structure: Dict):
    """Print what will happen without actually doing it"""
    print("\n" + "="*80)
    print("DRY RUN REPORT - Content Reorganization")
    print("="*80 + "\n")
    
    total_topics = 0
    total_files = 0
    
    for product, modules in new_structure.items():
        print(f"\n📦 {product.upper()}")
        print("-" * 60)
        
        for module, topics in modules.items():
            print(f"\n  📁 {module} ({len(topics)} topics)")
            
            for topic in topics:
                total_topics += 1
                file_count = len(topic['file_mappings'])
                total_files += file_count
                
                print(f"    {topic['position']:03d}. {topic['title']}")
                print(f"         From: {topic['original_path']}")
                print(f"         To:   {topic['new_path']}")
                print(f"         Files: {file_count}")
    
    print("\n" + "="*80)
    print(f"SUMMARY:")
    print(f"  Total Topics: {total_topics}")
    print(f"  Total Files:  {total_files}")
    print(f"  Products:     {len(new_structure)}")
    print("="*80 + "\n")

def execute_reorganization(new_structure: Dict, dry_run: bool = True):
    """Execute the actual file reorganization"""
    if dry_run:
        print_dry_run_report(new_structure)
        return
    
    print("\n🚀 Starting content reorganization...\n")
    
    # Create base directories
    NEW_CONTENT_DIR.mkdir(exist_ok=True)
    
    files_moved = 0
    metadata_created = 0
    
    for product, modules in new_structure.items():
        print(f"\n📦 Processing {product}...")
        
        for module, topics in modules.items():
            print(f"  📁 {module}")
            
            for topic in topics:
                # Create topic directory
                topic['new_path'].mkdir(parents=True, exist_ok=True)
                
                # Copy files
                for file_type, source, dest in topic['file_mappings']:
                    try:
                        shutil.copy2(source, dest)
                        files_moved += 1
                    except Exception as e:
                        print(f"    ⚠️  Error copying {source.name}: {e}")
                
                # Generate and save metadata
                metadata = generate_metadata(topic)
                metadata_file = topic['new_path'] / 'metadata.json'
                with open(metadata_file, 'w', encoding='utf-8') as f:
                    json.dump(metadata, f, indent=2, ensure_ascii=False)
                metadata_created += 1
                
                print(f"    ✅ {topic['position']:03d}. {topic['title']}")
    
    print(f"\n✨ Reorganization complete!")
    print(f"   Files moved: {files_moved}")
    print(f"   Metadata files created: {metadata_created}")

def generate_import_sql(new_structure: Dict, output_file: str = "import-topics.sql"):
    """Generate SQL import script for database"""
    sql_lines = [
        "-- Auto-generated topic import script",
        "-- Run this in Supabase SQL Editor after reorganization\n",
        "-- Insert topics with content\n"
    ]
    
    for product, modules in new_structure.items():
        product_code = {
            'policycenter': 'PC',
            'claimcenter': 'CC',
            'billingcenter': 'BC',
            'common': 'COMMON'
        }.get(product, product.upper())
        
        for module, topics in modules.items():
            for topic in topics:
                metadata = generate_metadata(topic)
                
                # Build content JSONB
                content_json = json.dumps(metadata['files'])
                
                sql = f"""
INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  '{metadata['id']}',
  (SELECT id FROM products WHERE code = '{product_code}'),
  {metadata['position']},
  '{metadata['title'].replace("'", "''")}',
  '{metadata['description'].replace("'", "''")}',
  {metadata['duration_minutes']},
  '[]'::jsonb,
  '{content_json}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;
"""
                sql_lines.append(sql)
    
    # Write to file
    with open(output_file, 'w') as f:
        f.write('\n'.join(sql_lines))
    
    print(f"\n📄 SQL import script generated: {output_file}")

def main():
    print("🔍 Scanning current content structure...")
    structure = scan_current_structure()
    
    print("🗺️  Generating new structure mapping...")
    new_structure = generate_new_structure(structure)
    
    print("\n" + "="*80)
    print("REORGANIZATION PLAN")
    print("="*80)
    print("\nThis script will:")
    print("  1. Create new content/ directory")
    print("  2. Organize by: product → module → topic")
    print("  3. Rename files consistently")
    print("  4. Generate metadata.json for each topic")
    print("  5. Generate SQL import script")
    print("\n⚠️  DRY RUN MODE - No files will be changed")
    print("="*80)
    
    # Show what will happen
    execute_reorganization(new_structure, dry_run=True)
    
    print("\n" + "="*80)
    print("To execute the reorganization:")
    print("  python scripts/reorganize-content.py --execute")
    print("\nTo generate SQL import script:")
    print("  python scripts/reorganize-content.py --sql")
    print("="*80 + "\n")

if __name__ == "__main__":
    import sys
    
    if '--execute' in sys.argv:
        print("\n⚠️  WARNING: This will reorganize all content files!")
        response = input("Are you sure? Type 'yes' to continue: ")
        if response.lower() == 'yes':
            structure = scan_current_structure()
            new_structure = generate_new_structure(structure)
            execute_reorganization(new_structure, dry_run=False)
            generate_import_sql(new_structure)
        else:
            print("Cancelled.")
    elif '--sql' in sys.argv:
        structure = scan_current_structure()
        new_structure = generate_new_structure(structure)
        generate_import_sql(new_structure)
    else:
        main()

