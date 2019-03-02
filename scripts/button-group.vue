<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.button-group {
  display: inline-flex;
  vertical-align: top;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: var(--border-width-);
    }
    &:last-child {
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
    &:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
    }
    &:hover,
    &:active {
      z-index: 1;
    }
  }
}
</style>
