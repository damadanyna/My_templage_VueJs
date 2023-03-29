<template>
<div class=" flex h-full w-full bg-white flex-col px-3">
    <div class="flex flex-row py-5 w-full justify-center">
        <span class=" text-xl font-extrabold">Dossier Formation</span>
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
    },
    mounted(){ 
    }
}
</script>

<style> 
</style>
