import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://lnvfueakvdjxpmsldiql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudmZ1ZWFrdmRqeHBtc2xkaXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0NDg3MTAsImV4cCI6MTk2MTAyNDcxMH0.spmfPc27Kwbz7Zo44BV2vUrkepk7RSfjxLx7Dj2ekvE'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

console.log('supabase On', supabase)

export default function useSupabase () {
  return { supabase }
}
