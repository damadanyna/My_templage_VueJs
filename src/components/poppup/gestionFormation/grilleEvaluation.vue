<template>
<div class="flex flex-col w-full px-3 py-7">
    <div class="flex pl-5 flex-col">
        <div class=" mt-7 flex flex-row items-center  w-full">
            <inputTxtVue class=" w-full " :options="{label:'Question',model:`Quel est le plus grand pays d'Amérique du Sud ?`,type:'text'}"></inputTxtVue>
            <button @click="()=>{goto_()}" class=" ml-2  flex flex-row items-center bg-red-100  px-1 rounded-md py-1 ">
                <svg class=" group-hover:text-white   fill-current w-5 text-red-500" viewBox="0 0 24 24">
                    <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z" /></svg>
            </button>
        </div>
        <!-- type de reponse -->
        <div class=" mt-7 flex flex-row items-center  w-full">

            <span class=" color_base font-semibold text_xs">Type de réponse : </span>
            <span class=" ml-3 text_xs">Radio, Text, Select,1 à 5, documents </span>
        </div>
        <!-- type de reponse 1 -->
        <div class="flex flex-row justify-between  mt-7">
            <!-- Radion btn -->
            <div @click="()=>{index=0}" :class="index==0?'bg-stone-300':'bg-white'" class="flex cursor-pointer shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center justify-center group-hover:boder-[#444]  border-[1px] border-[#63B6B9] px-7   rounded-md">
                    <div class="relative ">
                        <span :class="index==0?'bg-stone-300':'bg-white'" class=" absolute -mt-10   -ml-14 px-2 font-semibold">Radio</span>
                    </div>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:true}"></radio_>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:false}"></radio_>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:false}"></radio_>
                </div>
            </div>
            <!-- text -->
            <div @click="()=>{index=1}" :class="index==1?'bg-stone-300':'bg-white'" class="flex  cursor-pointer  shadow-lg rounded-md p-2">
                <div class="flex flex-col border-[1px] w-[200px]  border-[#63B6B9]   px-2 py-3 rounded-md">
                    <div class="relative ">
                        <span :class="index==1?'bg-stone-300':'bg-white'" class=" absolute -mt-5  ml-2   px-2 font-semibold">Texte</span>
                    </div>
                    <span class="text_xs break-all">
                        Les feuilles tombent lentement des arbres en automne. Le sourire de l'enfant illumine la pièce.Le café chaud réchauffe mes mains frigorifiées.
                    </span>
                </div>
            </div>
            <!-- select -->
            <div @click="()=>{index=2}" :class="index==2?'bg-stone-300':'bg-white'" class="flex  cursor-pointer  shadow-lg rounded-md p-2">
                <div class="flex flex-col border-[1px]    border-[#63B6B9]  px-3   py-3 rounded-md">
                    <div class="relative ">
                        <span :class="index==2?'bg-stone-300':'bg-white'" class=" absolute -mt-5  ml-2   px-2 font-semibold">Select</span>
                    </div>

                    <selectOption :options="{elt:niveaufonction,select:false}"></selectOption>
                </div>
            </div>

        </div>

        <!-- type de reponse 2 -->
        <div class="flex flex-row justify-between mt-7">
            <!-- Nombre -->
            <div @click="()=>{index=3}" :class="index==3?'bg-stone-300':'bg-white'" class="flex  cursor-pointer  shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center justify-center  border-[1px]   border-[#63B6B9] px-7   rounded-md">
                    <div class="relative ">
                        <span :class="index==3?'bg-stone-300':'bg-white'" class=" absolute -mt-16 -ml-20 px-2 font-semibold">Nombre</span>
                    </div>

                    <div class="flex flex-row items-center">
                        <button class="  mx-3 color_base text-lg">-</button>
                        <div class="flex flex-row  px-4 items-center bg-stone-300 border-b-2 border-[#63B6B9]">
                            <span class=" px-1">1</span>
                        </div>
                        <button class=" p-1 mx-3 color_base text-lg">+</button>
                    </div>
                </div>
            </div>
            <!-- Document -->
            <div @click="()=>{index=4}" :class="index==4?'bg-stone-300':'bg-white'" class="flex  cursor-pointer  shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center border-[1px] w-[20vw]  border-[#63B6B9]   px-2 py-3 rounded-md">
                    <div class="relative ">
                        <span :class="index==4?'bg-stone-300':'bg-white'" class=" absolute -mt-5 -ml-32 px-2 font-semibold">Document</span>
                    </div>
                    <btn_ class=" mt-1 " :options="{label:'Uploader une document', style:' base_bg py-2 text-white',stylelabel:' text-white', ico:$store.state.icons.uploadFolder}"></btn_>
                    <btn_ class=" mt-4 " :options="{label:'document1.pdf',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
                    <btn_ class=" mt-4 " :options="{label:'Certificat_doc...',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>

                </div>
            </div>

        </div>

        <div class=" mt-7 flex flex-row items-center  w-full">
            <span class=" color_base font-semibold text_xs">Média: </span>

        </div>
        <div class=" mt-3 flex flex-row items-center  w-full">
            <!-- <btn_ :options="{label:item.label_fichier,style:' base_bg text-white w-full',ico:$store.state.icons.uploadFolder,type:'file',in:'fileMedia_'+i}"></btn_>
            <input @change="doIt('fileMedia_'+i,i)" type="file" hidden name="" :id="'fileMedia_'+i"> -->

            <btn_ class=" " :options="{label:'Uploader une fichier', style:' base_bg py-2 text-white',stylelabel:' text-white', ico:$store.state.icons.uploadFolder}"></btn_>
        </div>
        <div class=" mt-3 grid grid-cols-3 items-center   w-full">
            <div class=" mx-3 " v-for="item,i in importFichierMedia " :key="1">
                <btn_ class=" mt-4 " :options="{label:item.text_fichier,ico2Style:'color_base',style:' bg-[#cccccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'  color_base',ico2:$store.state.icons.eye,ico3:$store.state.icons.delete}"></btn_>

            </div>
        </div>

        <div class=" w-[80%]  mt-8">
            <radioVue v-if="index==0" :options="{liste:reponses,editable:true}"></radioVue>
            <textareaVue v-if="index==1" :options="{model:'',label:'Réponse'}"></textareaVue>
            <selectOptionVue v-if="index==2" :options="{elt:niveaufonction,select:false}"></selectOptionVue>
            <numberIncrementVue v-if="index==3" :options="{model:1}"></numberIncrementVue>
            <div v-if="index==4" class="flex flex-col">
                <span class=" text-stone-600">Importez les réponses</span>
                <div class="flex flex-row mt-3">
                    <btn_ class="  " :options="{label:'document1.pdf',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
                    <btn_ class="  ml-4  " :options="{label:'Certificat_doc...',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../button/btn_.vue'
