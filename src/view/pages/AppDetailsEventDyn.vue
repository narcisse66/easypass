<template>
  <div class="event-dt-block p-80">
    <div class="container">

      <div v-if="visible" class="custom-alert">
    <div class="custom-alert-content">
      <p>{{ message }}</p>
      <button @click="closeAlert">OK</button>
    </div>
  </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="event-top-dts">
            <div class="event-top-date">
              <span class="event-month">{{ event.month }}</span>
              <span class="event-date">{{ event.date }}</span>
            </div>
            <div class="event-top-dt">
              <h3 class="event-main-title">{{ event.title }}</h3>
              <div class="event-top-info-status">
                <span class="event-type-name">
                  <i class="fa-solid fa-location-dot"></i>{{ event.location }}
                </span>
                <span class="event-type-name details-hr">
                  Commence le
                  <span class="ev-event-date">{{ event.event_date }}</span>
                </span>
                <span class="event-type-name details-hr">{{ event.duration }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-7 col-md-12">
          <div class="main-event-dt">
            <div class="event-img">
              <img
                :src="event.image || `/assets/images/event-imgs/img-${event.id}.jpg`"
                alt="Image de l'événement"
              />
            </div>
            <div class="main-event-content">
              <h4>À propos de cet événement</h4>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
        <!-- Détails supplémentaires sur l'événement -->
        <div class="col-xl-4 col-lg-5 col-md-12">
          <div class="main-card event-right-dt">
            <div class="bp-title">
              <h4>Détails de l'événement</h4>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Organisé par</h4>
                <h5>{{ event.organizer_id }}</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-calendar-day"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Date et heure</h4>
                <h5>{{ event.date }}  {{  }} {{ event.month }}</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Lieu</h4>
                <h5 class="mb-0">
                  {{ event.location }}
                </h5>
                <a href="#"
                  ><i class="fa-solid fa-location-dot me-2"></i>Voir la carte</a
                >
              </div>
            </div>
            <div class="select-tickets-block">
              <h6>Sélectionnez des billets</h6>
              <div class="select-ticket-action">
                <div class="ticket-price">{{ event.price }} F CFA</div>
                <div class="quantity">
                  <div class="counter">
                    <span class="down" @click="decreaseCount">-</span>

                    <span class="up" @click="increaseCount">+</span>
                  </div>
                </div>
              </div>
              <div class="xtotel-tickets-count">
                <div class="x-title">{{ quantity }}x Billet(s)</div>
                <h4>{{ totalPrice }} F CFA</h4>
              </div>
            </div>
            <div class="booking-btn">
              <button @click="handleTicket" class="main-btn btn-hover w-100">
                Réservez maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Importer axios
import Swal from 'sweetalert2';
import { API_BASE_URL } from "@/config/config"; // Chemin à adapter selon votre structure


export default {
  data() {
    return {
      event: {}, // Contiendra les détails de l'événement
      quantity: 1, // Initialiser la quantité de billets
      totalPrice: 0, // Initialiser le total
    };
  },
  created() {
    this.fetchEventDetails();  // Appeler la méthode pour récupérer les détails
  },
  methods: {
    fetchEventDetails() {
      axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true'; // Add the header
      const eventId = this.$route.params.id; // Récupérer l'ID de l'événement depuis l'URL
      axios
        .get(`${API_BASE_URL}/events/${eventId}`)
        .then((response) => {
          this.event = response.data; // Assigner les données récupérées à `event`
          this.formatEventDate();  // Formater la date une fois les données récupérées
          this.updateTotalPrice(); // Mettre à jour le total en fonction de la quantité
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de l'événement", error);
        });
    },
    formatEventDate() {
      const eventDate = new Date(this.event.event_date); // Convertir la date en objet Date
      const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
      this.event.month = months[eventDate.getMonth()]; // Le mois commence à 0
      this.event.date = eventDate.getDate(); // Le jour du mois
    },
    increaseCount() {
      this.quantity++; // Augmenter la quantité de 1
      this.updateTotalPrice(); // Recalculer le total
    },
    decreaseCount() {
      if (this.quantity > 1) {
        this.quantity--; // Diminuer la quantité, mais pas en dessous de 1
        this.updateTotalPrice(); // Recalculer le total
      }
    },
    updateTotalPrice() {
      this.totalPrice = this.quantity * this.event.price; // Calculer le total
    },
    handleTicket() {
      // Préparer les données de la réservation
      const ticketData = {
        user_id: 1, // Assumer que l'utilisateur connecté a l'ID 1
        event_id: this.event.id,
        quantity: this.quantity,
        total_price: this.totalPrice,
        payment_status: "pending"
      };

      // Envoyer la requête POST à l'API
      axios
  .post(`${API_BASE_URL}/tickets`, ticketData)
  .then((response) => {
    console.log("Réservation réussie", response.data);
    // Afficher une alerte stylée
    Swal.fire({
      title: "Réservation réussie !",
      text: "Votre réservation a été effectuée avec succès.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      // Rediriger après avoir fermé l'alerte
      this.$router.push("/detail/ticket");
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la réservation", error);
    Swal.fire({
      title: "Erreur !",
      text: "La réservation a échoué. Veuillez réessayer.",
      icon: "error",
      confirmButtonText: "OK",
    });
  });
    }
  }
};
</script>
