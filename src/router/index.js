import { createRouter, createWebHashHistory, } from "vue-router"; 
import organismeView from '../views/organisme_.vue' ;
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

const routes = [
    {
        path: "/",
        name: "organisme",
        component: organismeView,
    },{
        path: "/listeFormation",
        name: "listeFormation",
        component: listeFormationView,
    },{
        path: "/sessionFormaton",
        name: "sessionFormaton",
        component: sessionFormatonView,
    },{
        path: "/listeBeneficiaire",
        name: "listeBeneficiaire",
        component: listeBeneficiaireView,
    },{
        path: "/equipe",
        name: "equipe",
        component: equipeView,
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
        path: "/procedure",
        name: "procedure",
        component: procedureView,
    },{
        path: "/abonnement",
        name: "abonnement",
        component: abonnementView,
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