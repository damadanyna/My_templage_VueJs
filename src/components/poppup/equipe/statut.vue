<template>
<div class=" h-full w-full flex flex-col"> 
    <div class="flex flex-row items-center">
        <span class=" text_xs font-semibold">Fonction :</span>
        <input_ v-if="add==true" class=" z-10 w-[20vw] ml-3" :options="input"></input_>
        <button v-if="add==true" @click="()=> {addliste()}" class=" ml-2 base_bg p-1 rounded-md">
            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
        </button>
        <button @click="()=>{this.add=false}" v-if="add==true" class=" ml-2 bg-stone-100 p-1 rounded-md">
            <svg class=" w-5 fill-current text-red" viewBox="0 0 24 24">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
        </button>
    </div>
    <div class="mt-3 grid grid-cols-4 max-w-full  ">

        <div v-for="item,i in liste" :key="i" @click="()=>{item[1]=!item[1]}" class=" w-full flex bg-white  ">
            <div :class="item[1]!=true?' color_base bg-stone-200 ':' base_bg text-white'" class=" flex flex-row w-full m-1 pb-2 justify-center py-1 items-center rounded-md  ">
                <checkBtnVue v-if="item[1]!=true" class=" mt-1" :options="{iconStyle:'hidden',text:item[0],checked:false,style:'text_xs color_base bg-stone-200   rounded-md py-0 '}"></checkBtnVue>
                <checkBtnVue v-else class=" mt-1" :options="{iconStyle:'hidden',text:item[0],checked:true,style:'text_xs text-white base_bg   rounded-md py-0 '}"></checkBtnVue>

            </div>
        </div>
        <btn_ @click="add=true" v-if="add!=true" class=" mx-2 w-full pr-3 " :options="{label:'Ajouter',style:' my-1 base_bg py-3 text-white w-full ',ico:$store.state.icons.plus}"></btn_>
    </div>
    <div class="flex flex-col mt-10">
        <div v-if="email.editable==true" class="flex flex-row">
            <input_ class=" z-10 w-8/12 ml-3" :options="email"></input_>
            <button class=" p-1 bg-stone-200 rounded-md ml-1 px-2" @click="()=>{email.editable=false}">
                <svg class=" w-4 fill-current color_base" viewBox="0 0 24 24">
                    <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
            </button>
        </div>
        <div v-else class=" group border-[1px] items-center  w-3/4 rounded-lg px-3 flex flex-row  border-[#63B6B9] ">
            <div class=" flex relative z-0  ">
                <span class=" -mt-6  text_xs w-24 z-0 ml-2 bg-white px-1 duration-300 absolute" v-text="email.label"></span>
            </div>
            <span class=" text_xs w-full text-stone-600 " v-text="email.model"></span>
            <button @click="()=>{email.editable=true}">
                <svg class=" w-4 fill-current color_base" viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
            </button>
        </div>
        <!-- <span class=" mx-3 mt-5 color_base text_xs">*Verification si un compte formateur est dejà créer</span> -->
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue';
import checkBtnVue from '../../button/checkBtn.vue';
import input_ from '../../input/inputTxt.vue';

export default {
    components: {
        btn_,
        input_,
        checkBtnVue,
    },
    data() {
        return {
            add: false,
           
            email: {
                label: 'Adresse email',
                model: 'johndoe@gmail.com',
                type: 'email',
                editable: false
            },
            indexSat: 0,
            input: {
                label: 'Nouvelle fonction',
                model: '',
                type: 'text'
            },
            liste: [
                ['Reférent handicap', false],
                ['Reféret pédago', false],
                ['Formateur', false],
                ['Référent administratif', false],
                ['Référent commercial', false],
                ['Responsable qualité', false],
                ['Responsable logistique', false],
                ['Référence mobilité National et international', false]
            ]
        }
    },
    methods: {
        addliste() {
            if (this.input.model != "") {
                this.liste.push([this.input.model, false])
                this.input.model=""
            }
        }
    }
}
</script>

<style> 
</style>
