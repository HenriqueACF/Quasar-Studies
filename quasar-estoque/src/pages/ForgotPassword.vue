<template>
  <q-page padding>
   <q-form
     class="row justify-center" @submit.prevent="handleForgotPassword">
     <p class="col-12 text-h5 text-center">Register</p>
     <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
       <q-input 
        v-model="email" 
        label="E-mail" 
        lazy-rules
        :rules="[
          val => (val && val.length >= 6) || 'Email is required'
        ]"
        type="email"
      />
      <div class="full-width q-pt-md q-gutter-y-sm">
        <q-btn
        class="full-width" 
        color="primary" 
        label="Send Reset Email" 
        outline
        rounded
        type="submit"
      />
      <q-btn
        class="full-width" 
        color="dark" 
        label="Back" 
        flat
        rounded
        :to="{ name: 'login' }"
      />
      </div>
     </div>
   </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import userAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'

export default defineComponent ({
  setup(){
    const { sendPasswordResetEmail } = userAuthUser()
    const email = ref('')
    const {notifyError, notifySuccess } = useNotify()

    const handleForgotPassword = async () =>{
      try{
        await sendPasswordResetEmail(email.value)
        notifySuccess(`Password reset email sent to: ${email.value}`)
      } catch(error){
        notifyError(error.message)  
      }
    }

    return{
      email,
      handleForgotPassword
    }
  }
})
</script>

<style>

</style>