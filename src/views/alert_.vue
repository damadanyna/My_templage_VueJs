<template>
<div class="flex flex-col h-full">
    <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-3">Alertes</h1>
    <div class=" text_xs h-full bg-white rounded-lg w-full px-12 flex z-10 flex-col ">
        <div class="flex z-40 sticky top-6 py-3 mt-7 bg-white  justify-between items-center flex-row w-full">
            <span class="  w-full font-semibold text-2xl">Listes des alertes</span>
            <!-- select Option -->
            <div class="flex items-center flex-row">
                <span class=" mr-3 font-semibold">Filtrer</span>
                <selectOption :options="{elt:triList,select:false}"></selectOption>
            </div>
        </div>
        <!-- succees -->

        <div v-if="alertListe.length>0" class=" z-10 flex flex-col">
            <div v-for=" item, i in alertListe" :key="i" class=" ">

                <div v-if="item.showText==true" class="mt-3 py-3 items-center  w-full rounded-lg flex flex-row" :class="item.classe ">
                    <div class=" px-4 flex w-[25%] items-center flex-row">
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center"> 
                                <svg class=" mx-4 fill-current w-5" viewBox="0 0 24 24" v-html=" item.ico"></svg>
                                <span v-text="item.label"></span>
                            </div>
                            <div class="relative flex bg-stone-300">
                                <span class=" absolute  mt-2 ml-16 " v-text="item.date"></span>
                            </div>
                        </div>
                    </div>
                    <div class="flex px-4 w-[75%]">
                        <div class=" " v-text=" item.text"> </div>
                        <div class="flex duration-300 relative py-0">
                            <button @click="  alertListe.splice(i, 1)" class=" absolute px-3 -ml-5 -mt-4 ">
                                <svg class=" fill-current w-5" viewBox="0 0 24 24">
                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div v-else class="text_xs  text-stone-500 flex-col w-full h-full items-center justify-center flex">
            <img src="../assets/vide.svg" alt="">
            <flex class=" flex items-center my-3 flex-col">
                <span>Vous avez aucun alerte.</span>
            </flex>
        </div>
    </div>
</div>
</template>

<script>
import btn_ from '../components/button/btn_.vue'
import selectOption from '../components/input/selectOption.vue';
export default {
    components: {
        btn_,
        selectOption
    },
    data() {
        return {
            triList: [{
                    label: 'Selectionner un filtre',
                    val: ''
                },
                {
                    label: 'Non lu(s)',
                    val: '0'
                },
                {
                    label: 'Date',
                    val: '1'
                },
                {
                    label: 'Recent(s)',
                    val: '2'
                },
            ],
            alertListe: [{
                    label: 'Succès / Confirmation',
                    classe: 'text-green-500 bg-green-100 border-[1px]  border-green-500',
                    ico: ` <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />`,
                    text: '     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.',
                    showText: true,
                    date: '08 mai 2023'
                },
                {
                    label: 'Erreur / Échec',
                    classe: 'text-red-500 bg-red-100 border-[1px]  border-red-500',
                    ico: `   <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" />`,
                    text: '     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.',
                    showText: true,
                    date: '07 mai 2023'
                },
                {
                    label: 'Urgence / Danger',
                    classe: 'text-stone-500 bg-stone-100 border-[1px]  border-stone-500 bg-stone-600 text-white',
                    ico: `   <path d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2m9.75-17.81-1.42 1.42A8.982 8.982 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11z" />`,
                    text: '     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.',
                    showText: true,
                    date: '18 mai 2023'
                },
                {
                    label: 'Information / Notification',
                    classe: 'text-blue-500 bg-blue-100 border-[1px]  border-blue-500 ',
                    ico: `     <path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />`,
                    text: '     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.',
                    showText: true,
                    date: '02 mai 2023'
                },
                {
                    label: 'Attention / Avertissement',
                    classe: 'text-yellow-500 bg-yellow-100 border-[1px]  border-yellow-500 ',
                    ico: `  <path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />`,
                    text: '     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue a tellus venenatis laoreet. Fusce pretium sem in ex cursus suscipit. Sed vitae velit vestibulum, fringilla nibh nec, maximus lorem. Integer placerat, nulla sit amet dapibus accumsan augue ipsum tristique ex, at consequat arcu odio vel nisl. Praesent vehicula imperdiet ante vitae suscipit. Nam eleifend velit et elit tincidunt interdum. Maecenas lacinia neque vel est ornare rhoncus.',
                    showText: true,
                    date: '08 mai 2023'
                },

            ]
        }
    }

}
</script>

<style>
    
    </style>
