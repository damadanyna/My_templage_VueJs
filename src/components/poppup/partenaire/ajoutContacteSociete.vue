<template>
<!-- forumlaire d'ajout de contacte societe -->
<div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
    <span class=" text-lg font-bold sticky mt-11 top-5 py-4 bg-white z-50">Formulaire d'ajout d'un contact de la société :</span>

    <div class=" mt-8 flex flex-col">
        <div class="flex flex-row w-full">
            <input_ class=" w-full " :options="data_[0]"></input_>
            <input_ class=" w-full ml-3" :options="data_[1]"></input_>
        </div>
        <div class="flex flex-row mt-5 w-full">
            <input_ class=" w-full " :options="data_[3]"></input_>
            <input_ class=" w-full ml-3" :options="data_[4]"></input_>
        </div>
        <div class="flex mt-5 w-full flex-row">
            <input_ class=" w-full" :options="data_[5]"></input_>
        </div>
    </div>
    <div class="flex mt-5 flex-col w-full">
        <div class="flex flex-row w-full  rounded-t-lg border-[#63B6B9] border-t-[1px] border-x-[1px] font-bold">
            <div @click="set_('IB')" :class="selected=='IB'?'bg-[#63B6B9] text-white':' bg-stone-100 color_base'" class=" rounded-tl-lg w-full py-2   flex flex-col justify-center ">
                <span class=" text-center text_xs w-full   ">Commentaire interne </span>
            </div>
            <div @click="set_('IF')" :class="selected!='IB'?'bg-[#63B6B9] text-white':' bg-stone-100 color_base'" class=" w-full py-2 rounded-tr-lg  flex flex-col justify-center ">
                <span class=" text-center text_xs w-full  ">Commentaire public</span>
            </div>
        </div>
        <div class="   border-[#63B6B9] group border-[1px] py-1 w-full rounded-b-lg items-center flex flex-col  ">
            <textarea v-if="selected=='IB'" v-model="data_[6].model" class=" w-full resize-none border-none outline-none px-3" name="" id="" rows="4"></textarea>
            <textarea v-else v-model="data_[7].model" class=" w-full resize-none border-none outline-none px-3" name="" id="" rows="4"></textarea>
        </div>
    </div>

    <div class="  flex w-full justify-center mt-14 bg-white py-4 flex-row mx-1  ">
        <btn_ @click="()=>{this.$store.state.isAdd=true}" class=" mr-6 " :options="{label:'Retour',ico:$store.state.icons.back,style:' bg-tranparent color_base py-2 text-stone-800 '}"></btn_>

        <btn_ @click="()=>{this.$store.state.isAdd=true}" class=" " :options="{label:'Enregistrer',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
    </div>

</div>
</template>

    
    
<script>
import input_ from '../../input/inputTxt.vue'
import textArea_ from '../../input/textarea.vue'
import gsap from 'gsap'
import btn_ from '../../button/btn_.vue'
export default {
    props: {
        item: {}
    },
    data() {
        return {

            data_: [{
                    label: 'Adresse',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Code postal',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Ville',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Pays',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Siege',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Action menée',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Action menée',
                    model: '',
                },
                {
                    label: 'Action menée',
                    model: '',
                },
            ],
            indexStatu: 0,
            listeStatus: ['A traité', 'En cours', 'Resolue'],
            niveauList: [{
                    label: 'Niveau 1',
                    val: ''
                },
                {
                    label: 'Niveau 2',
                    val: '0'
                },
                {
                    label: 'Niveau 3',
                    val: '1'
                },
                {
                    label: 'Niveau 4',
                    val: '2'
                },
            ],
            selected: 'IB',
        }
    },
    components: {
        input_,
        textArea_,
        btn_
    },
    methods: {
        setIt() {
            console.log(this.data_)
        },
        set_(val) {
            this.selected = val
        },
        setVal(item) {
            if (item.nom) {
                this.data_[0].model = item.nom
                this.data_[1].model = item.prenom
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
