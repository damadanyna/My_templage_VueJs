<template>
<div class=" flex flex-row w-full text_xs  h-full -mb-[6.7rem]">
    <div class=" flex flex-col w-[70%] max-h-full mb-20 overflow-y-auto ">
        <div class="pl-6 flex  flex-col w-full ">
            <!-- logo -->
            <div class="flex flex-col mt-12 items-center">
                <img src="../../assets/Logo_DF_2.svg" alt="" />
                <span class=" text-4xl">Dossier </span>
                <span class=" text-4xl color_base">Formation </span>
            </div>
            <!-- text -->
            <div class=" mt-12 flex items-center  justify-center text-center w-[100%] px-20 ">
                Bienvenue sur notre plateforme de formation en ligne ! Nous sommes une entreprise spécialisée dans la formation professionnelle pour les entreprises et les particuliers. Nous sommes convaincus que la formation est un élément clé pour le développement personnel et professionnel de chacun. C'est pourquoi nous mettons notre expertise à votre disposition pour vous aider à atteindre vos objectifs.
            </div>
            <!-- boutton -->
            <div class="flex mt-6 w-full justify-center">
                <btn_ @click="()=>{}" class=" uppercase " :options="{label:'Commencer',style:' uppercase base_bg text-white py-2   '}"></btn_>
                <span class=" ml-9 uppercase border-[1px] border-[#63B6B9] px-[24px] rounded-lg color_base py-2 "> A propos</span>
            </div>
            <!-- horizotal scrollbar -->
            <div class="w-full flex h-[35vh] select-none px-6 flex-row mt-20">

                <div id="horizontalView_" class="flex flew-row w-full py-2  h-[30vh] duration-300 overflow-x-hidden overflow-y-hidden">
                    <div class="flex w-full " v-for="i in 10" :key="i">
                        <!-- dote -->
                        <div v-if="i==1" class="w-[80px] flex h-full px-1">
                            <div class=" mt-3 border-dashed border-black  border-t-2 w-full h-3"></div>
                        </div>
                        <div v-else class="w-[180px] flex h-full px-1">
                            <div class=" mt-3 border-dashed border-black  border-t-2 w-full h-3"></div>
                        </div>
                        <!-- point carreau -->
                        <div class=" h-[70px] justify-center flex flex-col items-center">
                            <div class=" flex p-1 border-[1px] border-[#42898B] rounded-md transform rotate-45">
                                <div class="w-3 h-3 bg-black rounded-sm "></div>
                            </div>
                            <div class="flex h-full w-0 my-1 ">
                                <div class="h-full w-full  border-[1px] border-black border-dashed"> </div>
                            </div>
                            <div class=" flex ml-[.6px] rounded-md transform rotate-45">
                                <div class="w-[0.70rem] h-[0.70rem] bg-[#42898B] rounded-sm "></div>
                            </div>
                            <div class="flex flex-col relative w-full">
                                <div class="absolute flex mt-4 w-64 -ml-8">
                                    <span class=" font-semibold">Indicateur 00{{ i }}</span>
                                </div>
                                <div class="absolute flex w-44  mt-11 -ml-[4.5rem] z-0 text-center ">
                                    <span class="  ">Lorem ipsum dolor sit amet diam lorem sit</span>
                                </div>
                            </div>
                        </div>
                        <!-- dote -->
                        <div v-if="i==10" class="w-[180px] flex h-full px-1">
                            <div class=" mt-3 border-dashed border-black  border-t-2 w-full h-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-row justify-center items-center">
                <button @click="()=>{switchLeft()}" class=" rounded-lg bg-stone-200 px-2">
                    <svg class=" w-6 fill-current color_base" viewBox="0 0 24 24">
                        <path d="M15.41 16.58 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" /></svg>
                </button>
                <button @click="()=>{switchRigth()}" class=" rounded-lg bg-stone-200 px-2 ml-3">
                    <svg class=" w-6 fill-current color_base" viewBox="0 0 24 24">
                        <path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" /></svg>
                </button>
            </div>
        </div>
        <!-- services -->
        <div class="pl-6 flex flex-col">
            <!-- 2 engrenage -->
            <div class="flex w-full justify-center flex-row mt-16">
                <div class=" ">

                    <div class=" relative ml-3 z-30 ">
                        <img class=" w-16" src="../../assets/gear.svg" alt="">
                    </div>
                    <div class=" relative -mt-[2.6rem] z-10">
                        <img class=" w-14" src="../../assets/gear2.svg" alt="">
                    </div>
                </div>
            </div>

            <!-- titre -->
            <div class=" w-full mt-14 relative flex flex-row justify-center">
                <span class=" text-3xl">Services</span>
                <span class=" text-7xl absolute opacity-20 -mt-9">Services</span>
            </div>

            <div class=" mt-20 flex items-center  justify-center text-center w-[100%] px-20 ">
                Nous proposons une large gamme de formations pour répondre aux besoins spécifiques de nos clients. Que vous soyez une entreprise ou un particulier, nous avons des formations adaptées à votre profil et à vos objectifs. Nous proposons des formations en ligne, en présentiel ou en blended learning, ainsi que des formations sur mesure pour répondre à vos besoins spécifiques. Nos formateurs expérimentés vous accompagnent tout au long de votre parcours pour vous aider à atteindre vos objectifs. </div>
        </div>

        <!-- chiffres cle -->
        <div class="flex relative flex-row items-center justify-center w-full">
            <div class="flex w-full mt-12  bg-gradient-to-tl from-stone-700 to-stone-900 pb-14 flex-col">
                <div id="img_a" class="w-full z-10 h-[70%]  absolute "></div>
                <!-- <img class=" w-full absolute h-full" src="../../assets/bg.svg" alt=""> -->
                <!-- titre -->
                <div class=" w-full mt-20 relative flex flex-row justify-center">
                    <span class=" text-white text-3xl">Services</span>
                    <span class=" text-white text-7xl absolute opacity-20 -mt-9">Services</span>
                </div>

                <div class="grid grid-cols-3 w-full z-30 mt-12  ">
                    <div v-for="item,i in listeOfBox " :key="i" class="  flex mx-5 mb-1 flex-row">
                        <div class="flex w-full justify-center items-center flex-col ">
                            <div id="box_" class=" z-10 flex w-32 h-24 rounded-md bg-white justify-center  items-center">
                                <span class="color_base text-xl font-semibold" v-text="item.nombre"></span>
                            </div>
                            <span id="shadowBox_" class=" relative -mt-9 w-24 h-[10px] z-0  "></span>
                            <span v-text="item.titre" class=" h-12 mt-4 text-white font-semibold text-xl text-center"></span>
                            <span v-text="item.label" class=" text-white h-24 mt-6 text-center"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- chiffres cle -->
        <div class="flex relative flex-row items-center mb-12 justify-center w-full">
            <div class="flex w-full mt-20 mb-14 flex-col">
                <div class=" w-full mt-20 relative flex flex-row justify-center">
                    <span class=" text-3xl">Temoignage</span>
                    <span class=" text-7xl absolute opacity-20 -mt-9">Temoignage</span>
                </div>
                <div class=" mt-10 flex items-center  justify-center text-center w-[100%] px-20 ">
                    Nous avons aidé des centaines de clients à atteindre leurs objectifs de formation et à développer leurs compétences. Voici ce que certains de nos clients satisfaits ont à dire à propos de notre service
                </div>
                <div class=" mt-10 flex flex-row items-center  justify-center text-center w-[100%]  ">
                    <div class="border-[1px] rounded-md shadow-xl border-[#63B6B9] flex-col w-80 py-5 px-4 flex">
                        <div class="flex  justify-center">
                            <img class=" w-7" src="../../assets/cot.svg" alt="">
                        </div>
                        <span class=" mt-2 text-center">J'ai suivi une formation sur la gestion de projet proposée par cette plateforme et j'ai été très satisfait du contenu et de la qualité de la formation. Les formateurs étaient très compétents et ont su répondre à toutes mes questions.</span>
                        <div class="flex w-full justify-center">
                            <div class="flex h-[1px] w-14 bg-black mt-6"></div>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <img class=" w-16 mt-2 rounded-full object-cover" src="../../assets/man.png" alt="">
                            <span class=" font-semibold">John Doe</span>
                        </div>
                    </div>
                    <div class=" ml-14 border-[1px] rounded-md shadow-xl border-[#63B6B9] flex-col w-80 py-5 px-4 flex">
                        <div class="flex  justify-center">
                            <img class=" w-7" src="../../assets/cot.svg" alt="">
                        </div>
                        <span class=" mt-2 text-center">J'ai suivi une formation sur la gestion de projet proposée par cette plateforme et j'ai été très satisfait du contenu et de la qualité de la formation. Les formateurs étaient très compétents et ont su répondre à toutes mes questions.</span>
                        <div class="flex w-full justify-center">
                            <div class="flex h-[1px] w-14 bg-black mt-6"></div>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <img class=" w-16 mt-2 rounded-full object-cover" src="../../assets/woman.png" alt="">
                            <span class=" font-semibold">John Doe</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class=" flex h-full  flex-row w-[30%]">
        <inscriptionVue v-if="this.$store.state.signIn==true"></inscriptionVue>
        <Auth v-else></Auth>
    </div>
