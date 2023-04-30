<template>
<div class=" h-full w-full flex flex-col">
    <div class="flex text-lg items-center justify-start sticky z-10 top-0 bg-white  flex-row">
        <div class="flex flex-row  items-center">
            <h1 class="  w-full  font-bold text-stone-800 pt-4 pb-4">Etat :</h1>
            <span class=" ml-2 color_base text_xs rounded-md bg-teal-100  py-1 px-7"> Actif </span>
        </div>
    </div>
    <div class="grid  grid-cols-2 w-full  mt-10">
        <div class=" my-2 px-1 w-full" v-for="item,i in data_ " :key="i">
            <input_ class=" z-10 w-full " :options="item"></input_>
        </div>
    </div>
    <div class=" color_base mt-7 text_xs flex flex-col">
        <span class=" font-semibold">Contrat de travail</span>
        <div class="flex">
            <btn_ class=" bg-white mt-3" :options="{label:'Contrat de travail.pdf',ico2Style:'color_base',style:'   text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
        </div>
    </div>
</div>
</template>

<script> 
import btn_ from '../../button/btn_.vue';
import input_ from '../../input/inputTxt.vue'; 
export default {
    props: {
        item: {}
    },
    components: {
        btn_,
        input_
    },
    data() {
        return {
            data_: [{
                label: 'Nom',
                model: '',
                type: 'text',
            }, {
                label: 'Prenom',
                model: '',
                type: 'text',
            }, {
                label: 'Adresse',
                model: '',
                type: 'text'
            }, {
                label: 'Code postal',
                model: '',
                type: 'text'
            }, {
                label: 'Ville',
                model: '',
                type: 'text'
            }, {
                label: 'Pays',
                model: '',
                type: 'text'
            }, ],
            liste: ['Reférent handicap', 'Reféret pédago', 'Formateur', 'Référent administratif', 'Référent commercial', 'Responsable qualité', 'Responsable logistique']
        }
    },
    methods: {
        setVal(item) {
            if (item.nom) { 
                this.data_[0].model = item.nom
                this.data_[1].model = item.prenom
            }
        }
    },
    mounted() { 
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
