<template>
<div v-if="!$route.params.id " class="flex flex-row">
    <div :class="showFormulaire==true ?'w-[30%]':' w-full'" class=" text-lg sticky -top-20 flex flex-col h-full">
        <div class="flex flex-row">
            <h1 class="font-normal bg-stone-100 z-50   pb-4">Gestion Formation : </h1>
            <h1 class="font-bold bg-stone-100 z-50 color_base  pb-4">TitreFormation </h1>
        </div>
        <div :class="showFormulaire==false?'px-7':'px-2'" class=" duration-500 py-5 bg-white rounded-lg  flex z-10 flex-col ">
            <span class=" text-lg font-bold">Espace questionnaire / sondage</span>
            <div class="flex w-full  first-letter:mt-4 overflow-auto h-[80vh]">
                <table class=" text_xs   w-full items-start px-1 mt-3">
                    <tr class=" w-full h-10 sticky top-0 bg-white">
                        <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                        <th class="  w-[56%] text-start text-stone-500 pl-5 border-r border-stone-200">Titre</th>
                        <th class="  w-[19] text-center text-stone-500 border-r border-stone-200">action</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td class=" px-2">
                            <div class=" flex flex-row justify-center items-center py-1">
                                <button @click="()=>{showFormulaire=true}" class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                    <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                </button>
                                <button class=" bg-slate-100 py-1 px-1 rounded-md">
                                    <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                        <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </div>

    <div v-if="showFormulaire==true  " class=" flex flex-col   rounded-lg w-[70%]  px-3">
        <div class="flex z-50  bg-stone-100 flex-row  items-center">
            <span class=" text-lg  text-stone-400 mr-2">></span>
            <h1 class=" text-lg font-normal bg-stone-100 z-50  ">Sondage: </h1>
            <h1 class=" text-lg font-bold bg-stone-100 z-50 color_base">TitreFormation </h1>
        </div>
        <div class=" z-20 flex-col flex w-full ">
            <div class="flex flex-col   bg-white mt-4 rounded-md">

                <div class=" flex flex-col mx-3 bg-white rounded-lg mt-4">
                    <div class="flex flex-col pl-7 pr-3">
                        <div class="flex flex-row w-full justify-between items-center">
                            <span class=" font-semibold text_base">Positionnement</span>
                            <btn_ @click="()=>{$router.push({ name: 'evaluation'})}" class=" " :options="{label:'Visualiser le fomulaire', style:' base_bg py-2 text-white',stylelabel:' text-white', ico:$store.state.icons.eye}"></btn_>

                        </div>
                        <div class="flex flex-row"> 
                            <checkBtnVue  @click="()=>{index=0}" v-if="index!=0" class=" mt-2" :options="{text:liste[0],checked:false,style:'text_xs color_base bg-stone-200 py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                            <checkBtnVue v-else class=" mt-2" :options="{text:liste[0],checked:true,style:'text_xs text-white base_bg py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                        </div>
                        <div class="flex flex-row w-full   mt-5 items-center">
                            <span class=" font-semibold text_base">Fin de formation</span>
                           
                        </div>
                        <div class="flex flex-row mt-2">
                            <div v-for="item,i in liste" :key="i" @click="()=>{index=i}" :class="i>0 & i<3?'flex':'hidden'" class=" mr-7 ">
                                <checkBtnVue v-if="index!=i" class=" mt-1" :options="{text:item,checked:false,style:'text_xs color_base bg-stone-200 py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                                <checkBtnVue v-else class=" mt-1" :options="{text:item,checked:true,style:'text_xs text-white base_bg py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                            </div>
                        </div>
                        <div class="flex flex-row w-full   mt-5 items-center">
                            <span class=" font-semibold text_base">Satisfaction</span>
                          
                        </div>
                        <div class="flex flex-row mt-2">
                          
                            <div v-for="item,i in liste" :key="i" @click="()=>{index=i}" :class="i>2 ?'flex':'hidden'" class=" mr-7 ">
                                <checkBtnVue v-if="index!=i" class=" mt-1" :options="{text:item,checked:false,style:'text_xs color_base bg-stone-200 py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                                <checkBtnVue v-else class=" mt-1" :options="{text:item,checked:true,style:'text_xs text-white base_bg py-2 rounded-md py-0 px-3'}"></checkBtnVue>
                            </div>
                        </div>
                    </div>
                    <grilleEvaluation></grilleEvaluation>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import checkBtnVue from '../../components/button/checkBtn.vue';
import grilleEvaluation from '../../components/poppup/gestionFormation/grilleEvaluation.vue';

export default {
    components: {
        btn_,
        grilleEvaluation,
        checkBtnVue
    },
    data() {
        return {
            showFormulaire: true,
            positionnement: false,
            index: 0,   
            liste:['Analyse des besoins','Bénéficiaire','Formateur','Bénéficiaire','Formateur','Financeur','Employeur']

        }
    },
    methods: {
        setPos(val) {
            this.positionnement = !val
        },
        myStyle(val) {
            if (val == false) {
                return 'text_xs color_base bg-stone-200 py-2 rounded-md py-0 px-3'
            } else {
                return 'text_xs text-white base_bg py-2 rounded-md py-0 px-3'

            }
        }, 
    }

}
</script>

<style>
            
            </style>
