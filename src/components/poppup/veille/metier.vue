<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col overflow-hidden h-full  ">
            <div class="flex flex-col  w-[100%] h-full">
                <div class="flex flex-row z-50   bg-stone-100 text-stone-600 items-center w-full pt-1 pb-2">
                    <button @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    </button>
                    <h1 class=" text-lg text-black font-bold">Veille du métier</h1>
                </div>
                <div class="  flex flex-col h-full py-11  bg-white rounded-lg">
                    <metierVue :options="{limite:100}"></metierVue>
                </div>
            </div>
    
        </div>
    
    </div>
    </template>
    
    <script> 
import metierVue from '../../../views/veille/metier.vue'
     
    export default {
        components: {
            metierVue
        },
    
    }
    </script>
    
    <style>
    
    </style>
    