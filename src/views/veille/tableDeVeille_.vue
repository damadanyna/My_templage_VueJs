<template>
<div class="flex flex-col h-full">
    <div class="flex flex-row z-50 px-10  bg-stone-100 text-stone-600 justify-between sticky -top-4 w-full pt-2 pb-9">
        <h1 class=" text-lg font-bold">Tableau de veille :</h1>
        <btn_ :options="{label:'Flux RSS',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>

    </div>
    <div class="flex flex-col rounded-lg bg-white px-10">
        <span class=" py-4 font-bold">Veille</span>
        <div class="flex w-full text-sm mt-4">
            <table class=" text-sm  w-full items-start px-1">
                <tr class=" w-full">
                    <th class="bg-[#63B6B9] border-x-[3px] border-white  text-white   rounded-tl-[15px] ">Date acquisition</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                </tr>
                <tr v-for="item,i in data_table" :key="i" class=" duration-200 my-1 hover:text-[#63B6B9]  hover:bg-[#63B6B9]  ">
                    <td :class="i%2==0?i==data_table.length-1?'bg-[#42898B] ':'bg-[#42898B]':i==data_table.length-1?'bg-[#63B6B9] ':'bg-[#63B6B9]'" class=" text-white text-center ">{{item.label}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                </tr>
            </table>

        </div>
        <span class=" py-4 font-bold mt-6">Exploitation de la veille</span>
        <div class="flex w-full text-sm mt-4">
            <table class=" text-sm  w-full items-start  ">
                <tr class=" w-full">
                    <th class="bg-[#63B6B9] border-x-[3px] border-white rounded-tl-[15px] ">Date acquisition</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                </tr>
                <tr v-for="item,i in data_table" :key="i" class=" duration-200 my-1 hover:text-[#63B6B9]  hover:bg-[#63B6B9]  ">
                    <td :class="i%2==0?i==data_table.length-1?'bg-[#42898B] ':'bg-[#42898B]':i==data_table.length-1?'bg-[#63B6B9] ':'bg-[#63B6B9]'" class=" text-white text-center ">{{item.label}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                    <td :class="i%2!=0?i==data_table.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class="h-[100px]  border-x-[3px] text-center border-white">{{item.source}}</td>
                </tr>
            </table>

        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            data_table: [{
                    label: 'Source',
                    source: '{url.source}',
                    contenu: '{Contenu}',
                    decision: '{Decision}',
                    commentaires: '{Commentaires}',
                    source: '{url.source}',
                },
                {
                    label: 'Source',
                    source: '{url.source}',
                    contenu: '{Contenu}',
                    decision: '{Decision}',
                    commentaires: '{Commentaires}',
                    source: '{url.source}',
                },
                {
                    label: 'Source',
                    source: '{url.source}',
                    contenu: '{Contenu}',
                    decision: '{Decision}',
                    commentaires: '{Commentaires}',
                    source: '{url.source}',
                },
                {
                    label: 'Source',
                    source: '{url.source}',
                    contenu: '{Contenu}',
                    decision: '{Decision}',
                    commentaires: '{Commentaires}',
                    source: '{url.source}',
                },
            ]
        }
    }

}
</script>

<style scoped>
th {
    height: 100px;
    text-align: center;
    font-weight: normal;
}
</style>
