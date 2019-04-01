<template>
  <div>
    <g-button @click="$toast('点击弹出提示')">弹出</g-button>
  </div>
</template>
<style>
.g-toast {
  z-index: 30 !important;
}
</style>
<script>
import Vue from "vue";
import Toast from "../../../scripts/toast/toast";
import Button from "../../../scripts/button/button";
import plugin from "../../../scripts/toast/plugin";

Vue.use(plugin);

export default {
  components: {
    "g-toast": Toast,
    "g-button": Button
  }
};
</script>

