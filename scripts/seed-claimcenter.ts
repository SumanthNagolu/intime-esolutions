#!/usr/bin/env tsx

import dotenv from 'dotenv';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';
import { bulkUpsertTopics, type IngestionTopic } from '@/modules/topics/admin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFiles = ['.env', '.env.local'];
envFiles.forEach((file) => {
  const fullPath = path.resolve(process.cwd(), file);
  if (existsSync(fullPath)) {
    dotenv.config({ path: fullPath, override: true });
  }
});

const resolveFilePath = (relativePath: string) =>
  path.isAbsolute(relativePath)
    ? relativePath
    : path.resolve(process.cwd(), relativePath);

const main = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error(
      'Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment (e.g., .env or .env.local).'
    );
    process.exitCode = 1;
    return;
  }

  const filePath = resolveFilePath(
    process.argv[2] ?? path.resolve(__dirname, '../data/claimcenter-topics.json')
  );

  let topics: IngestionTopic[];
  try {
    const fileContents = await readFile(filePath, 'utf8');
    topics = JSON.parse(fileContents) as IngestionTopic[];
    if (!Array.isArray(topics)) {
      throw new Error('JSON payload must be an array of topics.');
    }
  } catch (error) {
    const reason =
      error instanceof Error ? error.message : 'Unable to read or parse JSON file.';
    console.error(`❌ Failed to load topics from ${filePath}: ${reason}`);
    process.exitCode = 1;
    return;
  }

  const supabase = createClient<Database>(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
    },
  });

  const result = await bulkUpsertTopics(supabase, topics);

  if (!result.success) {
    console.error('❌ Topic import failed.');
    result.errors?.forEach((error) => console.error(` - ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log(`✅ Imported ${result.count ?? topics.length} topics successfully.`);
};

void main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`❌ Unexpected error running seed script: ${message}`);
  process.exitCode = 1;
});

