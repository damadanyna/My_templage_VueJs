<template>
<div class="flex flex-col w-full px-3 py-7">
    <div class="flex  flex-row items-center justify-between">
        <span class=" text-lg font-semibold">Paramètre :</span>
        <div class="flex  flex-row">
            <div class="flex flex-row items-center">
                <span class=" font-semibold">Durée</span>
                <button class="  mx-3 color_base text-lg" @click="()=>{decrement()}">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1 w-5 mr-1" v-text="heure<10?'0'+heure:heure"></span>
                    <span>hrs</span>
                </div>
                <button class=" p-1 mx-3 color_base text-lg" @click="()=>{increment()}" >+</button>
            </div>
            <div class="flex flex-row items-center ml-14">
                <button class=" p-1 mx-3 color_base text-lg"  @click="()=>{decrementMin()}">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1 w-5 mr-1" v-text="min<10?'0'+min:min"></span>
                    <span>min</span>
                </div>
                <button class=" p-1 mx-3 color_base text-lg"  @click="()=>{incrementMin()}">+</button>
            </div>
        </div>
    </div>
    <div class="flex pl-5 flex-col">
        <div class=" mt-5  ">
            <inputTxtVue :options="{label:'Titre du module',model:'',type:'text'}"></inputTxtVue>
        </div>
        <div class="flex  flex-col mt-6">
            <span class=" font-semibold  ">Ressource documentaire associer</span>
            <div class="h-full w-full flex flex-row justify-between ">
                <btn_ @click="()=>{showFormulaire=true}" class=" mt-3" :options="{label:'Document associé',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

                <div v-for="item, i in importFichier" :key="i" class="flex flex-row">
                    <btn_ class=" mt-3" :options="{label:item.text_fichier,ico2Style:' text-white bg-[#63B6B9]',style:' bg-gray-300 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
                </div>
            </div>
        </div>
        <div class="flex  flex-col mt-6">
            <span class=" font-semibold  ">Méthode pédagogique</span>
            <div class="h-full w-full flex flex-row justify-between ">
                <div v-for="item, i in importFichierMethPed" :key="i" class="flex flex-row">
                    <btn_ class=" mt-3" :options="{label:item.text_fichier,ico2Style:' text-white bg-[#63B6B9]',style:' bg-gray-300 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
                </div>
                <btn_ class=" mt-3 opacity-0" :options="{label:'Document associé',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

            </div>
        </div>
        <tableVue :options="{class:'h-[40vh]'}"></tableVue>
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue'
import inputTxtVue from '../../input/inputTxt.vue' 
import tableVue from './paramètre/table.vue' 
export default {
    components: {
        inputTxtVue,
        btn_,
        tableVue
    },
    data() {
        return {
            heure:2,
            min:30,
            importFichier: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
            importFichierMethPed: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
        }
    },
    methods:{
        decrement(){ 
            return this.heure>1? this.heure-=1:1
        },
        increment(){ 
            return this.heure<10? this.heure+=1:10
        },
        decrementMin(){ 
            return this.min>0? this.min-=15:0
        },
        incrementMin(){ 
            return this.min<45? this.min+=15:0
        },
        goto_(id){
            this.$router.push({name:'consulter',query:{name:'name'},params:{id:id}})
            
        }
    }

}
</script>

<style>

</style>
