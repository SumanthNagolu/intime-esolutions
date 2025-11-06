#!/usr/bin/env python3
"""
Fix import-topics.sql to use UUID for id and code for sequential references
"""

import re

# Read the original import SQL
with open('import-topics.sql', 'r') as f:
    content = f.read()

# Replace INSERT statements to use gen_random_uuid() for id and add code column
# Pattern: INSERT INTO topics (\n  id,\n  product_id,
pattern = r"INSERT INTO topics \(\s*id,\s*product_id,"
replacement = "INSERT INTO topics (\n  id,\n  code,\n  product_id,"

content = re.sub(pattern, replacement, content)

# Pattern: VALUES (\n  'pc-04-001',\n  (SELECT
pattern2 = r"VALUES \(\s*'([^']+)',\s*\(SELECT"
def replacer(match):
    code = match.group(1)
    return f"VALUES (\n  gen_random_uuid(),\n  '{code}',\n  (SELECT"

content = re.sub(pattern2, replacer, content)

# Fix ON CONFLICT to use code instead of id
content = re.sub(r"ON CONFLICT \(id\)", "ON CONFLICT (code)", content)

# Add header comment
header = """-- Auto-generated topic import script (FIXED)
-- Run this in Supabase SQL Editor after running FIX-TOPICS-SCHEMA.sql
--
-- This script uses:
--   - gen_random_uuid() for the 'id' column (UUID primary key)
--   - Sequential codes like 'pc-04-001' for the 'code' column (for prerequisites)
--
-- Make sure to run FIX-TOPICS-SCHEMA.sql FIRST to add the 'code' column!

"""

content = header + content.split("-- Insert topics with content")[1]

# Write the fixed import SQL
with open('import-topics-fixed.sql', 'w') as f:
    f.write(content)

print("✅ Created import-topics-fixed.sql")
print("📋 This script:")
print("   - Uses gen_random_uuid() for id column (UUID)")
print("   - Uses sequential codes for code column (pc-04-001, etc.)")
print("   - Handles conflicts on code column")
print("\n🚀 Next steps:")
print("   1. Run FIX-TOPICS-SCHEMA.sql in Supabase (adds code column)")
print("   2. Run import-topics-fixed.sql in Supabase (imports topics)")

