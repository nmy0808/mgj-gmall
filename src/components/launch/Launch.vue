<template>
  <c-box class="c-launch" border="bottom" vertical="center">
    <!-- logo -->
    <img ml15 mr10 class="c-launch__logo" :src="imgUrl" alt="蘑菇街" />
    <!--  word-->
    <c-box class="c-launch__words" wrap="wrap" fz12>
      <p w100 font-bold>蘑菇街 总有高手帮你挑</p>
      <c-box vertical="center">
        <Star
          pr1
          class="c-launch__words__star"
          theme="filled"
          size="8"
          fill="#eca543"
          v-for="i in 5"
          :key="i"
        />
        <div class="c-launch__words__sub" ml8>超过2亿用户已下载</div>
      </c-box>
    </c-box>
    <!-- button-download -->
    <c-box class="c-launch__download" radius4 center>打开APP</c-box>
  </c-box>
</template>

<script>
import { Star } from '@icon-park/vue';
export default {
  name: 'Launch',
  components: { Star },
  data() {
    return {
      imgUrl:
        'https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png',
    };
  },
};
</script>

<style lang="scss" scoped>
@include b(c-launch) {
  @include dimensions($height: 47px);
  @include e(logo) {
    width: 30px;
    height: 30px;
  }
  @include e(words) {
    @include dimensions(170px, 31px);
    @include e(star) {
      @include dimensions(9px);
    }
    @include e(sub) {
      color: $color-text-secondary;
    }
    margin-right: auto;
  }
  @include e(download) {
    @include dimensions(75px, 25px);
    background: $background-color-tertiary;
    color: $color-text-tertiary;
    margin-right: 15px;
  }
}
</style>