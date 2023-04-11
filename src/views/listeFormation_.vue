<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Liste formations </h1>
        <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1>
    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex  ">
        <div :class="showFormulaire==true?' px-5  w-[40%] ':'px-12 w-full '" class="flex-col duration-500  bg-white rounded-lg h-max  flex z-10">
            <div v-if=" this.$store.state.myData.listeFormation.length>0" class=" text-xs flex-row">
                <div class="flex flex-row sticky z-40 top-6 py-4 bg-white mt-6">
                    <div :class="showFormulaire==true?'':' ml-12'" class="flex  flex-row items-center">
                        <button v-if="showFormulaire!=false" @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                        </button>
                        <svg class=" text-teal-700 w-5 fill-current" viewBox="0 0 24 24">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                        <input type="text" class=" px-3 border-b border-stone-400 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                    </div>

                    <div v-if="showFormulaire==false" class="flex w-full justify-end relative">
                        <btn_ @click="()=>{showFormulaire=true}" :options="{label:'Nouveau',style:' base_bg text-white w-full',ico:$store.state.icons.edit}"></btn_>
                    </div>
                </div>
                <div class=" z-30 flex flex-col mt-5">
                    <div @click="()=>{this.$store.state.myData.selectFormation=item.title}" v-for=" item,i in this.$store.state.myData.listeFormation" :key="i" class=" group flex duration-300 flex-col hover:bg-[#63B6B9] group py-3 my-2 border-[1px] px-4 rounded-md border-teal-700 ">
                        <div class="flex flex-row justify-between w-full bg-stone-">
                            <span class=" text-stone-700 font-semibold group-hover:text-white " v-text="item.title"></span>
                            <span class=" text-stone-400 group-hover:text-white" v-text="item.id"></span>
                        </div>
                        <div :class="showFormulaire==true?'flex-col mt-6 w-full':'flex-row'" class=" transform flex  justify-between">
                            <div class=" flex flex-row w-full ">
                                <div class=" flex flex-row mx-1 ">
                                    <btn_ class=" " :options="{url:{name:'gestionBeneficiaire'},label:'Gestion bénéficiaire',style:' bg-teal-700 text-xs  text-stone-100 '}"></btn_>
                                </div>
                                <div class=" flex flex-row mx-1 ">
                                    <btn_ class=" " :options="{label:'Gestion session',style:'bg-teal-700 text-xs  text-stone-100 '}"></btn_>
                                </div>
                                <div v-if="showFormulaire==true" class=" flex flex-row ">
                                    <btn_ class=" shadow-md " :options="{label:'Supprimer',style:' bg-stone-200  text-red ',ico:$store.state.icons.delete}"></btn_>
                                </div>
                                <btn_ v-if="showFormulaire!=true" class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_>

                            </div>
                            <div v-if="showFormulaire==true" class=" bg-transparent justify-between flex flex-row mx-1 w-full mt-4 ">
                                <div :class="showFormulaire==true?'w-5/6 bg-stone-100 items-center flex-col justify-center flex text-center py-1  rounded-md ':''" class="  ">
                                    <btn_ class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_>
                                </div>
                                <button v-if="showFormulaire==true" class=" ml-3 bg-white p-1 mx-1 px-2 rounded-md">
                                    <svg class=" w-4 fill-current text-xs text-red-500" viewBox="0 0 24 24">
                                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                                </button>
                            </div>

                            <div v-if="showFormulaire!=true" class=" flex flex-row ">
                                <btn_ class=" shadow-md " :options="{label:'Supprimer',style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.delete}"></btn_>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-xs  text-stone-500 flex-col w-full h-full items-center justify-center flex">
                <img src="../assets/vide.svg" alt="">
                <flex class=" flex items-center my-3 flex-col">
                    <span>Vous avez aucun formation.</span>
                    <span>Cliquer ici pour creer.</span>
                </flex>
                <div class=" flex flex-row mx-1  ">
                    <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                </div>
            </div>
        </div>
        <div v-if="showFormulaire==true" class="  flex flex-col  mx-3 bg-white rounded-lg w-[60%]  px-5">
            <div class=" z-20 sticky top-6  mx-3 bg-white rounded-lg py-5 px-5 flex justify-between w-full">
                <span class=" font-semibold">Formulaire de base</span>
                <div class="flex items-center flex-row text-sm ">
                    <span v-for="item,i in listeMenu" @click="()=>{indexFormulaire=i}" :key="i" :class="indexFormulaire==i?' base_bg text-white rounded-md':''" class=" mx-2 py-1 px-2" v-text="item"></span>

                </div>
            </div>
            <actionFormationVue v-if="indexFormulaire==0"></actionFormationVue>
            <bilan v-if="indexFormulaire==1"></bilan>
            <vae v-if="indexFormulaire==2"></vae>
            <optionDocDeFormVue class=" px-5"></optionDocDeFormVue>
            <moduleApprentisVue class=" px-5"></moduleApprentisVue>
            <espaceQuestionVue class=" px-5"></espaceQuestionVue>

            <div class="flex flex-row my-14 w-full justify-center"> 
                <btn_ class=" ml-2 " :options="{label:'Sauvegarder',style:' base_bg text-xs  text-white ',ico:$store.state.icons.done}"></btn_>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import popup from '../components/poppup/organisme/organisme.vue'
import actionFormationVue from '../components/poppup/listeFormation/actionFormation.vue'
import bilan from '../components/poppup/listeFormation/bilan.vue'
import vae from '../components/poppup/listeFormation/vae.vue'
import optionDocDeFormVue from '../components/poppup/listeFormation/optionDocDeForm.vue'
import moduleApprentisVue from '../components/poppup/listeFormation/moduleApprentis.vue'
import espaceQuestionVue from '../components/poppup/listeFormation/espaceQuestion.vue'

export default {
    components: {
        btn_,
        popup,
        actionFormationVue,
        bilan,
        vae,
        optionDocDeFormVue,
        moduleApprentisVue,
        espaceQuestionVue
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
