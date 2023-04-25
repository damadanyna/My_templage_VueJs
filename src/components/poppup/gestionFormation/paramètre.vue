<template>
<div class="flex flex-col w-full px-3 py-7">
    <div class="flex flex-row justify-between">
        <span class=" text-lg font-semibold">Paramètre :</span>
        <div class="flex flex-row">
            <div class="flex flex-row items-center">
                <span>Durée</span>
                <button class=" p-1 mx-3 text-[#63B6B9] text-lg">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1">02</span>
                    <span>hrs</span>
                </div>
                <button class=" p-1 mx-3 text-[#63B6B9] text-lg">+</button>
            </div>
            <div class="flex flex-row items-center ml-14"> 
                <button class=" p-1 mx-3 text-[#63B6B9] text-lg">-</button>
                <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                    <span class=" px-1">30</span>
                    <span>min</span>
                </div>
                <button class=" p-1 mx-3 text-[#63B6B9] text-lg">+</button>
            </div>
        </div>
    </div>
    <div class=" mt-5">
        <inputTxtVue :options="{label:'Titre du module',model:'',type:'text'}"></inputTxtVue>
    </div>
    <div class="flex flex-col mt-6">
        <span class=" font-semibold text-[ ]">Ressource documentaire associer</span>
        <btn_ @click="()=>{showFormulaire=true}" class=" mt-3" :options="{label:'Document associé',ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                   
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue'
import inputTxtVue from '../../input/inputTxt.vue'  
export default {
    components: {
        inputTxtVue,
        btn_
    }

}
</script>

<style>

</style>
