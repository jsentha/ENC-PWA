import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Recherche from "../views/Recherche.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import RechercheGenre from "../views/RechercheGenre.vue";
import FilmPopulaire from "../views/FilmPopulaire.vue";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/vue',
      name: 'vue',
      component: HelloWorld
    },
    {
      path: '/recherche',
      name: 'recherche',
      component: Recherche
    },
    {
      path: '/rechercheGenre',
      name: 'rechercheGenre',
      component: RechercheGenre
    },
    {
      path: '/filmpopulaire',
      name: 'filmpopulaire',
      component: FilmPopulaire
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
    }
  ]
});

export default router;
