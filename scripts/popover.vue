<template>
  <div class="popover" @click="click">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.top = top - height + window.scrollY + 'px';
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          document.addEventListener("click",() => {
              this.visible = false;
            },{ once: true });
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-top: 100px;
  left: 100px;
} 
.content-wrapper {
    position: absolute;
    border: 1px solid #bbb;
  }
</style>
