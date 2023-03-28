<template>
<div class=" flex h-full w-full bg-white flex-col px-3">
    <div class="flex flex-row py-5 w-full justify-center">
        <span class=" text-xl font-extrabold">Dossier Formation</span>
    </div>
    <div class="flex flex-col ">
        <btn_ @click="()=>{ selectIt_(i)}" :options="{label:btn_.label,ico:btn_.ico,selected:btn_.selected}" v-for="btn_,i in $store.state.menu_liste" :key="i" class="  mt-2 my-1  "></btn_>
        <!-- <v-btn @click="()=>{ selectIt_(i)}" v-for="btn_,i in $store.state.menu_liste" :class="btn_.selected==true?'bg-black ':'bg_ opacity-50'" :key="i" :prepend-icon="btn_.ico" variant="tonal " class=" w-full my-1 mt-2  flex justify-start text-lg">
            <span class=" " v-text=" btn_.label"></span>
        </v-btn>  -->
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
        selectIt_(index){ 
            this.$store.state.menu_liste.forEach((element,i) => {
                (i!=index)?element.selected=false:element.selected=true 
            });
        }
    },
    mounted(){ 
    }
}
</script>

<style>
.v-btn {
    text-transform: none;
} 
</style>
