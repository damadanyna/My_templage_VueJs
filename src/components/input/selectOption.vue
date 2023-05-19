<template>

<div v-if="this.options.select==true"  x-data="select" class="relative z-50  ">
    <!-- trigger button -->
    <button id="btn__" type="button" @click="()=> {set2_()}" class="flex w-[200px] text-white color-white items-center justify-between rounded base_bg p-2  " :class="(open2) && 'ring-blue-600'">
        <div class="flex flex-row">
            <span class="" v-text="(language == '') ? this.options.elt[0].label : language"></span>
        </div>
        <svg v-if="open2==false" class="w-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" /></svg>
        <svg v-else class="w-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg>
    </button>

    <!-- list items -->
    <ul id="list__"  @click="()=> {open2=true}" class="z-2 absolute mt-2 shadow-lg ring-1 ring-stone-200  w-[200px]  rounded bg-white  " v-show="open2">
        <div v-for=" item, i in options.elt" @click="()=>{item.checked=!item.checked}"  v-show="i!=0" class=" hover:bg-gray-200 flex flex-col">
            <div class="flex flex-row w-full pl-2">
                <svg v-if="item.checked==false" class=" text-stone-400 fill-current w-5" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z" /></svg>
                <svg v-else class=" color_base fill-current w-5" viewBox="0 0 24 24"><path d="m10 17-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
                <li v-text="item.label" :key="i" class=" cursor-pointer select-none p-2"  > </li>
          
            </div>
           <span v-if="i< options.elt.length-1" class=" w-full h-[2px] bg-stone-300"></span>
        </div>
    </ul>
</div>
<div v-else x-data="select" class="relative z-50  ">
    <!-- trigger button -->
    <button id="select_" type="button" @click="()=> {set_()}" class="flex w-[200px] text-white color-white items-center justify-between rounded base_bg p-2  " :class="(open) && 'ring-blue-600'">
        <div class="flex flex-row">
            <span class="" v-text="(language == '') ? this.options.elt[0].label : language"></span>
        </div>
        <svg v-if="open==false" class="w-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" /></svg>
        <svg v-else class="w-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg>
    </button>

    <!-- list items -->
    <ul class="z-2 absolute mt-2 shadow-lg ring-1 ring-stone-200  w-[200px]  rounded bg-white  " v-show="open">
        <div v-for=" item, i in options.elt"  v-show="i!=0" class="flex flex-col">
            <li v-text="item.label" :key="i" class=" cursor-pointer select-none p-2 hover:bg-gray-200" @click="setLanguage(item.label)"> </li>
            <span v-if="i< options.elt.length-1" class=" w-full h-[2px] bg-stone-300"></span>
        </div>
    </ul>
</div>
</template>

<script>
import {
    onClickOutside
} from '@vueuse/core'
export default {
    props: {
        options: {}
    },
    data() {
        return {
            open: false,
            open2: false,
            language: '',

        }
    },
    methods: {
        set_() {
            this.open = !this.open; 
        },
        set2_() {
            this.open2 = !this.open2
        },
        setLanguage(val) {
            this.language = val;
            this.open = false;
        },
    },
    mounted() {   
        onClickOutside(document.getElementById('select_'), () => { 
            this.open = false
        })
        onClickOutside(document.getElementById('btn__'), () => { 
            this.open2 = false
        })
        onClickOutside(document.getElementById('list__'), () => { 
            this.open2 = false
        })
    }
}
</script>

<style scoped> 
 
</style>
