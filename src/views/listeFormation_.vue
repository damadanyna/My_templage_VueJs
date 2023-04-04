<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Liste Formation</h1>

    <div class="flex flex-col h-full">
        <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
            <h1 class=" text-lg">Organismes </h1>
            <h1 class=" text-lg ml-2  "> > Gestion de site de formation</h1>
        </div>
        <div :class="howOrgPoppup==true?'flex-row':'flex-col'" class="flex  ">

            <div :class="howOrgPoppup==true?' px-5':'px-12'" class="flex-col duration-500  bg-white rounded-lg w-full h-max  flex z-10">
                <div v-if="listeFormatoin.length>0" class=" text-xs flex-row">
                    <div class="flex flex-row sticky top-10 py-4 bg-white mt-6">
                        <div :class="howOrgPoppup==true?'':' ml-12'" class="flex  flex-row items-center">
                            <button v-if="howOrgPoppup!=false" @click="()=>{howOrgPoppup=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                                <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                            </button>
                            <svg class=" text-teal-700 w-5 fill-current" viewBox="0 0 24 24">
                                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                            <input type="text" class=" px-3 border-b border-stone-400 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                        </div>

                        <div v-if="howOrgPoppup==false" class="flex w-full justify-end relative">
                            <btn_Vue @click="()=>{howOrgPoppup=true}"  :options="{label:'Nouveau',style:' base_bg text-white w-full',ico:$store.state.icons.edit}"></btn_Vue>
                        </div>
                    </div>
                    <div class="flex flex-col mt-5">
                        <div v-for=" item,i in listeFormatoin" :key="i" class=" group flex duration-300 flex-col hover:bg-[#63B6B9] group py-3 my-2 border-[1px] px-4 rounded-md border-teal-700 ">
                            <div class="flex flex-row justify-between w-full bg-stone-">
                                <span class=" text-stone-700 font-semibold group-hover:text-white " v-text="item.titre"></span>
                                <span class=" text-stone-400 group-hover:text-white">#001</span>
                            </div>
                            <div :class="howOrgPoppup==true?'flex-col mt-6 w-full':'flex-row'" class="flex  justify-between">
                                <div class=" flex flex-row ">
                                    <div class=" flex flex-row mx-1 ">
                                        <btn_Vue class=" " :options="{label:item.label_btn1,style:' bg-teal-700 py-1 text-stone-100 '}"></btn_Vue>
                                    </div>
                                    <div class=" flex flex-row mx-1 ">
                                        <btn_Vue class=" " :options="{label:item.label_btn2,style:'bg-teal-700 py-1 text-stone-100 '}"></btn_Vue>
                                    </div>
                                    <div class=" flex flex-row ">
                                        <btn_Vue v-if="howOrgPoppup!=true" class=" shadow-md " :options="{label:item.label_btn4,style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.delete}"></btn_Vue>

                                    </div>
                                </div>
                                <div class=" bg-transparent flex flex-row mx-1 w-full mt-4 ">
                                    <div class="  w-5/6 items-center justify-center flex text-center bg-white  rounded-md ">
                                        <btn_Vue class=" " :options="{label:item.label_btn3,style:' bg-stone-100 py-1 text-stone-800 '}"></btn_Vue>
                                    </div>
                                    <button v-if="howOrgPoppup==true" class=" ml-3 bg-white p-1 px-2 rounded-md">
                                        <svg class=" w-4 fill-current text-red-500" viewBox="0 0 24 24">
                                            <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                                    </button>
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
                        <btn_Vue @click="()=>{howOrgPoppup=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_Vue>
                    </div>
                </div>
            </div>
            <div v-if="howOrgPoppup==true" class=" sticky flex flex-col  mx-3 bg-white rounded-lg w-full px-5">
                <div class=" z-20 sticky top-12 mx-3 bg-white rounded-lg py-5 px-5 flex justify-between w-full">
                    <span class=" font-semibold">Formulaire de base</span>
                    <div class="flex items-center flex-row text-sm ">
                        <span v-for="item,i in listeMenu" @click="()=>{indexFormulaire=i}" :key="i" :class="indexFormulaire==i?' base_bg text-white rounded-md':''" class=" mx-2 py-1 px-2" v-text="item"></span>

                    </div>
                </div>
                <actionFormationVue v-if="indexFormulaire==0"></actionFormationVue>
                <bilan v-if="indexFormulaire==1"></bilan>
                <vae v-if="indexFormulaire==2"></vae>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import btn_Vue from '../components/button/btn_.vue'
import popup from '../components/poppup/organisme/organisme.vue'
import actionFormationVue from '../components/poppup/listeFormation/actionFormation.vue'
import bilan from '../components/poppup/listeFormation/bilan.vue'
import vae from '../components/poppup/listeFormation/vae.vue'
export default {
    components: {
        btn_Vue,
        popup,
        actionFormationVue,
        bilan,
        vae
    },
    data() {
        return {
            listeFormatoin: [{
                titre: 'Titre formation',
                label_btn1: 'Gestion bénéficiaire',
                label_btn2: 'Gestion session',
                label_btn3: 'Gestion Formation',
                label_btn4: 'Supprimer',
            }, {
                titre: 'Titre formation',
                label_btn1: 'Gestion bénéficiaire',
                label_btn2: 'Gestion session',
                label_btn3: 'Gestion Formation',
                label_btn4: 'Supprimer',
            }, {
                titre: 'Titre formation',
                label_btn1: 'Gestion bénéficiaire',
                label_btn2: 'Gestion session',
                label_btn3: 'Gestion Formation',
                label_btn4: 'Supprimer',
            }, {
                titre: 'Titre formation',
                label_btn1: 'Gestion bénéficiaire',
                label_btn2: 'Gestion session',
                label_btn3: 'Gestion Formation',
                label_btn4: 'Supprimer',
            }, ],
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            howOrgPoppup: true,
            indexFormulaire: 0,
        }
    }

}
</script>

<style>
    
    </style>
