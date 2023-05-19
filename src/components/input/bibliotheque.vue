<template>
<div class="relative   z-50">
    <div :class="options.class?options.class:''" class="absolute rounded-md bg-white  py-3 px-3 shadow_xl flex flex-col ">
        <div class="border-[1px] border-stone-400 rounded-md px-3 py-1 flex flex-row">
            <svg class=" text-stone-400 fill-current w-4" viewBox="0 0 24 24">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
            <input type="text" class="font-normal text_xs px-1 outline-none " placeholder=" Lancer une recherche ... ">
        </div>
        <div class="flex flex-col mt-4">
            <div v-for="item,i in liste" :key="i" @click="() => { item.isChecked=!item.isChecked}" class=" group flex flex-row p-1 hover:bg-[#63B6B9]">
             <button class=" bg-white p-[.10rem] rounded-md">
                <svg v-if="item.isChecked==false" viewBox="0 0 24 24" class=" group-hover:text-[#63B6B9] text-stone-400 fill-current w-5">
                    <path d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z" /></svg>
              <svg v-else class=" text-[#63B6B9] fill-current w-5" viewBox="0 0 24 24"><path d="m10 17-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
             </button>
                <span class=" font-normal text_xs group-hover:text-white ml-3 text-stone-700" v-text="item.label"></span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        options:{}
    },
    data() {
        return {
            liste: [{
                label: 'Niveau',
                isChecked: false,
            }, {
                label: 'Niveau1',
                isChecked: false,
            }, {
                label: 'Niveau2',
                isChecked: false,
            }, {
                label: 'Niveau3',
                isChecked: false,
            }, {
                label: 'Niveau4',
                isChecked: false,
            }, ]
        }
    }
}
</script>

<style scoped>
.shadow_xl {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.159);
}
</style>
