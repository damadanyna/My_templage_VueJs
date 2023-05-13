<template>
<div id="poppupOrganisme">

    <div class=" bg-white rounded-lg flex px-6 py-5 flex-col z-20">

        <span class=" hidden ">{{ item }}</span>
        <!-- forumlaire de base -->
        <div class=" mt-4 flex flex-col">
            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[0]"></input_>
                <input_ class=" w-full ml-3" :options="data_[1]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[2]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[3]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[4]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[5]"></input_>
            </div>
        </div>

        <!-- telechargement -->
        <div class="w-full mt-7 flex flex-row justify-between">
            <span class=" font-semibold">Document associé au bénéficiaire</span>
            <btn_ @click="setIt()" :options="{label:'Uploader une image',style:' base_bg text-white',ico:$store.state.icons.uploadFolder}"></btn_>
        </div>

        <!-- liste des document -->
        <div class="w-full mt-7 flex flex-row ">
            <div class="flex flex-row items-center bg-stone-300 px-2 py-1 rounded-md">
                <button class=" flex flex-row bg-slate-100 p-1  items-center rounded-md">
                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                        <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69 0 0-3.5 1.82-2.67 3.18.67 1.08 2.32-.04 3.74-2.68 0 0 1.82-.64 4.24-.82 0 0 3.86 1.73 4.39-.11.52-1.86-3.06-1.44-3.7-1.25 0 0-2-1.35-2.5-3.21 0 0 1.14-3.95-.61-3.9-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46 0 0-2.33.46-3.39.9 0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15.54.08 0 2.08 0 2.15z" /></svg>
                </button>
                <span class=" text_xs mx-2">document1.pdf</span>
                <button class=" flex flex-row base_bg p-1  items-center rounded-md">
                    <svg class=" fill-current text-white w-4" viewBox="0 0 24 24">
                        <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                </button>
                <button class=" mx-1 flex flex-row bg-stone-100 p-1  items-center rounded-md">
                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>

            </div>
            <div class="flex flex-row items-center bg-stone-300 mx-3 px-2 py-1 rounded-md">
                <button class=" flex flex-row bg-slate-100 p-1  items-center rounded-md">
                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                        <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69 0 0-3.5 1.82-2.67 3.18.67 1.08 2.32-.04 3.74-2.68 0 0 1.82-.64 4.24-.82 0 0 3.86 1.73 4.39-.11.52-1.86-3.06-1.44-3.7-1.25 0 0-2-1.35-2.5-3.21 0 0 1.14-3.95-.61-3.9-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46 0 0-2.33.46-3.39.9 0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15.54.08 0 2.08 0 2.15z" /></svg>
                </button>
                <span class=" text_xs mx-2">Certificat_document.pdf</span>
                <button class=" flex flex-row base_bg p-1  items-center rounded-md">
                    <svg class=" fill-current text-white w-4" viewBox="0 0 24 24">
                        <path d="m17 13-5 5-5-5h3V9h4v4m5.35-2.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97z" /></svg>
                </button>
                <button class=" mx-1 flex flex-row bg-stone-100 p-1  items-center rounded-md">
                    <svg class=" fill-current text-red-500 w-4" viewBox="0 0 24 24">
                        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </button>

            </div>
        </div>

        <!-- Livret d'apprentissage -->
        <div class="w-full mt-7 flex flex-row justify-between">
            <span class=" font-semibold">Livret d’apprentissage</span>
        </div>

        <!-- tableau d'apprentissage -->
        <div class="flex w-full text_xs mt-5">
            <table class=" text_xs  w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200">idx</th>
                    <th class="  w-[34%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Nom du formation</th>
                    <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Date d'inscription</th>
                    <th class="  w-[16%] text-center text-stone-500 mx-2">Etat</th>
                    <th class="  w-[13%] text-center text-stone-500 mx-2">Action</th>
                </tr>
                <tr @click="getIt_()" v-for="item,i in this.$store.state.myData.TitreFormation" :key="i" class=" group duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td class=" group-hover:text-white text-center text-gray-500 px-2" v-text="item.id"></td>
                    <td class=" group-hover:text-white text-center text-[#42898B] font-semibold" v-text="'Les clés pour réussir votre projet'"></td>
                    <td class=" group-hover:text-white text-center" v-text="'18 juin 2025'"></td>
                    <td class=" group-hover:text-white text-center ">
                        <button v-if="item.etat=='Abandonné'" class=" py-1  px-2 my-1 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border" v-text="item.etat"></button>
                        <button v-if="item.etat=='En formation'" class=" py-1  px-2 my-1 bg-green-100 rounded-md text-green-600 text_xs  border-green-500 border" v-text="item.etat"></button>
                        <button v-if="item.etat=='Achevé'" class=" py-1  px-2 my-1 bg-yellow-100 rounded-md text-yellow-600 text_xs  border-yellow-500 border" v-text="item.etat"></button>
                    </td>
                    <td class=" color_base group-hover:text-white items-center">
                        <div class="  flex flex-row text-center">
                            <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1   ">
                                <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                            </button> <u class=" ml-1">Voir</u>
                        </div>
                    </td>
                </tr>
            </table>
        </div> 
    </div>
</div>
</template>

<script>
import input_ from '../../input/inputTxt.vue'
import btn_ from '../../button/btn_.vue';
import gsap from 'gsap'
export default {
    props: {
        item: {}
    },
    data() {
        return {
            data_: [{
                    label: 'Nom',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Prénom',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Date de Naissance',
                    model: '',
                    type: 'date'
                },
                {
                    label: 'email',
                    model: '',
                    type: 'email'
                },
                {
                    label: 'Portable/Téléphone',
                    model: '',
                    type: 'number'
                },
                {
                    label: 'Financeur',
                    model: '',
                    type: 'text'
                },

            ],
            selected: 'IB',
            isChecked: false
        }
    },
    components: {
        input_,
        btn_
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        },
        getIt_() {
            this.$router.push({
                name: 'liverApprentissatge'
            })
        },
        setVal(item) {
            console.log(item);
            if (item.titre) {
                this.data_[0].model = item.titre.nom
                this.data_[1].model = item.titre.prenom
            }
        }
    },
    mounted() {
        gsap.fromTo("#poppupOrganisme", {
            opacity: 0,

        }, {
            duration: .5,
            opacity: 1,
        });

        if (this.item != {}) {
            this.setVal(this.item)
        }
    },
    updated() {

        if (this.item != {}) {
            this.setVal(this.item)
        }
    }
}
</script>

<style>
        
        </style>
