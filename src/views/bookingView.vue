<template>
  <navigationBar />
  <section
    class="ftco-section img py-3"
    :style="{ backgroundImage: `url('../assets/images/service6.png')` }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-5 text-right">
          <!-- Removed "discount" class -->
          <h2 class="h3 font-weight-bold mb-2 text-white">Discover Our Services</h2>
          <!-- More subtle title -->
          <p class="mb-3 text-white">
            <!-- Concise text -->
            We offer tailored solutions to meet your needs, with unmatched professionalism and
            quality.
          </p>
          <p>
            <a href="/#specialities" class="btn btn-outline-light btn-sm px-4 py-2">
              Learn More <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <h2 class="mb-4 mt-2">Complete Your Booking</h2>
    <p class="mb-4">
      Fill in your details below to secure your appointment. It's quick, easy, and ensures you get
      the service you need at the best price!
    </p>

    <form action="#">
      <div v-if="step === 1" class="form first">
        <!-- Bannière d'information -->
        <div class="info-banner bg-light p-3 mb-4 text-center">
          <p class="mb-0">
            Already have an account?
            <a href="/register" class="text-primary font-weight-bold">Log In</a>
            for faster booking.
          </p>
        </div>
        <!-- END Bannière d'information -->
        <div class="row d-md-flex">
          <!-- Informations du salon -->

          <!-- Formulaire de détails du client -->
          <div class="col-lg-8 d-flex">
            <!-- Colonne pour le formulaire, avec flex pour s'étendre -->
            <div class="details personal flex-grow-1">
              <!-- flex-grow-1 pour permettre l'expansion -->
              <span class="title">Client Details</span>
              <div class="fields">
                <div class="input-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" v-model="customerData.name" />
                </div>
                <div class="input-field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" v-model="customerData.email" />
                </div>
                <div class="input-field">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    v-model="customerData.phone"
                  />
                </div>
                <div class="input-field">
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your message"
                    v-model="customerData.message"
                  ></textarea>
                </div>

                <!-- Ajoutez d'autres champs si nécessaire -->
              </div>
              <!-- <div class="fields">
                <div class="input-field">
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your message"
                    v-model="customerData.message"
                  ></textarea>
                </div>
              </div> -->
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <!-- Colonne pour les informations du salon -->
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">booking Details</h3>
                <p class="card-text font-weight-bold">
                  {{ service['title'] }}
                </p>
                <p></p>
                <ul class="list-unstyled">
                  <li>⏱ {{ service['duration'] }} Min</li>
                  <li>📝{{ service['price'] }} $</li>
                  <li>📞 (555) 123-4567</li>
                  <li>📍 Groom Road</li>
                  <li>📎 KIKI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="details ID">
          <span class="title">Schedule your service  </span>
          <span> Check out our availability and book the date and time that works for you</span>
          <DynamicCalendar @datetime-selected="handleDateTimeSelected" />
          <button type="button" class="btn btn-primary m-t-3 mr-5" @click="nextStep()">
            Confirm Booking
          </button>
        </div>
      </div>
      <!-- Details -->
      <div v-if="step === 2">
        <!-- Section Booking Details -->
        <div class="booking-details mt-5">
          <h3 class="mb-4">Booking Details</h3>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ service['title'] }}</h5>

              <p class="card-text">
                {{ selectedDateTime?.date || '' }} at {{ selectedDateTime?.timeSlot || '' }}
              </p>
              <p class="card-text">Groom Road, Kiki</p>
              <p class="card-text">3 hr 30 min</p>

              <hr />

              <h5 class="mt-4">Payment Details</h5>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Total</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td>Pay Now (Deposit)</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>Pay Later</td>
                    <td>$150</td>
                  </tr>
                </tbody>
              </table>

              <p class="text-muted">
                By completing your booking, you agree to receive related SMS notifications.
              </p>

              <div class="buttons d-flex justify-content-start mt-4">
                <button class="btn btn-secondary" @click="prevStep">Back</button>
                <button class="btn btn-primary" @click="nextStep">Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DynamicCalendar from '@/components/utils/DynamicCalendar.vue'
import HeroSection from '@/components/HeroSection.vue'
import navigationBar from '../components/navigationBar.vue'
import { useAuthStore } from '@/stores/auth' // Importer le authStore

