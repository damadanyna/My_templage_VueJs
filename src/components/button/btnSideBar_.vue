<template>
  <router-link :to="options.url"   class=" py-2  duration-300 rounded-md mt-2 items-center bg-stone-50 flex justify-start px-2 text-stone-800   text-sm">
    <svg v-if=" options.ico" class=" fill-current w-5" viewBox="0 0 24 24" v-html="options.ico"></svg>
    <span class=" ml-2">{{ options.label }}</span>
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
    background: rgb(55, 55, 55);
}

a.router-link-exact-active  {
    background: rgb(62, 62, 62); 
    fill: #393939;
}

a.router-link-exact-active svg {
    fill: #ffffff;

}
</style>