<template>
<div class="flex flex-col w-full px-3 py-7">
    <div class="flex  flex-row items-center justify-between">
        <span class=" text-lg font-semibold">Paramètre :</span>
        <div class="flex  flex-row">
            <div class="flex flex-row items-center">
                <span class=" font-semibold">Durée</span>
                <button class="  mx-3 color_base text-lg">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1">02</span>
                    <span>hrs</span>
                </div>
                <button class=" p-1 mx-3 color_base text-lg">+</button>
            </div>
            <div class="flex flex-row items-center ml-14">
                <button class=" p-1 mx-3 color_base text-lg">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1">30</span>
                    <span>min</span>
                </div>
                <button class=" p-1 mx-3 color_base text-lg">+</button>
            </div>
        </div>
    </div>
    <div class="flex pl-5 flex-col">
        <div class=" mt-5  ">
            <inputTxtVue :options="{label:'Titre du module',model:'',type:'text'}"></inputTxtVue>
        </div>
        <div class="flex  flex-col mt-6">
            <span class=" font-semibold  ">Ressource documentaire associer</span>
            <div class="h-full w-full flex flex-row justify-between ">
                <btn_ @click="()=>{showFormulaire=true}" class=" mt-3" :options="{label:'Document associé',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

                <div v-for="item, i in importFichier" :key="i" class="flex flex-row">
                    <btn_ class=" mt-3" :options="{label:item.text_fichier,ico2Style:' text-white bg-[#63B6B9]',style:' bg-gray-300 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
                </div>
            </div>
        </div>
        <div class="flex  flex-col mt-6">
            <span class=" font-semibold  ">Méthode pédagogique</span>
            <div class="h-full w-full flex flex-row justify-between ">
                <div v-for="item, i in importFichierMethPed" :key="i" class="flex flex-row">
                    <btn_ class=" mt-3" :options="{label:item.text_fichier,ico2Style:' text-white bg-[#63B6B9]',style:' bg-gray-300 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
                </div>
                <btn_ class=" mt-3 opacity-0" :options="{label:'Document associé',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

            </div>
        </div>
        <div class="flex  flex-col mt-6">
            <div class="flex flex-col">
                <span class=" font-semibold  ">Liste des objectifs</span>
                <div class="h-full w-full flex flex-row  ">
                    <btn_ @click="()=>{}" class=" mt-3 mr-7" :options="{label:'Nouveau Objectif',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                    <btn_ @click="()=>{}" class=" mt-3" :options="{label:`Bibliothéque d'objectif`,ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                </div>
            </div>

            <div class="  w-full text_xs px-2 mt-4 h-[40vh] overflow-auto ">
                <table class=" w-full items-start px-1">
                    <tr class=" sticky top-0 bg-white w-full">
                        <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                        <th class="  w-[66%] pl-5 text-start text-stone-500  ">TitreSite</th>
                        <th class="  w-[19%] text-center text-stone-500  ">Actions</th>
                    </tr>
                    <tr v-for="i in 15" :key="i" class=" duration-200 hover:text-white group  hover:bg-[#63B6B9]  ">
                        <td class="     text-center text-gray-500 px-2" v-text="'001'"></td>
                        <td class="   pl-5" v-text="'Ligne'+i"></td>
                         
                        <td class=" px-2">
                            <div class=" flex flex-row items-center py-1">
                                <button @click="()=>{goto_()}" class="  flex flex-row items-center  px-1 rounded-md py-1 ">
                                    <svg class=" group-hover:text-white   fill-current w-4 color_base" viewBox="0 0 24 24">
                                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                    <u class=" group-hover:text-white color_base ml-1">Consulter</u>
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
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue'
import inputTxtVue from '../../input/inputTxt.vue'
export default {
    components: {
        inputTxtVue,
        btn_
    },
    data() {
        return {
            importFichier: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
            importFichierMethPed: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
        }
    }

}
</script>

<style>

</style>
