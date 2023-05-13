<template>
<div class=" h-full w-full flex flex-col">
    <div class="flex text-lg items-center justify-start sticky z-10 top-0 bg-white  flex-row">
         
    </div>
    <div class=" w-full h-full flex flex-col   rounded-md py-6 ">
        <div class="grid  grid-cols-2 w-full ">
            <div class=" my-2 px-1 w-full" v-for="item,i in data " :key="i">
                <input_ class=" z-10 w-full bg-white " :options="item"></input_>
            </div>
        </div>

        <div class="flex flex-col justify-center px-2 text_xs mt-2">
            <span class=" font-semibold">TEST QUALIOPI</span>
            <div class="flex flex-row items-center mt-5">
                <btn_ class=" bg-white   rounded-md" :options="{label:'document1.pdf',ico2Style:'color_base',style:' py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
                <btn_ class=" mx-2    w-32" :options="{label:'Ajouter',style:' py-2 base_bg text-white w-full',ico:$store.state.icons.plus}"></btn_>
   
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue';
import input_ from '../../input/inputTxt.vue';

export default {
    components: {
        btn_,
        input_
    },
    data() {
        return {
            data: [{
                label: 'Raison social',
                model: '',
                type: 'text',
            }, {
                label: 'SIREN',
                model: '',
                type: 'text',
            }, {
                label: 'SIRET',
                model: '',
                type: 'text'
            }, ],
            liste: ['Reférent handicap', 'Reféret pédago', 'Formateur', 'Référent administratif', 'Référent commercial', 'Responsable qualité', 'Responsable logistique']
        }
    }
}
</script>

<style> 
        </style>
