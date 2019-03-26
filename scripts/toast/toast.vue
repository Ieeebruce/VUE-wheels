<template>
  <div class="toast">
    <span>
      <slot></slot>
    </span>
    <span class="close" v-if="!autoClose" @click="close()">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "gulu-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    message: {
      type: String,
    },
    closeButton:{
        type:Object,
        default:{
            text:'close',
            callback:(toast)=>{
                toast.close()
            }
        }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-width: 50%;
$toast-bg: #333;
.toast {
  font-size: $font-size;
  min-height: $toast-height;
  line-height: $toast-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: $toast-bg;
  width: $toast-width;
  color: white;
  display: flex;
  & > span {
    flex-grow: 6;
    text-align: center;
  }
  .close {
    height: $toast-height;
    flex-grow: 1;
    border-left: 1px solid white;
  }
}
</style>
