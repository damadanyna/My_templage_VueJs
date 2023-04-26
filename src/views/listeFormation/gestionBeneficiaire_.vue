<template>
<div class="flex flex-col h-full">

    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex  ">
        <div class="flex-col duration-500 flex z-10">
            <div class=" flex flex-row  w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
                <h1 class=" text-lg   px-2 rounded-r-md">Listes formations</h1>
            </div>
            <div :class="showFormulaire==true?' px-5':'px-12'" class="  overflow-auto    max-h-[87vh] flex-col duration-500  bg-white rounded-lg h-max px-3 flex z-10">
                <div v-if="this.$store.state.myData.listeFormation.length>0" class=" text_xs flex-row">
                    <div class="flex flex-row sticky top-6 py-4 z-30 bg-white mt-6">
                        <div :class="showFormulaire==true?'':' ml-12'" class="flex  flex-row items-center">
                            <button v-if="showFormulaire!=false" @click="back_()" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                                <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                            </button>
                            <svg class=" text-teal-700 w-5 fill-current" viewBox="0 0 24 24">
                                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                            <input type="text" class=" px-3 border-b border-stone-200 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                        </div>

                        <div v-if="showFormulaire==false" class="flex w-full justify-end relative">
                            <btn_ @click="()=>{showFormulaire=true}" :options="{label:'Nouveau',style:' base_bg text-white w-full',ico:$store.state.icons.edit}"></btn_>
                        </div>
                    </div>
                    <div class="flex z-20 flex-col mt-5">
                        <div @click="" v-for=" item,i in this.$store.state.myData.listeFormation" :key="i" class=" group flex duration-300 flex-col hover:bg-[#63B6B9] group py-3 my-2 border-[1px] px-4 rounded-md border-teal-700 ">
                            <div class="flex flex-row justify-between w-full bg-stone-">
                                <span class=" text-stone-700 font-semibold group-hover:text-white " v-text="item.title"></span>
                                <span class=" text-stone-400 group-hover:text-white" v-text="item.id"></span>
                            </div>
                            <div :class="showFormulaire==true?'flex-col mt-6 w-full':'flex-row'" class=" transform flex  justify-between">
                                <div class=" flex flex-row w-full  justify-center  "> 
                                    <btn_ class=" " :options="{label:'Gestion session',style:' w-full bg-teal-700 text_xs  text-stone-50 '}"></btn_>
                                    <btn_ class=" ml-3 shadow-md " :options="{label:'Supprimer',style:' bg-stone-200  text-red ',ico:$store.state.icons.delete}"></btn_>
                                </div>
                                <div v-if="showFormulaire==true" class=" bg-transparent justify-center flex flex-row  w-full bg-slate-300  mt-4 ">
                                       <btn_  :options="{url:{name:'gestionFormation'},label:'Gestion Formation ',style:' w-[21vw]  bg-white  py-1 text-stone-800 '}"></btn_>
                                     
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text_xs  text-stone-500 flex-col w-full h-full items-center justify-center flex">
                    <img src="../../assets/vide.svg" alt="">
                    <flex class=" flex items-center my-3 flex-col">
                        <span>Vous avez aucun formation.</span>
                        <span>Cliquer ici pour creer.</span>
                    </flex>
                    <div class=" flex flex-row mx-1  ">
                        <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showFormulaire==true" class="flex flex-col  mx-3  sticky top-6 py-2   rounded-lg w-[60%]">

            <div class=" flex flex-row   duration-300 w-full bg-stone-100 z-50 text-stone-600  pb-3">
                <h1 class=" text-lg ml-2  "> > Gestion bénéficiaire :</h1>
                <h1 class=" text-lg ml-2 font-semibold text-[#63B6B9]  ">TitreFormation</h1>
            </div>
            <div class="  flex flex-col   bg-white rounded-lg   ">
                <div class=" bg-white rounded-lg w-full h-max px-12 flex z-10 flex-col ">
                    <div class="flex w-full mt-14 text_xs ">
                        <table class=" text_xs  w-full items-start px-1">
                            <tr class=" w-full">
                                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                                <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Nom</th>
                                <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Prénom</th>
                                <th class="  w-[16%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Etat</th>
                                <th class="  w-[36%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Date D'inscription</th>
                                <th class="  w-[19] text-center text-stone-500 mx-2 ">Actions</th>
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
                                            <svg class=" fill-current text-[#63B6B9] rounded-md w-4" viewBox="0 0 24 24">
                                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                                        </button>
                                        <span class=" text-[#63B6B9] group-hover:text-white">Voir</span>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
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
import moduleApprentisVue from '../../components/poppup/listeFormation/moduleApprentis.vue'
import espaceQuestionVue from '../../components/poppup/listeFormation/espaceQuestion.vue'

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
