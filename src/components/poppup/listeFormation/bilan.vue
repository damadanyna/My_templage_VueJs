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
            <span class=" text-teal-500 text-xs mt-2">*Lié à un membre d'équipe</span>
            <div class="flex mt-5 flex-row w-full">
                <textArea_ class=" w-full" :options="data_[4]"></textArea_>
                <textArea_ class=" w-full ml-3" :options="data_[5]"></textArea_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[6]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[7]"></input_>
            </div>
            <div class="flex flex-col">
                <span class=" text-teal-500 text-xs mt-2">*Délais des alertes si aucune activité est recensé </span>
                <span class=" text-teal-500 text-xs ">sur le compte d'un bénéficiaire</span>
            </div>
            <div class="flex flex-row">

                <div class="flex mt-5 flex-col w-full">
                    <span class=" font-bold">Accessibilité aux personnes handicapées</span>
                    <span class=" flex text-xs">Si vous êtes en situation e handicape nous contacter,  afin d’évaluer l’accès à la formation</span>
                </div>
                <div class="flex mt-5 ml-3 flex-row w-full">
                    <textArea_ class=" w-full " :options="data_[8]"></textArea_>
                </div>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" duration-300 flex mt-12 justify-center  flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'Programme',style:' base_bg text-white',ico:$store.state.icons.done}"></btn_>
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
                    label: 'Tarif',
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
                    label: 'Méthodes mobilisées',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Modalités pédagogiques',
                    model: '',
                },
                {
                    label: 'Prérequis',
                    model: '',
                },

                {
                    label: 'Modalités de l’etude personalisé',
                    model: '',
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
