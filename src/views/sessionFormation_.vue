<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Session Formation</h1>
    <div class=" d bg-white py-4 rounded-lg w-full h-max px-12 flex z-10 flex-col ">
        <div class="flex flex-row">
            <div class="flex ml-12 flex-row items-center">
                <svg class=" text-stone-500 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                <input type="text" class=" px-3 border-b border-stone-400 outline-none focus:border-black " placeholder=" Lancer un recherche ">
            </div>

            <div class="flex w-full justify-end relative">
                <btn_Vue class=" " :options="{label:'editer',style:' bg-stone-700 text-white w-full',ico:$store.state.icons.edit}"></btn_Vue>
            </div>
        </div>
        <div class="flex flex-col mt-5">
            <div class="flex duration-300 flex-col hover:bg-black group py-3 my-2 border-[1px] px-4 rounded-md border-black ">
                <div class="flex flex-row justify-between w-full bg-stone-">
                    <span class=" text-stone-700 font-semibold group-hover:text-white">Titre formation</span>
                    <span class=" text-stone-400">#001</span>
                </div>
                <div class="flex flex-row justify-between">
                    <div class=" flex flex-row "> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion bénéficiaire',style:' bg-stone-600 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion session',style:' bg-fuchsia-700 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1  ">
                            <btn_Vue class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_Vue>
                        </div> 
                    </div>
                    <div class=" flex flex-row ">
                        <btn_Vue class=" " :options="{label:'editer',style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.edit}"></btn_Vue>
                    </div>
                </div>
            </div>
            <div class="flex duration-300 flex-col hover:bg-black group py-3 my-2 border-[1px] px-4 rounded-md border-black ">
                <div class="flex flex-row justify-between w-full bg-stone-">
                    <span class=" text-stone-700 font-semibold group-hover:text-white">Titre formation</span>
                    <span class=" text-stone-400">#001</span>
                </div>
                <div class="flex flex-row justify-between">
                    <div class=" flex flex-row "> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion bénéficiaire',style:' bg-stone-600 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion session',style:' bg-fuchsia-700 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1  ">
                            <btn_Vue class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_Vue>
                        </div> 
                    </div>
                    <div class=" flex flex-row ">
                        <btn_Vue class=" " :options="{label:'editer',style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.edit}"></btn_Vue>
                    </div>
                </div>
            </div>
            <div class="flex duration-300 flex-col hover:bg-black group py-3 my-2 border-[1px] px-4 rounded-md border-black ">
                <div class="flex flex-row justify-between w-full bg-stone-">
                    <span class=" text-stone-700 font-semibold group-hover:text-white">Titre formation</span>
                    <span class=" text-stone-400">#001</span>
                </div>
                <div class="flex flex-row justify-between">
                    <div class=" flex flex-row "> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion bénéficiaire',style:' bg-stone-600 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1 ">
                            <btn_Vue class=" " :options="{label:'Gestion session',style:' bg-fuchsia-700 py-1 text-stone-100 '}"></btn_Vue>
                        </div> 
                        <div class=" flex flex-row mx-1  ">
                            <btn_Vue class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_Vue>
                        </div> 
                    </div>
                    <div class=" flex flex-row ">
                        <btn_Vue class=" " :options="{label:'editer',style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.edit}"></btn_Vue>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import btn_Vue from '../components/button/btn_.vue'
export default {
    components: {
        btn_Vue,
    },
    data() {
        return {
            liste_page:{
                
            }
        }
    }

}
</script>

<style>
  
  </style>
