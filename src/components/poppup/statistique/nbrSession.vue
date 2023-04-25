<template>
    <flex class="flex flex-col w-full">
    <div class="flex flex-row w-full">
        <div v-for=" item, i in boites" :key="i" class=" py-7 flex items-center w-full justify-between bg-stone-800 ml-[1px] text-white text-center flex-col">
            <span class=" text_xs font-bold">{{ item.label }}</span>
            <span class=" text-2xl font-semibold">{{ item.nbr }}</span>
        </div>
    </div>
    <div class=" w-full flex flex-row justify-between"> 
        <sessionEnCours></sessionEnCours>  
        <barSession></barSession>  
        <lineSession></lineSession>  
    </div>
    </flex>
    </template>
    
    <script> 
    import barSession from './session/barSession.vue'
    import sessionEnCours from './session/sessionEnCours.vue';
    import lineSession from './session/lineSession.vue';
    export default { 
        components:{
            sessionEnCours,
            barSession,
            lineSession
        },
        data(){
            return{
                boites:[
                    {
                        label:'Nombre totales',
                        nbr:14.236
                    },
                    {
                        label:'Session ACTIF',
                        nbr:168
                    },
                    {
                        label:'Beneficiaire dans une session actif',
                        nbr:0
                    },
                ]
            }
        }
    }
    </script>
    
    <style>
    
    </style>
    