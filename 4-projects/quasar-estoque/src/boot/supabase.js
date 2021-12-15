import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aslcjkmhztpkcfvkqvfl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUyOTY4NywiZXhwIjoxOTU1MTA1Njg3fQ.wWSucpN2W4vJcV1INVWMGMd9yyC-gA4d665AsKjq1T0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function useSupaBase(){
  return { supabase }
}