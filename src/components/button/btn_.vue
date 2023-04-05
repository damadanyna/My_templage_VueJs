<template>
<div class="flex flex-row text-sm">
    <button :class="options.style" class="  duration-200 rounded-md flex-row items-center hover:opacity-80 bg-stone-50 flex justify-start px-4  ">
        <div class=" flex items-center flex-row">
            <svg v-if=" options.ico" class=" fill-current w-4" viewBox="0 0 24 24">
            <path :d="options.ico" /></svg>
        </div>
        <span class=" mx-2" :class="options.stylelabel">{{ options.label }}</span>
        <div v-if=" options.ico2" class="  bg-white p-1 rounded-md">
            <svg class="   text-red items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                <path :d="options.ico2" /></svg>
        </div>
    </button>
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
