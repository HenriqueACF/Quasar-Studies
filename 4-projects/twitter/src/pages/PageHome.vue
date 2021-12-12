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

     <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
           <q-avatar size="xl">
              <img src="https://avatars.githubusercontent.com/u/45006908?v=4" />
            </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <strong class="text-subtitle1">Henrique Assis</strong>
            <span class="text-grey-7">
              @henriqueacf
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
            Maxime dolores temporibus recusandae labore ipsum cupiditate ex perspiciatis voluptate numquam nesciunt tempore,
            ea reiciendis atque commodi vero doloremque explicabo, nulla expedita?
          </q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn 
             color="grey"
             icon="far fa-comment" 
             size="sm" 
             flat 
             round
            />
            <q-btn 
             color="grey"
             icon="fas fa-retweet" 
             size="sm" 
             flat 
             round
            />
            <q-btn 
             color="grey"
             icon="far fa-heart" 
             size="sm" 
             flat 
             round
            />
            <q-btn 
             color="grey"
             icon="fas fa-trash" 
             size="sm"
             flat 
             round
            />
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
     </q-list>
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

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left:-5px
</style>