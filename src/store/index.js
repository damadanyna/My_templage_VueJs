// store/index.js
import { createStore } from 'vuex' 

const store = createStore({
     state:{ 
        menu_liste: [{     
                ico:'<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />',  
                label: 'Organisation',
                selected:false,
                url: '/#presentation'
            },
            {   
                ico:'<path d="M3 5v14h17V5H3m4 2v2H5V7h2m-2 6v-2h2v2H5m0 2h2v2H5v-2m13 2H9v-2h9v2m0-4H9v-2h9v2m0-4H9V7h9v2z" /> ',  
                label: 'Listes Formations',
                selected:true,
                url: '/#apropos'
            },
            {
                
                ico: '<path d="m13 21 2-1 2 1v-7h-4m4-5V7l-2 1-2-1v2l-2 1 2 1v2l2-1 2 1v-2l2-1m1-7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7v-2H4V5h16v10h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5H5V6h6m-2 5H5V9h4m2 5H5v-2h6z" />',  
                label: 'Session Formation',
                selected:false,
                url: '/#experience'
            },
            {
                ico:'<path d="M16.5 12A2.5 2.5 0 0 0 19 9.5 2.5 2.5 0 0 0 16.5 7 2.5 2.5 0 0 0 14 9.5a2.5 2.5 0 0 0 2.5 2.5M9 11a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" />',  
                label: 'Liste des Bénéficiaire',
                selected:false,
                url: '/#realisation'
            },
            {   
                ico:'<path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />',  
                label: 'Equipe',
                selected:false,
                url: '/#realisation'
            },
            {
                ico:'<path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />',    
                label: 'Veilles',
                selected:false,
                url: '/#education'
            },
            {
                ico:'<path d="M3 22V8h4v14H3m7 0V2h4v20h-4m7 0v-8h4v8h-4z" />',
                label: 'Statistique',
                selected:false,
                url: '/#skills'
            },
            {
                ico:'<path d="M7 19h8v3H7v-3m9.15-7-3.18-1.66a.49.49 0 0 0-.37.16l-.3.31.59 2.42-.98.24-1.19-4.97-1.47.68 1.04 4.29-.97.23-1-4.11-.47.21c-.5.2-.85.73-.85 1.34v4.36c0 .8.73 1.5 1.5 1.5H15c.39 0 .74-.16 1-.43l.5-.41s.5-.38.5-.8V13.7s0-1.14-.85-1.7m.79-11c-.54-.09-1.07.25-1.18.8l-1.07 6.17c-.22-.03-.31-.11-.61-.14l-.43.05-1.24-6.08a1.02 1.02 0 0 0-1.17-.8c-.55.13-.9.66-.79 1.2l1.2 5.91.35 1.56c.28-.2.61-.33.97-.33h.34l3 1.61 1.41-8.75c.11-.54-.22-1.07-.78-1.2z" />',
                label: 'Partenaires Externes',
                selected:false,
                url: '/#contact'
            },
            {
                ico: '<path d="M9 5v4h12V5M9 19h12v-4H9m0-1h12v-4H9M4 9h4V5H4m0 14h4v-4H4m0-1h4v-4H4v4z" />',
                label: 'Traitements aléas/ logs',
                selected:false,
                url: '/#contact'
            },
            {
                ico:'<path d="M11 2v20c-5.1-.5-9-4.8-9-10s3.9-9.5 9-10m2 0v9h9c-.5-4.8-4.2-8.5-9-9m0 11v9c4.7-.5 8.5-4.2 9-9h-9z" />',
                label: 'Procédure',
                selected:false,
                url: '/#contact'
            },
            {
                ico:'<path d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2" />',
                label: 'Abonnement',
                selected:false,
                url: '/#contact'
            },
        ]
     } 
}) 
export default store