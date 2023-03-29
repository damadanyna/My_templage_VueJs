<template>
<div class="   flex h-full w-full bg-white flex-col px-3">
    <div :class="$store.state.menuFull!=true?'border-b border-stone-500':''" class="flex items-center flex-row py-2 w-full justify-center">
        <img class=" w-10 h-10" src="../assets/Logo_DF_2.svg" alt="">
        <span v-if="$store.state.menuFull==true" class=" text-xl font-extrabold">Dossier Formation</span>
    </div>
    <div class="flex flex-col ">
        <btn_ :options="btn_" v-for="btn_,i in $store.state.menu_liste" :key="i" class="  mt-2 my-1  "></btn_>
    </div>
</div>
</template>

<script  >
import btn_ from './button/btnSideBar_.vue'
export default {
    components:{
        btn_
    },
    methods:{ 
        // return new URL(`../../lib/Carousel/assets/${name}`, import.meta.url).href
    },
    mounted(){ 
    }
}
</script>

<style> 
</style>
