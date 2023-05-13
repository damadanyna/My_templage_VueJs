<template>
    <div class="flex flex-col h-full ">
        <router-view v-if="$route.query.symb"></router-view>
        <div v-else class="flex flex-row w-full ">
            <div :class="showFormulaire==true?' w-[30%] ':' w-full '" class=" flex flex-col duration-500 ">
                <div class=" flex flex-row items-center w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
                    <button @click="()=>{$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                        <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    </button>
                    <h1 class=" text-lg   px-2 rounded-r-md">Listes formations</h1>
                </div>
                <div class="flex-col duration-500 px-2 py-6 sticky -top-6 bg-white rounded-lg h-max  flex z-10">
                    <div v-if=" this.$store.state.myData.listeFormation.length>0" class=" h-[80vh] px-2 overflow-auto text_xs flex-row">
                        <div class="flex flex-row sticky z-40 -top-4 py-4 bg-white mt-6">
                            <div :class="showFormulaire==true?'':' ml-12'" class="flex  flex-row items-center">
                                <svg class=" text-teal-700 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                                <input type="text" class=" px-3 border-b border-stone-200 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                            </div>
    
                            <div v-if="showFormulaire==false" class="flex w-full justify-end relative">
                                <btn_ @click="()=>{showFormulaire=true}" :options="{label:'Nouveau',style:' base_bg text-white w-full',ico:$store.state.icons.edit}"></btn_>
                            </div>
                        </div>
                        <div class=" z-30 flex flex-col mt-5">
                            <div @click="()=>{this.$store.state.myData.selectFormation=item.title}" v-for=" item,i in this.$store.state.myData.listeFormation" :key="i" class=" group flex duration-300 flex-col hover:bg-[#63B6B9] group py-3 my-2 border-[1px] px-4 rounded-md border-teal-700 ">
                                <div class="flex flex-row justify-between w-full bg-stone-">
                                    <span class=" text-stone-700 font-semibold group-hover:text-white " v-text="item.title"></span>
                                    <span class=" text-stone-400 group-hover:text-white" v-text="item.id"></span>
                                </div>
                                <div :class="showFormulaire==true?'flex-col mt-6 w-full':'flex-row'" class=" transform flex  justify-between">
                                    <div class=" flex flex-row w-full ">
                                        <div  v-if="$route.query.my!='beneficiaire'" class=" flex flex-row mx-1 ">
                                            <btn_  @click="()=> {$router.push({ name: 'listeFormation',query:{is:true,my:'beneficiaire'}})}" class=" " :options="{label:'Gestion bénéficiaire',style:' bg-teal-700 text_xs  text-stone-100 '}"></btn_>
                                        </div>
                                        <div v-if="$route.query.my!='session'" class=" flex flex-row mx-1 ">
                                            <btn_ @click="()=>{$router.push({ name: 'listeFormation',query:{is:true,my:'session'}})}" class=" " :options="{label:'Gestion session',style:'bg-teal-700 text_xs  text-stone-100 '}"></btn_>
                                        </div>
    
                                        <button  v-if="showFormulaire==true" class="  bg-white py-2 flex flex-row items-center  px-5 rounded-md">
                                            <svg class="  w-4 fill-current text_xs text-red-500" viewBox="0 0 24 24">
                                                <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                                            <span class=" text_xs ml-2 text-red-500">Supprimer</span>
                                        </button>
                                        <btn_ v-if="showFormulaire!=true" class=" " :options="{url:{name:'gestionFormation',params:{id:item.id},query:{symb:'gForm'}},label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_>
    
                                    </div>
                                    <div v-if="showFormulaire==true" class=" bg-transparent justify-between flex flex-row mx-1 w-full mt-4 ">
                                        <div @click="()=>{$router.push({name:'gestionFormation',params:{id:item.id},query:{symb:'gForm'}})}" :class="showFormulaire==true?'w-full bg-stone-50 items-center flex-col justify-center flex text-center py-1  rounded-md ':''" class="  ">
                                            <btn_ class=" " :options="{label:'Gestion Formation',style:' bg-stone-100 py-1 text-stone-800 '}"></btn_>
                                        </div>
                                    </div>
    
                                    <div v-if="showFormulaire!=true" class=" flex flex-row ">
                                        <btn_ class=" shadow-md " :options="{label:'Supprimer',style:' bg-stone-200 py-1 text-red ',ico:$store.state.icons.delete}"></btn_>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text_xs  text-stone-500 flex-col w-full h-full items-center justify-center flex">
                        <img src="../assets/vide.svg" alt="">
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
            <div v-if="showFormulaire==true" class="flex h-full flex-col w-[70%]"> 
                <beneficiaire_Vue v-if="$route.query.my=='beneficiaire' " ></beneficiaire_Vue>
                <session_Vue v-if="$route.query.my=='session' " ></session_Vue>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import btn_ from '../components/button/btn_.vue'
import beneficiaire_Vue from './listeFormation/beneficiaire_.vue'
    import session_Vue from './listeFormation/session_.vue'
    
    
    export default {
        components: {
            btn_,
            session_Vue,beneficiaire_Vue
        },
        data() {
            return {
                showFormulaire: false,
            }
        },
        mounted() {
            if (this.$route.query.is == 'true') {
                this.showFormulaire = true
            } else {
                this.showFormulaire = false
            }
        },
        updated() {
            if (this.$route.query.is == 'true') {
                this.showFormulaire = true
            } else {
                this.showFormulaire = false
    
            }
        }
    
    }
    </script>
    
    <style>
        
        </style>
    

    <!-- ,symb:'gBenef',name:'beneficiaire' -->