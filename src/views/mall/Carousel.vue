<template>
  <div>
    <c-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <c-swipe-item v-for="it in list" :key="it.url">
        <img :src="it.image" />
      </c-swipe-item>
    </c-swipe>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  background-color: white;
  @include dimensions(auto, 130px);
}
</style>