<template>
<div class="flex justify-between bg-white items-center flex-row px-4 rounded-lg  w-full text-sm  py-3">

    <div class=" relative flex flex-row">
        <div class=" absolute w-7 h-7 flex " @click="()=>{ $store.state.menuFull==true? $store.state.menuFull=false: $store.state.menuFull=true}">
            <div class=" flex flex-col">
                <span :class=" $store.state.menuFull==true?' rotate-45 absolute  mt-[3.6px]':''" class=" duration-300 rounded-sm transform h-[3px] w-[25px] bg-stone-600"></span>
                <span v-if="$store.state.menuFull==false" class=" h-[3px] w-[25px] mt-1 bg-stone-600 rounded-sm"></span>
                <span :class=" $store.state.menuFull==true?'-rotate-45 absolute  ':''" class="duration-300 rounded-sm h-[3px] w-[25px] mt-1 bg-stone-600"></span>
            </div>
        </div>
        <div class="flex ml-12 flex-row items-center">
            <svg class=" text-stone-500 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
            <input type="text" class=" px-3 border-b border-stone-400 outline-none focus:border-black " placeholder=" Lancer un recherche ">

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
