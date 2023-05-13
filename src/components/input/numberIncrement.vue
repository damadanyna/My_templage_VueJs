<template>
<div class="flex flex-row items-center">
    <button class="  mx-3 color_base text-lg" @click="()=>{decrement()}">-</button>
    <div class="flex flex-row    items-center bg-stone-300 border-b-2 border-[#63B6B9]">
        <!-- <span class=" px-1">1</span> -->
        <input type="number" v-model=" option_.model" min="0" max="5" disabled class=" text-xl text-center pl-3">
    </div>
    <button class=" p-1 mx-3 color_base text-lg" @click="()=>{increment()}">+</button>
</div>
</template>

<script>
export default {
    props: {
        options: {}
    },
    data() {
        return {
            option_: this.options
        }
    },
    methods: {
        decrement() {
            if (this.option_.model > 1) {
                this.option_.model = this.option_.model - 1
                this.options.model=this.option_.model
            }
        },
        increment(){

            if (this.option_.model <5) {
                this.option_.model = this.option_.model + 1
                this.options.model=this.option_.model
            }
        }
    }
}
</script>

<style>

</style>
