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
        <div class="flex flex-row justify-between mt-7">
            <!-- Radion btn -->
            <div class="flex bg-white hover:base_bg shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center justify-center  border-[1px]   border-[#63B6B9] px-7   rounded-md">
                    <div class="relative ">
                        <span class=" absolute -mt-8  -ml-14 bg-white px-2 font-semibold">Radio</span>
                    </div>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:true}"></radio_>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:false}"></radio_>
                    <radio_ :item="{style:'flex-col',label:'Lorem ipsum',check:false}"></radio_>
                </div>
            </div>
            <!-- text -->
            <div class="flex bg-white shadow-lg rounded-md p-2">
                <div class="flex flex-col border-[1px] w-[200px]  border-[#63B6B9]   px-2 py-3 rounded-md">
                    <div class="relative ">
                        <span class=" absolute -mt-6  ml-2 bg-white px-2 font-semibold">Texte</span>
                    </div>
                    <span class="text_xs break-all">
                        Les feuilles tombent lentement des arbres en automne. Le sourire de l'enfant illumine la pièce.Le café chaud réchauffe mes mains frigorifiées.
                    </span>
                </div>
            </div>
            <!-- select -->
            <div class="flex bg-white shadow-lg rounded-md p-2">
                <div class="flex flex-col border-[1px]    border-[#63B6B9]  px-3   py-3 rounded-md">
                    <div class="relative ">
                        <span class=" absolute -mt-6  ml-2 bg-white px-2 font-semibold">Select</span>
                    </div>

                    <selectOption :options="niveaufonction"></selectOption>
                </div>
            </div>

        </div>

        <!-- type de reponse 2 -->
        <div class="flex flex-row justify-between mt-7">
            <!-- Nombre -->
            <div class="flex bg-white shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center justify-center  border-[1px]   border-[#63B6B9] px-7   rounded-md">
                    <div class="relative ">
                        <span class=" absolute -mt-4 -ml-20 bg-white px-2 font-semibold">Nombre</span>
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
            <div class="flex bg-white shadow-lg rounded-md p-2">
                <div class="flex flex-col items-center border-[1px] w-[20vw]  border-[#63B6B9]   px-2 py-3 rounded-md">
                    <div class="relative ">
                        <span class=" absolute -mt-6 -ml-32 bg-white px-2 font-semibold">Document</span>
                    </div>
                    <btn_ class=" " :options="{label:'Uploader une document', style:' base_bg py-2 text-white',stylelabel:' text-white', ico:$store.state.icons.uploadFolder}"></btn_>
                    <btn_ class=" mt-4 " :options="{label:'document1.pdf',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>
                    <btn_ class=" mt-4 " :options="{label:'Certificat_doc...',ico2Style:'color_base',style:' bg-[#ccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'base_bg text-white',ico:$store.state.icons.pdf_,ico2:$store.state.icons.cloudDown,ico3:$store.state.icons.delete}"></btn_>

                </div>
            </div>

        </div>

        <div class=" mt-7 flex flex-row items-center  w-full">
            <span class=" color_base font-semibold text_xs">Média: </span>

        </div>
        <div class=" mt-3 flex flex-row items-center  w-full">
            <btn_ class=" " :options="{label:'Uploader une fichier', style:' base_bg py-2 text-white',stylelabel:' text-white', ico:$store.state.icons.uploadFolder}"></btn_>
        </div>
        <div class=" mt-3 grid grid-cols-3 items-center   w-full">
            <div class=" mx-3 " v-for="item,i in importFichierMedia " :key="1">
                <btn_ class=" mt-4 " :options="{label:item.text_fichier,ico2Style:'color_base',style:' bg-[#cccccc] py-1 text-red-500',stylelabel:' text-black',ico2Style:'  color_base',ico2:$store.state.icons.eye,ico3:$store.state.icons.delete}"></btn_>

            </div>
        </div>

        <div class="flex flex-col w-full mt-8">
            <div v-for="item,i in reponses" :key="i" class="flex flex-row items-center mt-4">
                <div class="flex flex-row text_xs mt-5 w-full justify-start  ">
                    <div class=" group w-[70%]  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
                        <div class=" flex relative z-0 w-full ">
                            <span class="-mt-4  text_xs font-semibold z-0  ml-2 bg-white inline px-1 duration-300 absolute" v-text="item.label"> </span>
                        </div>
                        <span v-text=" item.type"> </span>
                    </div>
                    <div @click="()=>{index=i}" :class="index==i?'bg-[#63B6B9]':' '" class=" ml-4 p-2   rounded-md border-[1px] border-[#63B6B9]">
                        <svg v-if="index!=i" class=" w-4 text-white fill-current " viewBox="0 0 24 24">
                            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" /></svg>
                        <svg v-else class="  fill-current w-4 text-white" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex w-full px-1">
            <div class="  mt-9 w-full  base_bg justify-center rounded-md flex">
                <btn_ :options="{label:'Sauvegarder', style:' base_bg py-2 text-white',stylelabel:' text-white'}"></btn_>
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
export default {
    components: {
        inputTxtVue,
        selectOption,
        btn_,
        radio_
    },
    data() {
        return {
            index: null,
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
                    type: 'Brésil'
                },
                {
                    label: 'Proposition B',
                    type: 'Argentine'
                },
                {
                    label: 'Proposition C',
                    type: 'Pérou'
                },
                {
                    label: 'Proposition D',
                    type: 'Colombie'
                },
            ]
        }
    }

}
</script>

<style>
    
    </style>
