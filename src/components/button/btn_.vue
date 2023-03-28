<template>
    <button :class="options.style" class="  duration-300 rounded-md mt-2 items-center bg-stone-50 flex justify-start px-2 text-stone-800   text-sm">
      <svg v-if=" options.ico" class=" fill-current w-5" viewBox="0 0 24 24" v-html="options.ico"></svg>
      <span class=" ml-2">{{ options.label }}</span>
    </button>
  </template>
  
  <script>
  export default {
      props:{
          options:{}
      }
  }
  </script>
  
  <style>
  button{
    padding: 9px 0px;
  }
  
  </style>