<template>
<div class="flex flex-col h-full">
    <div class="flex flex-row z-50 px-10  bg-stone-100 text-stone-600 justify-between sticky -top-4 w-full pt-2 pb-9">
        <h1 class=" text-lg font-bold">Séssions Formations</h1>
        <btn_Vue :options="{label:'Flux RSS',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_Vue>

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
