<template>
<div class="flex  flex-col mt-6">
    <div class="flex flex-col">
        <span class=" font-semibold  ">Liste des objectifs</span>
        <div class="h-full w-full flex flex-row  ">
            <btn_ @click="()=>{}" class=" mt-3 mr-7" :options="{label:'Nouveau Objectif',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
            <btn_ @click="()=>{}" class=" mt-3" :options="{label:`Bibliothéque d'objectif`,ico:$store.state.icons.list,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
        </div>
    </div>

    <div :class="options.class" class="  w-full text_xs px-2 mt-4  overflow-auto ">
        <table class=" w-full items-start px-1">
            <tr class=" sticky top-0 bg-white w-full">
                <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[66%] pl-5 text-start text-stone-500  ">TitreSite</th>
                <th class="  w-[19%] text-center text-stone-500  ">Actions</th>
            </tr>
            <tr v-for="i in 15" :key="i" class=" duration-200 hover:text-white group  hover:bg-[#63B6B9]  ">
                <td :class="i==$route.params.id && $route.query.symb=='consulter'?'bg-[#42898B] text-white font-semibold':'  bg-transprent group-hover:text-white'" class=" group-hover:text-white text-center text-gray-500 px-2" v-text="i<100?i<10?'00'+i:'0'+i:i"></td>
                <td :class="i==$route.params.id && $route.query.symb=='consulter'?'bg-[#42898B] text-white font-semibold':'  bg-transprent group-hover:text-white'" class="   pl-5" v-text="'Ligne'+i"></td>

                <td :class="i==$route.params.id && $route.query.symb=='consulter'?'bg-[#42898B] text-white font-semibold':' color_base group-hover:text-white'" class=" px-2">
                    <div class=" flex flex-row items-center py-1">
                        <button @click="()=>{goto_(i)}" class="  flex flex-row items-center   px-1 rounded-md py-1 ">
                            <svg class=" group-hover:text-white   fill-current w-4  " viewBox="0 0 24 24">
                                <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                            <u class=" group-hover:text-white  ml-1">Consulter</u>
                        </button>
                        <button class=" bg-slate-100 py-1 px-1 rounded-md">
                            <svg class=" fill-current text-red  rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </table>

    </div>
</div>
</template>

<script>
export default {
    props: {
        options: {}
    },
    methods: {
        goto_(id) { 
            this.$router.push({
                name: 'consulter',
                query: {
                     symb:'consulter'
                },
                params: {
                    id: id
                }
            })
        }
    }

}
</script>

<style>

</style>
