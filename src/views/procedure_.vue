<template>
<div class="flex flex-col ">

    <div class=" flex flex-row duration-300 items-center   w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2  pb-1">
        <button v-if="showFormulaire!=false" @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
        </button>
        <h1 class=" text-lg text-black">Procédure</h1>
    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex w-full ">
        <div :class="showFormulaire==true?' px-2  w-[36%] ':'px-12 w-full '" class=" py-4 flex-col duration-500  bg-white rounded-lg flex z-10">

            <div v-if="showFormulaire!=true" class="  mt-0 flex w-full bg-white py-2 flex-row mx-1  ">
                <btn_ @click="()=>{nouvelle()}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            </div>
            <!-- tableau -->
            <div class="  text_xs w-full h-[80vh] px-2 overflow-auto  mt-4">
                <table class=" w-full items-start px-1">
                    <tr class=" sticky top-0 h-9 bg-white w-full">
                        <th class="  w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                        <th :class="showFormulaire==true?'w-[70%]':'w-[46%]'" class="text-start text-stone-500 border-r border-stone-200 pl-5 ">Titre  procedure</th>
                        <th v-if="showFormulaire!=true" class=" w-[16%] text-center text-stone-500 border-r border-stone-200">Fonction associé</th>
                        <th v-if="showFormulaire!=true" class=" w-[16%] text-center text-stone-500 border-r border-stone-200">PDF</th>
                        <th :class="showFormulaire==true?'w-[30%]':'w-[29]'" class=" text-center text-stone-500 ">Actions</th>
                    </tr>
                    <tr v-for="item,i in this.$store.state.myData.listeFormation"  :key="i" class=" group duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="item.id"></td>
                        <td class="pl-5" v-text="item.title"></td>
                        <td v-if="showFormulaire!=true" class=" group-hover:text-white text-center color_base"> 
                            <div class=" flex flex-row justify-center   ">
                                <span class=" my-2">[Fonction]</span>
                            </div>
                        </td>
                        <td v-if="showFormulaire!=true" class=" group-hover:text-white text-center color_base" v-text="'[Lien PDF]'"></td>
                        <td class=" px-2">
                            <div class=" flex flex-row w-full justify-center items-center py-1">
                                <button  @click="()=>{getIt(item)}" class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
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
        <div v-if="showFormulaire==true" class=" flex flex-col  mx-3 bg-white rounded-lg w-[64%]  px-5">

            <formulaire :item="item"></formulaire>
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
            item:{},
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: false,
            indexFormulaire: 0,
        }
    },
    methods: {
        getIt(val){ 
            this.item=val
            this.showFormulaire = true 

        },
        nouvelle(){

            this.item={}
            this.showFormulaire=true
        }
    }

}
</script>

<style>
    
    </style>
