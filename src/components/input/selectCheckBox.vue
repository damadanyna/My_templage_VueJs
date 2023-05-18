<template>
<div class="relative   z-50">
    <div class="absolute rounded-md bg-white right-3 py-3  shadow_xl flex flex-col "> 
        <div class="flex flex-col mt-4 px-3 ">
            <div v-for="item,i in liste" :key="i" @click="() => { item.isChecked=!item.isChecked}" class=" px-3 group flex flex-row p-1 rounded-md hover:bg-[#63B6B9]">
                <button class=" bg-white p-[.10rem] rounded-md">
                    <svg v-if="item.isChecked==false" viewBox="0 0 24 24" class=" group-hover:text-[#63B6B9] text-stone-400 fill-current w-5">
                        <path d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z" /></svg>
                    <svg v-else class=" text-[#63B6B9] fill-current w-5" viewBox="0 0 24 24">
                        <path d="m10 17-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
                </button>
                <span class=" group-hover:text-white ml-3 text-stone-700" v-text="item.label"></span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        options: {}
    },
    data() {
        return {
            pos: 0,
            liste: [{
                label: 'Formateur',
                isChecked: false,
            }, {
                label: 'Formateur1',
                isChecked: false,
            }, {
                label: 'Formateur2',
                isChecked: false,
            }, {
                label: 'Formateur3',
                isChecked: false,
            }, {
                label: 'Formateur4',
                isChecked: false,
            }, ]
        }
    },
    updated() {
        // this.pos = Math.round(this.options.posX);
        // this.pos = Math.round(this.options.posX);

    },
    mounted() {
        // this.pos = Math.round(this.options.posX);  
    }
}
</script>

<style scoped>
.shadow_xl {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.159);
}
</style>
