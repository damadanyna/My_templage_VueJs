<template>
<div class="flex flex-col">
    <div class="flex flex-col px-3">
        <span class=" h-[2px] w-full my-6 rounded-sm bg-stone-300"></span>
    </div>

    <div class=" z-20 sticky top-6   bg-white px-3 py-5 flex justify-between w-full">
        <span class=" font-semibold ">Espace documentaire de la formation</span>
    </div>

    <div class="flex flex-row">
        <btn_ class=" " :options="{label:'Nouveau Objectif',style:' px-0 base_bg text_xs  text-white ',ico:$store.state.icons.plus}"></btn_>
        <div class="flex flex-col">
            <btn_ @click="()=>{showBibliotheque=!showBibliotheque}" class=" ml-2 " :options="{label:'Bibliothéque d\'objectif',style:' base_bg text_xs  text-white ',ico:$store.state.icons.list}"></btn_>
            <bibliothequeVue v-if="showBibliotheque==true" class="flex" :options="{class:''}"> </bibliothequeVue>
        </div>
    </div>

    <div class="flex w-full text_xs mt-4  ">
        <table class=" w-full items-start px-1">
            <tr class=" w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[76%] text-start text-stone-500  pl-5 ">Titre</th>
                <th class="  w-[16%] text-start text-stone-500  pl-5 ">Public</th>
                <th class="  w-[16%] text-start text-stone-500  px-5 ">Type</th>
                <th class="  w-[19] text-start text-stone-500  ">Actions</th>
            </tr>
            <tr v-for="i in 4" :key="i" class=" group duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="'001'"></td>
                <td class="pl-5" v-text="'Ligne'+i"></td>
                <td class="pl-5 ">
                    <div class=" flex my-1" v-text="'{public}'"></div>
                </td>
                <td class="pl-5" v-text="'PDF'"></td>
                <td class=" px-2 text-teal-500">
                    <div class=" flex flex-row group-hover:text-white items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-teal-500 rounded-md w-4" viewBox="0 0 24 24">
                                <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                        </button>
                        <u class="mr-2">Télécharger</u>
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
</template>

<script>
import btn_ from '../../button/btn_.vue';
import bibliothequeVue from '../../input/bibliotheque.vue';

export default {
    components: {
        btn_,
        bibliothequeVue
    },
    data() {
        return {
            showBibliotheque: false
        }
    }

}
</script>

<style>

</style>

<!-- 
    fire base projet 
    header tableau doit etre fixé
    buger pour fermer et flèche pour ouvrir
    quand hover ce sera bleu
 -->
