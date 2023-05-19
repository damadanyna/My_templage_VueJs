<template>
<div class=" group border-[1px] py-1 rounded-lg items-center flex flex-col border-[#63B6B9] ">
    <div class=" flex relative z-0 w-full ">
        <span @click="()=>{isFocus=true}" :class="isFocus==true || option_.model!='' ?'-mt-4  text-[11px] font-semibold    ':'  mt-[0px] text_xs'" class=" z-0  ml-2 bg-white rounded-full py-0 inline px-1 duration-300 absolute" v-text="option_.label"></span>
    </div>
    <div class="flex flex-row w-full">
        <input v-model="option_.model" :type="option_.type" @focusout="()=>{isFocus=false}" @focus="()=>{isFocus=true}" class=" text-sm  w-full border-none outline-none px-3">
        <button @click="()=>{show=!show}" class=" bg-stone-200 p-0 px-1 mr-1 rounded-md">
            <svg class=" w-3 color_base fill-current" viewBox="0 0 24 24">
                <path d="M10 19h3v3h-3v-3m2-17c5.35.22 7.68 5.62 4.5 9.67-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08.66-1 2-1.59 2.83-2.25C15.92 8.43 15.32 5.26 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6z" /></svg>
        </button>
        <div v-if="show==true" class="relative duration-500  flex z-50">
            <div style=" box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.385);" class="absolute px-4 py-1 rounded-t-md rounded-l-md flex -mt-5 -ml-72 bg-white z-50  w-[20vw]">
                <span class="  text_xs">Bonjour, je suis le poppup pour + d'info</span>
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
            isFocus: false,
            option_: this.options,
            show:false

        }
    }
}
</script>

<style>

</style>
