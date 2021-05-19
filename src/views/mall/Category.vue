<template>
  <c-box class="category" wrap="wrap" pv4>
    <c-box
      class="category__item"
      direction="col"
      vertical="center"
      v-for="(it,i) in list"
      :key="i"
      pv4
    >
      <img :src="it.image" />
      <p fz12 pt1>{{ it.title }}</p>
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
@include b(category) {
  @include e(item) {
    @include dimensions(20%, auto);
    img {
      @include dimensions(50px);
    }
    p {
      color: $color-text-secondary;
    }
  }
}
</style>