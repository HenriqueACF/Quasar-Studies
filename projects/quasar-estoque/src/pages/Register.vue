<template>
  <q-page padding>
   <q-form
     class="row justify-center" @submit.prevent="handleRegister">
     <p class="text-h5 text-center">Register</p>
     <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
       <q-input 
        v-model="form.name" 
        label="Name" 
      />
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
        label="Register" 
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
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Register',

  setup(){
    const router = useRouter()
    const { register } = useAuthUser()
    const form = ref({
      name:'',
      email:'',
      password:''
    })

    const handleRegister = async () => {
      try{
        await register(from.value)
        router.push({
          name: 'email-confirmation',
          query: {email: form.value.email}
        })
      }catch(error){
        alert(error)
      }
    }

    return{
      form,
      handleRegister
    }
  }
})

</script>
