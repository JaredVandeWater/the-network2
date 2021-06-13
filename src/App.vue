<template>
  <header>
    <Navbar class="my-sticky" />
    <div class="my-top-pad"></div>
  </header>
  <main>
    <router-view />
    <div v-if="a" class="fxd">
      <img class="w-75 d-flex" :src="a.tall">
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { postsService } from './services/PostsService'
export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      try {
        postsService.getA()
        console.log(AppState.a[0])
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      a: computed(() => AppState.a[0])
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.my-sticky{
    position:fixed;
    top:0;
    width:100%;
    z-index:100;
}

.my-top-pad{
  margin-bottom: 6rem;
}

.fxd{
  position: fixed;
  right: 0rem;
}
</style>
