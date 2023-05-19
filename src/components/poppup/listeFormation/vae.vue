<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-6 py-5 flex-col z-20">
        <div class=" mt-8 flex flex-col">

            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[0]"></input_>
                <input_ class=" w-full ml-3" :options="data_[1]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[2]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[3]"></input_>
            </div>

            <div class="flex mt-5 flex-row w-full">  
                <input_ class=" w-full " :options="data_[13]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[10]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[11]"></input_>
            </div>
            <!-- <span class=" text-teal-500 text_xs mt-2">*Lié à un membre d'équipe</span> -->
            <div class="flex mt-5 flex-row w-full">
                <textArea_ class=" w-full" title="Modalités et délais d’accès à la formation" :options="data_[4]"></textArea_>
            </div>
            <div class="flex mt-5 flex-row w-full">
                <textArea_ class=" w-full" :options="data_[5]"></textArea_>
            </div>
            <div class="flex mt-5 flex-row w-full">
                <textArea_ class=" w-full " :options="data_[6]"></textArea_>
            </div>

            <!-- <span class=" text-teal-500 text_xs mt-2">*Délais des alertes si aucune activité est recensé sur le compte d'un bénéficiaire</span> -->
            <div class="flex mt-5 flex-row w-full">
                <div class=" flex flex-col w-full">
                    <input_ class=" w-full" :options="data_[7]"></input_>
                </div>
                <div class="flex w-full">
                    <textArea_ class=" w-full ml-3" :options="data_[8]"></textArea_>
                </div>
            </div>

            <textArea_ class=" w-full mt-5" :options="data_[9]"></textArea_>
            <div class=" mt-5">
                <ckeditor class=" mt-5" :editor="editor" v-model="data_[12].model" @input="onEditorInput"></ckeditor>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" duration-300 flex mt-12 justify-center  flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'Programme',style:' base_bg text-white',ico:$store.state.icons.done}"></btn_>
        </div>
    </div>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import btn_ from '../../button/btn_.vue';
import gsap from 'gsap'
export default {
    data() {
        return {
            editor: ClassicEditor,
            data_: [{
                    label: 'Titre',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Durée',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Contacts',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Méthodes mobilisées',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Modalités d’évaluation',
                    model: '',
                },
                {
                    label: 'Modalités et délais d’accès...',
                    model: '',
                },
                {
                    label: 'Délais des alertes',
                    model: '',
                    type: 'date'
                },
                {
                    label: 'Tarif',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Modalités pédagogiques',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Modalités d’inscription et de fesabilité ',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Niveau du diplôme',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Titre du diplôme',
                    model: '',
                    type: 'text'
                },
                // block
                {
                    label: ' ',
                    model: '',
                },
                {
                    label: 'RNCP',
                    model: '',
                    type: 'text'
                },

{
    label: 'RNCP',
    model: '',
    type: 'text'
},

            ],
            selected: 'IB',
            isChecked: false
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
