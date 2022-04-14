<template>
  <q-page padding>
    <q-table
      title="Artigos"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <spam class="text-h5">Artigos</spam>
        <q-space/>
        <q-btn color="primary" label="Novo" :to="{name: 'formPost'}"/>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePosts(props.row.id)"/>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import postService from 'src/services/posts'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { list, remove } = postService()
    const columns = [
      { name: 'id', label: 'Id', field: 'id', sortable: true, align: 'left' },
      { name: 'title', label: 'Titúlo', field: 'title', sortable: true, align: 'left' },
      { name: 'author', label: 'Autor', field: 'author', sortable: true, align: 'left' },
      { name: 'actions', label: 'Ações', field: 'actions', align: 'right' }
    ]

    const $q = useQuasar()

    onMounted(() => {
      getPosts()
    })

    const getPosts = async () => {
      try {
        const data = await list()
        posts.value = data
      } catch (error) {
        console.log(error)
      }
    }

    const handleDeletePosts = async (id) => {
      try {
        $q.dialog({
          title: 'Remover',
          message: 'Você deseja deletar esse post?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Deletado com sucesso!', icon: 'check', color: 'positive' })
          await getPosts()
        })
      } catch (error) {
        $q.notify({ message: 'Erro ao deletar post!', icon: 'times', color: 'danger' })
      }
    }

    return {
      posts,
      columns,
      handleDeletePosts
    }
  }
})
</script>
