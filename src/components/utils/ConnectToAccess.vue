<template>
  <div class="connect-to-access text-center">
    <img src="/assets/images/oups.png" alt="Connect to Access" class="connect-image" />
    <p class="mt-3">You must be connected to access to our services</p>
    <button class="btn btn-primary mt-2" @click="redirectToLogin">Login or Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'ConnectToAccess',
  methods: {
    redirectToLogin() {
      // Rediriger vers la page de connexion
      this.$router.push({ name: 'register' })
    },
  },
}
</script>

<style scoped>
.connect-to-access {
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}

.connect-image {
  max-width: 100%;
  width: 250px;
  height: auto;
  border-radius: 8px;
}
</style>
