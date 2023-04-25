<template>
  <div class=" h-full w-full flex flex-col">
      <div class="flex text-lg items-center justify-start sticky z-10 top-5 pt-5 bg-white  flex-row">
          <div class="flex flex-row justify-between w-full  items-center">
              <h1 class="  font-bold text-[#000000] pt-4  ">Document bénéficiaire</h1>
              <btn_ class=" mx-2  " :options="{label:'Uploader une image',style:' py-2 base_bg text-white w-full',ico:$store.state.icons.uploadFolder}"></btn_>
          </div>
      </div>
      <div class=" w-full h-full flex flex-col rounded-md "> 
          <div class="flex flex-col justify-center   text-sm  "> 
              <div class="flex flex-row items-center mt-1">
                  <btn_ class=" bg-white   rounded-md" :options="{label:'document1.pdf',ico2Style:'text-[#63B6B9]',style:' bg-stone-200 py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
                  <btn_ class=" bg-white ml-2  rounded-md" :options="{label:'Certificat_document.pdf',ico2Style:'text-[#63B6B9]',style:' bg-stone-200 py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  import btn_ from '../../button/btn_.vue';
  import input_ from '../../input/inputTxt.vue';
  
  export default {
      components: {
          btn_,
          input_
      },
      data() {
          return {
             
          }
      }
  }
  </script>
  
  <style> 
          </style>
  