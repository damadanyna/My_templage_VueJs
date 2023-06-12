<template>
<div class="flex flex-row py-2 bg-gray-200 justify-between items-center text_xs px-10 ">
    <div class=" w-2/3 flex flex-row items-center">
        <img class=" w-7" src="../../assets/Logo_DF_2.svg" alt="">
        <span>DOSSIER</span>
        <span class=" ml-3 text-[#63B6B9]">FORMATION</span>
    </div>
    <div class="flex w-full  justify-between items-center">
        <div class="flex flex-row">
            <div v-for="item,i in menu_" :key="i" class=" ml-3">
                <span v-text="item.label"></span>
            </div>
        </div>
        <div class="">
            © Copyright 2023 Dossier Formation by Factory Online
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu_: [{
                    label: 'Mention legal'
                },
                {
                    label: 'Cookie'
                },
                {
                    label: 'Tarifs'
                },
                {
                    label: 'Contact'
                },
                {
                    label: 'FAQ'
                },
            ]
        }
    }
}
</script>

<style>

</style>
