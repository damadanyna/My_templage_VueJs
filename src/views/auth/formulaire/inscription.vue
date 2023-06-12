<template>
<div class="flex flex-col w-full h-full text_xs items-center mt-6">
    <span class=" color_base font-semibold text-lg">Question</span>
    <span class=" w-2/3 text-center">Souhaitez-vous vous inscrire à notre plateforme de formation en ligne ?</span>
    <div class="flex-row mt-2 flex">
        <button class=" py-1 bg-[#63B6B9] text-white rounded-md px-10">Oui</button>
        <span class=" py-1 bg-[#EEEEEE]  text-[#42898B] border-[1px] outline-none border-[#42898B] text-center items-center flex cursor-pointer select-none ml-3 rounded-md px-3">Oui, bien sur</span>
    </div>
    <div class="mt-3 h-[1px] w-5/6 bg-stone-500"></div>
    <span class=" color_base font-semibold text-2xl">Inscription</span>
    <div class=" px-8 flex flex-col mt-6">
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
        </div>
    </div>

    <div class=" px-8 w-full">
        <button class=" py-2 text-white bg-black w-full mt-4 uppercase rounded-md">Creer une compte</button>
    </div>
    <div class=" px-8 w-full flex flex-col">
        <button class=" py-2    w-full mt-2   rounded-md">Vouz avez deja une compte?</button>
        <span @click="()=>{this.$store.state.signIn=false}" class=" py-1 bg-[#EEEEEE]  justify-center text-[#42898B] border-[1px] outline-none border-[#42898B] text-center items-center flex cursor-pointer select-none uppercase rounded-md px-3">CONNEXION</span>

    </div>

</div>
</template>

<script>
import input_ from '../../../components/input/inputTxt.vue'

export default {
    components: {
        input_,
    },
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
                    label: 'Mot de passe',
                    model: '',
                    type: 'password'
                },
                {
                    label: 'Confirmation du mot de passe',
                    model: '',
                    type: 'text'
                },
            ],
        }
    },
}
</script>

<style>

</style>
