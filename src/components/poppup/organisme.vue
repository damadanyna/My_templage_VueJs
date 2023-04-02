<template>
<div id="poppupOrganisme"  >
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
                <textArea_ class=" w-full" :options="data_[4]"></textArea_>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || this.data_[2].model=='' || this.data_[3].model==''|| this.data_[4].model==''?' opacity-50':' opacity-100'" class=" duration-300 flex mt-3 justify-end flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'Valider',style:' bg-stone-900 text-white',ico:$store.state.icons.done}"></btn_>
        </div>
    </div>
</div>
</template>

<script>
import input_ from '../input/inputTxt.vue'
import textArea_ from '../input/textarea.vue'
import btn_ from '../button/btn_.vue';
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
                    label: 'Code Postal',
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
                    label: 'Commentaire publique',
                    model: '',
                },
            ],

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
    },
    mounted() { 
        gsap.fromTo("#poppupOrganisme", 
    { 
      opacity: 0, 

    },
    {  
        duration:.5,
      opacity: 1,
    });
    }
}
</script>

<style>

</style>
