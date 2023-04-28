<template>
<div class=" flex py-3 flex-col">
    <div class="flex flex-row justify-between w-full">
        <span class=" text-lg font-semibold">Tchat de session de formation</span>
        <btn_ class=" " :options="{label:'Fiche de présence',ico:$store.state.icons.plus,style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
    </div>
    <div class="flex py-2 flex-row justify-between w-full font-semibold mt-5">
        <btn_ class=" " :options="{label:'Séssion',style:' base_bg text-white py-2 text-stone-800 '}"></btn_>
        <btn_ class=" " :options="{label:'Formateur 1',style:' bg-stone-300 color_base py-2 '}"></btn_>
        <btn_ class=" " :options="{label:'Responsable pédagogique',style:' bg-stone-300 color_base py-2 '}"></btn_>
    </div>
    <div class="flex flex-col">
        <div id="message_contener" class="flex flex-col h-[40vh] overflow-y-auto">
            <div v-for="item, i in message_" :key="i" :class="item.me==true?' justify-end':'justify-start'" class="px-3 my-2 flex flex-row text-[13px] w-full">
                <div :class="item.me==true?' items-end':'items-start'" class="  flex flex-col  w-[60%]">
                    <span v-text="item.message" :class="item.me==true?' bg-stone-50 rounded-t-lg rounded-l-lg':' rounded-t-lg rounded-r-lg bg-stone-200 '" class=" break-all  py-2 px-3 "></span>
                    <span v-if="item.lastTime" v-text="item.date" class=" text-stone-300 text-[12px] my-1"></span>
                    <span v-if="item.lastTime" v-text="'--'+item.lastTime +'--'" class=" w-full text-end  my-2"></span>
                </div>

            </div>
        </div>

        <div class="flex py-3 flex-row">
            <input_ class=" w-full mr-2 bg-white py-1" :options="Mydata"></input_>
            <button class=" px-4  rounded-md mr-2">
                <svg class=" w-6 color_base transform -rotate-45 fill-current " viewBox="0 0 24 24">
                    <path d="M7.5 18A5.5 5.5 0 0 1 2 12.5 5.5 5.5 0 0 1 7.5 7H18a4 4 0 0 1 4 4 4 4 0 0 1-4 4H9.5A2.5 2.5 0 0 1 7 12.5 2.5 2.5 0 0 1 9.5 10H17v1.5H9.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1H18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 18 8.5H7.5a4 4 0 0 0-4 4 4 4 0 0 0 4 4H17V18H7.5z" /></svg>
            </button>
            <button @click="sendMessage" class="bg-[#63B6B9] px-4 ml-2 rounded-md">
                <svg class=" w-4 text-white fill-current " viewBox="0 0 24 24">
                    <path d="m2 21 21-9L2 3v7l15 2-15 2v7z" /></svg>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../../../button/btn_.vue';
import input_ from '../../../input/inputTxt.vue';
export default {
    components: {
        btn_,
        input_
    },
    data() {
        return {
            Mydata: {
                label: 'Ecrire votre message',
                model: '',
                type: 'text'
            },
            message_: [{
                me: false,
                message: `Oui, c'est vrai. J'ai commencé une formation en marketing digital il y a quelques semaines. Pour l'instant, tout se passe bien. Les cours sont intéressants et les professeurs sont compétents.`,
                date: 'Envoye il y a 1 heure',
                lastTime: '11:32 AM'
            }, {
                me: true,
                message: `C'est super ! Tu apprends des choses utiles ?`,
                date: 'Envoye il y a 1 heure',
            }, {
                me: true,
                message: `Ça donne envie ! Tu penses que je devrais aussi suivre une formation dans ce domaine ?`,
                date: 'Envoye il y a 1 heure',
            }, ]
        }
    },
    methods: {

        sendMessage() {
            this.message_.push({
                me: true,
                message: this.Mydata.model
            })
            this.Mydata.model = ''
            setTimeout(() => {
                var msg = document.getElementById('message_contener');
                msg.scrollTop = msg.scrollHeight;
            }, 200);
        }
    },
    mounted() {
            setTimeout(() => {
                var msg = document.getElementById('message_contener');
                msg.scrollTop = msg.scrollHeight;
            }, 200);
    },
}
</script>

<style>

</style>
