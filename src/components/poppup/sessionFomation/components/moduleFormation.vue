<template>
<div class=" flex  flex-col pt-7 h-[70vh]">
    <span class=" text-[14px] font-semibold">Module de formation</span>
    <!-- tableau de titre du site -->
    <div class="flex w-full  mt-4 h-[84%] px-4 overflow-y-auto">
        <table class=" text-[12px]  w-full items-start px-1">
            <tr class=" w-full sticky top-0  bg-white    ">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[36%] text-start text-stone-500  pl-5 border-r border-stone-200 ">TitreSite</th>
                <th class=" w-[14%] text-start  text-stone-500 break-all pl-5 border-r border-stone-200 ">Activation/desactivation</th>
                <th class=" w-[8%] text-start text-stone-500 pl-5">Actions</th>
            </tr>
            <tr v-for="item,i in module" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="item.id"></td>
                <td class="pl-5" v-text="item.titre"></td>
                <td class="pl-5">
                    <slidebtn_Vue @click="()=>{item.activer==true?item.activer=false:item.activer=true}" :options="{active:item.activer,border:'border-[#42898B] ',bg:' bg-[#42898B]'}"></slidebtn_Vue>
                </td>
                <td class=" px-2">
                    <div class=" my-2 flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 "> 
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
                        </button>
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import slidebtn_Vue from '../../../button/slidebtn_.vue'
export default {
    components: {
        slidebtn_Vue
    },

    data() {
        return {
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
            }, ]
        }
    }
}
</script>

<style>

</style>
