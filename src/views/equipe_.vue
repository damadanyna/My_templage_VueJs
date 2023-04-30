<template>
<div class="flex flex-col h-full sticky -top-6">

    <!-- <h1 class=" text-lg   w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9"></h1> -->
    <div class="w-full  flex flex-row">
        <div class="flex flex-col duration-500" :class="showFormulaire==true?'w-[30%] ' :'w-full '">
            <div class="flex flex-row pb-3 items-center">
                <button v-if="showFormulaire!=false" @click="()=>{showFormulaire=false}" class=" sticky top-4  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
                <h1 class=" text-black ">Listes des equipes / sous-traitant</h1>
            </div>

            <div :class="showFormulaire==true?'  px-2':' px-7'" class="   bg-white rounded-lg  h-max  flex z-10 flex-col ">

                <!-- entête -->
                <div class="flex flex-row sticky top-3 py-5 w-full justify-between items-center bg-white mt-6">
                    <h5 class=" font-semibold text-2xl">Equipes</h5>
                    <div class="flex flex-row">
                        <btn_ class=" " :options="{url:{name:'organigramme'},label:'Organigramme',style:' base_bg text-white py-2 w-full',ico:$store.state.icons.plus}"></btn_>
                        <btn_ v-if="showFormulaire==false" @click="()=>{showFormulaire=true}" class="  ml-4 " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

                    </div>
                </div>

                <!-- tableau -->
                <div class="flex w-full text_xs mt-4 h-[65vh] px-2 overflow-auto">
                    <table class=" w-full items-start px-1">
                        <tr class=" w-full sticky top-0 ">
                            <th class=" py-3 bg-white w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                            <th :class="showFormulaire==false?'w-[26%]':' w-[30%]'" class=" py-3 bg-white text-center text-stone-500  border-r border-stone-200 ">Nom </th>
                            <th :class="showFormulaire==false?'w-[26%]':' w-[30%]'" class=" py-3 bg-white text-center text-stone-500  border-r border-stone-200 ">Prénom</th>
                            <th v-if="showFormulaire==false" class=" py-3 bg-white w-[13%] text-center text-stone-500  border-r border-stone-200 ">Fonction</th>
                            <th v-if="showFormulaire==false" class=" py-3 bg-white w-[12%] text-center text-stone-500  border-r border-stone-200 ">Status</th>
                            <th v-if="showFormulaire==false" class=" py-3 bg-white w-[16%] text-center text-stone-500  border-r border-stone-200 ">Etat</th>
                            <th :class="showFormulaire==false?' w-[12%]':' w-[10%]'" class=" py-3 bg-white text-center text-stone-500  ">Actions</th>
                        </tr>
                        <tr v-for="i in 20" :key="i" class=" duration-200 my-1 hover:text-white group  hover:bg-[#63B6B9]  ">
                            <td class=" text-center text-gray-500 px-2" v-text="i"></td>
                            <td class=" text-center font-semibold" v-text="'Nom'+i"></td>
                            <td class=" text-center font-semibold" v-text="'Prénom'"></td>
                            <td v-if="showFormulaire==false" class=" color_base text-center" v-text="'{Fonction}'"></td>
                            <td v-if="showFormulaire==false" class=" text-center" v-text="'Gérant'"></td>
                            <td v-if="showFormulaire==false" class=" text-center ">
                                <div class=" flex w-full justify-center flex-row my-1">
                                    <button class=" px-2 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                                </div>
                            </td>
                            <td class=" px-2">
                                <div :class="showFormulaire==false?'  px-6':' px-2'" class=" flex flex-row items-center justify-between w-full py-1">
                                    <button @click="()=>{showFormulaire=true}" class="  flex flex-row items-center rounded-md py-1 ">
                                        <svg class=" group-hover:text-white fill-current w-4 color_base" viewBox="0 0 24 24">
                                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                        <u class=" group-hover:text-white color_base ml-1">Modifier</u>
                                    </button>
                                    <button @click="()=>{showFormulaire=true}" class=" ml-4 bg-slate-100 px-1 rounded-md py-1 ">
                                        <svg class=" fill-current w-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if="showFormulaire==true" class=" flex flex-col mx-3  w-[70%] ">
            <div class="flex flex-col duration-500">
                <div class="flex flex-row pb-4 mt-2"> 
                    <h1 class=" text-lg   mr-2 text-stone-500 ">> </h1>
                    <h1 class=" text-lg  font-bold  text-black ">Formateur :</h1>
                    <h1 class=" text-lg color_base font-bold ">John Doe</h1>
                </div>
                <div v-if="showFormulaire==true" class=" flex flex-col  bg-white rounded-lg  h-[85vh]  overflow-auto  px-5">
                    <formulaireVue></formulaireVue>
                    <etat></etat>
                    <soustraitantVue v-if=" this.$store.state.statut_=='Sous traitant'"></soustraitantVue>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import etat from '../components/poppup/equipe/etat.vue'
import soustraitantVue from '../components/poppup/equipe/soustraitant.vue'
import formulaireVue from '../components/poppup/equipe/statut.vue'
export default {
    components: {
        btn_,
        formulaireVue,
        etat,
        soustraitantVue
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
    }

}
</script>

<style>
        
        </style>
