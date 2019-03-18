<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gulu-row",
  props: {
    gap: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle() {
      let { gap } = this;
      return {
        marginLeft: -gap / 2 + "px",
        marginRight: -gap /2 + "px"
      };
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gap = this.gap;
    });
  }
};
</script>
<style lang="scss" scoped>
.row {
 
  display: flex;
}
</style>
