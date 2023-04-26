<template>
<div class="flex flex-col">
    <div class="flex flex-row w-full justify-between py-5 mt-2">
        <span class=" text-lg font-semibold ">Detail de la formation</span>
    </div>
    <div class="flex flex-row">
        <div class="flex w-1/2 mr-2 flex-col border-">
            <span class=" text_xs font-semibold h-4"> </span>
            <input_ class="   mr-2 py-2" :options="{ label: 'Date début de formation', model:'',type: 'date'}"></input_>
        </div>
        <div class="flex w-1/2 ml-2 flex-col border-">
            <span class=" text_xs font-semibold">Modalités et délais d’accès ?</span>
            <div class="flex justify-between px-7 w-full flex-row py-2 bg-stone-300 border-[1px] border-[#63B6B9] rounded-md">
                <div class="flex flex-row cursor-pointer" @click="()=>{isPresenciel=true}">
                    <svg v-if="isPresenciel==false" class=" fill-current text-[#63B6B9] w-4" viewBox="0 0 24 24">
                        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                    <svg v-else class=" fill-current text-[#63B6B9] w-4" viewBox="0 0 24 24">
                        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z" /></svg>
                    <span>Distanciel</span>
                </div>
                <div class="flex flex-row cursor-pointer" @click="()=>{isPresenciel=false}">
                    <svg v-if="isPresenciel!=false" class=" fill-current text-[#63B6B9] w-4" viewBox="0 0 24 24">
                        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                    <svg v-else class=" fill-current text-[#63B6B9] w-4" viewBox="0 0 24 24">
                        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z" /></svg>
                    <span>Présenciel</span>
                </div>
            </div>
        </div>
    </div>

    <!-- si présentiel -->
    <div class="flex  py-6 justify-between mt-4 px-7 w-full flex-col bg-stone-300 border-[1px] border-[#63B6B9] rounded-md">
        <div class="flex flex-row justify-between">
            <span class=" text-[#0F9EC2] font-semibold text-lg">Si présentiel</span>
            <div class="flex flex-row ">
                <btn_ @click="()=>{showFormulaire=true}" class=" mr-1 " :options="{label:'Bibliothéque sites',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                <btn_ @click="()=>{showFormulaire=true}" class=" ml-1 " :options="{label:'Nouveau sites',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

            </div>
        </div>
        <div class="flex flex-row mt-4 justify-between">
            <div class="flex w-[40%] flex-row">
                <input_ class=" w-full bg-white " :options="{ label: 'Site de formation', model:'',type: 'text'}"></input_>
            </div>
            <div class="flex w-[60%] items-center  justify-end flex-row">
                <span class=" mr-3 text_xs font-semibold text-[#63B6B9]">Titre de site :</span>
               
                <selectOption :options="nomFormation"></selectOption>  
            </div>
        </div>
        <!-- tableau de titre du site -->
        <div class="flex w-full text_xs mt-4 h-96 overflow-auto">
            <table class=" text_xs  w-full items-start px-1">
                <tr class=" w-full sticky top-0 bg-stone-300 py-5  ">
                    <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                    <th class="  w-[46%] text-start text-stone-500  pl-5 border-r border-stone-200 ">TitreSite</th>
                    <th class=" py-3  w-[19%] text-start text-stone-500 pl-5  ">Actions</th>
                </tr>
                <tr v-for="i in 20" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td class=" text-gray-500 px-2" v-text="i"></td>
                    <td class="pl-5" v-text="'Ligne'+i"></td>
                    <td class=" px-2">
                        <div class=" flex flex-row items-center py-1">

                            <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                            </button>
                            <button class=" bg-slate-100 py-1 px-1 rounded-md">
                                <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <!-- formulaire  -->
        <div class="flex w-full flex-row mt-11 justify-between">
            <input_ class=" w-full mr-2 bg-white py-1" :options="data[0]"></input_>
            <input_ class=" w-full ml-2 bg-white py-1" :options="data[1]"></input_>
        </div>
        <div class="flex w-full flex-row mt-5 justify-between">
            <input_ class=" w-full mr-2 bg-white py-1" :options="data[2]"></input_>
            <input_ class=" w-full mx-2 bg-white py-1" :options="data[3]"></input_>
            <input_ class=" w-full ml-2 bg-white py-1" :options="data[4]"></input_>
        </div>

        <textArea_ class=" w-full mt-5 bg-white " :options="data[5]"></textArea_>
        <textArea_ class=" w-full mt-5 bg-white " :options="data[6]"></textArea_>
    </div>
    <!-- Si distanciel -->
    <div class="flex  py-3 justify-between mt-4 px-7 w-full flex-col bg-stone-300 border-[1px] border-[#63B6B9] rounded-md">
        <div class="flex flex-col justify-between">
            <span class=" text-[#0F9EC2] font-semibold text-lg">Si présentiel</span>
            <span class="text_xs mt-3">Condition d’accès au cours</span>
            <div class="flex mt-3">
                <btn_ class=" bg-stone-300 rounded-md" :options="{label:'Condition d’accès au cours.pdf',ico2Style:'text-[#63B6B9]',style:' py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
            </div>
        </div>
    </div>
    <div class="flex flex-col  mt-7 text_xs">
        <span class="text_xs font-semibold  text-[#63B6B9]">Quelques modèles</span>
        <div class="flex flex-row mt-6">
            <div class="flex flex-col mr-2">
                <span>Modèle de convocation</span>
                <btn_ class="rounded-md" :options="{label:'Modèle de convocation.pdf',ico2Style:'text-[#63B6B9]',style:' py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
            </div>
            <div class="flex flex-col ml-2">
                <span>Modèle d’attestation de formation</span>
                <btn_ class="rounded-md" :options="{label:'Condition d’accès au cours.pdf',ico2Style:'text-[#63B6B9]',style:' py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
            </div>
        </div>
        <div class="flex flex-row mt-6">
            <div class="flex flex-col">
                <span>Modèle alerte début formation</span>
                <btn_ class="rounded-md" :options="{label:'Modèle de convocation.pdf',ico2Style:'text-[#63B6B9]',style:' py-1 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown}"></btn_>
            </div>
        </div>
    </div>
    <span class=" text-lg font-semibold mt-9 mb-5">Espace documentaire de la formation</span>
    <!-- tableau de titre du site -->
    <!-- <div class=" z-20 sticky top-6 mx-3 bg-white rounded-lg py-5 flex justify-between w-full">
        <span class=" font-semibold ">Espace documentaire de la formation</span>
    </div> -->

    <div class="flex flex-row">
        <btn_ class=" " :options="{label:'Nouveau Objectif',style:' px-0 base_bg text_xs  text-white ',ico:$store.state.icons.plus}"></btn_>
        <btn_ class=" ml-2 " :options="{label:'Bibliothéque d\'objectif',style:' base_bg text_xs  text-white ',ico:$store.state.icons.list}"></btn_>
    </div>

    <div class="flex w-full text_xs mt-4">
        <table class=" w-full items-start px-1">
            <tr class=" w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[76%] text-start text-stone-500  pl-5 ">Titre</th>
                <th class="  w-[16%] text-start text-stone-500  pl-5 ">Public</th>
                <th class="  w-[16%] text-start text-stone-500  px-5 ">Type</th>
                <th class="  w-[19] text-start text-stone-500  ">Actions</th>
            </tr>
            <tr v-for="i in 4" :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                <td class=" text-gray-500 px-2" v-text="'001'"></td>
                <td class="pl-5" v-text="'Ligne'+i"></td>
                <td class="pl-5 ">
                    <div class=" flex my-1" v-text="'{public}'"></div>
                </td>
                <td class="pl-5" v-text="'PDF'"></td>
                <td class=" px-2 text-teal-500">
                    <div class=" flex flex-row items-center py-1">
                        <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                        </button>
                        <button class=" bg-slate-100 py-1 px-1 rounded-md">
                            <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>

    </div>
</div>
</template>

<script>
import btn_ from '../../../button/btn_.vue';
import input_ from '../../../input/inputTxt.vue';
import textArea_ from '../../../input/textarea.vue';
import optionDocDeFormVue from '../../listeFormation/optionDocDeForm.vue';

export default {
    components: {
        btn_,
        input_,
        textArea_,optionDocDeFormVue
    },
    data() {
        return { 
            data: [{
                    label: 'Adresse',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Code postal',
                    model: '',
                    type: 'number'
                },
                {
                    label: 'Ville',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Pays',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Code d’acces',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Commentaire',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Matériel requis',
                    model: '',
                    type: 'text'
                },
            ],
            isPresenciel:false,
        }
    }
}
</script>

<style>

</style>
