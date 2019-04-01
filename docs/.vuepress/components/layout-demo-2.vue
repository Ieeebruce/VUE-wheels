<template>
  <div>
    <g-layout style="color: white; overflow:hidden;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-layout>
        <g-asider style="height: 100px; background: #7cb8ff; width:200px; color: black;">sider</g-asider>
        <g-main style="height: 100px; background:deepskyblue;">main</g-main>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
    </g-layout>
  </div>
</template>

<script>
import Layout from "../../../scripts/layout/layout";
import Header from "../../../scripts/layout/header";
import Footer from "../../../scripts/layout/footer";
import Main from "../../../scripts/layout/main";
import Asider from "../../../scripts/layout/asider";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-main": Main,
    "g-asider": Asider
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>