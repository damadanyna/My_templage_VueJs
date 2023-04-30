<template>
<div class="flex flex-col h-full">
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex  ">
        <div class="flex flex-col  w-[35%] duration-500 ">
            <div class=" flex flex-row    duration-300  w-full bg-stone-100 z-50 font-bold text-black pt-2 pb-3">

                <h1 class=" text-lg font-normal  px-2 rounded-r-md">Gestion Bénéficiaire :</h1>
                <h1 class=" text-lg ml-2 color_base  ">Titre Formation</h1>
            </div>
            <div class="flex-col  bg-white rounded-lg sticky -top-6 overflow-auto  flex z-10">
                <div v-if="this.$store.state.myData.listeFormation.length>0" class=" text_xs flex-row">

                    <!-- titre du tableau -->
                    <div class="flex flex-row v  py-6 w-full justify-between items-center px-5  bg-white">
                        <button v-if="showFormulaire!=false" @click="()=>{$router.go(-1)}" class=" sticky top-4  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                        </button>
                    </div>
                    <div class="flex w-full text_xs  px-5  ">
                        <table class=" text_xs  w-full items-start px-1">
                            <tr class=" w-full">
                                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                                <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Nom</th>
                                <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Prénom</th>
                                <th class="  w-[16%] text-center text-stone-500 mx-2">Etat</th>
                            </tr>
                            <tr @click="getIt_( item)" v-for="item,i in this.$store.state.myData.TitreFormation" :key="i" class=" group duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                                <td class=" text-center text-gray-500 px-2" v-text="item.id"></td>
                                <td class=" text-center" v-text="item.nom"></td>
                                <td class=" text-center" v-text="item.prenom"></td>
                                <td class=" px-4 text-center ">
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
        </div>

        <div class="flex flex-col  w-[65%] duration-500 ">
            <div class=" flex flex-row  duration-300 font-normal items-centerw-full bg-stone-100 z-50 text-black pt-2 pb-3">
                <span class=" mx-3 text-lg text-stone-500">></span>
                <h1 class="text-lg px-2 rounded-r-md">Bénéficiaire :</h1>
                <h1 class=" text-lg ml-2 color_base font-semibold "> John Doe</h1>

            </div>
            <div class=" sticky -top-6 flex flex-col  mx-3 bg-white rounded-lg px-5">
                <div class=" z-20   mx-3 bg-white rounded-lg  pt-5 px-5 flex justify-between w-full">
                    <span class=" font-semibold">Formulaire de base</span>
                </div>
                <beneficiaireForm :item="selectedItem"></beneficiaireForm>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import popup from '../../components/poppup/organisme/organisme.vue'
import beneficiaireForm from '../../components/poppup/sessionFomation/gestionBeneficiaire.vue'

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
            selectedItem: {}
        }
    },
    methods: {
        back_() {
            this.$router.go(-1)
        },
        getIt_(item) {

            this.selectedItem.titre = item
        }
    }

}
</script>

<style>
            
            </style>
