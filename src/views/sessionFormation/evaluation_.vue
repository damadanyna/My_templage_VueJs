<template>
<div class="flex flex-col px-6 bg-white rounded-md">
    <div class="flex flex-row font-semibold">
        <span>Grille d'évaluation/Sondage :</span>
        <span class=" text-[#63B6B9]">Titre formation - Module</span>
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
                <svg class="  fill-current w-4 text-[#63B6B9]" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
            </button>
        </div>
    </div>
    <div class="flex flex-col w-full mt-8">
        <div v-for="item,i in reponses" :key="i" class="flex flex-row items-center mt-4">
            <div class="flex flex-row text_xs mt-5 w-full justify-center  ">
                <div class=" group w-[50%]  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
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
                <svg class="  fill-current w-4 text-[#63B6B9]" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
            </button>
        </div>
    </div>
    <div class="flex flex-col w-full mt-8">
        <div v-for="item,i in reponses" :key="i" class="flex flex-row items-center mt-4">
            <div class="flex flex-row text_xs mt-5 w-full justify-center  ">
                <div class=" group w-[50%]  border-[1px] py-2 rounded-lg items-start px-5 flex flex-col border-[#63B6B9] ">
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
        <div class="flex w-full justify-center my-12">
            <span class=" w-[60%] h-[2px] bg-stone-300 "></span> 
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue';
import input_ from '../../components/input/inputTxt.vue';
export default {
    components: {
        btn_,
        input_
    },
    data() {
        return {
            index: null,
            media: ['media_document.pdf', 'media_image.jpg', 'media_video.mp4', 'media_Audio.mp3'],
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
