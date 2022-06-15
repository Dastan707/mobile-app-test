<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="row no-wrap justify-between">
        <q-tabs no-caps active-color="secondary" indicator-color="transparent" class="text-dark" v-model="tab">
          <q-route-tab to="/page1" name="page1" label="Page #1" />
          <q-route-tab to="/page2" name="page2" label="Page #2" />
          <q-route-tab to="/page3" name="page3" label="Page #3" />
          <q-route-tab to="/page4" name="page4" label="Page #4" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      tab: ref('page1')
    }
  }
})
</script>

<style scoped>
</style>