</div>
</template>

<script>
import btn_ from '../../components/button/btn_.vue'; 
import {
    gsap
} from 'gsap';
import inscriptionVue from './formulaire/inscription.vue';
import Auth from './formulaire/auth.vue';

export default {
    components: {
        btn_,
        inscriptionVue,
        Auth
    },
    data() {
        return {
            position: 0,
            startX: null,
            endX: null,
            listeOfBox: [{
                    titre: 'Nombre de formations proposées',
                    nombre: '558',
                    label: 'indiquez le nombre total de formations proposées sur votre plateforme.'
                },
                {
                    titre: 'Nombre de formateurs',
                    nombre: '1045',
                    label: 'indiquez le nombre total de formateurs disponibles sur votre plateforme.'
                },
                {
                    titre: 'Nombre de bénéficiaires formés',
                    nombre: '10.586',
                    label: 'indiquez le nombre total de personnes ayant suivi des formations sur votre plateforme.'
                },
                {
                    titre: 'Taux de satisfaction des clients',
                    nombre: '10',
                    label: 'indiquez le pourcentage de clients satisfaits de votre service.'
                },
                {
                    titre: 'Taux de réussite aux examens',
                    nombre: '95%',
                    label: 'Si vous proposez des examens à la fin de vos formations, indiquez le taux de réussite de vos bénéficiaires.'
                },
                {
                    titre: 'Durée moyenne des formations',
                    nombre: '03 h',
                    label: 'Indiquez la durée moyenne de vos formations pour aider les bénéficiaires à choisir la formation la plus adaptée à leurs besoins.'
                },

            ]
        }
    },
    methods: {
        switchLeft() {
            if (this.position > 0) {
                this.position -= 100
                gsap.to('#horizontalView_', {
                    duration: .4,
                    scrollLeft: this.position
                })
            }
        },
        switchRigth() {

            if (this.position <= document.getElementById('horizontalView_').scrollLeft) {
                this.position += 100
                gsap.to('#horizontalView_', {
                    duration: .4,
                    scrollLeft: this.position
                })
            }

        },
        handleMouseDown(event) {
            this.startX = event.clientX;
        },
        handleMouseMove(event) {
            if (this.startX !== null) {
                this.endX = event.clientX;
            }
        },
        handleMouseUp() {
            if (this.startX !== null && this.endX !== null) {
                const deltaX = this.endX - this.startX;
                if (deltaX > 0) {
                    // L'utilisateur a glissé vers la droite avec la souris
                    this.handleSwipeRight();
                } else if (deltaX < 0) {
                    // L'utilisateur a glissé vers la gauche avec la souris
                    this.handleSwipeLeft();
                }
            }
            this.startX = null;
            this.endX = null;
        },
        handleSwipeLeft() {
            this.switchRigth()
            // Logique à exécuter lors du glissement vers la gauche avec la souris

        },
        handleSwipeRight() {
            // Logique à exécuter lors du glissement vers la droite avec la souris
            this.switchLeft()
        }
    },

    mounted() {
        this.startX = null;
        this.endX = null;
        document.getElementById('horizontalView_').addEventListener('mousedown', this.handleMouseDown);
        document.getElementById('horizontalView_').addEventListener('mousemove', this.handleMouseMove);
        document.getElementById('horizontalView_').addEventListener('mouseup', this.handleMouseUp);
    },
    beforeDestroy() {
        document.getElementById('horizontalView_').removeEventListener('mousedown', this.handleMouseDown);
        document.getElementById('horizontalView_').removeEventListener('mousemove', this.handleMouseMove);
        document.getElementById('horizontalView_').removeEventListener('mouseup', this.handleMouseUp);
    },
}
</script>

<style scoped>
#img_a {
    background-image: url("../../assets/bg.svg");
    margin-top: 160px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#box_:hover #shadowBox_ {
    box-shadow: 0px 10px 20px rgb(71, 255, 249);
}

#shadowBox_ {
    margin-top: -10px;
    box-shadow: 0px 10px 20px rgb(151, 71, 255);
}
</style>
