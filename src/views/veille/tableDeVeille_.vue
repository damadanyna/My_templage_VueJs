<template>
<div class="flex flex-col h-full">

    <div class="flex flex-row z-50   bg-stone-100 text-stone-600 items-center sticky -top-4 w-full pt-1 pb-2">
        <button v-if="showFormulaire!=false" @click="()=>{back()}" class=" sticky top-4  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
        </button>
        <h1 class=" text-lg text-black font-bold">Tableau de veille :</h1>

    </div>
    <div class="flex flex-col rounded-lg bg-white pb-10 px-10">
        <span class=" py-4 font-bold">Veille</span>

        <div class="w-full flex overflow-x-auto max-w-full overflow-y-hidden text_xs mt-4">
            <table class="  text-[#4B4B4B] text_xs  ">
                <tr>
                    <th class="bg-[#63B6B9] w-48 text-white" style="border-radius: 0px 15px 0px 0px">Date acquisition</th>
                    <th class="bg-[#D9D9D9] w-48 border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] w-48 border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] w-48 border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] w-48 border-x-[3px] border-white rounded-t-[15px]">9 août 2023</th>
                    <th class="bg-[#D9D9D9] w-48 border-x-[3px]  border-white rounded-t-[15px]">9 août 2023</th> 
                </tr>
                <tr v-for="item,i in data_table.contenu" :key="i" class=" duration-200 my-1 ">
                    <td  :class="i%2==0?'bg-[#42898B] ':' bg-[#63B6B9]'" class=" w-48 h-[60px] text-white  " :style="i==data_table.contenu.length-1?'border-radius: 0px 0px 15px 0px':''"><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{data_table.title[i]}}</div> </td>
                    <td  :class="i==data_table.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                </tr>
            </table>
            
        </div>

        <span class=" py-4 font-bold mt-6">Exploitation de la veille</span>
        <div class="flex w-full text_xs mt-4 flex-col ">
            <table class="  text-[#4B4B4B] text_xs  w-full items-start px-1">
                <tr>
                    <th class="bg-[#63B6B9] text-white" style="border-radius: 0px 15px 0px 0px">{Statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{Statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{Statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{Statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px] border-white rounded-t-[15px]">{Statut}</th>
                    <th class="bg-[#D9D9D9] border-x-[3px]  border-white rounded-t-[15px]">{Statut}</th>
                </tr>
                <tr v-for="item,i in data_table2.contenu" :key="i" class=" duration-200 my-1 ">
                    <td  :class="i%2==0?'bg-[#42898B] ':' bg-[#63B6B9]'" class=" w-48 h-[60px] text-white  " :style="i==data_table2.contenu.length-1?'border-radius: 0px 0px 15px 0px':''"><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{data_table2.title[i]}}</div> </td>
                    <td  :class="i==data_table2.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table2.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table2.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table2.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
                    <td  :class="i==data_table2.contenu.length-1?' rounded-b-[15px]':''" class=" w-48 border-x-[3px] border-white h-[60px] "><div :class="data_table2.title[i]=='Commentaires'?' mt-7':' justify-center '" class=" flex flex-col h-full">{{item}}</div> </td>
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
                title: ['Source', 'Contenu', 'Delai définis', 'Decision', 'Commentaires'],
                contenu: ['{url.source}', '{Contenu}', '{Delai définis}', '{Decision}', '{Commentaires}']
            },
            data_table2: {
                title: ['Responsable', 'Activités à prevoir', 'Indicateur de suivi', 'Etat d’avancement', 'Resultat obtenu', 'Suite envisagée', 'Commentaires'],
                contenu: ['{responsable}', '{activité}', '{indicateur}', '{etat}', '{result}', '{Suite}', '{Commentaires}']
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
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

th {
    height: 60px;
}

td:first-child {
    border-radius: 0px;
}
tr:nth-child(even){
  background-color: rgb(239, 239, 239);
}  
tr:nth-last-child(even){
    background-color: #d9d9d9;
}
</style>
