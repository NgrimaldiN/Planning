-- Supabase SQL Setup for Revision Planning App
-- Run this in Supabase SQL Editor

-- Table to store user progress
CREATE TABLE IF NOT EXISTS revision_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL DEFAULT 'default',
    completed_tasks JSONB DEFAULT '{}',
    completed_blocks JSONB DEFAULT '{}',
    completed_milestones JSONB DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique constraint on user_id
ALTER TABLE revision_progress 
ADD CONSTRAINT unique_user_id UNIQUE (user_id);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE revision_progress ENABLE ROW LEVEL SECURITY;

-- Policy to allow all operations for now (you can restrict later)
CREATE POLICY "Allow all operations" ON revision_progress
    FOR ALL USING (true);

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function
CREATE TRIGGER update_revision_progress_updated_at
    BEFORE UPDATE ON revision_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
