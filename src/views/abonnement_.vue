<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Page Abonnement</h1>
    <div class=" bg-white rounded-lg w-full h-max px-12 py-3 flex z-10 text_xs flex-row justify-between">

        <!-- Base -->
        <div class="flex w-2/5 items-center">
            <div class="  shadow__ h-min  flex flex-col items-center py-8 transform scale-90 px-10  border-2 rounded-lg border-stone-300">
                <span>Forfait</span>
                <span class=" text-2xl text-[#63B6B9] font-bold uppercase">base</span>
                <div class=" flex flex-row justify-end">
                    <span class=" text-4xl  uppercase">5.99</span>
                    <div class="flex flex-col justify-end">
                        <span class=" text-xl  ">€</span>
                    </div>
                </div>
                <span class=" text_xs text-stone-600">Par mois</span>
                <div class="flex my-5 flex-col w-full items-center ">
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Paiement securise</span>
                    </div>
                    <div class="flex py-1 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Accès à un nombre limité de cours en ligne dans un domaine spécifique</span>
                    </div>
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Matériel d'apprentissage interactif, tels que des vidéos et des quiz</span>
                    </div>
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-red-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" /></svg>
                        </div>
                        <span class=" ml-3">Aucun certificat de réussite ou de diplôme</span>
                    </div>
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-red-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" /></svg>
                        </div>
                        <span class=" ml-3">Aucun tutorat en ligne</span>
                    </div>

                </div>
                <btn_ class="shadow_ w-full flex " :options="{url:{name:'infoPaiement'}, label:'SOUSCRIRE',style:'base_bg justify-center py-2 base_bg text-white w-full'}"></btn_>

            </div>
        </div>

        <!-- Premium -->
        <div class=" w-2/5 shadow___  flex flex-col items-center py-8 transform scale-90 px-10  border-2 rounded-lg border-[#63B6B9]">
            <span>Forfait</span>
            <span class=" text-2xl font-bold uppercase">premium</span>
            <div class=" flex flex-row justify-end">
                <span class=" text-4xl font-semibold uppercase">29.99</span>
                <div class="flex flex-col justify-end">
                    <span class=" text-xl font-bold ">€</span>
                </div>
            </div>
            <span class=" text_xs text-stone-600">Par mois</span>
            <div class="flex my-5 flex-col w-full items-center ">
                <div class="flex py-2 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Paiement securise</span>
                </div>
                <div class="flex py-1 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Accès illimité à tous les cours en ligne sur le site web</span>
                </div>
                <div class="flex py-2 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Matériel d'apprentissage interactif, tels que des vidéos, des quiz et des projets pratiques</span>
                </div>
                <div class="flex py-2 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Diplôme ou certification reconnu sur le marché du travail pour chaque domaine d'étude</span>
                </div>
                <div class="flex py-2 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Tutorat en ligne illimité avec des instructeurs professionnels et des mentors</span>
                </div>
                <div class="flex py-2 w-full flex-row">
                    <div>
                        <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <span class=" ml-3">Accès à des événements exclusifs en ligne, tels que des webinaires et des conférences, animés par des experts du domaine.</span>
                </div>

            </div>
            <btn_ class="w-full flex" :options="{url:{name:'infoPaiement'},label:'SOUSCRIRE',style:' font-bold justify-center py-3 base_bg text-white w-full'}"></btn_>

        </div>

        <!--  standard -->
        <div class="flex  w-2/5 items-center">
            <div class="  shadow__ h-min  flex flex-col items-center py-8 transform scale-90 px-10  border-2 rounded-lg border-stone-300">
                <span>Forfait</span>
                <span class=" text-2xl  text-[#63B6B9]  font-bold uppercase"> standard</span>
                <div class=" flex flex-row justify-end">
                    <span class=" text-4xl   uppercase">24.99</span>
                    <div class="flex flex-col justify-end">
                        <span class=" text-xl   ">€</span>
                    </div>
                </div>
                <span class=" text_xs text-stone-600">Par mois</span>
                <div class="flex my-5 flex-col w-full items-center ">
                    <div class="flex pt-2 pb-1 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Paiement securise</span>
                    </div>
                    <div class="flex py-1 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Accès illimité à tous les cours en ligne sur le site web</span>
                    </div>
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Matériel d'apprentissage interactif, tels que des vidéos, des quiz et des projets pratiques</span>
                    </div>
                    <div class="flex py-1 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Certificat de réussite pour chaque cours complété</span>
                    </div>
                    <div class="flex py-2 w-full flex-row">
                        <div>
                            <svg class=" fill-current text-green-500 w-5" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>
                        <span class=" ml-3">Tutorat en ligne limité avec des instructeurs professionnels</span>
                    </div>

                </div>
                <btn_ class="shadow_ w-full flex " :options="{url:{name:'infoPaiement'}, label:'SOUSCRIRE',style:'base_bg justify-center py-2 base_bg text-white w-full'}"></btn_>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
export default {
    components: {
        btn_,
    },
    data() {
        return {

        }
    }

}
</script>

<style>
.shadow_ {
  padding: 0px;
  border-radius: 0.5rem;
  margin:0px;
  box-shadow: 0px 20px 45px #63B6B9;
}
/* .shadow__ {
  padding: 0px;
  border-radius: 0.5rem;
  margin:0px;
  box-shadow: 0px 3px 8px rgba(51, 51, 51, 0.368);
} */ 
</style>
