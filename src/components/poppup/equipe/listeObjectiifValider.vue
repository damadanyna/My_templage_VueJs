<template>
<div class="flex w-full flex-col">
    <div class="flex flex-row justify-between w-full items-center">
        <span class="  font-semibold">Liste des objectifs de compétence validé</span>
        <btn_ class=" " :options="{ label:'Evaluer une compétence',style:' base_bg text-white py-2 w-full'}"></btn_>
    </div>

    <div class="flex w-full overflow-y-auto max-h-[32vh]  text_xs mt-7">
        <table class=" text_xs  w-full items-start px-1">
            <tr class=" sticky top-0 bg-white mb-2 w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[25%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Titre Formation</th>
                <th class="  w-[25%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom QCM</th>
                <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Validation</th>
                <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Date</th>
                <th class="  w-[6%] text-center text-stone-500   ">Actions</th>
            </tr>
            <tr v-for="i in 35" :key="i" class=" group duration-200 my-1 group hover:color_base  hover:bg-[#63B6B9]  ">
                <td class=" group-hover:text-white  text-gray-500 px-2" v-text="i"></td>
                <td class=" group-hover:text-white pl-5" v-text="'Les clés pour réussir votre projet'"></td>
                <td class=" group-hover:text-white pl-5" v-text="'Expérience utilisateur d\'un site web'"></td>
                <td class=" text-center" >
                    <td class=" text-center">
                        <button v-if="i%2==0" v-text="'Echoué'" class=" py-1  px-2 my-1 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border"></button>
                        <button v-else v-text="'Reussi'" class=" py-1  px-2 my-1 bg-green-100 rounded-md text-green-600 text_xs  border-green-500 border"></button>
                    </td>
                </td>
                <td class=" group-hover:text-white pl-5" v-text="'18 juin 2025'"></td>

                <td class="   px-2 w-full">
                    <div class=" flex flex-row justify-center  py-1">
                        <button class="   bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                        </button>
                        <button class=" bg-slate-100 py-1 ml-3 px-1 rounded-md">
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
