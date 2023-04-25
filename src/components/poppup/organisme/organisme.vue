<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-6 py-5 flex-col z-20">
        <div class=" mt-8 flex flex-col">
            <div class="flex flex-row w-full">
                <input_ class=" w-full " :options="data_[0]"></input_>
                <input_ class=" w-full ml-3" :options="data_[1]"></input_>
            </div>
            <div class="flex mt-5 w-full flex-row">
                <input_ class=" w-full " :options="data_[2]"></input_>
                <input_ class=" w-full  ml-3" :options="data_[3]"></input_>
            </div>
            <div class="flex mt-5 flex-row w-full">
                <textArea_ class=" w-full" :options="data_[4]"></textArea_>
            </div>
            <div class="flex mt-5 flex-col w-full">
                <div class="flex flex-row w-full">
                    <span @click=" set_('IB')" :class="selected=='IB'?'bg-[#63B6B9] text-white':' bg-stone-300 text-black'" class=" text-center text_xs w-full py-2 rounded-tl-md ">Information pour les bénéficiaires</span>
                    <span @click=" set_('IF')" :class="selected!='IB'?'bg-[#63B6B9] text-white':' bg-stone-300 text-black'" class=" text-center text_xs w-full py-2 rounded-tr-md">Information pour les formateurs</span>
                </div>
                <div class=" group border-[1px] py-1 w-full rounded-b-lg items-center flex flex-col border-stone-300 ">
                    <textarea v-model="data_[5].model" class=" w-full resize-none border-none outline-none px-3" name="" id="" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div :class="data_[0].model=='' || data_[1].model=='' || data_[2].model=='' || data_[3].model==''|| data_[4].model || data_[5].model==''?' opacity-50':' opacity-100'" class=" duration-300 flex mt-12 justify-center  flex-row w-full">
            <btn_ @click="setIt()" :options="{label:'Valider',style:' base_bg text-white',ico:$store.state.icons.done}"></btn_>
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
                    label: 'Adresse',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Code Postal',
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
                    label: 'Commentaire publique',
                    model: '',
                },
                { 
                    model: '',
                },
            ],
            selected:'IB'
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
        set_(val){
                this.selected=val
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
