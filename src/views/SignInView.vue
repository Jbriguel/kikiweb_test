<template>
  <section class="auth_section">
    <div
      class="hero-wrap js-fullheight"
      :style="{ backgroundImage: `url('../assets/images/back_07.jpg')` }"
    >
      <div class="overlay_auth"></div>

      <div class="uf-form-auth m-8">
        <div class="col-12 text-center">
          <a href="/"
            ><img src="@/assets/images/logo/kiki_logo-2.png" alt="" width="100" height="100"
          /></a>
          <h1 class="text-white h3">{{ isSignUp ? 'Create Account' : 'Account Login' }}</h1>
        </div>
        <!-- Afficher les erreurs -->
        <!-- <div v-if="errors.length > 0" class="error-messages">
          <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        </div> -->
        <form class="mt-4">
          <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text">
              <FaUser />
            </span>
            <input
              v-model="formData.firstName"
              type="text"
              class="form-control"
              placeholder="First Name"
            />
          </div>
          <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text">
              <FaUser />
            </span>
            <input
              v-model="formData.lastName"
              type="text"
              class="form-control"
              placeholder="Last Name"
            />
          </div>
          <div class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text">
              <FaEnvelope />
            </span>
            <input
              v-model="formData.email"
              type="text"
              class="form-control"
              placeholder="Email address"
            />
          </div>
          <div class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text">
              <MdPassword />
            </span>
            <input
              v-model="formData.password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
            <span class="input-group-text">
              <MdPassword />
            </span>
            <input
              v-model="formData.password_confirmation"
              type="password"
              class="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div v-if="!isSignUp" class="d-flex mb-3 justify-content-between">
            <div class="form-check">
              <input type="checkbox" class="form-check-input uf-form-check-input" id="rememberMe" />
              <label class="form-check-label text-white" for="rememberMe">Remember Me</label>
            </div>
            <a href="/" class="pwdFroget">Forgot password?</a>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div class="d-grid mb-4">
              <div v-if="isLoading" class="loader m-10"></div>
              <button
                v-else
                class="btn btn-lg btn-primary"
                type="submit"
                @click.prevent="handleAuth"
              >
                {{ isSignUp ? 'Sign Up' : 'Log In' }}
              </button>

              <!-- <b-button variant="primary" disabled>
                                <b-spinner small type="grow"></b-spinner>
                                Loading...
                            </b-button> -->
            </div>
          </div>
          <div class="d-flex mb-3">
            <div class="dropdown-divider m-auto w-25"></div>
            <small class="text-nowrap text-white"
              >Or {{ isSignUp ? 'sign up' : 'log in' }} with</small
            >
            <div class="dropdown-divider m-auto w-25"></div>
          </div>
          <div class="uf-social-login d-flex justify-content-center">
            <button class="google-btn" href="/">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" />
              <span class="text-secondary"
                >{{ isSignUp ? 'Sign Up' : 'Continue' }} with Google</span
              >
            </button>
          </div>
          <div class="col-12 d-flex justify-content-center mt-4 text-center">
            <span class="text-white">
              {{ isSignUp ? 'Already have an account? ' : "Don't have an account? " }}
            </span>
            <span class="toggleAuth" @click="toggleAuth">
              {{ isSignUp ? ' Log In' : ' Sign Up' }}
            </span>
          </div>
        </form>
        <!-- Trigger the modal with a button -->
        <!-- <div class="col-12 d-flex justify-content-center mt-4 text-center">
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open
                        Modal</button>
                </div> -->
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="h-screen flex items-center justify-center">
    <!-- Utilisation du composant Modal -->
    <!-- <Modal
      :isOpen="isModalOpen"
      title="Confirmation"
      content="Êtes-vous sûr de vouloir continuer ?"
      confirmText="Oui"
      cancelText="Non"
      @close="closeModal"
      @confirm="handleConfirm"
    /> -->
    <CustomModal
      :title="'an error occurred!'"
      :content="errorsToMessage(errors)"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>

  <!-- <div>
   
    <button @click="openModal">Ouvrir le Modal</button>
  </div> -->
