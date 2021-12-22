<template>
  <q-page padding>
   <q-form
     class="row justify-center" @submit.prevent="handleRegister">
     <p class="col-12 text-h5 text-center">Register</p>
     <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
       <q-input 
        v-model="form.name" 
        label="Name" 
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Name is required'
        ]"
      />
       <q-input 
        v-model="form.email" 
        label="E-mail" 
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Email is required'
        ]"
        type="email"
      />
      <q-input
       v-model="form.password" 
       label="Password"
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
        label="Register" 
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
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Register',

  setup(){
    const router = useRouter()
    const { register } = useAuthUser()
    const {notifyError, notifySuccess } = useNotify()
    const form = ref({
      name:'',
      email:'',
      password:''
    })

    const handleRegister = async () => {
      try{
        await register(from.value)
        notifySuccess('')
        router.push({
          name: 'email-confirmation',
          query: {email: form.value.email}
        })
      }catch(error){
        notifyError()
      }
    }

    return{
      form,
      handleRegister
    }
  }
})

</script>
