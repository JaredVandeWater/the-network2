<template>
  <div class="container">
    <SearchBar />
    <Post v-for="p in state.posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'
export default {
  name: 'SearchResults',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        postsService.getSearchResults(route.params.query)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    const state = reactive({
      account: computed(() => AppState.account),
      yourProfile: computed(() => route.params.id === state.account.id),
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
