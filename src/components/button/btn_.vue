<template>
<div class="flex flex-row text_xs">
    <button v-if="!options.url" :class="options.style" class="  duration-200 rounded-md flex-row items-center hover:opacity-80 bg-stone-50 flex justify-start px-4  ">
        <div class=" flex items-center flex-row">
            <svg v-if=" options.ico" class=" fill-current w-4" viewBox="0 0 24 24">
                <path :d="options.ico" /></svg>
        </div>
        <span v-if="options.label" class=" mx-2" :class="options.stylelabel">{{ options.label }}</span>
        <div v-if=" options.ico2" :class="options.ico2Style?options.ico2Style:'bg-white'" class="   p-1 rounded-md">
            <svg :class="options.ico2Style?options.ico2Style:'text-red'" class="  items-center  rounded-sm fill-current w-4" viewBox="0 0 24 24">
                <path :d="options.ico2" /></svg>
        </div>
        <div v-if=" options.ico3" :class="options.ico3Style?options.ico3Style:'bg-white'" class=" p-1 ml-1 rounded-md">
            <svg :class="options.ico3Style?options.ico3Style:'text-red'" class="  items-center  rounded-sm fill-current w-4" viewBox="0 0 24 24">
                <path :d="options.ico3" /></svg>
        </div>
    </button>
    <router-link v-else :to="options.url" :class="options.style" class="  duration-200 rounded-md flex-row items-center hover:bg-[#42898B] hover:opacity-80 bg-stone-50 flex justify-center px-4  ">
        <div class=" flex items-center flex-row">
            <svg v-if=" options.ico" class=" fill-current w-4" viewBox="0 0 24 24">
                <path :d="options.ico" /></svg>
        </div>
        <span v-if="options.label!=''" class=" mx-2" :class="options.stylelabel">{{ options.label }}</span>
        <div v-if=" options.ico2" class="  bg-white p-1 rounded-md">
            <svg class=" text-red-500 items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                <path :d="options.ico2" /></svg>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        options: {}
    }
}
</script>

<style>
button {
    padding: 9px 0px;
}
</style>
