<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

// Définir les props
defineProps<{
  title?: string; // Titre du modal
  maxWidth?: string; // Largeur maximale du modal (par défaut : '500px')
  closeOnBackdropClick?: boolean; // Fermer le modal en cliquant à l'extérieur (par défaut : true)
}>();

// Définir les événements
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void;
}>();
</script>

<template>
  <VueFinalModal
    class="fixed inset-0 flex justify-center items-center z-50"
    content-class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
    :content-style="{ maxWidth: maxWidth || '600px', width: '90%', padding: '1.5rem' }"
    :click-to-close="closeOnBackdropClick !== false"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"></div>

    <!-- Contenu du modal -->
    <div class="relative z-50">
      <!-- En-tête -->
      <div class="flex items-center justify-between mb-4">
        <h1 v-if="title" class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h1>
        <button
          class="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          @click="emit('update:modelValue', false)"
          aria-label="Fermer le modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Corps -->
      <div class="flex-1 text-gray-700 dark:text-gray-200">
        <slot />
      </div>

      <!-- Pied de page -->
      <div v-if="$slots.footer" class="mt-4 flex justify-end">
        <slot name="footer" />
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>
/* Transition pour l'apparition du modal */
.vfm--content {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.vfm--active .vfm--content {
  opacity: 1;
  transform: scale(1);
}
</style>
