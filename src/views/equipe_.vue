<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Listes des equipes / sous-traitant</h1>
    <div class="w-full  flex flex-row">
        <div :class="showFormulaire==true?'w-[40%]':'w-full'" class=" duration-500 bg-white rounded-lg  h-max px-12 flex z-10 flex-col ">
           
            <!-- entête -->
            <div class="flex flex-row sticky top-10 py-5 w-full justify-between items-center bg-white mt-6">
                <h5 class=" font-semibold text-2xl">Equipes</h5> 
                <div class="flex flex-row">
                    <div class=" flex flex-row mx-1 ">
                        <btn_ class=" " :options="{url:{name:'organigramme'},label:'Organigramme',style:' base_bg text-white w-full',ico:$store.state.icons.plus}"></btn_>
                    </div>
                    <btn_ v-if="showFormulaire==false" @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                    <button v-else @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    </button>
                </div>
            </div>

            <!-- tableau -->
            <div class="flex w-full text_xs mt-4">
                <table class=" w-full items-start px-1">
                    <tr class=" w-full sticky top-28 ">
                        <th class=" py-3 bg-white w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th class=" py-3 bg-white w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Nom </th>
                        <th class=" py-3 bg-white w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Prénom</th>
                        <th v-if="showFormulaire==false" class=" py-3 bg-white w-[13%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Fonction</th>
                        <th v-if="showFormulaire==false" class=" py-3 bg-white w-[12%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Status</th>
                        <th v-if="showFormulaire==false" class=" py-3 bg-white w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Etat</th>
                        <th class=" py-3 bg-white w-[19%] text-start text-stone-500 pl-5  ">Actions</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class="pl-5" v-text="'Nom'+i"></td>
                        <td class="pl-5" v-text="'Prénom'"></td>
                        <td v-if="showFormulaire==false" class="pl-5" v-text="'{Fonction}'"></td>
                        <td v-if="showFormulaire==false" class="pl-5" v-text="'Gérant'"></td>
                        <td v-if="showFormulaire==false" class="pl-5 ">
                            <div class=" flex my-1">
                                <button class=" px-2 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 ">Plus en activité</button>
                            </div>
                        </td>
                        <td class=" px-2">
                            <div class=" flex flex-row items-center py-1">
                                <button  @click="()=>{showFormulaire=true}"  class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                    <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                        <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </table> 
            </div>
        </div>
        <div v-if="showFormulaire==true" class=" flex flex-col mx-3 bg-white rounded-lg w-[60%]  px-5">
            <formulaireVue></formulaireVue>
            <etat></etat>
            <soustraitantVue></soustraitantVue>
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
            importFichier: [{
                titre: 'Certificat',
                label_fichier: 'Uploader une fichier',
                text_fichier: 'document1.pdf'
            }, {
                titre: 'Ajouter un logo',
                label_fichier: 'Ajouter logo',
                text_fichier: 'Logo.png'
            }, {
                titre: 'BPF',
                label_fichier: 'Uploader une fichier',
                text_fichier: 'document1.pdf'
            }, ],
        }
    }

}
</script>

<style>
        
        </style>
