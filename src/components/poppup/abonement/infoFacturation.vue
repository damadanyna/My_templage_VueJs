<template>
<div>
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
        <div class=" mt-0 flex flex-col">
            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[0]"></input_>
                <input_ class=" w-full ml-3" :options="data_[1]"></input_>
            </div>
            <div class="flex flex-row mt w-full mt-5">
                <input_ class=" w-full " :options="data_[2]"></input_>
            </div>
            <div class="flex flex-row mt w-full mt-5">
                <input_ class=" w-full " :options="data_[3]"></input_>
            </div>
            <div class="flex flex-row w-full mt-5">
                <input_ class=" w-full " :options="data_[4]"></input_>
                <input_ class=" w-full ml-3" :options="data_[5]"></input_>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" border-[1px] border-[#42898B] bg-stone-200 duration-300 flex mt-12 justify-center  flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'LISTE DES FACTURES',style:' bg-transparent  text-[#42898B]' }"></btn_>
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
                    label: 'Nom ',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Prenom',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Email',
                    model: '',
                    type: 'email'
                },
                {
                    label: 'Adresse de facturation',
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
            ],
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
