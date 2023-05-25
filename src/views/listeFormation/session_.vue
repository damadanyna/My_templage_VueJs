<template>
<div class="flex flex-col h-full w-full">
    <div class="flex flex-row mx-2 items-center justify-between">
        <div class="flex flex-row items-center">
            <h1 class=" text-lg ml-2 text-stone-500 "> > </h1>
            <h1 class=" text-lg ml-2  "> Gestion Formation : </h1>
            <h1 class=" color_base ml-2 font-bold ">TitreFormation </h1>
        </div>    
        <div class="flex flex-col mr-12 ">
            <btn_ @click="()=>{showBibliotheque=!showBibliotheque}" class="  " :options="{label:'Bibliothéque d\'objectif',style:' base_bg text_xs  text-white ',ico:$store.state.icons.list}"></btn_>
            <bibliothequeVue v-if="showBibliotheque==true" class="flex" :options="{class:'',liste:liste ,type:'date',model:findDate}" > </bibliothequeVue>
        </div>
    </div>
    <div class=" mt-8 flex flex-col  mx-3 bg-white h-full rounded-lg px-5">
        <div class=" z-30 sticky -top-6  mx-3 bg-white rounded-lg py-5 px-5 flex justify-between w-full">
            <span class=" font-semibold">Formulaire de base</span>
            <div class="flex items-center flex-row text_xs ">
                <button v-for="item,i in listeMenu" @click="()=>{indexFormulaire=i}" :key="i" :class="indexFormulaire==i?' base_bg text-white rounded-md':''" class=" mx-2 py-1 px-2" v-text="item"></button>
            </div>
        </div>

        <actionFormationVue v-if="indexFormulaire==0"></actionFormationVue>
        <bilanVue v-if="indexFormulaire==1"></bilanVue>
        <vaeVue v-if="indexFormulaire==2"></vaeVue>
        <alternanceVue v-if="indexFormulaire==3"></alternanceVue>
        <optionDocDeFormVue class=" px-5"></optionDocDeFormVue>
        <moduleApprentisVue class=" px-5"></moduleApprentisVue>
        <evalutionFormateurVue class=" px-5"></evalutionFormateurVue>
        <espaceQuestionVue class=" px-5"></espaceQuestionVue>
        <div @click="()=>{showThis()}" class="flex flex-row my-14 w-full justify-center">

            <btn_ class=" ml-2 " :options="{label:'Sauvegarder',style:' base_bg text_xs  text-white ',ico:$store.state.icons.done}"></btn_>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import actionFormationVue from '../../components/poppup/listeFormation/actionFormation.vue'
import alternanceVue from '../../components/poppup/listeFormation/alternance.vue'
import bilanVue from '../../components/poppup/listeFormation/bilan.vue'
import espaceQuestionVue from '../../components/poppup/listeFormation/espaceQuestion.vue'
import moduleApprentisVue from '../../components/poppup/listeFormation/moduleApprentis.vue'
import evalutionFormateurVue from '../../components/poppup/listeFormation/evaluationFormateur.vue'
import optionDocDeFormVue from '../../components/poppup/listeFormation/optionDocDeForm.vue'
import vaeVue from '../../components/poppup/listeFormation/vae.vue'
import bibliothequeVue from '../../components/input/bibliotheque.vue'
export default {
    components: {
        actionFormationVue,
        bilanVue,
        espaceQuestionVue,
        evalutionFormateurVue,
        moduleApprentisVue,
        alternanceVue,
        optionDocDeFormVue,
        vaeVue,
        btn_,
        bibliothequeVue
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE', 'Alternance'],
            indexFormulaire: 0,
            showBibliotheque:false,
            findDate:'',
            liste: [{
                label: `Formation`,
                isChecked: false,
            }, {
                label: `Nombre d'inscrit`,
                isChecked: false,
            }, {
                label: `Taux de réussite`,
                isChecked: false,
            }, {
                label: `Taux de satisfaction`,
                isChecked: false,
            },  ]
        }
    },
    methods:{
        showThis(){
            console.log(this.findDate);
        }
    }
}
</script>

<style>

</style>
