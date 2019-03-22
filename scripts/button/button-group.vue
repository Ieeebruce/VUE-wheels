<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gulu-button-group",
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn(
          `<g-button-group>的子元素应该全是<g-button>，不应该有${node.nodeName.toLowerCase()}`
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.button-group {
   $border-width: 1px;
     $border-radius: 4px;
  display: inline-flex;
  vertical-align: top;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -$border-width;
    }
    &:last-child {
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    &:first-child {
      border-bottom-left-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
    &:hover,
    &:active {
      z-index: 1;
    }
  }
}
</style>
