<template>
    <div class="flex flex-col h-full ">
    
        <div class="flex flex-row z-50   bg-stone-100 text-stone-600 items-center sticky -top-4  l pt-1 pb-2">
            <button v-if="showFormulaire!=false" @click="()=>{back()}" class=" sticky top-4  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
            </button>
            <h1 class=" text-lg text-black font-bold">Tableau de veille :</h1>
    
        </div>
        <div class="flex flex-col rounded-lg bg-white pb-10 px-10">
            <span class=" py-4 font-bold">Veille</span>
    
            <div class=" flex flex-row overflow-x-auto w-[74vw] py-3 overflow-y-hidden text_xs mt-4">
                <div class="flex flex-col text-white mr-[1px] ">
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 15px 0px 0px;">Date acquisition</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center">Source</div>
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center">Contenu</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center">Delai définis</div>
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center">Decision</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 0px 15px 0px;">Commentaires</div>
                </div>
                <div class="flex sticky left-0 hover:border-[#42898B] transform hover:scale-[1.03] border-white duration-200 border-[2px] rounded-[15px] flex-col text-stone-600 z-0 hover:z-30 " v-for="item,i in table_data" :key="i">
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center" style="border-radius: 15px 15px 0px 0px;">{{item.title}}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center">{{item.source}}</div>
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center">{{ item.contenu }}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center">{{ item.delaiDefinis }}</div>
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center">{{ item.decision }}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 0px 15px 15px;">{{ item.commentaire }}</div>
                </div>
                
            </div>
    
            <span class=" py-4 font-bold mt-6">Exploitation de la veille</span>
            <div class="flex  text_xs mt-4 flex-col ">



    
            <div class=" flex flex-row overflow-x-auto w-[74vw] py-3 overflow-y-hidden text_xs mt-4">
                <div class="flex flex-col text-white mr-[1px] ">
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 15px 0px 0px;">Statut</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center">Responsabilité</div>
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center">Activité à prévoir</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center">Indicateur de suivi</div>
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center">Etat d'avancement</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center">Resultat Obtenu</div>
                    <div class=" w-40 bg-[#63B6B9] text-center h-[60px] flex items-center justify-center">Suite envisagée</div>
                    <div class=" w-40 bg-[#42898B] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 0px 15px 0px;">Commentaires</div>
                </div>
                <div class="flex sticky left-0 hover:border-[#42898B] transform hover:scale-[1.03] border-white duration-200 border-[2px] rounded-[15px] flex-col text-stone-600 z-0 hover:z-30 " v-for="item,i in table_data2" :key="i">
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center" style="border-radius: 15px 15px 0px 0px;">{{item.statut}}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center">{{item.responsable}}</div>
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center">{{ item.activite }}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center">{{ item.indicateur }}</div>
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center">{{ item.etatAvancement }}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center">{{ item.resultat }}</div>
                    <div class=" w-40 bg-stone-300 text-center h-[60px] flex items-center justify-center">{{ item.suite }}</div>
                    <div class=" w-40 bg-[#EFEFEF] text-center h-[60px] flex items-center justify-center" style="border-radius: 0px 0px 15px 15px;">{{ item.commentaire }}</div>
                </div>
                
            </div>

 
    
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        components: {},
        data() {
            return { 
                data_table2: {
                    title: ['Responsable', 'Activités à prevoir', 'Indicateur de suivi', 'Etat d’avancement', 'Resultat obtenu', 'Suite envisagée', 'Commentaires'],
                    contenu: ['{responsable}', '{activité}', '{indicateur}', '{etat}', '{result}', '{Suite}', '{Commentaires}']
                },
                table_data: [
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        title:'22 Mai 2023',
                        source:'{url.source}',
                        contenu:'{Contenu}',
                        delaiDefinis:'{Delai définis}',
                        decision:'{Decision}',
                        commentaire:'{Commentaires}',
                    },
    
                ],
                table_data2:[
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                    {
                        statut:'{Statut}',
                        responsable:'{responsable}',
                        activite:'{activite à prevoire}',
                        indicateur:'{Indicateur de suivi}',
                        resultat:'{Resultat obtenu}',
                        etatAvancement:'{etat}',
                        suite:'{Suite envisagée}',
                        commentaire:'{Commentaires}',
                    },
                ]
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
    