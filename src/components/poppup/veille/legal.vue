<template>
<div class="flex flex-col h-full">
    <div class="flex flex-col overflow-hidden h-full  ">
        <div class="flex flex-col  w-[100%] h-full">
            <div class="flex flex-row z-50   bg-stone-100 text-stone-600 items-center w-full pt-1 pb-2">
                <button @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
                <h1 class=" text-lg text-black font-bold">Légale et règlementaire</h1>
            </div>
            <div class="  flex flex-col h-full py-11  bg-white rounded-lg">
                <legaleVue :options="{limite:100}"></legaleVue>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import legaleVue from '../../../views/veille/legale.vue'
export default {
    components: {
        legaleVue
    },

}
</script>

<style>

</style>
