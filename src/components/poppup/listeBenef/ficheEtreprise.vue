<template>
  <div class=" h-full w-full flex flex-col">
      <div class="flex text-lg items-center justify-start sticky z-10 top-5 py-5 bg-white  flex-row">
          <div class="flex flex-row  items-center">
              <h1 class="w-full font-bold text-[#000000] pt-4  ">Fiche entreprise</h1>
          </div>
      </div>
      <div class=" w-full h-full flex flex-col rounded-md py-6">
          <div class="grid  grid-cols-2 w-full ">
              <div class=" my-2 px-1 w-full" v-for="item,i in data " :key="i">
                  <input_ class=" z-10 w-full bg-white " :options="item"></input_>
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
              data: [{
                  label: 'Modifier par raison social',
                  model: '',
                  type: 'text',
              }, {
                  label: 'Email',
                  model: '',
                  type: 'text',
              }, {
                  label: 'SIREN',
                  model: '',
                  type: 'text'
              }, ],
          }
      }
  }
  </script>
  
  <style> 
          </style>
  