</template>

<script>
// import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { FaEnvelope, FaUser } from 'vue-icons-plus/fa'
import { MdPassword } from 'vue-icons-plus/md'
import { VueFinalModal } from 'vue-final-modal'
import { useAuthStore } from '@/stores/auth' // Importez votre store Pinia
import { ModalsContainer } from 'vue-final-modal'
import MyModalPreview from '../components/modals/modalPreview.vue'
import Modal from '../components/modals/Modal.vue'
import CustomModal from '../components/modals/custom_modal.vue'
export default {
  setup() {
    const authStore = useAuthStore() // Initialisez le store
    let isSignUp = ref(true)
    let isLoading = ref(false)
    const isModalOpen = ref(false)
    const errors = ref([]) // Stocker les erreurs

    const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
    })

    const toggleAuth = () => {
      console.log('Avant basculement :', isSignUp.value)
      isSignUp.value = !isSignUp.value
      console.log('Après basculement :', isSignUp.value)
    }
    const validatePassword = (password) => {
      const errors = []
      if (password.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caractères.')
      }
      if (!/[A-Z]/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins une majuscule.')
      }
      if (!/[a-z]/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins une minuscule.')
      }
      return errors
    }

    function errorsToMessage(errors) {
      let message = ''
      errors.forEach((element) => {
        message += element + '\n'
      })
      return message
    }
    const handleAuth = async () => {
      errors.value = [] // Réinitialiser les erreurs
      if (isSignUp.value && formData.value.password !== formData.value.password_confirmation) {
        alert('Les mots de passe ne correspondent pas.')
        return
      }

    //   if (!formData.value.email || !formData.value.password) {
    //     alert('Veuillez remplir tous les champs obligatoires.')
    //     return
    //   }
      // Validation côté client
      // const passwordErrors = validatePassword(formData.value.password);
      // if (passwordErrors.length > 0) {
      //     errors.value.push(...passwordErrors);
      //     return;
      // }
      isLoading.value = true
      try {
        if (isSignUp.value) {
          // Inscription
          await authStore.register(formData.value)
          alert('Inscription réussie !')
        } else {
          // Connexion
          await authStore.login({
            email: formData.value.email,
            password: formData.value.password,
          })
          alert('Connexion réussie !')
        }
      } catch (error) {
        isModalOpen.value = true
        console.log('error =>', error)
        console.log('error.response =>', JSON.stringify(error))
        if (error.response) {
          const { message, errors: serverErrors } = error.response.data

          // Ajouter le message général aux erreurs
          errors.value.push(message)

          // Ajouter les erreurs détaillées
          if (serverErrors && serverErrors.length > 0) {
            errors.value.push(...serverErrors)
          }
        } else {
          errors.value.push('Erreur réseau ou de configuration : ' + error.message)
        }
      }

      isLoading.value = false
    }

    return {
      isLoading,
      isSignUp,
      errorsToMessage,
      errors,
      isModalOpen,
      toggleAuth,
      formData,
      handleAuth,
    }
  },
  data() {
    return {
      // isSignUp: true,
    }
  },
  methods: {
    clickTest(report) {
      console.log('click received', report)
    },
    openModal() {
      this.isModalOpen = true
      console.log('openModal clicked')
    },
    closeModal() {
      this.isModalOpen = false
      console.log('closeModal clicked')
    },
    handleConfirm() {
      alert('Action confirmée !')
      this.closeModal()
    },
  },
  components: {
    FaEnvelope,
    MdPassword,
    Modal,
    FaUser,
    CustomModal,
    VueFinalModal,
    MyModalPreview,
    // RouterLink,
  },
}
</script>

<style scoped>
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
}

.error-messages {
  color: red;
  margin-top: 10px;
}

