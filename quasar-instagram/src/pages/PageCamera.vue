<template>
<q-page class="constrain-more q-pa-md">
  <div class="camera-frame q-pa-md">
    <img
        class="full-width"
        src="https://picsum.photos/seed/picsum/200/200"/>
  </div>
  <div class="text-center q-pa-md">
    <q-btn
      color="grey-9"
      icon="eva-camera"
      size="lg"
      round
    />
    <div class="row justify-center q-ma-md">
      <q-input
          v-model="post.caption"
          class="col col-sm-6"
          label="Caption"
          dense
      />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input
          v-model="post.location"
          class="col col-sm-6"
          label="Location"
          dense
      >
        <template v-slot:append>
          <q-btn
            icon="eva-navigation-2-outline"
            dense
            flat
            round
          />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn
          label="Post Image"
          rounded
          unelevated
          color="primary"
      />
    </div>
  </div>
</q-page>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'PageCamera',
  data () {
    return {
      post: {
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      }
    }
  }
}
</script>

<style scoped lang="sass">
.camera-frame
  border: 2px solid $grey-6
  border-radius: 10px
</style>
