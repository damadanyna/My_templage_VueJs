<template>
<div class="flex flex-col h-full text-[14px] ">
    <div class="w-full flex flex-row">
        <div class=" w-[30%]   duration-500   flex z-10 flex-col ">
            <div class="flex">
                <button @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
            </div>
            <div class="  py-6 sticky pb-4 -top-5  mt-4  duration-500 bg-white rounded-lg    px-4 flex z-10 flex-col ">
                <tableVue :options="{class:'h-[70vh]'}"></tableVue>
            </div>
        </div>
        <div class="flex flex-col  w-[70%] bg-white mx-3  mt-14 rounded-md  ">
            <GrilleEvaluation class=""></GrilleEvaluation>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue';
import tableVue from '../../components/poppup/gestionFormation/paramètre/table.vue';
import slidebtn_ from '../../components/button/slidebtn_.vue'; 
import GrilleEvaluation from '../../components/poppup/gestionFormation/grilleEvaluation.vue';
export default {
    components: {
    btn_,
    slidebtn_,
    tableVue, 
    GrilleEvaluation
},
    data() {
        return {}
    },
    methods: {}

}
</script>

<style>
              
              </style>
