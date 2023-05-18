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

            <div class="flex px-3 flex-row items-center justify-between">
                    <span class=" text-lg font-semibold">Grille d'évaluation :</span>
                    <div class="flex  flex-row">
                        <btn_ @click="()=>{question.push('')}" class=" mt-3" :options="{label:'Nouvelle question',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                    </div>
                </div>
                <div class="flex flex-col" v-for="i in question" :key="i">
                    <GrilleEvaluation></GrilleEvaluation>

                    <div class="flex w-full px-1">
                        <div class="  mt-9 w-full  base_bg justify-center rounded-md flex">
                            <btn_ :options="{label:'Sauvegarder', style:' base_bg py-2 text-white',stylelabel:' text-white'}"></btn_>
                        </div>
                    </div>
                    <div class="flex w-full flex-col px-3">
                        <span class=" h-[2px] bg-stone-400 my-4 w-full"></span>
                    </div>
                </div>
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
        return {
            question: [''],}
    },
    methods: {}

}
</script>

<style>
              
              </style>
