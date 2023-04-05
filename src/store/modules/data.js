 
const state = () => ({  
    listeFormation:[
        {
            id:'#001',
            title:'Titre Formation',
        },
        {
            id:'#002',
            title:'Leadership et communication efficace',
        },
        {
            id:'#003',
            title:'Les clés pour réussir votre projet',
        },
    ],
    TitreFormation:[
        {
            id:'#001',
            nom:'John',
            prenom:'Doe',
            etat:'En formation',
            dateInscription:'18 juin 2025', 
        }, 
        {
            id:'#001',
            nom:'Jane',
            prenom:'Doe',
            etat:'Abandonné',
            dateInscription:'9 août 2023', 
        }, 
        {
            id:'#001',
            nom:'Joe',
            prenom:'Bloggs',
            etat:'Abandonné',
            dateInscription:'29 novembre 2026', 
        }, 
        {
            id:'#001',
            nom:'Ivan',
            prenom:'Ivanov',
            etat:'En formation',
            dateInscription:'12 janvier 2024', 
        }, 
        {
            id:'#001',
            nom:'John',
            prenom:'Smith',
            etat:'Achevé',
            dateInscription:'7 mars 2025', 
        }, 
        {
            id:'#001',
            nom:'Max',
            prenom:'Mustermann',
            etat:'En formation',
            dateInscription:'22 octobre 2023', 
        }, 
    ],
    listeExercices:[
        {
            id:'001',
            label:'Les clés pour réussir votre projet',
            result:'Reussi'
        },
        {
            id:'002',
            label:'Leadership et communication efficace',
            result:'Echoué'
        },
    ],
    selectFormation:'null'
  })
  
   
  export default {
    namespaced: true,
    state, 
  }