import { useRoute } from 'vue-router'
import { useServicesStore } from '@/stores/servicesStore'
import { useSelectedServiceStore } from '@/stores/selectedServiceStore'

import { ref, onMounted, computed, watch } from 'vue'
export default {
  name: 'BookingSection',
  setup() {
    const selectedServiceStore = useSelectedServiceStore()
    let service = computed(() => selectedServiceStore.service)

    const authStore = useAuthStore()
    const user = computed(() => authStore.user)
    const token = computed(() => authStore.token)

    // Vérifier si l'utilisateur est connecté
    const isLoggedIn = computed(() => !!authStore.token)

    const customerData = ref({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

    // Mettre à jour customerData lorsque user est disponible
    onMounted(() => {
      if (user.value) {
        customerData.value.name = user.value.name
        customerData.value.email = user.value.email
        customerData.value.phone = user.value.phone
      }

      // Récupérer l'objet du service depuis les paramètres de route
      service = computed(() => selectedServiceStore.service)
    })
    // Écouter les changements de user (au cas où il se connecte après le montage)
    watch(user, (newUser) => {
      if (newUser) {
        customerData.value.name = newUser.name
        customerData.value.email = newUser.email
        customerData.value.phone = newUser.phone
      }
    })

    const selectedDateTime = ref({ date: null, timeSlot: null })

    const handleDateTimeSelected = (data) => {
      selectedDateTime.value = data
    }

    return {
      service,
      isLoggedIn,
      selectedDateTime,
      handleDateTimeSelected,
      customerData,
      user,
    }
  },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time
      alert(`You selected ${time}`)
    },

    nextStep() {
      if (this.step < 3) this.step++
    },
    prevStep() {
      if (this.step > 1) this.step--
    },
    submitForm() {
      console.log('Form submitted', this.formData)
      alert('Registration Successful')
    },
  },
  components: {
    navigationBar,
    HeroSection,
    DynamicCalendar,
  },
}
</script>

<style scoped>
.container form .form.second {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
}
form.secActive .form.second {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
}
form.secActive .form.first {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-100%);
}
.container form .title {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  color: #333;
}
.container form .fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
form .fields .input-field {
  display: flex;
  width: calc(100% / 2 - 15px);
  flex-direction: column;
  margin: 4px 0;
}
.input-field label {
  font-size: 12px;
  font-weight: 500;
  color: #2e2e2e;
}
.input-field input,
select {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 42px;
  margin: 8px 0;
}

.input-field textarea,
select {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 70px;
  margin: 8px 0;
}

.input-field textarea :focus,
.input-field input :focus,
.input-field select:focus {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}

.input-field select,
.input-field input[type='date'] {
  color: #707070;
}
.input-field input[type='date']:valid {
  color: #333;
}
.container form button,
.backBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  transition: all 0.3s linear;
  cursor: pointer;
}
.container form .btnText {
  font-size: 14px;
  font-weight: 400;
}
form button:hover {
  background-color: #265df2;
}
form button i,
form .backBtn i {
  margin: 0 6px;
}
form .backBtn i {
  transform: rotate(180deg);
}
form .buttons {
  display: flex;
  align-items: center;
}
form .buttons button,
.backBtn {
  margin-right: 14px;
}

/* Booking Details */
.booking-details .card {
  border: 1px solid #e9ecef; /* Bordure légère */
  border-radius: 8px; /* Coins arrondis */
}

.booking-details .card-title {
  font-size: 1.25rem; /* Taille du titre */
  font-weight: bold; /* Texte en gras */
}

.booking-details .card-text {
  font-size: 0.9rem; /* Taille du texte */
  color: #6c757d; /* Texte gris */
}

.booking-details table {
  width: 100%; /* Tableau plein largeur */
}

.booking-details table td {
  padding: 8px 0; /* Espacement des cellules */
}

.booking-details table tr:last-child td {
  border-bottom: none; /* Supprimer la bordure inférieure de la dernière ligne */
}

.booking-details .btn {
  margin-top: 16px; /* Espacement au-dessus du bouton */
}

@media (max-width: 750px) {
  .container form {
    overflow-y: scroll;
  }
  .container form::-webkit-scrollbar {
    display: none;
  }
  form .fields .input-field {
    width: calc(100% / 2 - 15px);
  }
}
@media (max-width: 550px) {
  form .fields .input-field {
    width: 100%;
  }
}
</style>
