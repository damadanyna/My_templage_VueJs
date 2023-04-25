<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Traitements aléas / logs</h1>
        <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex ">
        <div :class="showFormulaire==true?' px-5  w-[40%] ':'px-12 w-full '" class="flex-col duration-500  bg-white rounded-lg h-max  flex z-10">
            <div v-if="showFormulaire!=false" class=" sticky top-5 mt-9 flex w-full bg-white py-4 flex-row mx-1  ">
                <button @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
            </div>
            <div v-else class=" sticky top-5 mt-9 flex w-full bg-white py-4 flex-row mx-1  ">
                <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            </div>
            <!-- Partenaire socio-économiques -->
            <div class="flex flex-row items-center sticky top-7  bg-white mt-12 justify-between w-full">
                <h5 class=" font-semibold text-2xl py-5">Partenaire socio-économiques</h5>
            </div>
            <div class="flex w-full text_xs mt-4">
                <table class=" w-full items-start px-1">
                    <tr class=" w-full">
                        <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th class="  w-[76%] text-start text-stone-500  pl-5 ">TitreSite</th>
                        <th v-if="showFormulaire!=true" class="  w-[16%] text-start text-stone-500  pl-5 ">Etat</th>
                        <th class="  w-[19] text-start text-stone-500  ">Actions</th>
                    </tr>
                    <tr v-for="i in 4" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="'001'"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td v-if="showFormulaire!=true" class="pl-5 ">
                            <div class=" flex my-1">
                                <button class=" px-5 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                            </div>
                        </td>
                        <td class=" px-2">
                            <div class=" flex flex-row items-center py-1">
                                <button @click="goto_()" class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
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

            <!-- Partenaire handicap -->
            <div class="flex flex-row items-center sticky top-7  bg-white mt-12 justify-between w-full">
                <h5 class=" font-semibold text-2xl py-5">Partenaire handicap</h5>
            </div>
            <div class="flex w-full text_xs mt-4">
                <table class=" w-full items-start px-1">
                    <tr class=" w-full">
                        <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th class="  w-[76%] text-start text-stone-500  pl-5 ">TitreSite</th>
                        <th v-if="showFormulaire!=true" class="  w-[16%] text-start text-stone-500  pl-5 ">Etat</th>
                        <th class="  w-[19] text-start text-stone-500  ">Actions</th>
                    </tr>
                    <tr v-for="i in 4" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td v-if="showFormulaire!=true" class="pl-5 ">
                            <div class=" flex my-1">
                                <button class=" px-5 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                            </div>
                        </td>
                        <td class=" px-2">
                            <div class=" flex flex-row items-center py-1">
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
        <div v-if="showFormulaire==true" class="  flex flex-col  mx-3 bg-white rounded-lg w-[60%]  px-5">
            
            <formulaire v-if="this.$store.state.isAdd==true"></formulaire>
            <formulaireAjoutContacte v-else></formulaireAjoutContacte>
        </div>
    </div>
</div>
</template>

    
    
<script>
import btn_ from '../components/button/btn_.vue'
import formulaire from '../components/poppup/partenaire/detailPartenaire.vue'
import formulaireAjoutContacte from '../components/poppup/partenaire/ajoutContacteSociete.vue'

export default {
    components: {
        btn_,
        formulaire,formulaireAjoutContacte
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: false,
            indexFormulaire: 0,
            
        }
    }, 

}
</script>
    
    
<style>
    
    </style>
