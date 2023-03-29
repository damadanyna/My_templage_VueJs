<template>
<div class="flex flex-col">
    <div>Informations Organismes</div>
    <btn_Vue :options="{label:'Upload Fichier',style:' bg-stone-700 text-white',ico:'M8.47656 1.54297C3.73047 1.93359 0 5.90234 0 10.75C0 15.8594 4.14062 20 9.25 20C14.0977 20 18.0664 16.2695 18.4609 11.5234H8.47656V1.54297ZM10.0195 0V9.98047H20C19.6211 4.63672 15.3633 0.378906 10.0195 0Z'}"></btn_Vue> 
</div>
</template>

<script>
import btn_Vue from '../components/button/btn_.vue'
export default {
  components:{
    btn_Vue
  }

}
</script>

<style>

</style>
