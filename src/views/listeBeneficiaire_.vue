<template>
  <div class="flex flex-col h-full">
      <h1 class=" text-lg sticky -top-6 w-full bg-stone-100 z-50 font-bold text-stone-600 pt-2 pb-9">Liste Bénéfice</h1>
      <div class=" bg-white rounded-lg w-full h-max px-12 flex z-10 flex-col ">
  
          <!-- recherche -->
              <div class="flex flex-row sticky top-10 py-2 bg-white mt-6">
                  <div class="flex ml-12 flex-row items-center">
                      <svg class=" text-stone-500 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" /></svg>
                      <input type="text" class=" px-3 border-b border-stone-400 outline-none focus:border-black " placeholder=" Lancer un recherche ">
                  </div>
  
                  <div class="flex w-full justify-end relative">
                      <btn_Vue class=" " :options="{label:'Nouvelle',style:' bg-stone-700 text-white w-full',ico:$store.state.icons.plus}"></btn_Vue>
                  </div>
              </div>
              <!-- tableau -->
          <div class="flex w-full text-sm mt-4">
              <table class=" w-full items-start px-1">
                  <tr class=" w-full">
                      <th class=" w-[8%] text-start text-stone-500 border-r border-stone-400">idx</th>
                      <th class="  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Nom </th>
                      <th class="  w-[26%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Prénom</th>
                      <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Etat</th>
                      <th class="  w-[16%] text-start text-stone-500  pl-5 border-r border-stone-400 ">Date d'inscription</th>
                      <th class="  w-[19] text-start text-stone-500 pl-5  ">Actions</th>
                  </tr>
                  <tr v-for="i in 20" :key="i" class=" duration-200 my-1 hover:text-white  hover:bg-black  ">
                      <td class=" text-gray-500 px-2" v-text="i"></td>
                      <td class="pl-5" v-text="'Nom'+i"></td>
                      <td class="pl-5" v-text="'Prénom'"></td>
                      <td class="pl-5 ">
                        <div class=" flex my-1">
  
                        <button class=" px-5 bg-red-100 rounded-md text-red-600 text-xs  border-red-500 border py-1 ">A traité</button>
                        </div>
                      </td>
                      <td class="pl-5" v-text="'18 juin 2025'"></td>
                      <td class=" px-2">
                          <div class=" flex flex-row items-center py-1"> 
                              <button class=" mr-2 bg-slate-100 px-1 rounded-md py-1 ">
                                  <svg class=" fill-current text-black rounded-md w-4" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" /></svg>
                              </button> 
                              <u>Voir</u>
                          </div>
                      </td>
                  </tr>
              </table>
  
          </div>
      </div>
  </div>
  </template>
  
      
      
  <script>
  import btn_Vue from '../components/button/btn_.vue'
  export default {
      components: {
          btn_Vue,
      },
      data() {
          return {
              raisonSocial: [{
                      label: 'Raison SOCIAL:',
                      text: 'NDA'
                  },
                  {
                      label: 'Numéro SIREN :',
                      text: '841939028'
                  },
                  {
                      label: 'Numéro SIRET :',
                      text: '84193902800012'
                  }
              ],
              importFichier: [{
                  titre: 'Certificat',
                  label_fichier: 'Uploader une fichier',
                  text_fichier: 'document1.pdf'
              }, {
                  titre: 'Ajouter un logo',
                  label_fichier: 'Ajouter logo',
                  text_fichier: 'Logo.png'
              }, {
                  titre: 'BPF',
                  label_fichier: 'Uploader une fichier',
                  text_fichier: 'document1.pdf'
              }, ],
          }
      }
  
  }
  </script>
      
      
  <style>
        
        </style>
  