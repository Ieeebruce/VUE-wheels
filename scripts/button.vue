<template>
  <button class="g-button">hello</button>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-background);
  &:hover {
    border-color: var(--button-color-hover);
  }
  &:active {
    background: var(--button-active-background);
  }
}
</style>

