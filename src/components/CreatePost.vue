<template>
  <div class="row my-3 justify-content-center">
    <div class="col-lg-6 d-flex justify-content-center">
      <div class="card w-100">
        <div class="card-body">
          <form @submit.prevent="createPost" action="">
            <h1>Share Your Thoughts!</h1>
            <textarea cols="54"
                      v-model="state.newPost.body"
                      rows="3"
                      placeholder="Whats happenin?"
            ></textarea>
            <div class="d-flex justify-content-between">
              <input style="width: 19rem" v-model="state.newPost.imgUrl" type="text" placeholder="Img url...">
              <button type="submit" class="btn btn-primary">
                Post It!
              </button>
            </div>
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
 textarea{
   resize: none;
  }
</style>
