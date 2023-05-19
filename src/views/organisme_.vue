<template>
<div class="flex flex-row h-full">
    <div :class="showFormulaire==true?'flex-row':'flex-col'" class=" flex w-full  ">

        <div :class="showFormulaire==true?'w-[35%]':'w-[100%] '" class=" flex-col duration-500   h-max  flex z-10">

            <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 items-center z-50 font-bold text-stone-600 pt-2 pb-3">
                <button v-if="showFormulaire!=false" @click="()=>{goOn()}" class="  bg-[#63B6B9] mr-3 px-2 border border-black rounded-full">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                </button>
                <h1 class=" text-lg">Informations organismes </h1>
            </div>
            <div :class="showFormulaire==true?' px-5  ':'px-12'" class="flex rounded-lg flex-col bg-white ">

                <span v-if="showFormulaire==false" class=" sticky top-6 py-3  bg-white font-bold text-lg">Raison social</span>
                <!-- boite raison social -->
                <div v-if="showFormulaire==false" class="flex flex-between mt-4 text_xs">
                    <!-- formulaire -->
                    <div class="flex flex-col text-[12px] border border-black w-2/5 rounded-lg">
                        <div class="py-4 px-7">
                            <div v-for=" item,i in raisonSocial" :key="i" class="flex flex-row w-full items-center  my-6 ">
                                <span class=" font-semibold text-stone-800 min-w-max" v-text="item.label"></span>
                                <span v-if="edit==true" contenteditable class=" w-full ml-2 bg-stone-200 px-2 py-1 rounded-md" v-text="item.text"></span>
                                <span v-else class=" w-full ml-2 px-2 py-1 rounded-md" v-text="item.text"></span>
                            </div>
                        </div>
                        <div class="flex w-full justify-end relative">
                            <!-- <btn_ @click="setEditable" class=" absolute -mt-5 mr-3" :options="{label:edit==true?'Valider':'',style:' base_bg text-white w-full px-0',ico:edit==true?$store.state.icons.done:$store.state.icons.edit}"></btn_> -->
                            <button @click="setEditable" class=" p-1 bg-[#63B6B9] rounded-md absolute -mr-3 -mt-4">
                                <svg v-if="edit==false" class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                <svg v-else class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                            </button>
                        </div>
                    </div>

                    <!-- importation -->
                    <div class="h-full w-3/4 px-7  flex flex-row justify-between ">
                        <div v-for="item, i in importFichier" :key="i" class="flex flex-row">
                            <div class="flex flex-col">
                                <span v-text=" item.titre" class=" font-semibold"></span>
                                <btn_ :options="{label:item.label_fichier,style:' base_bg text-white w-full',ico:$store.state.icons.uploadFolder}"></btn_>
                                <btn_ class=" mt-3" :options="{label:item.text_fichier,style:' bg-gray-200 text-red-500 w-full',stylelabel:' text-black',ico:$store.state.icons.pdf_,ico2:$store.state.icons.delete}"></btn_>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- titre du tableau -->
                <div class="flex z-50 flex-row items-center py-1 bg-white mt-6 justify-between w-full">
                    <div class="flex flex-row items-center"> 
                        <h5 :class="showFormulaire==true?'text-sm ':'xl'" class=" font-semibold  ">Listes des sites de formation</h5>
                    </div>
                                  <btn_  v-if="showFormulaire==false" @click="()=>{showFormulaire=true}" class=" ml-1 " :options="{url:{name:'organisme',query: {is:true}},label:'Nouveau site',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>

                 </div>
                <div class="  w-full text_xs  h-[70vh] overflow-auto px-2 mt-9">
                    <table class="  w-full items-start">
                        <tr class=" w-full sticky -top-7  bg-white py-4  ">
                            <th class="py-2 w-[8%] text-start text-stone-500 border-r border-stone-200">idx</th>
                            <th :class="showFormulaire==true?'w-[80%] ':'w-[80%]'" class="py-2 text-start text-stone-500  pl-5 ">TitreSite</th>
                            <th :class="showFormulaire==true?'w-[20%]':'w-[20%]'" class="py-2 text-center text-stone-500 ">action</th>
                        </tr>
                        <tr v-for="item,i in listeSite" :key="i" class=" group text-[12px] hover:text-white   hover:bg-[#63B6B9]">
                            <td class=" text-gray-500 px-3" v-text="i"></td>
                            <td class="pl-5  ">
                                <span v-text="showFormulaire==false?item.titre:cutText(item.titre)"></span>
                            </td>
                            <td class="  px-3 ">
                                <div class="flex my-3 flex-row items-center">
                                    <button @click="()=>{editIt_(item.titre)}" class=" p-1 bg-stone-100 rounded-md m-1 py-1">
                                        <svg class=" fill-current color_base w-4" viewBox="0 0 24 24">
                                            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" /></svg>
                                    </button>
                                    <u v-if="showFormulaire==false" @click="()=>{editIt_(item.titre)}" class=" group-hover:text-white color_base">Modifier</u>
                                    <button class=" ml-3 p-1 bg-stone-100 m-1 rounded-md">
                                        <svg class=" fill-current text-red rounded-md w-4" viewBox="0 0 24 24">
                                            <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div v-if=" showFormulaire==true" class="flex flex-col w-[65%] ">
            <div class=" flex flex-row  sticky duration-300 -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">
                <h1 class=" text-lg ml-2  "> > Gestion de site de formation</h1>
            </div>
            <popup :item="selectedItem" class=" sticky top-6 mx-3 mt-3 bg-white rounded-lg  h-max px-5 "></popup>

        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import input_ from '../components/input/inputTxt.vue'
