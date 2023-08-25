
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ejgjvlahfvmlsokwynie.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ2p2bGFoZnZtbHNva3d5bmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NTg2MjUsImV4cCI6MjAwODUzNDYyNX0.pHX0HPjRYu1iMr-41yM_AIyTBPL1lTzsc4W0MVlXzyQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase