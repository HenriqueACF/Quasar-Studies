<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="row q-col-gutter-sm"
    >
      <q-input
          outlined
          v-model="form.title"
          label="Título"
          lazy-rules
          class="col-md-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
      />

      <q-input
          outlined
          v-model="form.author"
          label="Autor"
          lazy-rules
          class="col-md-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
      />

      <div class="col-lg-12 col-xs-12">
        <q-editor
            v-model="form.content"
            min-height="5rem"
        />
      </div>

      <div
      class="col-12 q-gutter-sm"
      >
        <q-btn label="Salvar" color="primary" class="float-right" icon="save" type="submit"/>
        <q-btn label="Cancelar" color="white" class="float-right" text-color="primary"  :to="{name:'home'}" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import postService from 'src/services/posts'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'formPost',
  setup () {
    const $q = useQuasar()
    const { post } = postService()
    const router = useRouter
    const form = ref({
      title: '',
      content: '',
      author: ''
    })

    const onSubmit = async () => {
      try {
        await post(form.value)
        $q.notify({ message: 'Post criado com sucesso', icon: 'check', color: 'positive' })
        router.push({ name: 'home' })
      } catch (error) {
        $q.notify({ message: 'Erro ao criar, tente novamente mais tarde', icon: 'error', color: 'danger' })
        console.error(error)
      }
    }

    return {
      form,
      onSubmit
    }
  }
})
</script>
