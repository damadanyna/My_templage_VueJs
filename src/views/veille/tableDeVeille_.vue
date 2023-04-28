<template>
<div class="flex flex-col h-full">
    <div class="flex flex-row z-50 px-10  bg-stone-100 text-stone-600 justify-between sticky -top-4 w-full pt-2 pb-9">
        <h1 class=" text-lg font-bold">Tableau de veille :</h1>
        <btn_ :options="{label:'Flux RSS',style:' base_bg text-white w-full',ico:$store.state.icons.listCheck}"></btn_>

    </div>
    <div class="flex flex-col rounded-lg bg-white pb-10 px-10">
        <span class=" py-4 font-bold">Veille</span>
        <div class="flex w-full text_xs mt-4">
            <table class=" text-[#4B4B4B] text_xs  w-full items-start px-1">
                <tr>
                    <th class="bg-[#63B6B9] text-white   rounded-tl-[15px] ">Date acquisition</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                </tr>

                <tr v-for="item,i in data_table.contenu" :key="i" class=" duration-200 my-1 hover:color_base     ">
                    <td :class="i%2==0?i==data_table.contenu.length-1?'bg-[#42898B] ':'bg-[#42898B]':i==data_table.contenu.length-1?'bg-[#63B6B9] rounded-b-lg' :'bg-[#63B6B9] rounded-md'"   class=" text-white text-center w-40  " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{data_table.title[i]}}</div></td>
                    <td :class="i%2!=0?i==data_table.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                </tr>
            </table>

        </div>
        <span class=" py-4 font-bold mt-6">Exploitation de la veille</span>
        <div class="flex w-full text_xs mt-4 flex-col ">
            <table class=" text-[#4B4B4B] text_xs w-full items-start px-1">
                <tr>
                    <th class="bg-[#63B6B9] text-white   rounded-tl-[15px] ">Statut</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{statut}</th>
                </tr> 
                <tr v-for="item,i in data_table2.contenu" :key="i" class=" duration-200 my-1 hover:color_base     ">
                    <td :class="i%2==0?i==data_table2.contenu.length-1?'bg-[#42898B] ':'bg-[#42898B]':i==data_table2.contenu.length-1?'bg-[#63B6B9] rounded-b-lg' :'bg-[#63B6B9] rounded-md'"   class=" text-white text-center w-40  " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{data_table2.title[i]}}</div></td>
                    <td :class="i%2!=0?i==data_table2.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table2.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table2.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table2.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
                    <td :class="i%2!=0?i==data_table2.contenu.length-1?'bg-[#D9D9D9] rounded-b-[15px]':'bg-[#D9D9D9]':'bg-[#EDEDED]'" class=" w-48  border-x-[3px] text-center border-white " :style=" data_table2.title[i]=='Commentaires'?'height: 140px;':'height: 60px;'"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div></td>
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
            data_table: {
                title: ['Source', 'Contenu', 'Decision', 'Commentaires'],
                contenu: ['{url.source}', '{Contenu}', '{Decision}', '{Commentaires}']
            },
            data_table2: {
                title: ['Responsable', 'Activités à prevoir', 'Indicateur de suivi', 'Etat d’avancement','Resultat obtenu','Suite envisagée','Commentaires'],
                contenu: ['{responsable}', '{activité}', '{indicateur}', '{etat}','{result}','{Suite}','{Commentaires}']
            }
        }
    }

}
</script>

<style scoped>
th,
td { 
    text-align: center;
    font-weight: normal;
}
th{
    height: 60px;
}
td:first-child {
    border-radius: 0px; 
}
</style>
