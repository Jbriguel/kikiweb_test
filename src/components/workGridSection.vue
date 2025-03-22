<template>
  <div v-if="token != null" class="container">
    <!-- Filter Buttons section -->
    <div class="row mt-5" id="filter-buttons">
      <div class="col-12">
        <button
          v-for="filter in filters"
          :key="filter.name"
          :class="['btn', 'mb-2', 'mx-1', { active: activeFilter === filter.name }]"
          @click="setFilter(filter.name)"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>

    <!-- Shimmer pendant le chargement -->
    <!-- <div v-if="isLoading" class="row px-2 mt-4 gap-3 ftco-animate"  >
      <div v-for="i in 6" :key="i" class="card p-0 m-2  ">
        <ShimmerComponent :style="{ width: '200px'}" />
      </div>
    </div> -->
    <!-- <div v-if="isLoading" class="row px-2 mt-4 gap-3 ftco-animate">
      <div v-for="i in 6" :key="i" class="card p-0 m-2">
        <ShimmerComponent :style="{ width: '200px' }" />
      </div>
    </div> -->
     <!-- Filterable Cards section -->
         <div class="card-grid px-2 mt-4 gap-2 ftco-animate" id="filterable-cards">
          <div v-for="card in filteredCards" :key="card.id" class="card" :data-name="card.category">
            <img :src="card.image" :alt="card.title" class="card-img" />
            <div class="card-body">
              <h6 class="card-title text-primary">{{ card.title }}</h6>
              <p class="fs-6">{{ card.description }}</p>
              <div class="mb-0 d-flex justify-content-between">
                <h6>{{ card.price }} $</h6>
                <button class="btn btn-primary" @click="redirectToBookingVue(card)">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div> 
    <!-- Filterable Cards section -->
    <!-- <div class="row px-2 mt-4 gap-2 ftco-animate" id="filterable-cards">
      <div v-for="card in filteredCards" :key="card.id" class="card p-0" :data-name="card.category">
         <div class="card">
          <img
            :src="card.image"
            :alt="card.title"
            :style="{ width: '100%', height: '200px', objectFit: 'cover' }"
          />
          <div class="card-body">
            <h6 class="card-title text-primary">{{ card.title }}</h6>
            <p class="fs-6">{{ card.description }}</p>
            <div class="mb-0 d-flex justify-content-between">
              <h6>{{ card.price }} $</h6>
              <button class="btn btn-primary" @click="redirectToBookingVue(card)">Book Now</button>
            </div>
          </div>
        </div> 
       
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useServicesStore } from '@/stores/servicesStore'
import { useAuthStore } from '../stores/auth'
import ShimmerComponent from './utils/ShimmerComponent.vue'
import { useSelectedServiceStore } from '@/stores/selectedServiceStore'

export default {
  setup() {
    const authStore = useAuthStore()
    const servicesStore = useServicesStore()
    const token = computed(() => authStore.token)
    const isLoading = ref(false)
    const error = ref(null)
    const categories = ref([])
    const activeFilter = ref('all')

    // Fonction pour formater le nom de la catégorie en filtre
    const formatCategoryName = (name) => {
      return name.toLowerCase().replace(/\s+/g, '') // "Tribal Braids" -> "tribalbraids"
    }

    // Filtres générés dynamiquement
    const filters = computed(() => [
      { name: 'all', label: 'All Services' }, // Filtre "Tous" par défaut
      ...categories.value.map((categorie) => ({
        name: formatCategoryName(categorie.name), // "Feedings" -> "feedings"
        label: categorie.name, // "Feedings"
      })),
    ])

    // Cartes générées dynamiquement
    const cards = computed(() => {
      return categories.value.flatMap((categorie) => {
        return categorie.services.map((service) => ({
          id: service.id,
          categorie_id: categorie.id,
          category: formatCategoryName(categorie.name), // "Feedings" -> "feedings"
          title: service.name,
          duration: service.duration,
          description: `${service.duration} min`,
          image: `https://kikicrm.empireebusiness.com/storage/${service.files[0]?.url || '/assets/hairs/default.jpg'}`, // Utiliser l'URL de l'image ou une image par défaut
          price: service.price,
        }))
      })
    })

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

    // Fonction pour définir le filtre actif
    const setFilter = (filter) => {
      activeFilter.value = filter
    }

    // Cartes filtrées
    const filteredCards = computed(() => {
      if (activeFilter.value === 'all') {
        return cards.value
      }
      return cards.value.filter((card) => card.category === activeFilter.value)
    })

    // Charger les catégories lorsque le composant est monté
    onMounted(() => {
      loadCategories()
    })

    return {
      isLoading,
      token,
      error,
      categories,
      filters,
      activeFilter,
      setFilter,
      filteredCards,
    }
  },
  components: {
    ShimmerComponent,
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/login')
    },
    redirectToBookingVue(serviceCardData) {
      const selectedServiceStore = useSelectedServiceStore()
      selectedServiceStore.setService(serviceCardData) // Stocker le service sélectionné
      this.$router.push({ name: 'booking' })
    },
  },
}
</script>

<style scoped>
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

#filter-buttons button {
  border-radius: 3px;
  background: #fff;
  border-color: transparent;
}

#filter-buttons button:hover {
  background: #ddd;
}

#filter-buttons button.active {
  color: #fff;
  background: #6c757d;
}

/* Grille pour les cartes */
.card-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Cartes de 250px de large minimum */
  gap: 16px; /* Espacement entre les cartes */
}

/* Styles pour les cartes */
.card {
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-body p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
}

.card-body h6 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

/* Styles pour les petits écrans */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    ); /* Cartes de 200px de large minimum */
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr; /* Une seule colonne sur les très petits écrans */
  }

  .card {
    width: 100%; /* Pleine largeur */
  }
}
</style>
