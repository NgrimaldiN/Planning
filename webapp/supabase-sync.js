// Supabase client wrapper for revision progress sync
// Replace SUPABASE_URL and SUPABASE_ANON_KEY with your actual values

const SUPABASE_URL = 'https://hlnhpsppgpcvjhkyiiur.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsbmhwc3BwZ3Bjdmpoa3lpaXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMjcyMjcsImV4cCI6MjA4MTcwMzIyN30.VcshysES2O9QGEkFpuztX6kh3vzAaGHcwfHP_s6RVDA';

// Simple Supabase client (no npm needed)
class SupabaseClient {
    constructor(url, key) {
        this.url = url;
        this.key = key;
        this.headers = {
            'apikey': key,
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        };
    }

    async fetchProgress(userId = 'default') {
        try {
            const response = await fetch(
                `${this.url}/rest/v1/revision_progress?user_id=eq.${userId}&select=*`,
                { headers: this.headers }
            );

            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        } catch (error) {
            console.error('Supabase fetch error:', error);
            return null;
        }
    }

    async saveProgress(userId = 'default', completedTasks, completedBlocks, completedMilestones) {
        try {
            // First try to update existing record
            const updateResponse = await fetch(
                `${this.url}/rest/v1/revision_progress?user_id=eq.${userId}`,
                {
                    method: 'PATCH',
                    headers: this.headers,
                    body: JSON.stringify({
                        completed_tasks: completedTasks,
                        completed_blocks: completedBlocks,
                        completed_milestones: completedMilestones
                    })
                }
            );

            // If PATCH returns empty (no rows updated), insert new record
            const updateData = await updateResponse.json();
            if (updateResponse.ok && updateData.length === 0) {
                // Insert new record
                const insertResponse = await fetch(
                    `${this.url}/rest/v1/revision_progress`,
                    {
                        method: 'POST',
                        headers: this.headers,
                        body: JSON.stringify({
                            user_id: userId,
                            completed_tasks: completedTasks,
                            completed_blocks: completedBlocks,
                            completed_milestones: completedMilestones
                        })
                    }
                );
                return await insertResponse.json();
            }

            return updateData;
        } catch (error) {
            console.error('Supabase save error:', error);
            return null;
        }
    }
}

// Initialize Supabase client
const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sync functions
async function loadFromSupabase() {
    const progress = await supabase.fetchProgress();
    if (progress) {
        state.completedTasks = progress.completed_tasks || {};
        state.completedBlocks = progress.completed_blocks || {};
        state.completedMilestones = progress.completed_milestones || {};

        // Also save to localStorage as backup
        localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));
        localStorage.setItem('completedBlocks', JSON.stringify(state.completedBlocks));
        localStorage.setItem('completedMilestones', JSON.stringify(state.completedMilestones));

        // Re-render UI
        renderCurrentDay();
        renderCalendar();
        renderStats();
        renderMilestones();
        updateGlobalProgress();

        console.log('✅ Loaded from Supabase');
        return true;
    }
    return false;
}

async function saveToSupabase() {
    await supabase.saveProgress(
        'default',
        state.completedTasks,
        state.completedBlocks,
        state.completedMilestones
    );
    console.log('💾 Saved to Supabase');
}

// Debounce save to avoid too many requests
let saveTimeout = null;
function debouncedSaveToSupabase() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveToSupabase, 1000); // Save after 1 second of no changes
}

// Check if Supabase is configured
function isSupabaseConfigured() {
    return SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';
}

// Export for use in app.js
window.supabaseSync = {
    load: loadFromSupabase,
    save: debouncedSaveToSupabase,
    isConfigured: isSupabaseConfigured
};
