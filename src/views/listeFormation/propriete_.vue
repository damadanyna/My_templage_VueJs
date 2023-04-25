<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg base_bg px-2 rounded-r-md">Gestion Bénéficiaire </h1>
        <h1 class=" text-lg ml-2  "> : {{ this.$store.state.myData.selectFormation }}</h1>
        <span class=" mx-10">></span>
        <h1 class="text-lg wpx-2 rounded-r-md">Bénéficiaire :</h1>
        <h1 class=" text-lg ml-2 text-teal-600 "> {{ this.$store.state.myData.selectFormation }}</h1>

    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex  ">
        <div class="flex-col duration-500  bg-white rounded-lg w-[40%] h-max  flex z-10">
            <div v-if="this.$store.state.myData.listeFormation.length>0" class=" text_xs flex-row">

                <!-- titre du tableau -->
                <div class="flex flex-row sticky   py-6 w-full justify-between items-center px-5 top-5 bg-white">
                    <h5 class=" font-semibold text-sm text-teal-500 "> Nom du formation </h5>
                    <btn_ :options="{label:'Nouveau',style:' base_bg text-white w-full',ico:$store.state.icons.plus}"></btn_>
                </div>
                <div class="flex w-full text-sm  px-5  ">
                    <table class=" text_xs  w-full items-start px-1">
                        <tr class=" w-full">
                            <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                            <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-400 ">Nom</th>
                            <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-400 ">Prénom</th>
                            <th class="  w-[16%] text-center text-stone-500 mx-2">Etat</th>
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
                        </tr>
                    </table>
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
        <div class="  flex flex-col  mx-3 bg-white rounded-lg w-full px-5">
            <div class=" z-20 sticky top-6  mx-3 bg-white rounded-lg py-5 px-5 flex justify-between w-full">
                <span class=" font-semibold">Formulaire de base</span>
            </div>
            <beneficiaireForm></beneficiaireForm>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import popup from '../../components/poppup/organisme/organisme.vue'
import beneficiaireForm from '../../components/poppup/gestionListeFormation/beneficiaire.vue'

export default {
    components: {
        btn_,
        popup,
        beneficiaireForm,
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
            // this.$router
        }
    }

}
</script>

<style>
          
          </style>
