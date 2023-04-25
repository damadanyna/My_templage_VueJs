<template>
<div class=" h-full w-full flex flex-col">
    <div class="flex text-lg sticky z-10 top-12 bg-white  flex-row">
        <h1 class=" w-full font-bold text-stone-800 py-5 ">Statut :</h1>
    </div>
    <span class=" text-sm font-semibold">Fonction :</span>
    <div class="mt-3 grid grid-cols-3  ">
        <div class=" flex" v-for="item,i in liste" :key="i">
            <div class=" px-3 my-1 py-1 mx-2 w-full  bg-stone-200 rounded-md">
                <span v-text="item" class="  text-sm "></span>
            </div>
        </div>
        <btn_ class=" mx-2  py-0 w-32" :options="{label:'Ajouter',style:' base_bg text-white w-full',ico:$store.state.icons.plus}"></btn_>
    </div>
    <div class="flex flex-col mt-10">
        <div v-if="email.editable==true" class="flex flex-row">
            <input_ class=" z-10 w-8/12 ml-3" :options="email"></input_>
            <button class=" p-1 bg-stone-200 rounded-md ml-1 px-2" @click="()=>{email.editable=false}">
                <svg class=" w-4 fill-current text-[#63B6B9]" viewBox="0 0 24 24"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
             </button>
        </div>
        <div v-else class=" group border-[1px] items-center  w-3/4 rounded-lg px-3 flex flex-row  border-[#63B6B9] ">
            <div class=" flex relative z-0  ">
                <span class=" -mt-6  text_xs w-24 z-0 ml-2 bg-white px-1 duration-300 absolute" v-text="email.label"></span>
            </div>
            <span class=" text-sm w-full text-stone-600 " v-text="email.model"></span>
            <button @click="()=>{email.editable=true}">
                <svg class=" w-4 fill-current text-[#63B6B9]" viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
            </button>
        </div>
        <span class=" mx-3 mt-5 text-[#63B6B9] text-sm">*Verification si un compte formateur est dejà créer</span>
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue';
import input_ from '../../input/inputTxt.vue';

export default {
    components: {
        btn_,
        input_
    },
    data() {
        return {
            email: {
                label: 'Adresse email',
                model: 'johndoe@gmail.com',
                type: 'email',
                editable: false
            },
            liste: ['Reférent handicap', 'Reféret pédago', 'Formateur', 'Référent administratif', 'Référent commercial', 'Responsable qualité', 'Responsable logistique']
        }
    }
}
</script>

<style> 
</style>
