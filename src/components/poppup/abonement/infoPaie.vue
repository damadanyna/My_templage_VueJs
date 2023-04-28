<template>
    <div  >
        <!-- forumlaire de organisme -->
        <div class=" bg-white rounded-lg flex px-1 py-5 flex-col z-20">
            <div class=" mt-0 flex flex-col">
                <div class="flex flex-row w-full">
                    <input_ class=" w-full " :options="data_[0]"></input_> 
                </div>  
                <div class="flex flex-row mt w-full mt-5">
                    <input_ class=" w-full " :options="data_[1]"></input_> 
                </div>  
                <div class="flex flex-row mt w-full mt-5">
                    <input_ class=" w-[40%] " :options="data_[2]"></input_> 
                    <input_ class=" w-[20%] mx-3 " :options="data_[3]"></input_> 
                    <input_ class=" w-[40%] " :options="data_[4]"></input_> 
                </div>  
            <div class="flex flex-row w-full mt-5  border-[1px] border-[#63B6B9] items-center py-1 rounded-md bg-stone-200 px-2">
                <div @click="()=>{isChecked==false?isChecked=true:isChecked=false}" class=" items-center py-1  flex flex-row text_xs ">
                    <svg v-if="isChecked==false" class=" fill-current w-5 color_base" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z" /></svg>
                    <svg v-else class=" fill-current w-5 color_base" viewBox="0 0 24 24">
                        <path d="m10 17-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
                    <span>Cocher la case pour accepter <i class=" color_base ">les termes et conditions </i> de paiement</span>
                </div>
            </div>
            </div>
            <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" rounded-md base_bg duration-300 flex mt-12 justify-center  flex-row w-full">
                <btn_ @click="setIt()" :options="{label:'Payer 29.99€',style:' base_bg  text-white' }"></btn_>
            </div>
        </div>
    </div>
    </template>
    
        
        
    <script>
    import input_ from '../../input/inputTxt.vue'
    import textArea_ from '../../input/textarea.vue'
    import btn_ from '../../button/btn_.vue';
    import gsap from 'gsap'
    export default {
        data() {
            return {
                data_: [{
                        label: 'Nom sur la carte ',
                        model: '',
                        type: 'text'
                    },
                    {
                        label: 'Numéro de carte',
                        model: '',
                        type: 'text'
                    },
                    {
                        label: 'Date d’expiration',
                        model: '',
                        type: 'text'
                    },
                    {
                        label: 'XXX',
                        model: '',
                        type: 'text'
                    },
                    {
                        label: 'ZIP / Code postale',
                        model: '',
                        type: 'text'
                    }, 
                ], 
                isChecked:false,
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
    