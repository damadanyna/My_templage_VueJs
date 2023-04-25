import { createRouter, createWebHashHistory, } from "vue-router"; 
import organismeView from '../views/organisation_.vue' ;
import listeFormationView from '../views/listeFormation_.vue' ;
import sessionFormatonView from '../views/sessionFormation_.vue';
import listeBeneficiaireView from '../views/listeBeneficiaire_.vue';
import equipeView from '../views/equipe_.vue';
import veilleView from '../views/veille_.vue';
import statistiqueView from '../views/statistique_.vue';
import partenairesExterneView from '../views/partenairesExternes_.vue';
import traitementView from '../views/traitement_.vue';
import procedureView from '../views/procedure_.vue';
import abonnementView from '../views/abonnement_.vue';
import alertView from '../views/alert_.vue'
import gestionBeneficiaireview from '../views/listeFormation/gestionBeneficiaire_.vue'
import proprieteView from '../views/listeFormation/propriete_.vue'
import liverApprentissatgeView from '../views/listeFormation/livretApprentissage_.vue'
import tableDeVeille from '../views/veille/tableDeVeille_.vue'
import infoPaiement from '../views/abonnement/pageAbonnement_.vue' 
import organigrammeView from '../views/equipe/organigrame_ Template.vue'
import objectifView from '../views/beneficiaire/beneficiaire_.vue'
import chatView from '../views/sessionFormation/chat_.vue'
import evaluationView from '../views/sessionFormation/evaluation_.vue'
import gestionFormation from '../views/gestionFormation_.vue'

const routes = [
    {
        path: "/",
        name: "organisme",
        component: organismeView,
    },{
        path: "/alert",
        name: "alert",
        component: alertView,
    },{
        path: "/evaluation",
        name: "evaluation",
        component: evaluationView,
    },{
        path: "/gestionFormation",
        name: "gestionFormation",
        component: gestionFormation,
    },{
        path: "/chat",
        name: "chat",
        component: chatView,
    },{
        path: "/listeFormation",
        name: "listeFormation",
        component: listeFormationView, 
    },{
        path: "/gestionBeneficiaire",
        name: "gestionBeneficiaire",
        component: gestionBeneficiaireview,
    },{
        path: "/sessionFormaton",
        name: "sessionFormaton",
        component: sessionFormatonView,
    },{
        path: "/listeBeneficiaire",
        name: "listeBeneficiaire",
        component: listeBeneficiaireView, 
        children: [{
            path: "/listeBeneficiaire/:id",
            name: "objectif",
            component: objectifView,
        }]
    },{
        path: "/equipe",
        name: "equipe",
        component: equipeView,
    },{
        path: "/propriete",
        name: "propriete",
        component: proprieteView,
    },{
        path: "/statistique",
        name: "statistique",
        component: statistiqueView,
    },{
        path: "/veille",
        name: "veille",
        component: veilleView,
    },{
        path: "/partenairesExterne",
        name: "partenairesExterne",
        component: partenairesExterneView,
    },{
        path: "/traitement",
        name: "traitement",
        component: traitementView,
    },{
        path: "/organigramme",
        name: "organigramme",
        component: organigrammeView,
    },{
        path: "/procedure",
        name: "procedure",
        component: procedureView,
    },{
        path: "/abonnement",
        name: "abonnement",
        component: abonnementView,
    },{
        path: "/liverApprentissatge",
        name: "liverApprentissatge",
        component: liverApprentissatgeView,
    },{
        path: "/tableauDeVeille",
        name: "tableauDeVeille",
        component: tableDeVeille,
    },{
        path: "/infoPaiement",
        name: "infoPaiement",
        component: infoPaiement,
    },  
    // {
    //     path: "/",
    //     redirect: "/accueil",
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;