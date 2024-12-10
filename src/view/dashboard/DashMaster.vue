<template>
  <div>
    <!-- Header Start-->
    <DashHeader />
    <!-- Header End-->

    <!-- Sidbar Start-->
    <DashSidbar />
    <!-- Sidbar End-->

   
    <!-- Body End-->  
  </div>
  <!-- Body End-->  
</template>

<script>
import DashSidbar from "@/components/dash/DashSidbar.vue";
import DashHeader from "@/components/dash/DashHeader.vue";
import Dashboard from "./pages/Dashboard.vue";
  
export default {
  name: "AppMaster",
  components: { DashSidbar, DashHeader, Dashboard },
};
</script>

<style scoped lang="scss"></style>
