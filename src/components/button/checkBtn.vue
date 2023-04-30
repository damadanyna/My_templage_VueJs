<template>
  <div >
    <div class="relative bg-white flex">
        <div v-if="options.checked" :class="options.iconStyle?options.iconStyle:''" class="absolute  bg-white -mt-3 -ml-3 border-[#63B6B9] border-[1px] p-[1px] rounded-full">
            <svg :class="options.checked==true?'color_base':'text-stone-300'" class=" w-4  fill-current" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
  
        </div>
    </div>
    <button  :class="options.style" v-text="options.text"> </button>
     
  </div>
</template>

<script>
export default {
props:{
    options:{}
}
}
</script>

<style>

</style>