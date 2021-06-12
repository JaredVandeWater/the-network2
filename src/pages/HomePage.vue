<template>
  <div class="container">
    <SearchBar />
    <CreatePost v-if="state.user.isAuthenticated" />
    <Post v-for="p in state.posts" :key="p.id" :post="p" />
    <PageButtons />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
export default {
  name: 'Home',

  setup() {
    onMounted(async() => {
      try {
        postsService.getAllPosts()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    const state = reactive({
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts)
    })
    return {
      state
    }
  }

}
</script>

<style scoped lang="scss">

</style>
