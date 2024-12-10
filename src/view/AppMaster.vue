<template>
  <div>
    <!-- Header Start-->
    <comp-header></comp-header> 
    <!-- Header End-->

    <!-- Body Start-->
    <router-view></router-view>

    <!-- Footer Start-->
    <comp-footer></comp-footer>
  </div>
  <!-- Body End-->
  <!-- Footer Start-->

  <!-- Footer End-->
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";


export default {
  name: "AppMaster",
  components: { CompHeader, CompFooter },
};
</script>

<style scoped lang="scss"></style>
