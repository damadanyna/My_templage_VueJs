<template>
<div class="flex flex-col px-6 bg-white rounded-md">
    <div class="flex flex-row font-semibold">
        <span>Grille d'évaluation/Sondage :</span>
        <span class=" color_base">Titre formation - Module</span>
    </div>
    <div class="flex flex-row text_xs mt-3 font-semibold">
        <span>Remplir par :</span>
    </div>
    <div class="flex flex-row text_xs mt-3  ">
        <btn_ @click="()=>{ }" class=" " :options="{label:'Formateur',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
        <btn_ @click="()=>{ }" class=" " :options="{label:'Bénéficiaire',style:' bg-stone-400 ml-3 text-black py-2 text-stone-800 '}"></btn_>
    </div>
    <div class="flex flex-row text_xs mt-5 w-full justify-center  ">
        <div class=" group w-[60%]  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
            <div class=" flex relative z-0 w-full ">
                <span class="-mt-4  text_xs font-semibold z-0  ml-2 bg-white inline px-1 duration-300 absolute"> Question</span>
            </div>
            <span>Quel est le plus grand pays d'Amérique du Sud ?</span>
        </div>
    </div>
    <div class="flex flex-row text_xs mt-3 font-semibold">
        <span>Media</span>
    </div>
    <div class="flex flex-row text_xs mt-3  ">
        <btn_ @click="()=>{ }" class=" " :options="{label:'Uploader une fichier',ico:$store.state.icons.uploadFolder,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
    </div>
    <div class="grid grid-cols-4 mt-5">
        <div class=" text-[14px] items-center bg-stone-100 mx-3 px-5 flex flex-row rounded-md" v-for="item, i in media " :key="i">
            <span v-text="item"></span>
            <button class="  ml-2">
                <svg class="  fill-current w-4 color_base" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
            </button>
        </div>
    </div>
    <div class="flex flex-col w-full mt-8 items-center">
        <div class="flex flex-row w-[70%]"> 
            <radioVue :options="{liste:reponses,editable:false}"></radioVue>
        </div>
        <div class="flex w-full justify-center my-12">
            <span class=" w-[60%] h-[2px] bg-stone-300 "></span>
        </div>
    </div>
    <!-- Question 2 -->
    <div class="flex flex-row text_xs mt-3  ">
        <btn_ @click="()=>{ }" class=" " :options="{label:'Formateur',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
        <btn_ @click="()=>{ }" class=" " :options="{label:'Bénéficiaire',style:' bg-stone-400 ml-3 text-black py-2 text-stone-800 '}"></btn_>
    </div>
    <div class="flex flex-row text_xs mt-5 w-full justify-center  ">
        <div class=" group w-[60%]  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
            <div class=" flex relative z-0 w-full ">
                <span class="-mt-4  text_xs font-semibold z-0  ml-2 bg-white inline px-1 duration-300 absolute"> Question</span>
            </div>
            <span>Quel est le plus grand pays d'Amérique du Sud ?</span>
        </div>
    </div>
    <div class="flex flex-row text_xs mt-3 font-semibold">
        <span>Media</span>
    </div>
    <div class="flex flex-row text_xs mt-3  ">
        <btn_ @click="()=>{ }" class=" " :options="{label:'Uploader une fichier',ico:$store.state.icons.uploadFolder,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
    </div>
    <div class="grid grid-cols-4 mt-5">
        <div class=" text-[14px] items-center bg-stone-100 mx-3 px-5 flex flex-row rounded-md" v-for="item, i in media " :key="i">
            <span v-text="item"></span>
            <button class="  ml-2">
                <svg class="  fill-current w-4 color_base" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
            </button>
        </div>
    </div>
    <div class="flex flex-col w-full mt-8 items-center">
        <div class="flex flex-row w-[70%]"> 
            <radioVue :options="{liste:reponses,editable:true}"></radioVue>
        </div>

        <div class="flex w-full justify-center my-12">
            <span class=" w-[60%] h-[2px] bg-stone-300 "></span>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue';
import input_ from '../../components/input/inputTxt.vue';
import radioVue from '../../components/input/radio.vue';

export default {
    components: {
        btn_,
        input_,
        radioVue
    },
    data() {
        return {
            index: null,
            media: ['media_document.pdf', 'media_image.jpg', 'media_video.mp4', 'media_Audio.mp3'],
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
    }

}
</script>

<style>

</style>
