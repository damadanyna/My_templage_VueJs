<template>
 <div class=" flex flex-row bg-stone-100 h-full w-full  py-3">
    <div class="flex w-1/4 px-2 "> 
      <sideBarVue class=" shadow-lg rounded-2xl "></sideBarVue>
    </div>
    <div class="w-full h-full flex-col flex">
      <haedBar></haedBar>
      <router-view class=" flex w-full h-full"></router-view>
    </div>
 </div>
</template>

<script setup>
import haedBar from "./components/haedBar.vue";
 import sideBarVue from "./components/sideBar.vue";
</script>

<style scoped>
 
</style>
