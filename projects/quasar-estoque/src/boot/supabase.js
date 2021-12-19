import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://aslcjkmhztpkcfvkqvfl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUyOTY4NywiZXhwIjoxOTU1MTA1Njg3fQ.wWSucpN2W4vJcV1INVWMGMd9yyC-gA4d665AsKjq1T0'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session)=> {
  const {user} = useAuthUser()
  user.value = session?.user || null
})

export default function useSupaBase(){
  return { supabase }
}