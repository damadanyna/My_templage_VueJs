<template>
<div v-if="!$route.params.id " class="flex flex-row">
    <div :class="showFormulaire==true ?'w-[30%]':' w-full'" class=" duration-500 text-lg sticky -top-20 flex flex-col h-full">

        <div  class=" flex flex-row w-full bg-stone-100 z-50 font-bold pb-3 items-center text-stone-600">
            <button v-if="showFormulaire!=false" @click="()=>{showFormulaire=false}" class=" sticky top-4  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
            </button> 
            <h1 class=" text-black ">Liste Bénéfice</h1>
            
        </div>
        <div :class="showFormulaire==false?'px-7':'px-2'" class=" h-full  py-5 bg-white rounded-lg  flex z-10 flex-col ">
            <!-- recherche -->
            <div class="flex  flex-row     bg-white mt-4">
                <div v-if="showFormulaire==false " class="flex ml-12  flex-row items-center">
                    <svg class=" text-stone-500 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                    <input type="text" class=" px-3 border-b text_xs border-stone-200 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                </div>

                <div class="flex w-full flex-row justify-end   ">
                    <btn_ v-if="showFormulaire==false" @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-1 text-stone-800 '}"></btn_>

                </div>
            </div>
            <!-- tableau -->
            <div class="flex w-full text_xs mt-4  h-[70vh] px-2  overflow-auto">
                <table class=" w-full items-start px-1">
                    <tr class=" w-full sticky top-0 bg-white py-5  ">
                        <th class=" py-2 w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                        <th class=" py-2  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom </th>
                        <th class=" py-2  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Prénom</th>
                        <th class=" py-2  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Etat</th>
                        <th v-if="showFormulaire==false" class=" py-2  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Date d'inscription</th>
                        <th v-if="showFormulaire==false" class=" py-2  w-[23] text-center text-stone-500 ">Actions</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 my-1 group hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class=" font-semibold pl-5" v-text="'Nom'+i"></td>
                        <td class=" font-semibold pl-5" v-text="'Prénom'"></td>
                        <td class="  ">
                            <div class=" flex my-1 justify-center">
                                <button class=" px-1 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-0 ">A traité</button>
                            </div>
                        </td>
                        <td v-if="showFormulaire==false" class="pl-5" v-text="'18 juin 2025'"></td>
                        <td v-if="showFormulaire==false" class=" px-2">
                            <div @click="()=>{showFormulaire=true}"  class=" cursor-pointer flex  flex-row justify-center items-center w-full  py-1">
                                <button class="   bg-slate-100 px-1 rounded-md py-1 ">
                                    <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                        <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                                </button>
                                <u class=" group-hover:text-white text_xs color_base ml-2">Voir</u>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>

    </div>

    <div v-if="showFormulaire==true  " class=" flex flex-col   rounded-lg w-[70%]  px-3">
        <div class="flex z-50 bg-stone-100 flex-row items-center pt-2  pb-4">
            <span class=" text-lg  text-stone-400 mr-2">></span>
            <h1 class=" text-lg z-50 font-bold text-black  ">Bénéficiaire :</h1>
            <h1 class=" text-lg z-50 font-bold color_base">John Doe</h1>
        </div>
        <div class=" z-20 flex-col flex w-full ">
            <ficheEtrepriseVue class="   px-5 bg-white rounded-md"></ficheEtrepriseVue>
            <div class="flex flex-col    px-5 bg-white mt-4 rounded-md">
                <infoBenefVue></infoBenefVue>
                <documentBenefVue></documentBenefVue>
                <LivretApprentissage></LivretApprentissage>
            </div>
        </div>
    </div>
</div>
<div v-else class=" flex flex-row w-full">
    <livret></livret>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import documentBenefVue from '../components/poppup/listeBenef/documentBenef.vue'
import ficheEtrepriseVue from '../components/poppup/listeBenef/ficheEtreprise.vue'
import infoBenefVue from '../components/poppup/listeBenef/infoBenef.vue'
import LivretApprentissage from '../components/poppup/listeBenef/livretApprentissage.vue'
import livret from './beneficiaire/beneficiaire_.vue'

export default {
    components: {
        btn_,
        documentBenefVue,
        ficheEtrepriseVue,
        infoBenefVue,
        LivretApprentissage,
        livret
    },
    data() {
        return {
            showFormulaire: false,
            raisonSocial: [{
                    label: 'Raison SOCIAL:',
                    text: 'NDA'
                },
                {
                    label: 'Numéro SIREN :',
                    text: '841939028'
                },
                {
                    label: 'Numéro SIRET :',
                    text: '84193902800012'
                }
            ],
            // importFichier: [{
            //     titre: 'Certificat',
            //     label_fichier: 'Uploader une fichier',
            //     text_fichier: 'document1.pdf'
            // }, {
            //     titre: 'Ajouter un logo',
            //     label_fichier: 'Ajouter logo',
            //     text_fichier: 'Logo.png'
            // }, {
            //     titre: 'BPF',
            //     label_fichier: 'Uploader une fichier',
            //     text_fichier: 'document1.pdf'
            // }, ],
        }
    },
    mounted() {
        console.log(this.$route.query.name);
    }

}
</script>

<style>
        
        </style>
