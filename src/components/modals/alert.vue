<template>
  <div :class="['alert', `alert-${type}`, position]" v-if="isVisible">
    <div class="alert-content">
      {{ message }}
      <button @click="close" class="close-btn">&times;</button>
    </div>
    <div class="progress-bar" :style="progressBarStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'error', // Types possibles : 'error', 'success', 'warning'
    },
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 5000, // Durée avant que l'alerte ne disparaisse (en millisecondes)
    },
    position: {
      type: String,
      default: 'top', // Positions possibles : 'top', 'bottom'
    },
  },
  data() {
    return {
      isVisible: true,
      progressWidth: 100, // Largeur initiale de la barre de progression (100%)
    }
  },
  computed: {
    progressBarStyle() {
      return {
        width: `${this.progressWidth}%`,
        transition: `width ${this.duration}ms linear`,
      }
    },
  },
  mounted() {
    if (this.duration > 0) {
      // Réduire la largeur de la barre de progression à 0% sur la durée spécifiée
      setTimeout(() => {
        this.progressWidth = 0
      }, 10) // Petit délai pour permettre à l'animation de démarrer

      // Fermer l'alerte après la durée spécifiée
      setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  methods: {
    close() {
      this.isVisible = false
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.alert {
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  position: fixed;
  z-index: 1000; /* Pour s'assurer que l'alerte est au-dessus de tout */
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
}

.alert.top {
  top: 20px;
}

.alert.bottom {
  bottom: 20px;
}

.alert-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.alert-error {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #c62828;
}

.alert-success {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #2e7d32;
}

.alert-warning {
  background-color: #fff3e0;
  color: #f57c00;
  border: 1px solid #f57c00;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: inherit;
  margin-left: 1rem;
}

.progress-bar {
  height: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 2px;
  margin-top: 0.5rem;
}
</style>
