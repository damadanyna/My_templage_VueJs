<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
        <span class=" text_xs font-bold  py-5 bg-white z-50">Traitement des aléas, difficultés et réclamations :</span>
        <div class=" mt-8 flex flex-col">
            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[0]"></input_>
                <input_ class=" w-full ml-3" :options="data_[1]"></input_>
            </div>

            <div class="flex flex-row my-4 justify-end items-center">
                <span class=" font-bold text_xs mr-5">Gravité de l’incident:</span>
                <selectOption :options="niveauList"></selectOption>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <textArea_ class=" w-full" :options="data_[2]"></textArea_>
            </div>
            <div class="flex flex-row my-4 items-center">
                <span class=" font-bold text_xs mr-5">Status:</span>
                <div v-for="item,i in listeStatus" class="flex flex-row mr-6 cursor-pointer duration-300" @click="()=>{indexStatu=i}">
                   <span :class="i==indexStatu?'base_bg  text-white':' text-black border-[1px] border-[#63B6B9]'" class=" px-3 py-1  rounded-md text_xs" v-text="item"></span>
                </div>
            </div>
            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[3]"></input_>
                <input_ class=" w-full ml-3" :options="data_[4]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <textArea_ class=" w-full" :options="data_[5]"></textArea_>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" duration-300 flex mt-12 justify-center  flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'Valider',style:' base_bg text-white',ico:$store.state.icons.done}"></btn_>
        </div>
    </div>
</div>
</template>

    
        
        
    
<script>
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import btn_ from '../../button/btn_.vue';
import selectOption from '../../input/selectOption.vue';
import gsap from 'gsap'
export default {
    props: {
        item: {}
    },
    data() {
        return {
            data_: [{
                    label: 'Nom de l’incident',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Source de l’incident',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Description',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Date de l’incident',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Date de clôture de l’incident',
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
        selectOption,
        btn_
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        },
        setVal(item) {
            if (item.nomFomation) {
                this.data_[0].model = item.nomFomation 
            }
        }
    },
    mounted() {
        gsap.fromTo("#poppupOrganisme", {
            opacity: 0,

        }, {
            duration: .5,
            opacity: 1,
        });
        if (this.item != {}) {
            this.setVal(this.item)
        }
    },
    updated() {

        if (this.item != {}) {
            this.setVal(this.item)
        }
    }
}
</script>
        
        
    
<style>
        
        </style>
