<template>
  <div id="app">
    <div font-secondary>112rewfwef324</div>
    <c-row>
      <c-col font-secondary span="8">span: 8</c-col>
      <c-col span="8">span: 8</c-col>
      <c-col span="8">span: 8</c-col>
    </c-row>
  </div>
</template>
<script>
import { getBanners } from "@/api/mall.js";
export default {
  mounted() {
    getBanners().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang="scss" scoped>
.box {
  color: $color-primary;
  background: rgba($color: #000000, $alpha: 40%);
  height: 100px;
  @include box-center(center, center);
}
</style>
