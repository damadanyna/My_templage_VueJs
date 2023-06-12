<template>
<div class="flex flex-col h-full w-full">
    <header_></header_>
    <div class="flex h-full w-full overflow-auto">
        <welcomePage_></welcomePage_>
    </div>
</div>
</template>

<script>
import header_ from '../../components/auth/header.vue';
import welcomePage_ from './welcomePage_.vue'; 
export default {
    components: {
        header_,
        welcomePage_, 
    }
}
</script>

<style>

</style>
