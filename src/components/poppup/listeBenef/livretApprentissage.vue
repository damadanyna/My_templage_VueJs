<template>
<div class=" h-full w-full text_xs flex flex-col">
    <div class="flex text-lg items-center justify-start sticky z-10 -top-6 pt-3 bg-white  flex-row">
        <div class="flex flex-row justify-between w-full  items-center">
            <h1 class="  font-bold text-[#000000] pt-4  ">Livret d’apprentissage</h1>
        </div>
    </div>
    <!-- tableau -->
    <div class="flex w-full text_xs mt-4">
        <table class=" w-full items-start px-1">
            <tr class=" w-full sticky top-8 bg-white py-5  ">
                <th class=" py-3 w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class=" py-3  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom Formation </th>
                <th v-if="!minimise" class=" py-3  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Date d’inscription</th>
                <th v-if="!minimise" class=" py-3  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Etat</th>
                 <th v-if="!minimise"  class=" py-3  w-[19] text-start text-stone-500 pl-5  ">Actions</th>
            </tr>
            <tr @click="()=>{goto(item)}"  v-for="item,i in $store.state.myData.livetApprentissage" :key="i" :class="$route.params.id==item.id?' bg-[#42898B] text-white ':''" class=" duration-200 my-2 hover:text-white  hover:bg-[#63B6B9]  ">
                <td :class="$route.params.id==item.id?'   text-white ':' text-gray-500'"  class=" px-2" v-text="item.id "></td>
                <td  class="pl-5 text_xs" v-text="item.nomFomation"></td>
                <td v-if="!minimise" class="pl-5 text_xs" v-text="item.dateInsc"></td>
                <td v-if="!minimise" class="pl-5 text_xs ">
                    <div class=" flex my-1">
                        <button v-if="item.etat=='En formation'" class=" px-2   bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border py-1 " v-text="item.etat"> </button>
                        <button v-else class=" px-2   bg-green-100 rounded-md text-green-600 text_xs  border-green-500 border py-1 " v-text="item.etat"> </button>
                    </div>
                </td>
                 <td v-if="!minimise" class=" px-2">
                    <div class=" flex flex-row items-center py-1">
                        <button  class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                            <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24">
                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                        </button >
                    </div>
                </td>
            </tr>
        </table> 

    </div>
</div>
</template>

    
    
<script> 
import btn_ from '../../button/btn_.vue';
import input_ from '../../input/inputTxt.vue';

export default {
    props:{
        minimise:{}
    },
    components: {
        btn_,
        input_
    },
    data() {
        return {

        }
    },
    mounted(){
        console.log(this.minimise);
    },
    methods:{
        goto(item){
            this.$router.push({name:'objectif',query:{name:item.nomFomation},params:{id:item.id}})
        }
    }
}
</script>
    
    
<style> 
 tr{
    border-radius:5px;
    padding: 3px;
}            
</style>
