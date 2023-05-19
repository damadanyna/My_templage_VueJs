<template>
    <div class="flex w-full flex-col">
       <div class="flex flex-row justify-between w-full items-center">
           <span class="  font-semibold">Historique des sessions de formation</span>
       </div>


    <div class="flex w-full text_xs mt-4  overflow-y-auto max-h-[32vh] ">
        <table class=" text_xs  w-full items-start px-1">
            <tr class=" sticky top-0 bg-white mb-2 w-full">
                <th class=" w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                <th class="  w-[36%] text-start text-stone-500  pl-5 border-r border-stone-200 ">Nom</th>
                <th class="  w-[16%] text-center text-stone-500    border-r border-stone-200 ">ID du session</th>
                <th class="  w-[26%] text-center text-stone-500   border-r border-stone-200 ">Lien</th>
                <th class="  w-[13] text-center text-stone-500   ">action</th>
            </tr>
            <tr v-for="i in 35"   :key="i" class=" group  duration-200 my-1 group hover:color_base  hover:bg-[#63B6B9]  ">
                <td class=" group-hover:text-white  text-gray-500 px-2" v-text="i"></td>
                <td class=" group-hover:text-white pl-5" v-text="'Les clés pour réussir votre projet'"></td> 
                <td class=" group-hover:text-white  text-center" v-text="'00'+i"></td> 
                <td class=" group-hover:text-white  text-center" v-text="'{lien de session}'"></td>
                <td class="   px-2">
                    <div class=" flex flex-row justify-center py-1"> 
                        <button class=" bg-slate-100 py-1 px-1 rounded-md">
                            <svg class=" fill-current color_base  rounded-md w-4" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5 5 5 0 0 0-5-5z" /></svg>
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
   components:{ 
   }
   }
   </script>
   
   <style>
   
   </style>