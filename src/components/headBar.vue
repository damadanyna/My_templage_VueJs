<template>
<div class="flex justify-between bg-white items-center flex-row px-4 rounded-lg  w-full text_xs  py-3">

    <div class=" relative flex items-center flex-row">
        <div class=" absolute w-7 h-7 flex items-center " @click="()=>{ $store.state.menuFull==true? $store.state.menuFull=false: $store.state.menuFull=true}">
            <div v-if="$store.state.menuFull==true" class=" flex flex-col">
                <span class=" duration-300 rounded-sm transform h-[3px] w-[25px] bg-stone-600"></span>
                <span class=" h-[3px] w-[25px] mt-1 bg-stone-600 rounded-sm"></span>
                <span class="duration-300 rounded-sm h-[3px] w-[25px] mt-1 bg-stone-600"></span>
            </div>
            <button v-else class=" ">
                <svg class=" w-8 fill-current text-stone-600" viewBox="0 0 24 24">
                    <path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" /></svg> 
            </button>
        </div>
        <div class="flex ml-12 flex-row items-center">
            <svg class="   color_base w-5 fill-current" viewBox="0 0 24 24">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
            <input type="text" class=" px-3 border-b border-stone-200 outline-none focus:border-black " placeholder=" Lancer une recherche ... ">

        </div>
    </div>
    <div class="flex flex-row py-1 items-center px-3 bg-stone-100 rounded-lg">
        <div class=" border border-black rounded-full">
            <svg class=" w-7" viewBox="0 0 24 24">
                <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
        </div>
        <span class=" px-2">John Doe</span>
        <div>
            <svg class=" w-6" viewBox="0 0 24 24">
                <path d="m7 10 5 5 5-5H7z" /></svg>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
