<template>
  <div class="col" :class="[`span-${span}`,`offset-${offset}`]" :style="styleCol">
    <div style="border:1px solid red"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "gulu-col",
  data() {
    return {
      gap: 0
    };
  },
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    styleCol() {
      let { gap } = this;
      return { paddingLeft: gap / 2 + "px", paddingRight: gap / 2 + "px" };
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  height: 30px;
  $class-pre: span-;
  @for $n from 1 through 24 {
    &.#{$class-pre}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-right: ($n / 24) * 100%;
    }
  }
}
</style>
