// stores/servicesStore.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth' // Importer le authStore pour récupérer le token
import { Categorie } from '@/services/models/Categorie'

export const useServicesStore = defineStore('services', {
  state: () => ({
    categories: [], // Pour stocker les catégories
    isLoading: false, // Pour gérer l'état de chargement
    error: null, // Pour gérer les erreurs
  }),
  actions: {
    /**
     * Récupère les catégories depuis l'API.
     * Utilise le token du authStore pour l'authentification.
     */
    async fetchCategories() {
      const authStore = useAuthStore() // Récupérer le authStore
      const token = authStore.token // Récupérer le token

      if (!token) {
        this.error = 'No token available'
        return
      }

      this.isLoading = true
      this.error = null

      try {
        const response = await axios.post(
          `${authStore.host}/api/${authStore.prefix}/services/categories`,
          {}, // Corps de la requête (vide dans cet exemple)
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`, // Utiliser le token pour l'authentification
            },
          },
        )

        // Mettre à jour les catégories et les mettre en cache
        // this.categories = response.data.data
        // Transformer les données de l'API en instances de Categorie
        this.categories = response.data.data.map((categorieData) => new Categorie(categorieData))
        console.log('categories', this.categories)
      } catch (error) {
        this.error = error.response ? error.response.data : error.message
      } finally {
        this.isLoading = false
      }
    },

    // Ajouter une action pour vider le cache
    clearCache() {
      this.categories = []
      localStorage.removeItem('categories')
    },
  },
})
