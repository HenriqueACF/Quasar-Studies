<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newQTweetContent"
          class="new-qtweet"
          label="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://avatars.githubusercontent.com/u/45006908?v=4" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          :disable="!newQTweetContent"
          unelevated
          rounded
          color="primary"
          label="QTweet"
          no-caps
        />
      </div>
    </div>
    <q-separator class="divider" size="10px" color="grey-2"/>
  </q-page>
</template>

<script>
export default {
  name: "Page Home",
  data() {
    return {
      newQTweetContent: "",
    };
  },
};
</script>

<style lang="sass">
.new-qtweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top:1px solid
  border-bottom: 1px solid
  border-color:$grey-4
</style>