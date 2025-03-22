<template>
  <section id="contact" class="ftco-appointment m-2 p-3 align-middle">
    <div class="container">
      <div class="row d-md-flex align-items-center content-center justify-items-center">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-4 d-flex align-center">
          <div class="datepicker">
            <div class="datepicker-top">
              <div class="btn-group">
                <button class="tag" @click="setToday">Today</button>
              </div>
              <div class="month-selector">
                <button class="arrow" @click="prevMonth">
                  <span class="icon-chevron-left"></span>
                </button>
                <span class="month-name">{{ currentMonth }}</span>
                <button class="arrow" @click="nextMonth">
                  <span class="icon-chevron-right"></span>
                </button>
              </div>
            </div>
            <div class="datepicker-calendar">
              <span class="day" v-for="day in daysOfWeek" :key="day">{{ day }}</span>
              <button
                type="button"
                v-for="date in calendarDates"
                :key="date.date"
                :class="[
                  'date',
                  {
                    faded: !date.isCurrentMonth,
                    'current-day': date.isToday,
                    'past-date': isPastDate(date.date),
                    'date-selected': isDateSelected(date.date),
                  },
                ]"
                :disabled="isPastDate(date.date)"
                @click="selectDate(date.date)"
              >
                {{ date.day }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 appointment pl-md-5">
          <!-- Grille des créneaux horaires-->
          <div class="time-slots">
            <h3>Available for {{ selectedDay }}</h3>
            <p v-if="!timeSlots.length">No available time slots</p>
            <div class="grid">
              <button
                type="button"
                v-for="slot in timeSlots"
                :key="slot"
                :class="['slot', { 'slot-selected': slot === selectedTimeSlot }]"
                @click="selectTimeSlot(slot)"
              >
                {{ slot }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { onMounted } from 'vue'
// import { useAuthStore } from '../stores/auth'
// import { computed } from 'vue'
export default {
  name: 'DynamicCalendar',
  setup() {
   
    return {
     
    }
  },
  data() {
    return {
     
      currentDate: new Date(), // Date actuellement affichée
      selectedDate: null, // Date sélectionnée par l'utilisateur
      daysOfWeek: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], // Jours de la semaine
      timeSlots: [], // Créneaux horaires pour le jour sélectionné
      // Exemple de créneaux horaires par jour de la semaine
      weeklyTimeSlots: {
        Monday: ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am'],
        Tuesday: ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am'],
        Wednesday: ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am'],
        Thursday: ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am'],
        Friday: ['09:30 am', '10:00 am', '10:30 am', '11:00 am'],
        Saturday: ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am'], // Exemple pour le samedi
        Sunday: [], // Fermé le dimanche
      },
      selectedTimeSlot: null,
    }
  },
  computed: {
    // Affiche le mois et l'année actuels
    currentMonth() {
      return this.currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
    },
    // Génère les dates du calendrier
    calendarDates() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const firstDayOfMonth = new Date(year, month, 1)
      const lastDayOfMonth = new Date(year, month + 1, 0)
      const daysInMonth = lastDayOfMonth.getDate()
      const startDay = firstDayOfMonth.getDay() || 7

      const dates = []

      // Ajouter les jours du mois précédent
      for (let i = startDay - 1; i > 0; i--) {
        const date = new Date(year, month, -i + 1)
        dates.push({ date: date, day: date.getDate(), isCurrentMonth: false })
      }

      // Ajouter les jours du mois actuel
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i)
        dates.push({ date: date, day: i, isCurrentMonth: true, isToday: this.isToday(date) })
      }

      // Ajouter les jours du mois suivant
      const endDay = lastDayOfMonth.getDay() || 7
      for (let i = 1; i <= 7 - endDay; i++) {
        const date = new Date(year, month + 1, i)
        dates.push({ date: date, day: i, isCurrentMonth: false })
      }

      return dates
    },
    // Jour sélectionné au format lisible
    selectedDay() {
      if (!this.selectedDate) return 'No day selected'
      return this.selectedDate.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })
    },
  },
  methods: {
    // Vérifie si une date est aujourd'hui
    isToday(date) {
      const today = new Date()
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      )
    },

    isDateSelected(date) {
      if (!this.selectedDate) return false
      return (
        date.getDate() === this.selectedDate.getDate() &&
        date.getMonth() === this.selectedDate.getMonth() &&
        date.getFullYear() === this.selectedDate.getFullYear()
      )
    },

    isSlotSelected(slot) {
      return this.selectedTimeSlot === slot
    },
    isPastDate(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0) // Supprime l'heure pour comparer uniquement la date
      return date < today
    },
    // Sélectionne une date et met à jour les créneaux horaires
    selectDate(date) {
      this.selectedDate = date
      this.updateTimeSlots(date)
      this.emitSelectedDateTime() // Émettre les données sélectionnées
    },
    // Met à jour les créneaux horaires en fonction du jour sélectionné
    updateTimeSlots(date) {
      const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' })
      console.log(dayOfWeek)
      this.timeSlots = this.weeklyTimeSlots[dayOfWeek] || []
    },
    // Définit la date actuelle
    setToday() {
      this.currentDate = new Date()
      this.selectDate(this.currentDate)
    },
    // Passe au mois précédent
    prevMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1,
      )
    },
    // Passe au mois suivant
    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1,
      )
    },
    // Sélectionne un créneau horaire
    selectTimeSlot(slot) {
      this.selectedTimeSlot = slot
      this.emitSelectedDateTime() // Émettre les données sélectionnées
    },
    // Émettre la date et le créneau horaire sélectionnés
    emitSelectedDateTime() {
      this.$emit('datetime-selected', {
        date: this.selectedDay,
        timeSlot: this.selectedTimeSlot,
      })
    },
  },
  mounted() {
    // Sélectionne la date actuelle par défaut
    this.selectDate(this.currentDate)
  },
}
</script>
<style scoped>
button {
  font: inherit;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
}

.datepicker {
  width: 95%;
  max-width: 350px;
  background-color: var(--c-bg-tertiary);
  border-radius: 10px;
  box-shadow:
    0 0 2px 0 rgba(#000, 0.2),
    0 5px 10px 0 rgba(#000, 0.1);
  padding: 1rem;
}
.datepicker-top {
  display: flex;
  color: cornsilk;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.month-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.arrow {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 5px;
  /* background-color: #f0f0f0; */
}

.month-name {
  font-weight: bold;
}

.datepicker-calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 1rem;
}

.day,
.date {
  justify-self: center;
}

.day {
  color: cornsilk;
  font-size: 0.875em;
  font-weight: 500;
  justify-self: center;
}

.date {
  border: 0;
  padding: 0;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
  border: 2px solid transparent;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
    background-color: #ca57b1;
    color: #fff;
    border: 2px solid var(--c-theme-primary-accent);
  }
}

.date-selected {
  background-color: #ca57b1;
  color: #fff;
  border: 2px solid var(--c-theme-primary-accent);
}

.past-date {
  color: rgba(255, 255, 255, 0.219);
  pointer-events: none;
  opacity: 0.5;
}

.faded {
  color: var(--c-text-secondary);
}

.current-day {
  color: #d613ac;
  border-color: var(--c-theme-primary);
  background-color: var(--c-theme-primary);
  &:focus {
    background-color: var(--c-theme-primary-accent);
  }
}

.time-slots {
  flex: 1;
  background-color: #02000000;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.time-slots h3 {
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
}

.slot {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.slot-selected {
  background-color: #921067;
  color: #fff;
}

.slot:hover {
  background-color: #f0f0f03d;
}
</style>
