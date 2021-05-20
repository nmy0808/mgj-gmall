<template>
  <c-row class="menu" bg-w>
    <c-col
      class="menu__item"
      span="6"
      v-for="it in menus"
      align="center"
      justify="center"
      :key="it.name"
    >
      <router-link :to="{ name: it.name }" exact>{{ it['text'] }}</router-link>
    </c-col>
  </c-row>
</template>

<script>
export default {
  name: 'CMenu',
  data() {
    return {
      menus: [
        { text: '首页', name: 'Home' },
        { text: '商城', name: 'Shop' },
        { text: '直播', name: 'Live' },
        { text: '我', name: 'Me' },
      ],
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