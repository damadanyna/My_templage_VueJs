<template>
<div class="flex flex-col h-full w-full">
    <div class="flex flex-row items-center">
        <h1 class=" text-lg ml-2 text-stone-500 "> > </h1>
        <h1 class=" text-lg ml-2  "> Gestion Formation : </h1>
        <h1 class=" color_base ml-2 font-bold ">TitreFormation </h1>
    </div>
    <div class=" mt-8 flex flex-col  mx-3 bg-white h-full rounded-lg px-5">
        <div class=" z-30 sticky -top-6  mx-3 bg-white rounded-lg py-5 px-5 flex justify-between w-full">
            <span class=" font-semibold">Formulaire de base</span>
            <div class="flex items-center flex-row text_xs ">
                <span v-for="item,i in listeMenu" @click="()=>{indexFormulaire=i}" :key="i" :class="indexFormulaire==i?' base_bg text-white rounded-md':''" class=" mx-2 py-1 px-2" v-text="item"></span>
            </div>
        </div>
         
        <actionFormationVue v-if="indexFormulaire==0"></actionFormationVue>
        <bilanVue v-if="indexFormulaire==1"></bilanVue>
        <vaeVue v-if="indexFormulaire==2"></vaeVue>
        <optionDocDeFormVue class=" px-5"></optionDocDeFormVue>
        <moduleApprentisVue class=" px-5"></moduleApprentisVue>
        <espaceQuestionVue class=" px-5"></espaceQuestionVue> 
        <div class="flex flex-row my-14 w-full justify-center">
            
            <btn_ class=" ml-2 " :options="{label:'Sauvegarder',style:' base_bg text_xs  text-white ',ico:$store.state.icons.done}"></btn_>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import actionFormationVue from '../../components/poppup/listeFormation/actionFormation.vue'
import bilanVue from '../../components/poppup/listeFormation/bilan.vue'
import espaceQuestionVue from '../../components/poppup/listeFormation/espaceQuestion.vue'
import moduleApprentisVue from '../../components/poppup/listeFormation/moduleApprentis.vue'
import optionDocDeFormVue from '../../components/poppup/listeFormation/optionDocDeForm.vue'
import vaeVue from '../../components/poppup/listeFormation/vae.vue'

export default {
    components: {
        actionFormationVue,
        bilanVue,
        espaceQuestionVue,
        moduleApprentisVue,
        optionDocDeFormVue,
        vaeVue,btn_
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'], 
            indexFormulaire: 0,
        }
    },
}
</script>

<style>

</style>
