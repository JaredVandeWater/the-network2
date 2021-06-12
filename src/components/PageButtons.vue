<template>
  <div class="row my-3 justify-content-center">
    <div class="col d-flex justify-content-center">
      <button v-if="state.prev" @click="prev" class="btn">
        Prev
      </button>
    </div>
    <div class="col d-flex justify-content-center">
      <button v-if="state.next" @click="next" class="btn">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
export default {
  setup() {
    const state = reactive({
      next: computed(() => AppState.pageButtons.next),
      prev: computed(() => AppState.pageButtons.prev)

    })
    return {
      state,
      next() {
        postsService.next()
      },
      prev() {
        postsService.prev()
      }
    }
  }
}
</script>

<style>

</style>
