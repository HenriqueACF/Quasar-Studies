<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
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
            <div class="text-caption text-grey">{{post.data}}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://github.com/henriqueacf.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">Henrique_Assis</q-item-label>
            <q-item-label caption>
              Henrique
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>

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
          caption: 'Legenda foto 1',
          data: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/200/300'
        },
        {
          id: 2,
          caption: 'Legenda foto 2',
          data: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 3,
          caption: 'Legenda foto 3',
          data: 1650672190001,
          location: 'Belém',
          imageUrl: 'https://picsum.photos/seed/picsum/200/300'
        }
      ]
    }
  },
  methods: {
    // formatDate (post.data) {
    //   return date.formatDate(post.data 'DD/MM/YYYY')
    // }
  }
})
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>
