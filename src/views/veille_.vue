<template>
<div v-if="$route.name=='veille'" class="flex flex-col h-full">
    <div class="flex flex-row z-50   bg-stone-100 text-stone-600 justify-between sticky -top-4 w-full pt-1 pb-2">
        <h1 class=" text-lg text-black font-bold">Veilles réglementaire</h1>
        <btn_ class="mr-4" :options="{label:'Flux RSS',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>
    </div>
    <div class="flex flex-col   bg-white rounded-lg pb-12">
        <!-- legale et règlement -->
        <div class="flex text-lg items-center rounded-lg justify-start sticky z-10  bg-white top-0  flex-col px-6">
            <div class="flex flex-row sticky top-4 px-5 py-7 w-full justify-between items-center mt-6">
                <h5 class=" font-semibold text-lg">Légale et règlementaire</h5>
                <btn_ @click="()=>{$router.push({ name: 'legal'})}" :options="{label:'Veille',style:' py-1 base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>
            </div>
            <legale :options="{limite:5}"></legale>
        </div>

        <!-- pedagogique -->
        <div class="flex text-lg items-center rounded-lg justify-start sticky z-10  bg-white top-0  flex-col px-6">
            <div class="flex flex-row sticky top-4 px-5 py-7 w-full justify-between items-center mt-6">
                <h5 class=" font-semibold text-lg">Veille pédagogique</h5>
                <btn_ @click="()=>{$router.push({ name: 'pedagogique'})}" :options="{label:'Veille',style:' py-1 base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>
             </div> 
            <pedagogique  :options="{limite:5}"></pedagogique>
        </div>

        <!-- metier -->
        <div class="flex text-lg items-center rounded-lg justify-start sticky z-10  bg-white top-0  flex-col px-6">
            <div class="flex flex-row sticky top-4 px-5 py-7 w-full justify-between items-center mt-6">
                <h5 class=" font-semibold text-lg">Veille du métier</h5>
                <btn_ @click="()=>{$router.push({ name: 'metier'})}" :options="{label:'Veille',style:' py-1 base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>
             </div>
            <metier  :options="{limite:5}"></metier>
        </div>
    </div>
</div>
<router-view v-else></router-view>
</template>

<script>
import legale from './veille/legale.vue';
import pedagogique from './veille/pedagogique.vue';
import metier from './veille/metier.vue';
import btn_ from '../components/button/btn_.vue';
export default {
    components: {
        legale,
        pedagogique,
        metier,
        btn_
    },
    data() {
        return {}
    }

}
</script>

<style>
        
        </style>
