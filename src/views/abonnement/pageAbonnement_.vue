<template>
<div class="flex flex-col h-full">

    <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
        <h1 class=" text-lg">Page abonnement</h1>
    </div>
    <div class="flex flex-col px-4 bg-white rounded-lg ">
        <div class="flex flex-row py-12 w-full justify-center">
            <span class=" text-[#42898B] font-bold text-xl">Informations de payement :</span>
        </div>
        <div class="flex flex-row w-full">
            <div class="flex flex-col w-[50%]">
                <span class=" text-[#63B6B9] font-semibold text-sm">Informations de facturation :</span>
                <infoFacturation class="flex  "></infoFacturation>
            </div> 
            <div class="flex flex-col w-[50%]">
                <span class=" text-[#63B6B9] font-semibold text-sm">Informations de paiement :</span>
                <infoPaie class="flex  "></infoPaie>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import infoFacturation from '../../components/poppup/abonement/infoFacturation.vue';
import infoPaie from '../../components/poppup/abonement/infoPaie.vue'; 

export default {
    components: {
        btn_,
        infoFacturation,infoPaie
    },
    data() {
        return {

        }
    }

}
</script>

<style>
    
    </style>
