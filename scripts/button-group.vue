<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
    mounted(){
        for(let node of this.$el.children){
            if(node.nodeName.toLowerCase() !== 'button'){
                console.warn(`<g-button-group>的子元素应该全是<g-button>，不应该有${node.nodeName.toLowerCase()}`)
            }
        }
    }
};
</script>
<style lang="scss">
.button-group {
  display: inline-flex;
  vertical-align: top;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: calc(var(--border-width)*-1);
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
