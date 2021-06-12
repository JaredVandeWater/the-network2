<template>
  <div class="row my-3 justify-content-center">
    <div class="col-lg-5 d-flex justify-content-center">
      <div class="card w-100">
        <img v-if="post.imgUrl" class="card-img-top" :src="post.imgUrl" alt="Card image cap">
        <div class="card-body">
          <div class="d-flex">
            <img class="rounded-circle tiny-prof-img mr-2" :src="post.creator.picture" alt="Creator">
            <div class="t-wrap">
              <p class="m-0">
                <strong>
                  {{ post.creator.name }}
                </strong>
              </p>
              <p class="m-0">
                <small>{{ state.time }}</small>
              </p>
            </div>
          </div>
          <p class="card-text">
            {{ post.body }}
          </p>
          <button class="btn text-danger" v-if="state.yourPost">
            <i @click="deletePost" class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <div v-if="state.user.isAuthenticated" class="d-flex justify-content-end">
            <a @click="likePost" class="btn"><i class="far fa-heart"></i></a>
            <!-- <a class="btn"><i class="fas fa-heart"></i></a> -->
            <p class="m-0 mt-2">
              {{ post.likeIds.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  props: {
    post: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      yourPost: computed(() => props.post.creatorId === state.account.id),
      time: computed(() => new Date(props.post.createdAt).toLocaleTimeString())
    })
    return {
      state,
      likePost() {
        postsService.likePost(props.post.id)
      },
      deletePost() {
        postsService.deletePost(props.post.id)
      }
    }
  }
}
</script>

<style>
  .tiny-prof-img{
    max-width: 2rem;
    max-height: 2rem;
  }

  .t-wrap{
    overflow-wrap: anywhere;
  }
</style>
