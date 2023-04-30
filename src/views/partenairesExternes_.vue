<template>
<div class="flex flex-col h-full">

    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex ">
        <div class="flex flex-col duration-500" :class="showFormulaire==true?'  w-[40%] ':'  w-full '">
            <div class=" flex flex-row    w-full items-center  bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
                <button v-if="showFormulaire==true" @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
                <h1 class=" text-lg">Partenaire socio-économiques</h1>
                <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
            </div>
            <div :class="showFormulaire==true?' px-5   ':'px-12  '" class=" h-[87vh]  overflow-auto sticky -top-4 pb-8 pt-0 flex-col duration-500  bg-white rounded-lg  flex z-10">

                <div v-if="showFormulaire!=true" class="  mt-2 flex w-full bg-white py-4 flex-row mx-1  ">
                    <btn_ @click="()=>{back_()}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                </div>
                <!-- Partenaire socio-économiques -->
                <div class="flex flex-row items-center bg-white  justify-between w-full">
                    <h5 class=" font-semibold text-xl py-3">Partenaire socio-économiques</h5>
                </div>
                <div class="flex w-full text_xs px-2 mt-4 h-[30vh] overflow-auto ">
                    <table class=" w-full items-start px-1">
                        <tr class=" w-full">
                            <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                            <th class="  w-[66%] pl-5 text-start text-stone-500  ">TitreSite</th>
                            <th v-if="showFormulaire!=true" class="  w-[26%] text-center text-stone-500  ">Etat</th>
                            <th class="  w-[19%] text-center text-stone-500  ">Actions</th>
                        </tr>
                        <tr  v-for="item,i in this.$store.state.myData.TitreFormation"   :key="i" class=" duration-200 hover:text-white group  hover:bg-[#63B6B9]  ">
                            <td class="     text-center text-gray-500 px-2" v-text="item.id"></td>
                            <td class=" font-semibold  pl-5" v-text="item.nom"></td>
                            <td v-if="showFormulaire!=true" class=" flex justify-center ">
                                <div class=" flex my-1">
                                    <button class="  bg-red-100 rounded-md text-red-600 px-2 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                                </div>
                            </td>
                            <td class=" px-2">
                                <div class=" flex flex-row items-center py-1">
                                    <button @click="()=>{goto_(item)}" class="  flex flex-row items-center  px-1 rounded-md py-1 ">
                                        <svg class=" group-hover:text-white   fill-current w-4 color_base" viewBox="0 0 24 24">
                                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                        <u class=" group-hover:text-white color_base ml-1">Modifier</u>
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
                <div class="flex flex-row items-center   bg-white mt-4 justify-between w-full">
                    <h5 class=" font-semibold text-xl py-5">Partenaire handicap</h5>
                </div>
                <div class="flex w-full text_xs px-2 mt-4 h-[30vh] overflow-auto ">
                    <table class=" w-full items-start px-1">
                        <tr class=" w-full">
                            <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                            <th class="  w-[66%] pl-5 text-start text-stone-500  ">TitreSite</th>
                            <th v-if="showFormulaire!=true" class="  w-[26%] text-center text-stone-500  ">Etat</th>
                            <th class="  w-[19%] text-center text-stone-500  ">Actions</th>
                        </tr>
                        <tr  v-for="item,i in this.$store.state.myData.TitreFormation"   :key="i" class=" duration-200 hover:text-white group  hover:bg-[#63B6B9]  ">
                            <td class="     text-center text-gray-500 px-2" v-text="item.id"></td>
                            <td class=" font-semibold  pl-5" v-text="item.nom"></td>
                            <td v-if="showFormulaire!=true" class=" flex justify-center ">
                                <div class=" flex my-1">
                                    <button class="  bg-red-100 rounded-md text-red-600 px-2 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                                </div>
                            </td>
                            <td class=" px-2">
                                <div class=" flex flex-row items-center py-1">
                                    <button @click="()=>{goto_(item)}" class="  flex flex-row items-center  px-1 rounded-md py-1 ">
                                        <svg class=" group-hover:text-white   fill-current w-4 color_base" viewBox="0 0 24 24">
                                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                        <u class=" group-hover:text-white color_base ml-1">Modifier</u>
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
        <div v-if="showFormulaire==true" class="flex flex-col  w-[60%]">
            <div class=" flex flex-row    w-full items-center  bg-stone-100 z-50  text-stone-600 pt-2 pb-6">

                <h1 class=" text-lg mr-3 text-stone-400">></h1>
                <h1 class=" font-semibold text-lg">Détail partenaire : </h1>
                <h1 class=" font-semibold text-lg color_base ">SmartTech Solutions</h1>
                <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
            </div>
            <div  class="  flex flex-col  mx-3 bg-white rounded-lg   px-5">
                <formulaire v-if="this.$store.state.tools.isAdd==true"></formulaire>
                <formulaireAjoutContacte :item="item" v-else></formulaireAjoutContacte>
            </div>
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
        formulaire,
        formulaireAjoutContacte
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
        goto_(val) {
            this.showFormulaire = true
            this.$store.state.tools.isAdd = false
            this.item=val
        },
        back_() {
            this.showFormulaire = true
            this.$store.state.tools.isAdd = true
            this.item={}

        }
    },
    mounted() {
        console.log();
    }

}
</script>

<style>
    
    </style>
