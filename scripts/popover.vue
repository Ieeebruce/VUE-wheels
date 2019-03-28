<template>
  <div class="popover" @click="click">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gulu-popover",
  data() {
    return { visible: false };
  },
  methods: {
    click(e) {
      e.stopPropagation();
      this.visible = !this.visible;
      if (this.visible === true) {
        document.addEventListener(
          "click",
          () => {
            this.visible = false;
            console.log(1);
          },
          { once: true }
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  border: 1px solid red;
  position: relative;
  top: 100px;
  left: 100px;
  .content-wrapper {
    position: absolute;
    border: 1px solid #bbb;
    bottom: 100%;
  }
}
</style>
