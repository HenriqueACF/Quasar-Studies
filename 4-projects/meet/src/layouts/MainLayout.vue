<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="row justify-between">
        <q-img
          src="../assets/google-meet-logo.png"
          width="200px"
          class="q-ma-md"
        >
        </q-img>
        <div class="row">
          <div class="q-mr-md">
            <q-icon
              name="help_outline"
              size="25px"
              color="grey-7"
              class="q-my-sm q-mx-md"
            />
            <q-icon
              name="sms_failed"
              size="25px"
              color="grey-7"
              class="q-my-sm q-mx-md"
            />
            <q-icon
              name="settings"
              size="25px"
              color="grey-7"
              class="q-my-sm q-mx-md"
            />
          </div>
          <div>
            <q-icon
              name="apps"
              size="25px"
              color="grey-7"
              class="q-my-sm q-mx-md"
            />
            <q-avatar class="q-mr-sm">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
});
</script>
