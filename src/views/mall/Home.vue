<template>
  <div class="home">
    <c-layout>
      <c-header>
        <Launch/>
      </c-header>
      <c-content></c-content>
      <c-footer></c-footer>
    </c-layout>
  </div>
</template>

<script>
import Launch from '@/components/launch'
export default {
  components: {Launch},
  data() {
    return {
      navList: ['首页', '商城', '直播', '我']};
  },
};
</script>

<style>
</style>