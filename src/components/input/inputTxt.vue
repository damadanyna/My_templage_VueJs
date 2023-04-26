<template>
<div class=" group border-[1px] py-1 rounded-lg items-center flex flex-col border-[#63B6B9] ">
    <div class=" flex relative z-0 w-full ">
        <span @click="()=>{isFocus=true}" :class="isFocus==true || option_.model!='' ?'-mt-3  text_xs font-semibold  ':'  mt-[2px] text_xs'" class=" z-0  ml-2 bg-white inline px-1 duration-300 absolute" v-text="option_.label"></span>
    </div>
    <input v-model="option_.model" :type="option_.type" @focusout="()=>{isFocus=false}" @focus="()=>{isFocus=true}" class="  w-full border-none outline-none px-3">
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
            option_: this.options
        }
    }
}
</script>

<style>

</style>
