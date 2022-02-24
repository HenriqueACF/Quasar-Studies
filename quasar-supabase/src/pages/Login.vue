<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent='handleLogin'>
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="E-mail"
          v-model="form.email"
          lazy-rules
          :rules="[val =>(val && val.length > 0) || 'E-mail is required']"
          type='email'
        />

        <q-input
          label="Password"
          v-model='form.password'
          lazy-rules
          :rules="[val =>(val && val.length > 8) || 'Password is required and minimun 8 characteres']"
          type='password'
        />
        <div class='full-width q-pt-md'>
          <q-btn
          label='login'
          color='primary'
          class='full-width'
          outline
          rounded
          type='submit'
        />
        </div>

        <div class='full-width q-gutter-y-sm'>
          <q-btn
          label='Register'
          color='primary'
          class='full-width'
          flat
          rounded
          to='/register'
          size='sm'
        />

          <q-btn
            label='Forgot Password?'
            color='primary'
            class='full-width'
            flat
            rounded
            :to="{ name: 'forgot-password'}"
            size='sm'
          />
        </div>

      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    const { login } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login successfuly')
        router.push({ name: 'me' })
      } catch (error) {
        notifyError(error.message)
        // alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
