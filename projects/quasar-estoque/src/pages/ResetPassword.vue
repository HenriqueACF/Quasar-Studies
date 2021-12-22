<template>
  <q-page padding>
   <q-form
     class="row justify-center" @submit.prevent="handlePasswordReset">
     <p class="col-12 text-h5 text-center">Register</p>
     <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
       <q-input 
        v-model="password" 
        label="New Password" 
        lazy-rules
        :rules="[
          val => (val && val.length >= 6) || 'Password is required'
        ]"
        type="password"
      />
      <div class="full-width q-pt-md q-gutter-y-sm">
        <q-btn
        class="full-width" 
        color="primary" 
        label="Send New Password" 
        outline
        rounded
        type="submit"
      />

      </div>
     </div>
   </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter, useRoute } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent ({
  name: 'PageResetPassword',
  setup (){
    const { resetPassword } = useAuthUser()
    const route = useRoute()
    const router = useRouter()
    const token = route.query.token
    const { notifyError, notifySuccess } = useNotify

    const password = ref('')
    const handlePasswordReset = async () =>{
      try{
        await resetPassword(token, password.value)
        notifySuccess('New Password Sent')
        router.push({ name:'login'})
      }catch(error){
        notifyError(error.message)
      }
    }

    return {
      password,
      handlePasswordReset
    }
  }
  
})
</script>

<style>

</style>