<template>
  <c-box class="search" ph15 horizontal="between" vertical="center">
    <hamburger-button theme="filled" size="24" fill="#d0d0d0" />
    <c-box class="search__center" border="all" radius4 vertical="center">
      <search theme="outline" size="16" ph6 fill="#d0d0d0" />
      <p class="search__words">{{ searchWord }}</p>
    </c-box>
    <message-unread theme="filled" size="24" fill="#d0d0d0" />
  </c-box>
</template>

<script>
import { Search, HamburgerButton, MessageUnread } from '@icon-park/vue';
export default {
  name: 'CSearch',
  components: { Search, HamburgerButton, MessageUnread },
  data() {
    return {
      searchWord: '睡衣',
    };
  },
};
</script>

<style lang="scss" scoped>
@include b(search) {
  @include dimensions(auto, 45px);
  @include e(center) {
    @include dimensions(265px, 30px);
    box-shadow: 0 0 0.10667rem #ff5777;
  }
  @include e(words) {
    font-size: 11px;
    color: $color-text-primary;
  }
}
</style>