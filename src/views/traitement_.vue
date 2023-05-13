<template>
<div class="flex flex-col h-full">

    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex overflow-hidden h-full bg-white  ">
        <div class="flex flex-col duration-500  " :class="showFormulaire==true?'  w-[40%] ':'  w-full '">
            <div class=" flex flex-row    w-full items-center  bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-1">
                <button v-if="showFormulaire==true" @click="()=>{showFormulaire=false}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
                <h1 class=" text-lg text-black" >Traitements aléas / logs</h1>
                <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
            </div>
            <div :class="showFormulaire==true?' px-5   ':'px-12  '" class="  sticky -top-2 pb-8 pt-0 flex-col duration-500  bg-white rounded-lg  flex z-10">

                <div class=" sticky top-6 mt-2 flex w-full bg-white py-4 flex-row mx-1  ">
                    <btn_ v-if="showFormulaire==false" @click="()=>{ nouvelle()}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

                </div>
                <div class="  w-fullh-[80vh] px-2 overflow-auto  first-letter:mt-4">
                    <table class=" text_xs   w-full items-start px-1 mt-2">
                        <tr class=" w-full h-10 sticky top-0 bg-white">
                            <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                            <th class="  w-[46%] text-start text-stone-500 pl-5 border-r border-stone-200">NomIncident</th>
                            <th class="  w-[36%] text-center text-stone-500   border-r border-stone-200">Etat</th>
                            <th class="  w-[29%] text-center text-stone-500 border-r border-stone-200">Actions</th>
                        </tr>
                        <tr  v-for="item,i in this.$store.state.myData.livetApprentissage"  :key="i" class=" duration-200 hover:text-white  hover:bg-[#63B6B9]  ">
                            <td class=" text-gray-500 px-2" v-text="item.id"></td>
                            <td class="pl-5" v-text=" item.nomFomation"></td>
                            <td class="pl-5 ">
                                <div class=" flex justify-center  my-1">
                                    <button class="   bg-red-100 px-2 rounded-md text-red-600  border-red-500 border py-1 ">A traité</button>
                                </div>
                            </td>
                            <td class=" px-2">
                                <div class=" flex flex-row items-center justify-center py-1">
                                    <button  @click="()=>{getIt(item)}"  class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                        <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
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
        </div>
        <div v-if="showFormulaire==true" class="flex flex-col h-full  w-[60%]">
            <div class=" flex flex-row    w-full items-center  bg-stone-100 z-50  text-stone-600 pt-2 pb-4">

                <h1 class=" text-lg mr-3 text-stone-400">></h1>
                <h1 class=" font-semibold text-lg">Détail partenaire : </h1>
                <h1 class=" font-semibold text-lg color_base ">SmartTech Solutions</h1>
                <!-- <h1 class=" text-lg ml-2  "> > Gestion de listes de formation</h1> -->
            </div>
            <div class="  flex flex-col  mx-3 bg-white h-full  rounded-lg   px-5">
                <formulaire :item="item"></formulaire>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import formulaire from '../components/poppup/traitement/traitement.vue'

export default {
    components: {
        btn_,
        formulaire,
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: false,
            indexFormulaire: 0,
            item:{}
        }
    },
    methods: {
        getIt(val){ 
            this.item=val
            this.showFormulaire = true 

        },
        nouvelle(){

            this.item={}
            this.showFormulaire=true
        }
    }


}
</script>

<style>

</style>
