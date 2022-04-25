<template>
<q-page class="constrain-more q-pa-md">
  <div class="camera-frame q-pa-md">
<!--    <img-->
<!--        class="full-width"-->
<!--        src="https://picsum.photos/seed/picsum/200/200"/>-->
    <video
        v-show="!imageCaptured"
      ref="video"
      class="full-width"
      autoplay
    />
    <canvas
        v-show="imageCaptured"
      ref="canvas"
      class="full-width"
      height="240"
    />
  </div>
  <div class="text-center q-pa-md">
    <q-btn
        v-if="hasCameraSupport"
        @click="captureImage"
      color="grey-9"
      icon="eva-camera"
      size="lg"
      round
    />
    <q-file
      v-else
      v-model="imageUpload"
      @input="captureImageFallBack"
      label="Choose an image"
      accept="image/*"
      outlined
    >
      <template
        v-slot:prepend
      >
        <q-icon name="eva-attach-outline"/>
      </template>
    </q-file>
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
require('md-gum-polyfill')

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
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    }
  },
  methods: {
    initCamera () {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then(stream => {
          this.$refs.video.srcObject = stream
        })
        .catch(error => {
          this.hasCameraSupport = false
        })
    },
    captureImage () {
      // console.log('capture Image')
      const video = this.$refs.video
      const canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      const context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
    },
    captureImageFallBack (file) {
      console.log('file', file)
      this.post.photo = file
    },
    dataURItoBlob (dataURI) {
      const byteString = atob(dataURI.split(',')[1])
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      const ab = new ArrayBuffer(byteString.length)
      const ia = new Uint8Array(ab)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      const blob = new Blob([ab], {
        type: mimeString
      })
      return blob
    }
  },
  mounted () {
    this.initCamera()
  }
}
</script>

<style scoped lang="sass">
.camera-frame
  border: 2px solid $grey-6
  border-radius: 10px
</style>
