<template>
  <div>
    <router-link :to="{name: 'Profile', params:{id: profile._id }}">
      <img class="rounded-circle tiny-prof-img mr-2" :src="profile.picture" alt="Profile">
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    profile: { type: Object, required: true }
  }

}
</script>

<style>
  .tiny-prof-img{
    width: 2rem;
    height: 2rem;
  }
</style>
