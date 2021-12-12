<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
                <img
                  src="https://avatars.githubusercontent.com/u/45006908?v=4"
                />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewQweet"
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

      <q-separator class="divider" size="10px" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slower"
        >
          <q-item
            class="qweet q-py-md"
            v-for="qweet in qweets"
            :key="qweet.date"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://avatars.githubusercontent.com/u/45006908?v=4"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Henrique Assis</strong>
                <span class="text-grey-7">
                  @henriqueacf
                  <!-- <br class="lt-md"/> &bull:{{ qweet.date | relativeDate }} -->
                </span>
              </q-item-label>
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
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
                <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
                <q-btn
                  @click="deleteQweet(qweet)"
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                />
              </div>
            </q-item-section>

            <q-item-section side top>
              {{ qweet.date | relativeDate }}
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "Page Home",
  data() {
    return {
      newQTweetContent: "",
      qweets: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus suscipit dui, sed malesuada nih tempor vel. Proin a justo scelerisque, auctor ligula nec, porttitor libero. Vestibulum accumsan a diam non imperdiet. Vestibulum consectetur, est vitae porttitor maximus, neque augue maximus mauris, vitae bibendum nisl arcu id mauris. Cras consectetur aliquam massa, eu aliquet tortor efficitur nec. Praesent eget risus dui. Nunc in justo velit. Etiam a mi risus. Morbi eleifend sapien eu ex varius auctor. Praesent consectetur lobortis leo, nec hendrerit lorem. Suspendisse augue nulla, feugiat et sagittis a, scelerisque eu risus. Sed sed mollis leo, id commodo sem. Sed fermentum dapibus metus, nec lacinia metus ultricies eget. Donec venenatis, odio a consectetur semper, neque nibh ultrices dolor, eu pulvinar dolor urna et lorem. Sed non semper sem. Cras non diam non enim varius sodales.",
          date: 1639343467166,
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus suscipit dui, sed malesuada nih tempor vel. Proin a justo scelerisque, auctor ligula nec, porttitor libero. Vestibulum accumsan a diam non imperdiet. Vestibulum consectetur, est vitae porttitor maximus, neque augue maximus mauris, vitae bibendum nisl arcu id mauris. Cras consectetur aliquam massa, eu aliquet tortor efficitur nec. Praesent eget risus dui. Nunc in justo velit. Etiam a mi risus. Morbi eleifend sapien eu ex varius auctor. Praesent consectetur lobortis leo, nec hendrerit lorem. Suspendisse augue nulla, feugiat et sagittis a, scelerisque eu risus. Sed sed mollis leo, id commodo sem. Sed fermentum dapibus metus, nec lacinia metus ultricies eget. Donec venenatis, odio a consectetur semper, neque nibh ultrices dolor, eu pulvinar dolor urna et lorem. Sed non semper sem. Cras non diam non enim varius sodales.",
          date: 1639343492395,
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus suscipit dui, sed malesuada nih tempor vel. Proin a justo scelerisque, auctor ligula nec, porttitor libero. Vestibulum accumsan a diam non imperdiet. Vestibulum consectetur, est vitae porttitor maximus, neque augue maximus mauris, vitae bibendum nisl arcu id mauris. Cras consectetur aliquam massa, eu aliquet tortor efficitur nec. Praesent eget risus dui. Nunc in justo velit. Etiam a mi risus. Morbi eleifend sapien eu ex varius auctor. Praesent consectetur lobortis leo, nec hendrerit lorem. Suspendisse augue nulla, feugiat et sagittis a, scelerisque eu risus. Sed sed mollis leo, id commodo sem. Sed fermentum dapibus metus, nec lacinia metus ultricies eget. Donec venenatis, odio a consectetur semper, neque nibh ultrices dolor, eu pulvinar dolor urna et lorem. Sed non semper sem. Cras non diam non enim varius sodales.",
          date: 1639343508722,
        },
      ],
    };
  },

  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQTweetContent,
        date: Date.now(),
      };
      this.qweets.unshift(newQweet);
      this.newQTweetContent = "";
    },

    deleteQweet(qweet) {
      let dateToDelete = qweet.date;
      let index = this.qweets.findIndex((qweet) => qweet.date === dateToDelete);
      this.qweets.splice(index, 1);
    },
  },

  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>

<style lang="sass">
.new-qtweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px
</style>