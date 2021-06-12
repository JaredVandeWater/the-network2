<template>
  <div class="container">
    <SearchBar />
    <h1><u>Profiles</u></h1>
    <ProfileResult v-for="p in state.profiles" :key="p._id" :profile="p" />
    <h1><u>Posts</u></h1>
    <Post v-for="p in state.posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'SearchResults',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      profiles: computed(() => AppState.profileResults)
    })
    return {
      state
    }
  }

}
</script>

<style scoped lang="scss">

</style>