import inputTxtVue from '../../input/inputTxt.vue'
import radio_ from '../../button/radio_.vue'
import selectOption from '../../input/selectOption.vue'
import radioVue from '../../input/radio.vue'
import textareaVue from '../../input/textarea.vue'
import selectOptionVue from '../../input/selectOption.vue'
import numberIncrementVue from '../../input/numberIncrement.vue'

export default {
    components: {
        inputTxtVue,
        selectOption,
        btn_,
        radio_,
        radioVue,
        textareaVue,
        selectOptionVue,
        numberIncrementVue
    },
    data() {
        return {
            index: 0,
            importFichier: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
            importFichierMethPed: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
            importFichierMedia: [{
                text_fichier: 'media_document.pdf'
            }, {
                text_fichier: 'media_image.jpg'
            }, {
                text_fichier: 'media_video.mp4'
            }, {
                text_fichier: 'media_Audio.mp3'
            }, ],
            importFichierMethPed: [{
                text_fichier: 'document1.pdf'
            }, {
                text_fichier: 'Certificat_document.pdf'
            }, ],
            niveaufonction: [{
                label: 'Formation name',
                val: ''
            }, {
                label: 'Option 1',
                val: ''
            }, {
                label: 'Option 2',
                val: ''
            }, {
                label: 'Option 3',
                val: ''
            }, ],
            reponses: [{
                    label: 'Proposition A',
                    reponse: 'Brésil',
                },
                {
                    label: 'Proposition B',
                    reponse: 'Argentine',
                },
                {
                    label: 'Proposition C',
                    reponse: 'Pérou',
                },
                {
                    label: 'Proposition D',
                    reponse: 'Colombie',
                },
            ]
        }
    },
    methods: {

        doIt(val, index) {
            var io = document.getElementById(val)
            this.importFichier[index].text_fichier = io.files[0].name.length > 10 ? io.files[0].name.substring(0, 10) + '...' : io.files[0].name
        },
    }

}
</script>

<style>
    
    </style>
