<template>
  <div class="magazine" :style="calcStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CMagazine',
  props: {
    image: {
      type: String,
    },
  },
  computed: {
    calcStyle() {
      const style = {
        position: 'relative',
        'background-size': 'cover',
      };
      if (this.image) {
        style['background-image'] = `url(${this.image})`;
      }
      return style;
    },
  },
};
</script>
