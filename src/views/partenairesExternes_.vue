<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Partenaire socio-économiques</h1>
    <div class=" bg-white rounded-lg w-full h-max px-12 flex z-10 flex-col ">

        <!-- Partenaire socio-économiques -->
        <div class="flex flex-row items-center sticky top-10  bg-white mt-12 justify-between w-full">
            <h5 class=" font-semibold text-2xl">Partenaire socio-économiques</h5>
        </div>
        <div class="flex w-full text-sm mt-4">
            <table class=" w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                    <th class="  w-[76%] text-start text-stone-500  pl-5 ">TitreSite</th>
                    <th class="  w-[16%] text-start text-stone-500  pl-5 ">Etat</th>
                    <th class="  w-[19] text-start text-stone-500  ">Actions</th>
                </tr>
                <tr v-for="i in 4" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td class=" text-gray-500 px-2" v-text="'001'"></td>
                    <td class="pl-5" v-text="'Ligne'+i"></td>
                    <td class="pl-5 ">
                        <div class=" flex my-1"> 
                            <button class=" px-5 bg-red-100 rounded-md text-red-600 text-xs  border-red-500 border py-1 ">Plus en activité</button>
                        </div>
                    </td>
                    <td class=" px-2">
                        <div class=" flex flex-row items-center py-1"> 
                            <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                            </button>
                            <button class=" bg-slate-100 py-1 px-1 rounded-md">
                                <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </table>

        </div>

        <!-- Partenaire handicap -->
        <div class="flex flex-row items-center sticky top-10  bg-white mt-12 justify-between w-full">
            <h5 class=" font-semibold text-2xl">Partenaire handicap</h5>
        </div>
        <div class="flex w-full text-sm mt-4">
            <table class=" w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                    <th class="  w-[76%] text-start text-stone-500  pl-5 ">TitreSite</th>
                    <th class="  w-[16%] text-start text-stone-500  pl-5 ">Etat</th>
                    <th class="  w-[19] text-start text-stone-500  ">Actions</th>
                </tr>
                <tr v-for="i in 4" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td class=" text-gray-500 px-2" v-text="i"></td>
                    <td class="pl-5" v-text="'Ligne'+i"></td>
                    <td class="pl-5 ">
                        <div class=" flex my-1"> 
                            <button class=" px-5 bg-red-100 rounded-md text-red-600 text-xs  border-red-500 border py-1 ">Plus en activité</button>
                        </div>
                    </td>
                    <td class=" px-2">
                        <div class=" flex flex-row items-center py-1"> 
                            <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                            </button>
                            <button class=" bg-slate-100 py-1 px-1 rounded-md">
                                <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    </div>
</div>
</template>

  
  
<script>
import btn_Vue from '../components/button/btn_.vue'
export default {
    components: {
        btn_Vue,
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
        }
    }

}
</script>
  
  
<style>
    
    </style>
