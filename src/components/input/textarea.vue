<template>
    <div class=" group border-[1px] py-1 rounded-lg items-center flex flex-col border-[#63B6B9] ">
      <div class=" flex relative w-full ">
            <span @click="()=>{isFocus=true}" :class="isFocus==true || options_.model!='' ?'-mt-4 font-semibold text-[11px]  ':'   text_xs'" class=" ml-2 bg-white px-1  duration-300 absolute" v-text="options_.label"></span>
      </div>
      <textarea class=" w-full text-sm resize-none border-none outline-none px-3" @focus="()=>{isFocus=true}"   @focusout="()=>{isFocus=false}" v-model="options_.model" name="" id=""  rows="3"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props:{
      options:{}
    },
    data(){
      return{
        isFocus:false, 
        options_:this.options
      }
    }
  }
  </script>
  
  <style>
  
  </style>