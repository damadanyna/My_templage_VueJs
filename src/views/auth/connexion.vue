<template>
<div class="flex flex-col h-full w-full">
    <header_></header_>
    <welcomePage_ class="flex h-full z-10"></welcomePage_>   
    <footer_ class=" z-50"></footer_>
</div>
</template>

<script>
import header_ from '../../components/auth/header.vue';
import welcomePage_ from './welcomePage_.vue';
import footer_ from '../../components/auth/footer.vue'
export default {
    components: {
        header_,
        welcomePage_,
        footer_
    }
}
</script>

<style>

</style>