import popup from '../components/poppup/organisme/organisme.vue'
export default {
    components: {
        btn_,
        popup,
        input_
    },
    data() {
        return {
            data_: {
                label: 'TitreSite',
                model: '',
                type: 'text',
                edit: null,

            },

            selectedItem: {
                titre: ''
            },
            raisonSocial: [{
                    label: 'Raison SOCIAL:',
                    text: 'NDA'
                },
                {
                    label: 'Numéro SIREN :',
                    text: '841939028'
                },
                {
                    label: 'Numéro SIRET :',
                    text: '84193902800012'
                },
                {
                    label: 'NDA :',
                    text: 'input NDA'
                },
            ],
            importFichier: [{
                titre: 'Certificat',
                label_fichier: 'Uploader une fichier',
                text_fichier: 'document1.pdf'
            }, {
                titre: 'Ajouter un logo',
                label_fichier: 'Ajouter logo',
                text_fichier: 'Logo.png'
            }, {
                titre: 'BPF',
                label_fichier: 'Uploader une fichier',
                text_fichier: 'document1.pdf'
            }, ],
            listeSite: [{
                index: '001',
                titre: "Comment aider les élèves à développer leur pensée critique dans l'apprentissage en classe"
            }, {
                index: '002',
                titre: "Les avantages et les inconvénients de l'enseignement en ligne pour les élèves du secondaire"
            }, {
                index: '003',
                titre: "Les avantages et les inconvénients de l'enseignement en ligne pour les élèves du secondaire"
            }, {
                index: '004',
                titre: "Les avantages et les inconvénients de l'enseignement en ligne pour les élèves du secondaire"
            }, {
                index: '005',
                titre: "Les avantages et les inconvénients de l'enseignement en ligne pour les élèves du secondaire"
            }, ],
            showFormulaire: false,
            edit: false
        }
    },
    methods: {
        setEditable() {
            this.edit == true ? this.edit = false : this.edit = true
        },
        editIt_(item) {
            this.selectedItem.titre = item
            this.showFormulaire = true
        },
        cutText(item) {
            return item.length > 10 ? item.substring(0, 50) + '...' : item
        },
        nouveauSite() {
            this.showFormulaire = true
            this.selectedItem.titre = ""
        }
        ,
        goOn(){ 
            // this.$router.push({name: 'organisme'})
            this.$router.go(-1)
        }
    },
    mounted() {
        if (this.$route.query.is) {
            this.showFormulaire = true
        }
        
    },
    updated() {
        if (this.$route.query.is) {
            this.showFormulaire = true
        }else{

            this.showFormulaire = false
        }
    }
}
</script>

<style>

</style>
