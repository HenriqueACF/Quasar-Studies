<template>
  <q-page class="constrain q-pa-md">
    <q-card
        class="card-post q-mb-md"
        flat bordered
        v-for="post in posts"
        :key="post.id"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://github.com/henriqueacf.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Henrique_Assis</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
          :src="post.imageUrl"
      />

      <q-card-section>
        <div class="">{{post.caption}}</div>
        <div class="text-caption text-grey">{{post.date}}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data () {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/200/300'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/seed/picsum/200/300'
        }
      ]
    }
  }
})
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>
