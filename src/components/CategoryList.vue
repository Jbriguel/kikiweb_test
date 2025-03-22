<!-- components/CategoryList.vue -->
<template>
  <div>
    <div v-if="isLoading">Chargement en cours...</div>
    <!-- <div v-else-if="error">Erreur : {{ error }}</div> -->
     <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else>
      <h2>Catégories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useServicesStore } from '@/stores/servicesStore'
import { useAuthStore } from '../stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    const servicesStore = useServicesStore()
    const isLoading = ref(false)
    const error = ref(null)
    const categories = ref([])

    // Fonction pour charger les catégories
    const loadCategories = async () => {
      if (!authStore.token) {
        error.value = 'Vous devez être connecté pour voir les catégories.'
        return
      }

      isLoading.value = true
      error.value = null

      try {
        await servicesStore.fetchCategories()
        categories.value = servicesStore.categories
      } catch (err) {
        error.value = err.message || 'Une erreur est survenue'
      } finally {
        isLoading.value = false
      }
    }

    // Charger les catégories lorsque le composant est monté
    onMounted(() => {
      loadCategories()
    })

    return {
      isLoading,
      error,
      categories,
    }
  },
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
