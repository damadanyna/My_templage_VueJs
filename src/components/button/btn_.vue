<template>
<div class="flex flex-row">
    <button :class="options.style" class="   duration-200 rounded-md mt-2 items-center hover:opacity-80 bg-stone-50 flex justify-start px-4    text-sm">
        <svg v-if=" options.ico" class=" fill-current w-5" viewBox="0 0 24 24" >
          <path  :d="options.ico" /></svg> 
         <span class=" ml-2">{{ options.label }}</span>
    </button>
</div>
</template>

  
  
<script>
export default {
    props: {
        options: {}
    }
}
</script>
  
  
<style>
button {
    padding: 9px 0px;
}
</style>
