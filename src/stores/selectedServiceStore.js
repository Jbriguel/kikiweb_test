// stores/selectedServiceStore.js
import { defineStore } from 'pinia';

export const useSelectedServiceStore = defineStore('selectedService', {
  state: () => ({
    service: JSON.parse(sessionStorage.getItem('selectedService')) || null, // Récupérer depuis sessionStorage
  }),
  actions: {
    setService(service) {
      this.service = service; // Mettre à jour l'état
      sessionStorage.setItem('selectedService', JSON.stringify(service)); // Persister dans sessionStorage
    },
    clearService() {
      this.service = null; // Réinitialiser l'état
      sessionStorage.removeItem('selectedService'); // Supprimer de sessionStorage
    },
  },
});