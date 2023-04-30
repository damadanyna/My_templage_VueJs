<template>
<div class="flex flex-col h-full">
    <div class="flex flex-row z-50   bg-stone-100 text-stone-600 justify-between sticky -top-4 w-full pt-1 pb-2">
        <h1 class=" text-lg text-black font-bold">Veilles réglementaire</h1>
        <btn_ :options="{label:'Flux RSS',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>

    </div>
    <div class="flex flex-col rounded-lg bg-white"> 
        <legale></legale>
        <pedagogique></pedagogique>
        <metier></metier>
    </div>
</div>
</template>

<script>
import legale from './veille/legale.vue';
import pedagogique from './veille/pedagogique.vue';
import metier from './veille/metier.vue';
export default {
    components: {
        legale,pedagogique,metier
    },
    data() {
        return {}
    }

}
</script>

<style>
        
        </style>
