<template>
<div class=" flex flex-col pt-7 h-[70vh]">
    <div class="text-[14px] font-semibold items-center flex flex-row w-full justify-between">
        <span>Espace documentaire de la formation</span>
        <div class="flex flex-col">
            <btn_ @click="()=>{showBibliotheque=!showBibliotheque}" class=" " :options="{label:'Bibliothéque de document',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            <bibliothequeVue v-if="showBibliotheque==true" class="flex" :options="{class:'',liste:liste ,type:'input'}" > </bibliothequeVue>
    
        </div>
    </div>
    <!-- tableau de titre du site -->
    <div class="flex w-full  mt-4 h-[84%] px-4 overflow-y-auto">
        <table class=" text-[12px]  w-full items-start px-1">
            <tr class=" w-full sticky top-0  bg-white    ">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[36%] text-start text-stone-500  pl-5 border-r border-stone-200 ">TitreSite</th>
                <th class=" w-[8%] text-start text-stone-500 pl-5">action</th>
            </tr>
            <tr v-for="item,i in module" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="item.id"></td>
                <td class="pl-5" v-text="item.titre"></td>

                <td class=" px-2">
                    <div class=" flex my-2  flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                        </button>
                        <button class=" bg-slate-100 py-1 px-1 rounded-md">
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import btn_ from '../../../button/btn_.vue'
import slidebtn_Vue from '../../../button/slidebtn_.vue'
import bibliothequeVue from '../../../input/bibliotheque.vue' 

export default {
    components: {
        slidebtn_Vue,
        btn_,bibliothequeVue
    },

    data() {
        return {
            showBibliotheque: false,
            module: [{
                id: 1,
                titre: 'Leadership et communication efficace .pdf',
                activer: true,
            }, {
                id: 2,
                titre: 'Les techniques avancées de création visuelle.pdf',
                activer: true,
            }, {
                id: 3,
                titre: 'Comment atteindre ses objectifs de vie.pdf',
                activer: true,
            }, {
                id: 4,
                titre: 'Leadership et communication efficace .pdf',
                activer: true,
            }, {
                id: 2,
                titre: 'Les techniques avancées de création visuelle.pdf',
                activer: true,
            }, {
                id: 3,
                titre: 'Comment atteindre ses objectifs de vie.pdf',
                activer: true,
            }, {
                id: 4,
                titre: 'Leadership et communication efficace .pdf',
                activer: true,
            }, {
                id: 2,
                titre: 'Les techniques avancées de création visuelle.pdf',
                activer: true,
            }, ],

            liste: [{
                label: 'Niveau',
                isChecked: false,
            }, {
                label: 'Niveau1',
                isChecked: false,
            }, {
                label: 'Niveau2',
                isChecked: false,
            }, {
                label: 'Niveau3',
                isChecked: false,
            }, {
                label: 'Niveau4',
                isChecked: false,
            }, ]
        }
    }
}
</script>

<style>
  
  </style>
