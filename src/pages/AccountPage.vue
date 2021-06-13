<template>
  <div v-if="state.profile" class="container">
    <div class="row text-center justify-content-center">
      <h1>Welcome {{ state.account.name }}, change some settings!</h1>
    <!-- <img class="rounded" :src="account.picture" alt="" /> -->
    <!-- <p>{{ account.email }}</p> -->
    </div>
    <div @submit.prevent="editData" class="form">
      <input v-model="state.newData.bio" placeholder="Bio..." type="text">
      <input v-model="state.newData.class" placeholder="Class..." type="text">
      <input v-model="state.newData.coverImg" placeholder="Banner..." type="text">
      <input v-model="state.newData.github" placeholder="Github..." type="text">
      <input v-model="state.newData.graduated" type="checkbox">
      <input v-model="state.newData.linkedin" placeholder="LinkedIn..." type="text">
      <input v-model="state.newData.name" placeholder="Name..." type="text">
      <input v-model="state.newData.picture" placeholder="Photo..." type="text">
      <button type="submit">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import Notification from '../utils/Notification'
export default {
  name: 'Account',
  setup() {
    onMounted(async() => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        await profileService.getProfileInfo(state.account.id)
        console.log(state.account, 'acc')
        console.log(AppState.profileInfo)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    const state = reactive({
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profileInfo),
      newData: {

      }
    })
    return {
      state,
      editData() {
        profileService.editData(state.account.id, state.newData)
        console.log(state.account.id, 'id', state.newData, 'data')
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
