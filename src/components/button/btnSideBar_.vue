<template>
  <router-link :to="options.opt.url" :class="$store.state.menu_liste.length-1==options.index?'bg-[#0F9EC2] text-white':'bg-stone-50 text-stone-600'"  class=" py-2  duration-300 rounded-md mt-2 items-center  flex justify-start px-2    text-sm">
    <svg v-if=" options.opt.ico" class=" fill-current w-5" viewBox="0 0 24 24" v-html="options.opt.ico"></svg>
    <span v-if="$store.state.menuFull==true" class=" ml-2 w-full">{{ options.opt.label }}</span>
    <div v-if="$store.state.menu_liste.length-1==options.index || $store.state.menu_liste.length-3==options.index || $store.state.menu_liste.length-4==options.index" class="flex relative">
      <div class="-mt-6 rounded-md "></div>
      <span class="-mt-3 w-[8px] border-[2px] rounded-md h-[8px] bg-red-500  "></span>
    </div>
 </router-link>
</template>

<script>
export default {
    props:{
        options:{}
    }
}
</script>

<style>
router-link {
  padding: 9px 14px;
}

 a.router-link-exact-active  {
    color: #ffffff;
    background: #63B6B9;
}

a.router-link-exact-active  {
  background: #42898B;
    fill: #393939;
}
a:hover  {
  background: #63B6B9;
  color:white;
    fill: #f4f4f4;
}

a.router-link-exact-active svg {
    fill: #ffffff;
}
</style>