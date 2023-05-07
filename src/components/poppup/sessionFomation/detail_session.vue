<template>
<div id="template" class=" flex flex-col py-5 text_xs">
    <div class="flex flex-row w-full justify-between px-4">
        <!-- select Option -->
        <div class="flex items-center flex-row">
            <span class=" mr-3 font-semibold color_base">Formation :</span>
            <div class="flex flex-row bg-stone-300 px-3 py-2 rounded-lg">
                <span>Formation name</span>
            </div>
        </div>
        <!-- select Option -->
        <div class="flex items-center flex-row">
            <span class=" mr-3 font-semibold color_base">Liste formateurs :</span>
            <div class="flex flex-row bg-stone-300 px-3 py-2 rounded-lg">
                <span>John Doe</span>
            </div>
            <div class="flex ml-3 flex-row bg-stone-300 px-3 py-2 rounded-lg">
                <span>John Doe</span>
            </div>
        </div>
    </div>
    <div class="flex flex-row w-full justify-between py-5 mt-2">
        <span class=" text-lg font-semibold ">Liste des bénéficiaires</span>
        <btn_ @click="()=>{getIt_()}" class=" " :options="{label:'Formation' ,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

    </div>

    <!-- tableau -->
    <div class="flex w-full text_xs mt-4  h-96 overflow-auto">
        <table class=" w-full items-start px-1 ">
            <tr class=" w-full sticky top-0 bg-white py-5  ">
                <th class=" py-2 w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                <th class=" py-2  w-[9%] text-center text-stone-500  border-r border-stone-200 ">Alertes </th>
                <th class=" py-2  w-[26%] text-center text-stone-500  border-r border-stone-200 ">Nom </th>
                <th class=" py-2  w-[26%] text-center text-stone-500  border-r border-stone-200 ">Prénom</th>
                <th class=" py-2  w-[26%] text-center text-stone-500  border-r border-stone-200 ">Date d'inscription</th>
                <th class=" py-2  w-[19] text-center text-stone-500   ">Actions</th>
            </tr>
            <tr v-for="i in 20" :key="i" class=" duration-200   hover:text-white group hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 text-center" v-text="i"></td>
                <td class="text-center font-semibold  ">
                    <div class=" group-hover:text-black text-slate-600 ">
                        <span class="bg-orange-100 border-[1px]   border-orange-400 rounded-md px-2 py-1">1 </span>
                    </div>
                </td>
                <td class="text-center font-semibold" v-text="'Nom'+i"></td>
                <td class="text-center font-semibold" v-text="'Prénom'"></td>
                <td class="text-center" v-text="'18 juin 2025'"></td>
                <td class=" px-2 ">
                    <div class=" flex flex-row items-center justify-center py-1">
                        <button class=" mr-2 flex flex-row   text_xs  px-1 rounded-md items-center py-1 ">
                            <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                            </button>
                            <u class=" color_base group-hover:text-white ml-1">Voir</u>
                        </button>
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-red-500 rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
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
import detailFormationVue from './components/detailFormation.vue';
import gsap from 'gsap';
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
    },
    methods: {
        getIt_() {
            this.$router.push({
                name: "chat"
            })
        }
    },
    mounted() {
        gsap.fromTo("#template", {
            width: 0,
            opacity: 0,

        }, {
            duration: .5,
            opacity: 1,
            width: '100%'
        });

        // console.log(this.$store.state.myData.listeBeneficiaire)
    }
}
</script>

<style>
    
    </style>
