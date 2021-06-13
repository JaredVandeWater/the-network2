<template>
  <div class="container">
    <ProfileTopper />
    <CreatePost v-if="state.yourProfile" />
    <Post v-for="p in state.posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        AppState.profileInfo = {}
        postsService.getProfilePosts(route.params.id)
        profileService.getProfileInfo(route.params.id)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    const state = reactive({
      account: computed(() => AppState.account),
      yourProfile: computed(() => route.params.id === state.account.id),
      posts: computed(() => AppState.posts.filter(p => p.creatorId === route.params.id))
    })
    return {
      state
    }
  }

}
</script>

<style scoped lang="scss">

</style>
