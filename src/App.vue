<template>
  <header>
    <Navbar class="my-sticky" />
    <div class="my-top-pad"></div>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
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
</style>
