<template>
<div class="flex flex-col h-full text-[14px] ">
    <div class=" flex flex-row text-lg sticky -top-6 w-full bg-stone-100 z-50  text-stone-600 pt-2 pb-9">
        <h1 class="w-[40%] font-bold">Gestion Formation : <span class="text-[#63B6B9]">TitreFormation</span> </h1>
        <h1 class=" font-semibold">> Module d’apprentissage : NameModule</h1>
    </div>
    <div class="w-full flex flex-row">
        <div class=" w-[40%] py-6 sticky top-12 pb-5 duration-500 bg-white rounded-lg  h-max px-4 flex z-10 flex-col ">
            <span class=" font-semibold">Module d’apprentissage</span>
            <div class=" mt-2 flex w-full justify-between">
                <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouveau document',ico:$store.state.icons.plus,style:' base_bg text-[12px] text-white py-1 text-stone-800 '}"></btn_>
                <btn_ @click="()=>{showFormulaire=true}" class=" ml-3 " :options="{label: `Bibliothéque module d’apprentissage`,ico:$store.state.icons.list,style:' base_bg text-[12px] text-white py-1 text-stone-800 '}"></btn_>

            </div>

            <div class="flex w-full h-[55vh] overflow-y-auto  text_xs mt-4">
                <table class=" w-full -start px-1">
                    <tr class=" w-full">
                        <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                        <th class="  w-[76%] text-start text-stone-500  pl-5 ">Titre</th>
                        <th class="  w-[19] text-start text-stone-500 mx-5 "></th>
                    </tr>
                    <tr v-for="i in 20" :key="i" class=" duration-200 group  hover:bg-[#63B6B9]  ">
                        <td class=" text-gray-500 px-2" v-text="'001'"></td>
                        <td class="pl-5 group-hover:text-white" v-text="'Ligne'+i"></td>
                        <td class=" px-2  ">
                            <button @click="()=>{showMenu(i)}" class=" px-2 py-0 rounded-md bg-stone-100 my-2">
                                <svg class=" text-[#63B6B9] w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2z" /></svg>
                            </button>
                            <div v-if="index!=null && index==i" class=" relative ">
                                <div class=" absolute -mt-2 flex flex-col border-[1px] border-[#63B6B9] rounded-md bg-white -ml-16">
                                    <div class="text-[#63B6B9] cursor-pointer hover:bg-[#42898B] hover:text-white rounded-t-md px-2 flex flex-row  py-1">
                                        <svg class=" mx-1 w-4 text-[#63B6B9] fill-current" viewBox="0 0 24 24">
                                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                        <span>Modifier</span>
                                    </div>
                                    <div class="text-[#63B6B9] flex flex-row cursor-pointer hover:bg-[#42898B] hover:text-white  px-2 border-b-[1px] border-b-[#63B6B9] border-t-[1px] border-t-[#63B6B9] py-1">
                                        <svg class=" mx-1 w-4 text-[#63B6B9] fill-current" viewBox="0 0 24 24">
                                            <path d="M2 12c0-2.8 1.6-5.2 4-6.3V3.5C2.5 4.8 0 8.1 0 12s2.5 7.2 6 8.5v-2.2c-2.4-1.1-4-3.5-4-6.3m13-9c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m5 10h-4v4h-2v-4h-4v-2h4V7h2v4h4v2z" /></svg>
                                        <span>Dupliquer</span>
                                    </div>
                                    <div class="text-[#63B6B9] cursor-pointer hover:bg-[#42898B] hover:text-white rounded-b-md px-2 flex flex-row  py-1">
                                        <svg class=" mx-1 w-4 text-red-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                                        <span>Supprimer</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
        <div class="flex flex-col   w-[60%] px-5"> 
            <div class=" flex flex-row mx-3 w-full justify-between text-lg items-center font-bold border-[#63B6B9] py-2 px-4  border-[1px] bg-white rounded-lg  ">
                <span class="text-[#63B6B9] ">Activer le module d'apprentissage par défaut</span>
                <slidebtn_ @click="activeIt()" :options="{active:activer,border:'border-[#63B6B9] ',bg:' bg-[#63B6B9]'}"></slidebtn_>
            </div>
            <div class=" flex flex-col mx-3 bg-white rounded-lg mt-4">
                <paramètre></paramètre>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import paramètre from '../components/poppup/gestionFormation/paramètre.vue'
import slidebtn_ from '../components/button/slidebtn_.vue'
export default {
    components: {
        btn_,
        paramètre,slidebtn_
    },
    data() {
        return { 
            index: null,
            activer: false,
        }
    },
    methods: {
        showMenu(i) {
            this.index == null ? this.index = i : this.index = null
        },
        activeIt(){
             this.activer==true?this.activer=false:this.activer=true
        }
    }

}
</script>

<style>
          
          </style>
