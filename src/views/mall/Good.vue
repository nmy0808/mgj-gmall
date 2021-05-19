<template>
  <c-box class="good" fz12 wrap="wrap" ph4 horizontal="center">
    <c-box class="good__item" pa4 v-for="(it, i) in list" :key="i">
      <c-box class="good__item-inner" bg-w wrap="wrap" radius10>
        <img :src="it.image" alt="" />
        <c-box pa3 wrap="wrap" class="good__words" pa7>
          <c-box class="good__title" ellipsis2 pt6>
            {{ it.des }}
          </c-box>
          <c-box vertical="center" pv4>
            <img class="good__avatar" circle :src="it.avatarImage" />
            <p ml4 class="good__name" ellipsis1 font-bold>{{ it.avatarDes }}</p>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
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
@include b(good) {
  padding-bottom: 54px;
  @include e(item) {
    @include dimensions(50%, auto);
  }
  @include e(item-inner) {
    @include dimensions(100%, auto);
  }
  @include e(title) {
    @include dimensions($height: 44px);
    line-height: 1.5;
  }
  @include e(avatar) {
    @include dimensions(28px);
  }
}
</style>