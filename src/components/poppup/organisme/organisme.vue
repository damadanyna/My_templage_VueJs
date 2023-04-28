<template>
<div id="poppupOrganisme">
    <!-- forumlaire de organisme -->
    <div class=" bg-white rounded-lg flex px-6 py-5 flex-col z-20">
        <span class=" hidden">{{ item }}</span>
        <div class=" mt-8 flex flex-col">
            <div class="flex flex-row w-full ">
                <input_ class=" w-full " :options="data_[5]"></input_>
            </div>
            <div class="flex flex-row mt-5 w-full">
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
                    label: 'Titre du site',
                    model: '',
                    type: 'text'
                },
                {
                    label: 'Commentaire publique',
                    model: '',
                },
                {
                    label: 'Commentaire publique',
                    model: '',
                },
            ],
            selected: 'IB'
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

        this.item != {} ? this.data_[5].model = this.item.titre : ''
    },
    updated() {
        this.data_[5].model = this.item != {} ? this.item.titre : ''
    }
}
</script>

<style>

</style>
