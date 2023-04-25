<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Procédure</h1> 
    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex w-full ">
        <div :class="showFormulaire==true?' px-5  w-[36%] ':'px-12 w-full '" class="flex-col duration-500  bg-white rounded-lg h-max  flex z-10">
            <div v-if="showFormulaire!=false" class=" sticky top-5 mt-9 flex w-full bg-white py-4 flex-row mx-1  ">
                <button @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
            </button>
            </div>
            <div v-else class=" sticky top-5 mt-9 flex w-full bg-white py-4 flex-row mx-1  ">
                <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            </div>
            <!-- tableau -->
            <div class=" text_xs  flex w-full  mt-4">
                <table class=" w-full items-start px-1">
                    <tr class=" sticky top-20 h-9 bg-white w-full">
                        <th  class="  w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th :class="showFormulaire==true?'w-[70%]':'w-[46%]'" class="text-start text-stone-500 border-r border-stone-400 pl-5 ">TitreSite</th>
                        <th v-if="showFormulaire!=true" class=" w-[16%] text-center text-stone-500 border-r border-stone-400">Fonction associé</th>
                        <th v-if="showFormulaire!=true" class=" w-[16%] text-center text-stone-500 border-r border-stone-400">PDF</th>
                        <th :class="showFormulaire==true?'w-[30%]':'w-[29]'" class=" text-center text-stone-500 ">Actions</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td v-if="showFormulaire!=true" class="text-center text-[#63B6B9]" v-text="'[Fonction]'"></td>
                        <td v-if="showFormulaire!=true" class="text-center text-[#63B6B9]" v-text="'[Lien PDF]'"></td>
                        <td class=" px-2">
                            <div class=" flex flex-row w-full justify-center items-center py-1">
                                <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                    <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
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
        <div v-if="showFormulaire==true" class=" flex flex-col  mx-3 bg-white rounded-lg w-[64%]  px-5">

            <formulaire></formulaire>
        </div>
    </div>
</div>
</template>

    
    
<script>
import btn_ from '../components/button/btn_.vue'
import formulaire from '../components/poppup/procedure/procedure.vue'

export default {
    components: {
        btn_,
        formulaire,
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: false,
            indexFormulaire: 0,
        }
    }

}
</script>
    
    
<style>
    
    </style>
