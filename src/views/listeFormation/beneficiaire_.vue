<template>
 <div v-if="showFormulaire==true" class="flex h-full flex-col w-full">
     <div class="flex flex-row items-center">
         <h1 class=" text-lg ml-2 text-stone-500 "> > </h1>
         <h1 class=" text-lg ml-2  "> Gestion bénéficiaire : </h1>
         <h1 class=" color_base ml-2 font-bold ">TitreFormation </h1>
     </div>
     <div class=" mt-8  flex flex-col h-full mx-3 bg-white rounded-lg px-5">
         <div class=" bg-white rounded-lg w-full h-max px-4 flex z-10 flex-col ">
             <div class="flex w-full py-5 mt-7 text_xs ">
                 <table class=" text_xs w-full items-start px-1">
                     <tr class=" w-full">
                         <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                         <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Nom</th>
                         <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Prénom</th>
                         <th class="  w-[16%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Etat</th>
                         <th class="  w-[36%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Date D'inscription</th>
                         <th class="  w-[19] text-center text-stone-500 mx-2 ">action</th>
                     </tr>
                     <tr @click="getIt_()" v-for="item,i in this.$store.state.myData.TitreFormation" :key="i" class=" group duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                         <td class=" text-center text-gray-500 px-2" v-text="item.id"></td>
                         <td class=" text-center" v-text="item.nom"></td>
                         <td class=" text-center" v-text="item.prenom"></td>
                         <td class=" text-center ">
                             <button v-if="item.etat=='Abandonné'" class=" py-1  px-2 my-1 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border" v-text="item.etat"></button>
                             <button v-if="item.etat=='En formation'" class=" py-1  px-2 my-1 bg-green-100 rounded-md text-green-600 text_xs  border-green-500 border" v-text="item.etat"></button>
                             <button v-if="item.etat=='Achevé'" class=" py-1  px-2 my-1 bg-yellow-100 rounded-md text-yellow-600 text_xs  border-yellow-500 border" v-text="item.etat"></button>
                         </td>
                         <td class=" text-center" v-text="'18 juin 2025'"></td>
                         <td class=" px-2 group-hover:text-white">
                             <div class=" flex flex-row items-center py-1">
                                 <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                     <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                         <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                                 </button>
                                 <span class=" color_base group-hover:text-white">Voir</span>
                             </div>
                         </td>
                     </tr>
                 </table>

             </div>
         </div>
     </div>
 </div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import popup from '../../components/poppup/organisme/organisme.vue'
import actionFormationVue from '../../components/poppup/listeFormation/actionFormation.vue'
import bilan from '../../components/poppup/listeFormation/bilan.vue'
import vae from '../../components/poppup/listeFormation/vae.vue'
import optionDocDeFormVue from '../../components/poppup/listeFormation/optionDocDeForm.vue'
// import moduleApprentisVue from '../../components/poppup/listeFormation/moduleApprentis.vue'
// import evaluationFormateurVue from '../../components/poppup/listeFormation/moduleApprentis.vue'
import espaceQuestionVue from '../../components/poppup/listeFormation/espaceQuestion.vue'

export default {
    components: {
        btn_,
        popup,
        actionFormationVue,
        bilan,
        vae,
        optionDocDeFormVue,
        // moduleApprentisVue,
        // evaluationFormateurVue,
        espaceQuestionVue
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: true,
            indexFormulaire: 0,
        }
    },
    methods: {
        back_() {
            this.$router.go(-1)
        },
        getIt_() {
            this.$router.push({
                name: 'propriete'
            })

            // this.$router
        }
    }

}
</script>

<style>
      
      </style>
