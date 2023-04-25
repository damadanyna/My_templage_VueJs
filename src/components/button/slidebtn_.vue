<template>
<div class="flex duration-500">
    <div :class="options.active?' border-stone-200 justify-start ':options.border+'  justify-end'" class="flex w-[34px] bg-white  h-[17px] border-[1px] px-[1px] items-center duration-500  rounded-full flex-row text-sm">
        <span :class="options.active?'bg-stone-400   ':options.bg" class=" h-[13px] w-[13px]  rounded-full "></span>
    </div>
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
