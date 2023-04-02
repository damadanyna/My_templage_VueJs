<template>
 <div class=" flex flex-row bg-stone-100 h-full w-full    py-3">
    <div :class="$store.state.menuFull==true?'w-1/4':' w-20'" class="duration-300  flex px-2 "> 
      <sideBarVue class=" shadow-lg rounded-2xl "></sideBarVue>
    </div>
    <div class="w-full h-full flex-col flex">
      <haedBar class="shadow-md mb-3"></haedBar>
      <router-view class=" pt-3 flex w-full overflow-y-auto h-full"></router-view>
    </div>
 </div>
</template>

<script setup>
import haedBar from "./components/headBar.vue";
 import sideBarVue from "./components/sideBar.vue";
</script>

<style scoped>
 
</style>
