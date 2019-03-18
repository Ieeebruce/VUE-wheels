<template>
  <div class="col" :class="[`col-${span}`]" :style="styleCol">
      <slot></slot>
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
    }
  },
  computed: {
    styleCol() {
      let { gap } = this;
      return { marginLeft: gap / 2 + "px", marginRight: gap / 2 + "px" };
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  height: 30px;
background-color: #bbb;
  $class-pre: col-;
  @for $n from 1 through 24 {
    &.#{$class-pre}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
