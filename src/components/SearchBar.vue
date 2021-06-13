<template>
  <form @submit.prevent="setSearchResults">
    <input v-model="state.query" type="text" required placeholder="Search...">
    <button type="submit">
      Search
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { searchService } from '../services/SearchService'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      query: ''
    })
    return {
      state,
      setSearchResults() {
        try {
          AppState.posts = null
          AppState.profileResults = null
          searchService.setSearchResults(state.query)
          router.push({ name: 'SearchResults', params: { query: state.query } })
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }

}
</script>

<style>

</style>
