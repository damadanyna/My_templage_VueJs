<template>
<div class=" flex py-3 flex-col">
    <div class="flex flex-row justify-between w-full">
        <span class=" text-lg font-semibold">Tchat de session de formation</span>
        <btn_ class=" " :options="{label:'Fiche de présence',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
    </div>
    <!-- boutton du session -->
    <div class="flex py-2 flex-row  w-full font-semibold mt-5">
        <btn_ @click="()=>{index=0}" class=" " :options="{label:'Séssion',style:index==0?'base_bg text-white py-2 text-stone-800 ':'bg-stone-300 color_base py-2 text-stone-800 '}"></btn_>
        <btn_ @click="()=>{index=1}" class=" ml-6" :options="{label:'Formateur 1',style:index==1?'base_bg text-white py-2 text-stone-800 ':'bg-stone-300 color_base py-2 text-stone-800 '}"></btn_>
        <btn_ @click="()=>{index=2}" class=" ml-6" :options="{label:'Responsable pédagogique',style:index==2?'base_bg text-white py-2 text-stone-800 ':'bg-stone-300 color_base py-2 text-stone-800 '}"></btn_>
    </div>

    <!-- componsent de la session -->
    <div class="flex flex-col">
        <chatSessionVue v-if="index==0"></chatSessionVue>
        <chatSessionVue v-if="index==1"></chatSessionVue>
        <chatSessionVue v-if="index==2"></chatSessionVue>
    </div>
</div>
</template>

<script>
import btn_ from '../../../button/btn_.vue'; 
import chatSessionVue from './sessionChat/chatSession.vue';

export default {
    components: {
        btn_, chatSessionVue
    },
    data() {
        return {
            index:0
        }
    },
    methods: {

        
    },
    mounted() {
        // setTimeout(() => {
        //     var msg = document.getElementById('message_contener');
        //     msg.scrollTop = msg.scrollHeight;
        // }, 200);
    },
}
</script>

<style>

</style>
