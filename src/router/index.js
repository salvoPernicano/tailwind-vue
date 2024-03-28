// abbiamo usato il router splitting, una volta create le nostre rotte lanciamo il comando npm run build per creare i file js corrispondenti che andranno nella cartella assets di dist

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // quella che segue e' una classe propria del routing di vue, quando una pagina e' attiva applica al link il nome classe specificato dopo i 2 punt
  linkActiveClass: 'activeLink',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/diet',
      name: 'diet',
      component: () => import('../views/DietCalculationView.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue')
    }
  ]
})

export default router