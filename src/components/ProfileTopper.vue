<template>
  <div class="row my-3 justify-content-center">
    <div class="col-lg-9d-flex justify-content-center my-width">
      <div class="row">
        <div class="card w-100">
          <img class="card-img-top cvr rel" :src="state.profile.coverImg" alt="Card image cap">
          <img class="rounded-circle profpic" :src="state.profile.picture" alt="">
          <div class="row">
            <div class=" col-lg-3 mr-4">
            </div>
            <div class="col d-flex justify-content-end justify-content-lg-between">
              <h4 class="mx-2 d-none d-lg-block">
                {{ state.profile.name }}
              </h4>
              <h6 class="mx-2 d-lg-none my-auto">
                {{ state.profile.name }}
              </h6>
              <div class="mr-3">
                <a v-if="state.profile.linkedin" :href="state.profile.linkedin"><i class="mdi mdi-linkedin mdi-36px"></i></a>
                <a v-if="state.profile.github" :href="state.profile.github"><i class="mdi mdi-github mdi-36px"></i></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col mx-3 d-flex">
              <h4 class="m-0 my-auto">
                {{ state.profile.class }}
              </h4>
              <i v-if="state.profile.graduated" class=" px-1 mdi mdi-school mdi-36px"></i>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="m-0 mb-2 mx-4 mt-4">
                <p>{{ state.profile.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      profile: computed(() => AppState.profileInfo)
    })
    return {
      state
    }
  }
}
</script>

<style>
.my-width{
  width: 70%;
}

  .cvr{
    object-fit: cover;
    max-height: 15rem;
  }
  .profpic{
    height: 9rem;
    width: 9rem;
    position: absolute;
    top: 10rem;
    left: 1rem;
    border: 2px solid rgb(227, 226, 236);
  }

  .rel{
    position: relative;
  }
</style>
  "picture": "https://s.gravatar.com/avatar/df82172942ccdb27a8b7050159559b94?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fju.png",
  "bio": "this is a bio",
  "coverImg": "https://imgix.lifehacker.com.au/content/uploads/sites/4/2020/12/10/qfzs9j1ebupbjkj2ul0v-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280",
  "github": "https://github.com/JustinCarpenter2020",
  "linkedin": "https://www.linkedin.com/in/-justin-carpenter2020",
  "resume": "",
  "class": "Winter-20",
  "graduated": true,
  "_id": "60c13d2a16ccd3a263174531",
  "name": "justincarpenter2020@gmail.com",
  "email": "justincarpenter2020@gmail.com",
  "createdAt": "2021-06-09T22:14:03.890Z",
  "updatedAt": "2021-06-11T03:59:36.227Z",
  "__v": 0,
  "id": "60c13d2a16ccd3a263174531"
