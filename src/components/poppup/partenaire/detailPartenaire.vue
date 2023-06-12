<template>
<!-- forumlaire de detailPartenaire -->
<div class=" bg-white rounded-lg flex px-1 pb-12 flex-col z-20">
    <span class=" text-lg font-bold sticky mt-3  bg-white z-50">Listes des lieux d’exploitation :</span>
    <div class="flex w-ful justify-between">
        <span class=" text_xs font-semibold">Site d’expoitation 1</span>
        <div class=" flex flex-row">
            <div class="flex flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current " viewBox="0 0 24 24">
                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                </button>
                <u class=" color_base text_xs ml-1">Modifier</u>
            </div>
            <div class="flex ml-5 flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current text-red-500" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>
                <u class=" text-red-500 text_xs ml-1">Supprimer</u>
            </div>
        </div>
    </div>
    <div class=" mt-8 flex flex-col">
        <div class="flex flex-row w-full">
            <input_ class=" w-full " :options="data_[0]"></input_>
            <input_ class=" w-full ml-3" :options="data_[1]"></input_>
        </div>
        <div class="flex flex-row mt-5 w-full">
            <input_ class=" w-full " :options="data_[3]"></input_>
            <input_ class=" w-full ml-3" :options="data_[4]"></input_>
        </div>
        <div class="flex flex-row mt-5 w-full">
            <input_ class=" w-full " :options="data_[7]"></input_>
            <input_ class=" w-full ml-3" :options="data_[8]"></input_>
        </div>
        <div class="flex mt-5 w-full flex-row">
            <input_ class=" w-full" :options="data_[5]"></input_>
        </div>
    </div>
    <div class="flex w-full  my-7">
        <div class="flex h-[2px] w-full bg-stone-300"></div>
    </div>
    <!-- <div class="flex w-ful justify-between">
        <span class=" text_xs font-semibold">Site d’expoitation 2</span>
        <div class=" flex flex-row">
            <div class="flex flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current " viewBox="0 0 24 24">
                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                </button>
                <u class=" color_base text_xs ml-1">Modifier</u>
            </div>
            <div class="flex ml-5 flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current text-red-500" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>
                <u class=" text-red-500 text_xs ml-1">Supprimer</u>
            </div>
        </div>
    </div>
    <div class=" mt-8 flex flex-col">
        <div class="flex flex-row w-full">
            <input_ class=" w-full " :options="data_[0]"></input_>
            <input_ class=" w-full ml-3" :options="data_[1]"></input_>
        </div>
        <div class="flex flex-row mt-5 w-full">
            <input_ class=" w-full " :options="data_[3]"></input_>
            <input_ class=" w-full ml-3" :options="data_[4]"></input_>
        </div>
        <div class="flex mt-5 w-full flex-row">
            <input_ class=" w-full" :options="data_[5]"></input_>
        </div>
    </div> -->
    <div class="flex w-full justify-between items-center my-7">
        <span class=" text-lgw font-semibold">Liste des contacts de la société</span>
        <button @click="()=>{this.$store.state.isAdd=false}" class=" base_bg flex flex-row py-2 text_xs px-7 items-center rounded-md text-white">
            Ajouter un contact à la société
            <svg class=" w-5 text-white ml-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
        </button>
    </div>

    <!-- tableau -->
    <div class="flex w-full text_xs mt-4">
        <table class=" w-full items-start px-1">
            <tr class=" w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[36%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom </th>
                <th class="  w-[36%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Prenom</th>
                <th class="  w-[26%] text-center text-stone-500  border-r border-stone-200 ">Tél</th>
                <th class="  w-[26%] text-center text-stone-500  border-r border-stone-200 ">Email</th>
                <th class="  w-[13%] text-center text-stone-500  border-r border-stone-200 ">Fonction</th>
                <th class="  w-[12%] text-center text-stone-500  ">action</th>
            </tr>
            <tr v-for="i in 2" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="i"></td>
                <td class="pl-5" v-text="'Nom'+i"></td>
                <td class="pl-5" v-text="'Prenom'"></td>
                <td class="pl-5" v-text="'+261...'"></td>
                <td class="pl-5" v-text="'dossierfor...'"></td>
                <td class="pl-5" v-text="'{Fonction}'"></td>
                <td class=" px-2">
                    <div class=" flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                        </button>
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-red-500 rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <div class="flex mt-5 flex-col w-full">
        <div class="flex flex-row w-full  rounded-t-lg border-[#63B6B9] border-t-[1px] border-x-[1px] font-bold">
            <div @click="set_('IB')" :class="selected=='IB'?'bg-[#63B6B9] text-white':' bg-stone-100 color_base'" class=" rounded-tl-lg w-full py-2   flex flex-col justify-center ">
                <span class=" text-center text_xs w-full   ">Information complémentaire </span>
                <span class=" text-center text_xs w-full   "> pour les bénéficiaires</span>
            </div>
            <div @click="set_('IF')" :class="selected!='IB'?'bg-[#63B6B9] text-white':' bg-stone-100 color_base'" class=" w-full py-2 rounded-tr-lg  flex flex-col justify-center ">
                <span class=" text-center text_xs w-full  ">Information complémentaire </span>
                <span class=" text-center text_xs w-full  ">pour les formateurs</span>
            </div>
        </div>
        <div class="   border-[#63B6B9] group border-[1px] py-1 w-full rounded-b-lg items-center flex flex-col  ">
            <textarea v-model="data_[5].model" class=" w-full resize-none border-none outline-none px-3" name="" id="" rows="4"></textarea>
        </div>
    </div>
    <div class="flex mt-20 w-full justify-between items-center my-7">
        <span class=" text-lgw font-semibold">Espace documentaire de la formation</span>
    </div>
    <div class="flex flex-row w-full">
        <button class=" base_bg flex flex-row py-2 text_xs px-4 items-center rounded-md text-white">
            <svg class=" w-5 text-white ml-1 fill-current" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
            Nouveau document
        </button>
           <div class="flex flex-col">
            <btn_ @click="()=>{showBibliotheque=!showBibliotheque}" class=" ml-2 " :options="{label:'Bibliothéque de document',style:' base_bg text_xs  text-white ',ico:$store.state.icons.list}"></btn_>
            <bibliothequeVue v-if="showBibliotheque==true" class="flex" :options="{class:'',liste:liste ,type:'input'}" > </bibliothequeVue>
        </div> 
    </div>

    <!-- tableau -->
    <div class="flex w-full text_xs mt-4">
        <table class=" w-full items-start px-1">
            <tr class=" w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[46%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Titre </th>
                <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Pubilc</th>
                <th class="  w-[13%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Type</th>
                <th class="  w-[19] text-start text-stone-500 pl-5  ">action</th>
            </tr>
            <tr v-for="i in 2" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="i"></td>
                <td class="pl-5" v-text="'Titre'+i"></td>
                <td class="pl-5" v-text="'{Publique}'"></td>
                <td class="pl-5" v-text="'PDF'"></td>
                <td class=" px-2">
                    <div class=" flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                        </button>
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-red-500 rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>

</div>
</template>

<script>
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import gsap from 'gsap'
import btn_ from '../../button/btn_.vue'
import bibliothequeVue from '../../input/bibliotheque.vue'
export default {
    data() {
        return {
        
            showBibliotheque: false,

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
            }, ],
            data_: [{
                    label: 'Adresse',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Code postal',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Ville',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Pays',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Siege',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Action menée',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Action menée',
                    model: '',
                },
                {
                    label: 'Portable/Téléphone',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Email',
                    model: '',
                    type: 'text'
                },
            ],
            indexStatu: 0,
            listeStatut: ['A traité', 'En cours', 'Resolue'],
            niveauList: [{
                    label: 'Niveau 1',
                    val: ''
                },
                {
                    label: 'Niveau 2',
                    val: '0'
                },
                {
                    label: 'Niveau 3',
                    val: '1'
                },
                {
                    label: 'Niveau 4',
                    val: '2'
                },
            ],
            selected: true,
        }
    },
    components: {
        input_,
        textArea_,btn_,bibliothequeVue
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        },
    },
    mounted() {
        gsap.fromTo("#poppupOrganisme", {
            opacity: 0,

        }, {
            duration: .5,
            opacity: 1,
        });
    } 
}
</script>

<style>
        
        </style>
