<template>
  <q-page padding>
   <q-form
     class="row justify-center" @submit.prevent="handleLogin">
     <p class="text-h5 text-center">Login</p>
     <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
       <q-input 
        v-model="form.email" 
        label="E-mail" 
      />
      <q-input
       v-model="form.password" 
       label="Password"
      />
      <div class="full-width q-pt-md">
        <q-btn
        class="full-width" 
        color="primary" 
        label="Login" 
        outline
        rounded
        type="submit"
      />
      </div>

      <div class="full-width">
        <q-btn
        class="full-width" 
        color="primary" 
        label="Register" 
        flat
        to="/register"
      />
      </div>
     </div>
   </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',

  setup(){
    const router = useRouter()
    const { login } = useAuthUser()
    const form = ref({
      email:'',
      password:''
    })

    const handleLogin = async () => {
      try{
        await login(from.value)
        router.push({name: 'me'})
      }catch(error){
        alert(error.message)
      }
    }

    return{
      form,
      handleLogin
    }
  }
})

</script>
