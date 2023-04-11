<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Traitements aléas / logs</h1>
        <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
    </div>
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex ">
        <div :class="showFormulaire==true?' px-5  w-[40%] ':'px-12 w-full '" class="flex-col duration-500  bg-white rounded-lg h-max  flex z-10">

            <div class=" sticky top-6 mt-9 flex w-full bg-white py-4 flex-row mx-1  ">
                <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            </div>
            <div class="flex w-full  first-letter:mt-4">
                <table class=" text-xs   w-full items-start px-1 mt-10">
                    <tr class=" w-full h-10 sticky top-20 bg-white">
                        <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                        <th class="  w-[56%] text-start text-stone-500 pl-5 border-r border-stone-400">NomIncident</th>
                        <th class="  w-[36%] text-start text-stone-500 pl-5 border-r border-stone-400">Etat</th>
                        <th class="  w-[19] text-start text-stone-500 border-r border-stone-400">Actions</th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="i"></td>
                        <td class="pl-5" v-text="'Ligne'+i"></td>
                        <td class="pl-5 ">
                            <div class=" flex my-1">
                                <button class="   bg-red-100 rounded-md text-red-600  border-red-500 border py-1 ">A traité</button>
                            </div>
                        </td>
                        <td class=" px-2">
                            <div class=" flex flex-row items-center py-1">
                                <button @click="()=>{showFormulaire=true}" class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
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
        <div v-if="showFormulaire==true" class="  flex flex-col  mx-3 bg-white rounded-lg w-[60%]  px-5">
            <div class=" sticky top-6 mt-9 z-30 flex w-full bg-white py-4 flex-row mx-1  ">
                <btn_ @click="()=>{showFormulaire=false}" class=" " :options="{label:'Annuler',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            </div>
            <formulaire></formulaire>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import formulaire from '../components/poppup/traitement/traitement.vue'

export default {
    components: {
        btn_,
        formulaire, 
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: false,
            indexFormulaire: 0,
        }
    }

}
</script>

<style>

</style>
