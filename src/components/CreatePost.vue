<template>
  <div class="row my-3 justify-content-center">
    <div class="col-lg-5 d-flex justify-content-center">
      <div class="card w-100">
        <div class="card-body">
          <form @submit.prevent="createPost" action="">
            <textarea v-model="state.newPost.body" name="" id="" cols="30" rows="10"></textarea>
            <input v-model="state.newPost.imgUrl" type="text" placeholder="Img Url">
            <button type="submit" class="btn btn-primary">
              Post It!
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const state = reactive({
      newPost: {
      }
    })
    const route = useRoute()
    return {
      state,
      createPost() {
        postsService.createPost(state.newPost, route.path)
      }

    }
  }
}
</script>

<style>

</style>