.hero-wrap {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

/* background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;  
    margin: 0;
    padding: 0;
    overflow: hidden; */

.overlay_auth {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  opacity: 0.2;
  background: #5a3d52;
}

.auth_section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.uf-form-auth {
  width: 100%;
  max-width: 350px;
  padding: 15px;
  margin: auto;
}

.uf-input-group .input-group-text {
  background: #ffffff70;
  color: #f8f9fa;
  border: unset;
  font-size: 18px;
  padding: 15px;
  width: 50px;
}

.uf-input-group .form-control {
  border: unset;
  border-left: 1px solid #ffffff05;
  font-size: 16px;
  background: #ffffff70;
}

.uf-input-group .form-control:focus {
  box-shadow: unset;
  background: #ffffff;
}

.google-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.google-btn img {
  width: 30px;
  margin-right: 10px;
}

.google-btn:hover {
  background-color: #f1f1f1;
}

.pwdFroget,
.toggleAuth {
  text-decoration: underline;
  color: #d1348afb;
  /* color: #343fd1fb; */
  font-weight: bold;
}

/* */
.modal-box {
  font-family: 'Poppins', sans-serif;
}

.modal-box .show-modal {
  color: #fff;
  background-color: #e043db;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px 25px;
  margin: 80px auto 0;
  border: none;
  outline: none;
  border-radius: 20px;
  display: block;
  transition: all 0.3s ease 0s;
}

.modal-box .show-modal:hover,
.modal-box .show-modal:focus {
  color: #fff;
  outline: none;
  box-shadow:
    2px 2px 0 #fff,
    4px 4px 0 #e043db;
}

.modal-box .modal-dialog {
  width: 500px;
  margin: 70px auto 0;
}

.modal.fade .modal-dialog {
  opacity: 0;
  transform: translate(0, 0) scale(0.8);
}

.modal.fade.in .modal-dialog {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.modal-box .modal-dialog .modal-content {
  text-align: center;
  border: none;
  border-radius: 8px;
}

.modal-box .modal-dialog .modal-content .close {
  color: #d1d1d1;
  font-size: 33px;
  font-weight: 500;
  text-shadow: none;
  line-height: 13px;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  left: auto;
  right: 7px;
  top: 11px;
  z-index: 1;
  transition: all 0.3s;
}

.modal-box .modal-dialog .modal-content .close:hover {
  color: #e043db;
}

.modal-box .modal-dialog .modal-content .close:focus {
  outline: none;
}

.modal-box .modal-dialog .modal-content .modal-body {
  padding: 45px 25px !important;
}

.modal-box .modal-dialog .modal-content .modal-body .title {
  color: #626a81;
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 0 30px;
}

.modal-box .modal-dialog .modal-content .modal-body .description {
  color: #c3c4c9;
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 25px;
  margin: 0 0 35px;
}

.modal-box .modal-dialog .modal-content .modal-body .subscribe {
  color: #fff;
  background-color: #e043db;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 150px;
  padding: 9px;
  border: 2px solid #e043db;
  border-radius: 40px;
  transition: all 0.4s ease 0s;
}

.modal-box .modal-dialog .modal-content .modal-body .subscribe:hover,
.modal-box .modal-dialog .modal-content .modal-body .subscribe:focus {
  color: #e043db;
  background-color: #fff;
}

.modal-box .modal-dialog .modal-content .modal-body .cancel {
  color: #e043db;
  background-color: #fff;
  margin: 0 15px 0 0;
}

.modal-box .modal-dialog .modal-content .modal-body .cancel:hover,
.modal-box .modal-dialog .modal-content .modal-body .cancel:focus {
  color: #fff;
  background-color: #e043db;
}

@media only screen and (max-width: 576px) {
  .modal-dialog {
    width: 95% !important;
  }
}

@media only screen and (max-width: 399px) {
  .modal-box .modal-dialog .modal-content .modal-body .subscribe.cancel {
    margin: 0 0 15px 0;
  }
}
</style>
