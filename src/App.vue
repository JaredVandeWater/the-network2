<template>
  <header>
    <Navbar class="my-sticky" />
    <div class="my-top-pad"></div>
  </header>
  <main>
    <div v-if="b" class="fxd2">
      <img class="my-w" :src="b.tall">
    </div>
    <router-view />
    <div v-if="a" class="fxd">
      <img class="my-w" :src="a.tall">
    </div>
  </main>
  <footer>
    <div class="mt-5"></div>
    <div class="bg-dark text-light text-center py-1 fixed-bottom">
      Jared VandeWater 2021 |
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
      a: computed(() => AppState.a[0]),
      b: computed(() => AppState.a[1])
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

body{
  min-width: 650px;
}

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
  right: -9rem;
  bottom: 3rem
}

.fxd2{
  position: fixed;
  left: 1rem;
  bottom: 3rem
}

@media only screen and (max-width: 1400px) {
  .fxd{
    display: none;
  }
  .fxd2{
    display: none;
  }
}

.my-w{
  width: 58%;
}
</style>
