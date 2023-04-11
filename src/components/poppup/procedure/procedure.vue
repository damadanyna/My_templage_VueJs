<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
        <div class=" sticky top-6 mt-9 z-30 flex w-full bg-white py-4 flex-row mx-1  ">
            <span class=" text-lg font-semibold mr-7">Titre du procedure</span>
            <input_ class=" " :options="data_[0]"></input_>
        </div>
        <div class="flex flex-row w-full items-center">
            <div class="flex w-[30%] flex-col my-3  ">
                <span class=" font-bold text-sm ">Fonction :</span>
                <div class="flex flex-row text-sm base_bg px-3 py-2 rounded-lg">
                    <select name="" id="" class=" text-white outline-none ">
                        <option v-for=" item,i in niveaufonction" :key="i" :value="item.val" v-text="item.label" class=" border-b border-stone-400 text-black "></option>
                    </select>
                    <div class="">
                        <svg class="   text-white items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                            <path :d="$store.state.icons.menu_down" /></svg>
                    </div>
                </div>
            </div>
            <div class="flex flex-col  w-[70%] mt-5 ml-4">
                <div class="flex flex-row"> 
                    <input_ class=" w-full  ml-3" :options="data_[1]"></input_>
                    <button class=" p-1 bg-stone-200 ml-2 rounded-lg px-2">
                        <svg class=" w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                    </button>
                </div>
            </div>
        </div> 
            <div class="flex rounded-md mt-3 w-full border-[1px] border-teal-800 h-28">
                <textarea class="  w-full resize-none border-none outline-none px-3"  name="" id=""  rows="3"></textarea>
            </div>
    </div>
</div>
</template>

<script>
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import btn_ from '../../button/btn_.vue';
import gsap from 'gsap'
export default {
    data() {
        return {
            data_: [{
                    label: '{Titre de procedure}',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Lien PDF :',
                    model: '',
                    type: 'text'
                },
                {
                    model: ''
                }
            ],
            indexStatu: 0,
            listeStatus: ['A traité', 'En cours', 'Resolue'],
            niveaufonction: [{
                label: 'Fonction Associé',
                val: ''
            }, ]
        }
    },
    components: {
        input_,
        textArea_,
        btn_
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
