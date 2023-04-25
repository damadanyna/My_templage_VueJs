<template>
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
import sessionChat from '../../components/poppup/sessionFomation/sessionChat.vue';
import espaceDocumentaireVue from '../../components/poppup/sessionFomation/espaceDocumentaire.vue';
import DetailFormation from '../../components/poppup/sessionFomation/detailFormation.vue';
import moduleFormationVue from '../../components/poppup/sessionFomation/moduleFormation.vue';

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
