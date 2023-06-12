<template>
<div id="poppupOrganisme">

    <div class=" bg-white rounded-lg flex   py-5 flex-col z-20">

        <!-- tableau des exercices -->

        <div class="flex w-full text_xs ">
            <table class=" text_xs  w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-center text-stone-500 border-r border-stone-200 ">idx</th>
                    <th class="  w-[56%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Liste exercice</th>
                    <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-200 ">Résultat</th>
                    <th class="  w-[16%] text-center text-stone-500 mx-2">Action</th>
                </tr>
                <tr  v-for="item,i in this.$store.state.myData.listeExercices" :key="i" class=" group duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td @click="getIt_()" class=" group-hover:text-white px-3 text-start text-gray-500 " v-text="item.id"></td>
                    <td @click="getIt_()" class=" text-center" v-text="item.label"></td>
                    <td @click="getIt_()" class=" text-center">
                        <button v-if="item.result=='Echoué'" v-text="item.result" class=" py-1  px-2 my-1 bg-red-100 rounded-md text-red-600 text_xs  border-red-500 border"></button>
                        <button v-if="item.result=='Reussi'" v-text="item.result" class=" py-1  px-2 my-1 bg-green-100 rounded-md text-green-600 text_xs  border-green-500 border"></button>
                    </td>
                    <td class=" color_base group-hover:text-white items-center">
                        <div @click="()=>{$router.push({name:'evaluation'})}" class=" px-3  flex flex-row text-center">
                            <button class="   bg-slate-100 px-1 rounded-md py-1 ">
                                <svg class=" fill-current color_base rounded-md w-4" viewBox="0 0 24 24">
                                    <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                            </button>
                               <u class=" ml-2">Voir</u>
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
    data() {
        return {
            data_: [{
                    label: 'Nom',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Prenom',
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
        }
    },
    mounted() {
        gsap.fromTo("#poppupOrganisme", {
            opacity: 0,

        }, {
            duration: .5,
            opacity: 1,
        });
    }
}
</script>
    
    
<style>
            
            </style>
