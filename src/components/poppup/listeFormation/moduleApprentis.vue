<template>
<div class="flex flex-col">
    <div class="flex flex-col px-3">
        <span class=" h-[2px] w-full my-6 rounded-sm bg-stone-300"></span>
    </div>

    <div class="  sticky top-6 px-3 bg-white  z-0 py-5 flex justify-between w-full">
        <span class=" font-semibold ">Module d'apprentissage</span>
    </div>

    <div class="flex flex-row">
        <btn_ class="  " :options="{label:'Nouveau Document',style:' px-0 base_bg text_xs  text-white ',ico:$store.state.icons.plus}"></btn_>
        <btn_ class="  ml-2 " :options="{label:'Bibliothéque de document',style:' base_bg text_xs  text-white ',ico:$store.state.icons.list}"></btn_>
    </div>

    <div class="flex w-full text_xs mt-4">
        <table class=" w-full items-start px-1">
            <tr class=" w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[76%] text-start text-stone-500  pl-5 ">Titre</th>
                <th class="  w-[19] text-start text-stone-500 mx-5 ">Actions</th>
            </tr>
            <tr v-for="i in 4" :key="i" class=" duration-200 group hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="'001'"></td>
                <td class="pl-5" v-text="'Ligne'+i"></td>
                <td class=" group-hover:text-white px-2 text-teal-500">
                    <div class=" flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-teal-500 rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                        </button>
                        <u class="mr-2">Consulter</u>
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
export default {
    components: {
        btn_
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
