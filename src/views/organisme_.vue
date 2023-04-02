<template>
<div class="flex flex-col h-full">
    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Organismes </h1>
        <h1 class=" text-lg ml-2  "> > Gestion de site de formation</h1>
    </div>
    <div :class="howOrgPoppup==true?'flex-row':'flex-col'" class="flex  ">
        <div :class="howOrgPoppup==true?' px-5':'px-12'" class="flex-col duration-500  bg-white rounded-lg w-full h-max  flex z-10">
            <span v-if="howOrgPoppup==false" class=" sticky top-6 py-3  bg-white font-bold text-lg">Raison social</span>
            <!-- boite raison social -->
            <div v-if="howOrgPoppup==false" class="flex flex-between mt-4 text-sm">

                <!-- formulaire -->
                <div class="flex flex-col border border-black w-2/5 rounded-lg">
                    <div class="py-4 px-7">
                        <div v-for=" item,i in raisonSocial" :key="i" class="flex flex-row w-full items-center  my-6 ">
                            <span class=" font-semibold text-stone-800 min-w-max" v-text="item.label"></span>
                            <span v-if="edit==true" contenteditable class=" w-full ml-2 bg-stone-200 px-2 py-1 rounded-md" v-text="item.text"></span>
                            <span v-else class=" w-full ml-2 bg-stone-200 px-2 py-1 rounded-md" v-text="item.text"></span>
                        </div>
                        <div class="flex flex-row w-full items-center  my-6 ">
                            <span class=" font-semibold text-stone-800 min-w-max" v-text="'NDA : '"></span>
                            <input placeholder="Input NDA" type="text" class=" w-full ml-2 border border-stone-900 px-2 py-1 rounded-md">
                        </div>
                    </div>
                    <div class="flex w-full justify-end relative">
                        <btn_Vue @click="setEditable" class=" absolute -mt-7 mr-5" :options="{label:edit==true?'Valider':'Editer',style:' base_bg text-white w-full',ico:edit==true?$store.state.icons.done:$store.state.icons.edit}"></btn_Vue>
                    </div>
                </div>

                <!-- importation -->
                <div class="h-full w-3/4 px-7  flex flex-row justify-between ">
                    <div v-for="item, i in importFichier" :key="i" class="flex flex-row">
                        <div class="flex flex-col">
                            <span v-text=" item.titre"></span>
                            <btn_Vue :options="{label:item.label_fichier,style:' base_bg text-white w-full',ico:$store.state.icons.uploadFolder}"></btn_Vue>
                            <btn_Vue class=" mt-3" :options="{label:item.text_fichier,style:' bg-gray-200 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.delete}"></btn_Vue>
                        </div>
                    </div>
                </div>
            </div>

            <!-- titre du tableau -->
            <div class="flex flex-row items-center sticky top-6 py-3  bg-white mt-6 justify-between w-full">
                <div class="flex flex-row items-center">
                    <button v-if="howOrgPoppup!=false" @click="()=>{howOrgPoppup=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    </button>
                    <h5 class=" font-semibold text-2xl">Listes des sites de formation</h5>
                </div>
                <btn_Vue v-if="howOrgPoppup==false" @click="()=> { howOrgPoppup=true}" :options="{label:'Nouveau site',style:' base_bg text-white w-full',ico:$store.state.icons.plus}"></btn_Vue>
            </div>
            <div class="flex w-full text-sm mt-9">
                <table class=" w-full items-start">
                    <tr class=" w-full  ">
                        <th class="py-2 w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th class="py-2  w-[90%] text-start text-stone-500  pl-5 ">TitreSite</th>
                        <th class="py-2  w-[15] text-start text-stone-500  ">Actions</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" hover:text-white rounded-lg hover:bg-[#63B6B9]">
                        <td class=" text-gray-500 px-3" v-text="i"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td class="  px-3 flex flex-row items-center">
                            <button class=" p-1 bg-stone-100 rounded-md m-1 py-1">
                                <svg class=" fill-current text-[#63B6B9] w-4" viewBox="0 0 24 24">
                                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                            </button>
                            <u v-if="howOrgPoppup==false" class=" mx-2 text-stone-600"> Modifier</u>
                            <button class=" p-1 bg-stone-100 m-1 rounded-md">
                                <svg class=" fill-current text-red rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <popup v-if=" howOrgPoppup==true" class=" sticky top-6 mx-3 bg-white rounded-lg w-full h-max px-5 "></popup>
    </div>
</div>
</template>

<script>
import btn_Vue from '../components/button/btn_.vue'
import popup from '../components/poppup/organisme.vue'
export default {
    components: {
        btn_Vue,
        popup
    },
    data() {
        return {
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

            howOrgPoppup: true,
            edit: false
        }
    },
    methods: {
        setEditable() { 
            this.edit == true ? this.edit = false : this.edit = true
        }
    }

}
</script>

<style>

</style>
