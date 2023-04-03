<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">Alertes</h1>
    <div class=" text-sm bg-white rounded-lg w-full h-max px-12 flex z-10 flex-col ">
        <div class="flex  sticky top-6 py-3 mt-7 bg-white  justify-between items-center flex-row w-full">
            <span class="  w-full font-semibold text-2xl">Listes des alertes</span>
            <div class="flex items-center flex-row">
                <span class=" mr-3 font-semibold">Filtrer</span>
                <div class="flex flex-row base_bg px-3 py-2 rounded-lg">
                    <select name="" id="" class=" text-white outline-none ">
                        <option v-for=" item,i in triList" :key="i" :value="item.val" v-text="item.label" class=" border-b border-stone-400 text-black "></option>
                    </select>
                    <div class="">
                        <svg class="   text-white items-center  rounded-sm fill-current w-5" viewBox="0 0 24 24">
                            <path :d="$store.state.icons.menu_down" /></svg>
                    </div>
                </div>
            </div>
        </div>
        <!-- succees -->
        <div class=" py-3 items-center text-green-500 bg-green-100 border-[1px] w-full rounded-lg border-green-500 flex flex-row">
            <div class=" px-4 w-[25%] flex flex-row">
                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                <span>Succès / Confirmation</span>
            </div>
            <div class=" px-4 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.
            </div>
        </div>
        <!-- erreur -->
        <div class=" py-3 items-center mt-4 bg-red-100 text-red-500 border-[1px] w-full rounded-lg border-red-500 flex flex-row">
            <div class=" px-4 w-[25%] flex flex-row">
                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24">
                    <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" /></svg>
                <span>Erreur / Échec</span>
            </div>
            <div class=" px-4 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.
            </div>
        </div>
        <!-- urgence -->
        <div class=" py-3 items-center mt-4 text-white bg-stone-600 border-[1px] w-full rounded-lg border-stone-500 flex flex-row">
            <div class=" px-4 w-[25%] flex flex-row">
                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24">
                    <path d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2m9.75-17.81-1.42 1.42A8.982 8.982 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11z" /></svg>
                <span>Urgence / Danger</span>
            </div>
            <div class=" px-4 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.
            </div>
        </div>
        <!-- inforamtion -->
        <div class=" py-3 items-center mt-4 bg-blue-100  text-blue-500 border-[1px] w-full rounded-lg border-blue-500 flex flex-row">
            <div class=" px-4 w-[25%] flex flex-row">
                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24">
                    <path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                <span>Information / Notification</span>
            </div>
            <div class=" px-4 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.
            </div>
        </div>
        <!-- attention -->
        <div class=" py-3 items-center mt-4 bg-orange-100 text-orange-500 border-[1px] w-full rounded-lg border-orange-500 flex flex-row">
            <div class=" px-4 w-[25%] flex flex-row">
                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24">
                    <path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                <span>Attention / Avertissement</span>
            </div>
            <div class=" px-4 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.
            </div>
        </div>

    </div>
</div>
</template>

<script>
import btn_Vue from '../components/button/btn_.vue'
export default {
    components: {
        btn_Vue,
    },
    data() {
        return {
            triList: [{
                    label: 'Selectionner un filtre',
                    val: ''
                },
                {
                    label: 'Non lu(s)',
                    val: '0'
                },
                {
                    label: 'Date',
                    val: '1'
                },
                {
                    label: 'Recent(s)',
                    val: '2'
                },
            ]
        }
    }

}
</script>

<style>
    
    </style>
