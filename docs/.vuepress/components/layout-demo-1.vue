<template>
  <div>
    <g-layout style="color: white;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-main style="height: 100px; background:deepskyblue;">main</g-main>
      <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
    </g-layout>
  </div>
</template>

<script>
import Layout from "../../../scripts/layout/layout";
import Header from "../../../scripts/layout/header";
import Footer from "../../../scripts/layout/footer";
import Main from "../../../scripts/layout/main";

export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-main": Main
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>