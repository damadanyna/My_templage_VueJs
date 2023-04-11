<template>
<!-- forumlaire de organisme -->
<div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
    <span class=" text-lg font-bold sticky mt-14 top-5 py-4 bg-white z-50">Listes des lieux d’exploitation :</span>
    <div class="flex w-ful justify-between">
        <span class=" text-sm font-semibold">Site d’expoitation 1</span>
        <div class=" flex flex-row">
            <div class="flex flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current " viewBox="0 0 24 24">
                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                </button>
                <u class=" text-[#63B6B9] text-xs ml-1">Modifier</u>
            </div>
            <div class="flex ml-5 flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current text-red-500" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>
                <u class=" text-red-500 text-xs ml-1">Supprimer</u>
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
    </div>
    <div class="flex w-full  my-7">
        <div class="flex h-[2px] w-full bg-stone-300"></div>
    </div> 
      <div class="flex w-ful justify-between">
        <span class=" text-sm font-semibold">Site d’expoitation 2</span>
        <div class=" flex flex-row">
            <div class="flex flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current " viewBox="0 0 24 24">
                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                </button>
                <u class=" text-[#63B6B9] text-xs ml-1">Modifier</u>
            </div>
            <div class="flex ml-5 flex-row items-center">
                <button class=" p-1 bg-slate-100 rounded-md ">
                    <svg class=" w-4 fill-current text-red-500" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>
                <u class=" text-red-500 text-xs ml-1">Supprimer</u>
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
    </div>
    <div class="flex w-full justify-between my-7"> 
        <span class=" text-lgw font-semibold">Liste des contacts de la société</span> 
        <button class=" base_bg flex flex-row py-2 text-xs px-7 items-center rounded-md text-white">
            Ajouter un contact à la société
            <svg class=" w-5 text-white ml-3 fill-current" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
        </button>
    </div>
</div>
</template>

<script>
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import gsap from 'gsap'
export default {
    data() {
        return {
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
            ],
            indexStatu: 0,
            listeStatus: ['A traité', 'En cours', 'Resolue'],
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
            ]
        }
    },
    components: {
        input_,
        textArea_,
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        }
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
