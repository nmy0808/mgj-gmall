<template>
  <c-row class="menu" bg-w>
    <c-col
      class="menu__item"
      span="6"
      v-for="it in menus"
      align="center"
      justify="center"
      :key="it"
    >
      {{ it }}
    </c-col>
  </c-row>
</template>

<script>
export default {
  name: 'CMenu',
  data() {
    return {
      menus: ['首页', '商城', '直播', '我'],
    };
  },
};
</script>

<style lang="scss" scoped>
@include b(menu) {
  @include dimensions(auto, 50px);
  @include e(item) {
    height: 50px;
    line-height: 50px;
    color: $color-text-secondary;
    font-size: 16px;
    @include m(active) {
      color: $color-primary;
    }
  }
}
</style>