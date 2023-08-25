import { createClient } from '@supabase/supabase-js';

// Supabase URL for your project
const supabaseUrl = 'https://ejgjvlahfvmlsokwynie.supabase.co';

// Supabase anonymous key for authentication
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ2p2bGFoZnZtbHNva3d5bmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NTg2MjUsImV4cCI6MjAwODUzNDYyNX0.pHX0HPjRYu1iMr-41yM_AIyTBPL1lTzsc4W0MVlXzyQ';

// Create the Supabase client using the provided URL and key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
