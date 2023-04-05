<template>
<div id="poppupOrganisme">

    <div class=" bg-white rounded-lg flex   py-5 flex-col z-20">

        <!-- tableau des exercices -->

        <div class="flex w-full text-sm ">
            <table class=" text-xs  w-full items-start px-1">
                <tr class=" w-full">
                    <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                    <th class="  w-[56%] text-center text-stone-500 mx-2 border-r border-stone-400 ">Liste exercices</th>
                    <th class="  w-[26%] text-center text-stone-500 mx-2 border-r border-stone-400 ">Pésultat</th>
                    <th class="  w-[16%] text-center text-stone-500 mx-2">Action</th>
                </tr>
                <tr @click="getIt_()" v-for="item,i in this.$store.state.myData.listeExercices" :key="i" class=" group duration-200 my-1 hover:text-white  hover:bg-[#63B6B9]  ">
                    <td class=" group-hover:text-white text-start text-gray-500 " v-text="item.id"></td>
                    <td class=" text-center" v-text="item.label"></td>
                    <td class=" text-center">
                        <button v-if="item.result=='Echoué'" v-text="item.result" class=" py-1  px-2 my-1 bg-red-100 rounded-md text-red-600 text-xs  border-red-500 border"></button>
                        <button v-if="item.result=='Reussi'" v-text="item.result" class=" py-1  px-2 my-1 bg-green-100 rounded-md text-green-600 text-xs  border-green-500 border"></button>
                    </td>
                    <td class=" text-[#63B6B9] group-hover:text-white items-center">
                        <div class="  flex flex-row text-center">
                            <svg class=" fill-current w-4" viewBox="0 0 24 24">
                                <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
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
