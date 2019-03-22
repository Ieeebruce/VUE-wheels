<template>
  <svg class="g-icon">
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'gulu-icon',
  props: ["name"]
};
</script>
<style lang='scss' scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>

