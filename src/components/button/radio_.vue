<template>
<div   class="flex flex-row  cursor-pointer" @click="()=>{item.check=true}">
    <svg v-if="item.check==false" class=" fill-current color_base w-4" viewBox="0 0 24 24">
        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
    <svg v-else class=" fill-current color_base w-4" viewBox="0 0 24 24">
        <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z" /></svg>
    <span  :class="item.textStyle?item.textStyle:'text_xs'" class=" ">{{ item.label }}</span>
</div>
</template>

<script>
export default {
    props:{
        item:{}
    },
    data(){
         
    }

}
</script>

<style>

</style>
