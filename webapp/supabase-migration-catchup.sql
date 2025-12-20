-- Add catchup columns to revision_progress table
-- Run this in Supabase SQL Editor

ALTER TABLE revision_progress 
ADD COLUMN IF NOT EXISTS catchup_blocks JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS deleted_blocks JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS scheduled_catchups JSONB DEFAULT '{}';
