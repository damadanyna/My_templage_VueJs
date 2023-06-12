<template>
<div class=" flex flex-row h-full w-full pl-12 text_xs">

    <div class=" flex flex-col w-[70%] items-center justify-center">
        <div class="flex flex-col items-center">
            <img src="../../assets/Logo_DF_2.svg" alt="" />
            <span class=" text-4xl">Dossier </span>
            <span class=" text-4xl color_base">Formation </span>
        </div>
        <div class=" mt-16 flex items-center  justify-center text-center w-[100%] px-20 ">
            Bienvenue sur notre plateforme de formation en ligne ! Nous sommes une entreprise spécialisée dans la formation professionnelle pour les entreprises et les particuliers. Nous sommes convaincus que la formation est un élément clé pour le développement personnel et professionnel de chacun. C'est pourquoi nous mettons notre expertise à votre disposition pour vous aider à atteindre vos objectifs.
        </div>
        <div class="flex mt-6">
            <btn_ @click="()=>{}" class=" uppercase " :options="{label:'Commencer',style:' uppercase base_bg text-white py-2   '}"></btn_>
            <span class=" ml-12 uppercase border-[1px] border-[#63B6B9] px-[24px] rounded-lg color_base py-2 "> A propos</span>

        </div>
    </div>

    <div class=" flex flex-row w-[30%]">
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue';

export default {
    components: {
        btn_
    }
}
</script>

<style>

</style>
