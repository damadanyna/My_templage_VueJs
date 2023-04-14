<template>
<div class=" flex flex-row overflow-hidden">
    <div class="flex w-[30%] bg-white rounded-md shadow-md mb-1 flex-col px-7 py-6">
        <button v-for="item,i in menu" :key="i" :class=" index==i?'bg-[#0F9EC2] text-white':' text-[#0F9EC2]'" @click="()=>{index=i}" class=" text-start  border my-2  border-[#0F9EC2] flex flex-row justify-start py-5 rounded-md px-4 ">
            {{item.label }}
        </button>
    </div>
    <div class=" w-[70%] mx-3 shadow-md mb-1 rounded-md bg-white overflow-hidden py-7 justify-center flex flex-col items-center">
        <span class=" mt-14 text-xl font-semibold text-[#42898B]">{{ menu[index].label }}</span>
        <div class=" w-full flex px-14 my-4">
            <span class=" w-full h-[2px] bg-stone-300"></span>
        </div>
        <nbrBenef v-if=" index==0"></nbrBenef>
        <nbrSession v-if=" index==1"></nbrSession>
    </div>
</div>
</template>

<script>
import nbrBenef from '../components/poppup/statistique/nbrBeneficiaire.vue'
import nbrSession from '../components/poppup/statistique/nbrSession.vue'
export default {
    components: {
        nbrBenef,
        nbrSession
    },
    data() {
        return {
            menu: [{
                    ico: '',
                    label: 'Nombre de bénéficiaire'
                },
                {
                    ico: '',
                    label: 'Nombre de session'
                },
                {
                    ico: '',
                    label: 'Nombre de bénéficiaire par session moyen'
                },
                {
                    ico: '',
                    label: 'State Ma formation 1'
                },
            ],
            index: 0
        }
    },
}
</script>

<style>
  
  </style>
