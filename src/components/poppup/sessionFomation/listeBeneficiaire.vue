<template>
<div class=" flex flex-col py-5 text-sm">
    <div class="flex flex-row w-full justify-between px-4">
        <!-- select Option -->
        <div class="flex items-center flex-row">
            <span class=" mr-3 font-semibold text-[#63B6B9]">Formation :</span>
            <div class="flex flex-row bg-stone-300 px-3 py-2 rounded-lg">
                <select name="" id="" class=" text-black outline-none ">
                    <option v-for=" item,i in nomFormation" :key="i" :value="item.val" v-text="item.label" class=" border-b border-stone-200 text-black "></option>
                </select>
                <div class="">
                    <svg class="   text-black items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                        <path :d="$store.state.icons.menu_down" /></svg>
                </div>
            </div>
        </div>
        <!-- select Option -->
        <div class="flex items-center flex-row">
            <span class=" mr-3 font-semibold text-[#63B6B9]">Liste formateurs :</span>
            <div class="flex flex-row bg-stone-300 px-3 py-2 rounded-lg">
                <select name="" id="" class=" text-black outline-none ">
                    <option v-for=" item,i in formateur" :key="i" :value="item.val" v-text="item.label" class=" border-b border-stone-200 text-black "></option>
                </select>
                <div class="">
                    <svg class="   text-black items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                        <path :d="$store.state.icons.menu_down" /></svg>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-row w-full justify-between py-5 mt-2">
        <span class=" text-lg font-semibold ">Liste des bénéficiaires</span>
        <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouveau bénéficiaire',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

    </div>
    <!-- tableau -->
    <div class="flex w-full text-sm mt-4  h-96 overflow-auto">
        <table class=" w-full items-start px-1 ">
            <tr class=" w-full sticky top-0 bg-white py-5  ">
                <th class=" py-2 w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class=" py-2  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom </th>
                <th class=" py-2  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Prénom</th>
                <th class=" py-2  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Etat</th>
                <th v-if="showFormulaire==false" class=" py-2  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Date d'inscription</th>
                <th v-if="showFormulaire==false" class=" py-2  w-[19] text-start text-stone-500 pl-5  ">Actions</th>
            </tr>
            <tr v-for="i in 20" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="i"></td>
                <td class="pl-5" v-text="'Nom'+i"></td>
                <td class="pl-5" v-text="'Prénom'"></td>
                <td class="pl-5 ">
                    <div class=" flex my-1">
                        <button class=" px-2 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 ">A traité</button>
                    </div>
                </td>
                <td v-if="showFormulaire==false" class="pl-5" v-text="'18 juin 2025'"></td>
                <td v-if="showFormulaire==false" class=" px-2">
                    <div class=" flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>

    </div>
    <span class=" h-[2px] bg-stone-200 my-7 w-full"></span>
    <detailFormationVue></detailFormationVue>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue';
import input_ from '../../input/inputTxt.vue';
import textArea_ from '../../input/textarea.vue';
import detailFormationVue from './detailFormation.vue';

export default {
    components: {
        btn_,
        input_,
        textArea_,
        detailFormationVue
    },

    data() {
        return {
            isPresenciel: true,
            nomFormation: [{
                    label: 'Formation name',
                    val: ''
                },
                {
                    label: 'Formation 1',
                    val: '0'
                },
                {
                    label: 'Formation 2',
                    val: '1'
                },
                {
                    label: 'Formation 3',
                    val: '2'
                },
            ],
            formateur: [{
                    label: 'Formateur name',
                    val: ''
                },
                {
                    label: 'Formateur name 1',
                    val: '0'
                },
                {
                    label: 'Formateur name 2',
                    val: '1'
                },
                {
                    label: 'Formateur name 3',
                    val: '2'
                },
            ], 
        }
    }
}
</script>

<style>

</style>
