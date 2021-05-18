<template>
  <div id="app">
    <c-box class="box" tag="ul" horizontal="between" vertical="top" border="right">
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
    </c-box>
  </div>
</template>
<script>
import { getBanners } from '@/api/mall.js';
import { OverallReduction } from '@icon-park/vue';

export default {
  components: {
    OverallReduction,
  },
  mounted() {
    getBanners().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
}
</style>
