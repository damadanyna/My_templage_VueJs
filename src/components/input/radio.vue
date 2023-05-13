<template>
<div class="flex flex-col w-full ">
    <div v-for="item,i in options.liste" :key="i" class="flex flex-row w-full items-center mt-4">
        <div class="flex flex-row text_xs mt-5 w-full justify-center  ">
            <div class=" group w-full  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
                <div class=" flex relative z-0 w-full ">
                    <span class="-mt-4  text_xs font-semibold z-0  ml-2 bg-white inline px-1 duration-300 absolute" v-text="item.label"> </span>
                </div>
                <span v-if=" options.editable==false" v-text=" item.reponse"> </span>
                <input v-else type="text" v-model="item.reponse" class=" outline-none w-full ">
            </div>
            <div @click="()=>{index[i]=!index[i]}" :class="index[i]==true?'bg-[#63B6B9]':' '" class=" ml-4 p-2   rounded-md border-[1px] border-[#63B6B9]">
                <svg v-if="index[i]!=true" class=" w-4 text-white fill-current " viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                <svg v-else class="  fill-current w-4 text-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
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
            index: []
        }
    },
    methods() {},
    mounted() {
        for (let i = 0; i < this.options.liste.length; i++) {
            this.index.push(false)
        }
    }
}
</script>

<style>

</style>
