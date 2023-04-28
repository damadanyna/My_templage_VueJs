<template>
<div class="flex flex-col w-full h-full"> 
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class="flex sticky top-3 ">
        <div class="flex flex-col  w-[35%]  ">
            <div class="flex flex-col  ">
                <div class="flex flex-row">
                    <h1 class=" text-lg   rounded-r-md"> Bénéficiaire: </h1>
                    <h1 class=" text-lg ml-2 color_base font-semibold">John Doe</h1>
                </div>
            </div>
            <div class="flex-col duration-500  bg-white rounded-lg px-3 sticky -top-5 py-4 h-max  flex z-10">
                <div v-if="this.$store.state.myData.listeFormation.length>0" class=" text_xs flex-row">
                    <!-- titre du tableau -->
                    <button @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    </button>
                    <span class=" text-lg font-bold">Livret d’apprentissage</span>
                    <div class="flex w-full px-3 text_xs max-h-[60vh] overflow-auto mt-5">
                        <table class=" text_xs  w-full items-start px-1">
                            <tr class=" w-full">
                                <th class=" w-[8%]  h-[5vh] text-center text-stone-500 border-r border-stone-200">idx</th>
                                <th class=" w-[92%] h-[5vh]  text-center text-stone-500 ">Nom de formation</th>
                            </tr>
                            <tr @click="getIt_()" v-for="item,i in this.$store.state.myData.TitreFormation" :key="i" class="  h-8 group duration-200  hover:text-white  hover:bg-[#63B6B9]  ">
                                <td class=" group-hover:text-white text-center text-gray-500 px-2 " v-text="item.id" >   </td>
                                <td class=" text-center my-2"  >
                                    <div class=" flex flex-row justify-center my-3">Les clés pour réussir votre projet</div>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div v-else class="text_xs  text-stone-500 flex-col w-full h-full items-center justify-center flex">
                    <img src="../../assets/vide.svg" alt="">
                    <flex class=" flex items-center my-3 flex-col">
                        <span>Vous avez aucun formation.</span>
                        <span>Cliquer ici pour creer.</span>
                    </flex>
                    <div class=" flex flex-row mx-1  ">
                        <btn_ @click="()=>{showFormulaire=true}" class=" " :options="{label:'Nouvelle',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
                    </div>
                </div>
            </div>

        </div>
        <div class="flex flex-col  w-[65%]   ">
            <div class="flex flex-row items-center">
                <span class=" mx-3 text-stone-400">></span>
                <h1 class="text-lg   rounded-r-md">Livret d’apprentissage :</h1>
                <h1 class=" text-lg ml-2 color_base font-semibold "> NameFormation</h1>
            </div>

            <div class="  flex flex-col  mx-3 bg-white py-2 rounded-lg">
                <div class=" z-20 sticky -top-6  px-3 bg-white py-5  flex-row items-center flex justify-between w-full">
                    <h1 class=" font-semibold">[Name Objectif]</h1>
                </div>
                <livretApp class=" px-4"></livretApp>
                <span class="flex border-b-[2px] border-stone-200 py-3"></span>
                <div class=" z-20 sticky -top-6  px-3 bg-white py-5  flex-row items-center flex justify-between w-full">
                    <h1 class=" font-semibold">[Name Objectif]</h1>
                </div>
                <livretApp class=" px-4"></livretApp>
                <div class="mt-12 px-3">
                    <h1 class="  text-stone-500"> Résultat Global</h1>
                </div>
                <span class="flex border-b-[2px] border-stone-200 py-3"></span>
                <div class=" flex flex-row py-5">
                    <div class="flex flex-col">
                        <div class="flex flex-row py-5 items-center">
                            <h3>Etape de la formation :</h3>
                            <span class=" px-3 py-1 mx-2 text-green-500 bg-teal-100">En cours</span>
                        </div>
                        <div class="flex mt-5 flex-row relative color_base">
                            <div class=" border-[1px] border-[#63B6B9] flex px-3 py-2 rounded-md flex-row">
                                <span class=" absolute text_xs color_base -mt-4 -ml-0 bg-white">Date de début de la formation</span>
                                <span>11 Septembre 2022</span>
                                <svg class=" fill-current color_base ml-10 w-4" viewBox="0 0 24 24">
                                    <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" /></svg>
                            </div>
                        </div>
                        <div class="flex mt-5 flex-row relative color_base">
                            <div class=" border-[1px] border-[#63B6B9] flex px-3 py-2 rounded-md flex-row">
                                <span class=" absolute text_xs color_base -mt-4 -ml-0 bg-white">Date de début de la formation</span>
                                <span>11 Septembre 2022</span>
                                <svg class=" fill-current color_base ml-10 w-4" viewBox="0 0 24 24">
                                    <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col ml-4 mt-2">
                        <div class="flex flex-row py-5 items-center">
                            <h3 class=" font-semibold">Certificat</h3>
                        </div>

                        <!-- liste des document -->
                        <div class="w-full mt-7 flex flex-col ">
                            <div class="flex flex-row items-center justify-between w-full bg-stone-300 px-2 py-1 rounded-md">
                                <button class=" flex flex-row bg-slate-100 p-1  items-center rounded-md">
                                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                                        <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69 0 0-3.5 1.82-2.67 3.18.67 1.08 2.32-.04 3.74-2.68 0 0 1.82-.64 4.24-.82 0 0 3.86 1.73 4.39-.11.52-1.86-3.06-1.44-3.7-1.25 0 0-2-1.35-2.5-3.21 0 0 1.14-3.95-.61-3.9-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46 0 0-2.33.46-3.39.9 0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15.54.08 0 2.08 0 2.15z" /></svg>
                                </button>
                                <span class=" text_xs mx-2">document1.pdf</span>
                                <div class="flex">
                                    <button class=" flex flex-row base_bg p-1  items-center rounded-md">
                                        <svg class=" fill-current text-white w-4" viewBox="0 0 24 24">
                                            <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                                    </button>
                                    <button class=" mx-1 flex flex-row bg-stone-100 p-1  items-center rounded-md">
                                        <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                                            <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                                    </button>
                                </div>

                            </div>
                            <div class="flex flex-row items-center justify-between w-full mt-4 bg-stone-300   px-2 py-1 rounded-md">
                                <button class=" flex flex-row bg-slate-100 p-1  items-center rounded-md">
                                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                                        <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69 0 0-3.5 1.82-2.67 3.18.67 1.08 2.32-.04 3.74-2.68 0 0 1.82-.64 4.24-.82 0 0 3.86 1.73 4.39-.11.52-1.86-3.06-1.44-3.7-1.25 0 0-2-1.35-2.5-3.21 0 0 1.14-3.95-.61-3.9-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46 0 0-2.33.46-3.39.9 0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15.54.08 0 2.08 0 2.15z" /></svg>
                                </button>
                                <span class=" text_xs mx-2">Certificat_document.pdf</span>
                                <div class="flex">
                                    <button class=" flex flex-row base_bg p-1  items-center rounded-md">
                                        <svg class=" fill-current text-white w-4" viewBox="0 0 24 24">
                                            <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                                    </button>
                                    <button class=" mx-1 flex flex-row bg-stone-100 p-1  items-center rounded-md">
                                        <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                                            <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'
import popup from '../../components/poppup/organisme/organisme.vue'
import livretApp from '../../components/poppup/gestionListeFormation/livret.vue'

export default {
    components: {
        btn_,
        popup,
        livretApp,
    },
    data() {
        return {
            listeMenu: ['ActionFormation', 'Bilan', 'VAE'],
            showFormulaire: true,
            indexFormulaire: 0,
        }
    },
    methods: {
        back_() {
            this.$router.go(-1)
        },
        getIt_() {
            // this.$router
        }
    }

}
</script>

<style>
                  
                  </style>
