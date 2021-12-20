<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Estoque
        </q-toolbar-title>

        <q-btn-dropdown flat color="white" icon="person">
      <q-list>
        <q-item clickable v-close-popup @click="handleLogout">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { userRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    const router = userRouter()
    const { logout } = useAuthUser()
    const handleLogout = async() =>{
      $q.dialog({
        title:'Logout',
        message:'Do you really want to leave?',
        cancel:true,
        persistent:true
      }).onOk(async() => {
        await logout()
        router.replace({name: 'login'})
      })
    }

    return {
      handleLogout,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
