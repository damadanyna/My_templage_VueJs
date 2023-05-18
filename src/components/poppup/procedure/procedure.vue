<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
        <!-- <span>{{ item }}</span> -->
        <div class=" sticky top-6 mt-9 z-30 flex w-full bg-white py-4 flex-row  ">
            <span class=" text-lg font-semibold">Titre du procedure</span>
            <input_ class=" " :options="data_[0]"></input_>
        </div>
        <div class="flex flex-row w-full items-center">
            <div class="flex w-[30%] flex-col my-3  ">
                <span class=" font-bold text_xs ">Fonction :</span>
                <selectOption :options="niveaufonction"></selectOption>
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
        <ckeditor class=" h-full" :editor="editor"  ></ckeditor> 
    </div>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import input_ from '../../input/inputTxt.vue';
import selectOption from '../../input/selectOption.vue';
import textArea_ from '../../input/textarea.vue';
import btn_ from '../../button/btn_.vue';
import gsap from 'gsap'
export default {
    props: {
        item: {}
    },
    data() {
        return {
            editor: ClassicEditor,
            data_: [{
                    label: 'Titre de procedure',
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
        btn_,
        selectOption
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        },
        setVal(item) {
            if (item.title) {
                this.data_[0].model = item.title 
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
