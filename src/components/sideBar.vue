<template>
<div class=" flex h-full w-full bg-white flex-col px-3">
    <div class="flex flex-row py-5 w-full justify-center">
        <span class=" text-xl font-extrabold">Dossier Formation</span>
    </div>
    <div class="flex flex-col ">
        <v-btn prepend-icon="mdi-home" variant="tonal " class=" w-full   bg-black flex justify-start text-lg">
            <span class=" ">Organisation</span>
        </v-btn>
        <v-btn prepend-icon="mdi-alert" variant="tonal " class=" w-full mt-2 flex justify-start text-lg">
            <span class=" ">Alert</span>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.v-btn {
    text-transform: none;
}
</style>
