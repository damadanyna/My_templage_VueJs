<template>
<div class="flex mb-1">
    <button v-if="eshowFormulaire==tru" @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
    </button>
</div>
<div class=" w-full flex flex-row"> 
    <div class="flex flex-col mr-2 w-[50%]"> 
        <sessionChat class=" bg-white rounded-md px-5"></sessionChat>
        <DetailFormation class=" bg-white rounded-md px-5 mt-6"></DetailFormation>
    </div>
    <div class="flex flex-col ml-2 w-[50%]">
        <moduleFormationVue class=" bg-white rounded-md px-5"></moduleFormationVue>
        <espaceDocumentaireVue class=" bg-white rounded-md px-5 mt-6"></espaceDocumentaireVue>
    </div>
</div>
</template>

<script>
import sessionChat from '../../components/poppup/sessionFomation/components/sessionChat.vue';
import espaceDocumentaireVue from '../../components/poppup/sessionFomation/components/espaceDocumentaire.vue';
import DetailFormation from '../../components/poppup/sessionFomation/components/detailFormation.vue';
import moduleFormationVue from '../../components/poppup/sessionFomation/components/moduleFormation.vue';

export default {
    components: {
        sessionChat,
        moduleFormationVue,
        espaceDocumentaireVue,
        DetailFormation
    }
}
</script>

<style>

</style>
