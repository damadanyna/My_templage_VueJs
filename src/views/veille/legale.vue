<template>
  
  <div class=" bg-white rounded-lg w-full h-max px-12 flex z-10 flex-col ">
        <!-- titre du tableau -->
        <div class="flex flex-row sticky top-14 py-7 w-full justify-between items-center bg-white mt-6">
            <h5 class=" font-semibold text-lg">Légale et règlementairee</h5>
            <btn_ :options="{label:'Veille',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>
        </div>
        <div class="flex w-full text-sm mt-4">
            <table class=" text-sm  w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                    <th class="  w-[46%] text-start text-stone-500  pl-5 border-r border-stone-400 ">TitreSite</th>
                    <th class="  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Status</th>
                    <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Date d'inscriptoin</th> 
                    <th class="  w-[19] text-start text-stone-500 pl-5  ">Actions</th>
                </tr>
                <tr v-for="i in 3" :key="i" class=" duration-200 my-1 hover:text-[#63B6B9]  hover:bg-[#63B6B9]  ">
                    <td class=" text-gray-500 px-2" v-text="i"></td>
                    <td class="pl-5" v-text="'Ligne'+i"></td>
                    <td class="pl-5 ">
                        <a href="#" class=" text-teal-500">{url.source}</a>
                    </td>
                    <td class="pl-5" v-text="'18 juin 2025'"></td> 
                    <td class=" px-2">
                        <div class=" flex flex-row items-center py-1"> 
                            <router-link :to="{name: 'tableauDeVeille'}"  class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                            </router-link>
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

import btn_ from '../../components/button/btn_.vue'
export default {
    components: {
        btn_,
    },

}
</script>

<style scoped>

</style>