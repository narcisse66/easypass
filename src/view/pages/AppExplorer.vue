<template>
  <div class="wrapper">
    <div class="col-xl-12 col-lg-12 col-md-12">
      <div class="main-title">
        <h3 class="pt-4" style="text-align: center">Evénements</h3>
      </div>
    </div>
    <div class="explore-events">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="event-filter-items">
              <div class="featured-controls">
                <div class="filter-tag">
                  <a href="explore_events_by_date.html" class="active">All</a>
                  <a href="explore_events_by_date.html">Today</a>
                  <a href="explore_events_by_date.html">Tomorrow</a>
                  <a href="explore_events_by_date.html">This Week</a>
                  <a href="explore_events_by_date.html">This Weekend</a>
                  <a href="explore_events_by_date.html">Next Week</a>
                  <a href="explore_events_by_date.html">Next Weekend</a>
                  <a href="explore_events_by_date.html">This Month</a>
                  <a href="explore_events_by_date.html">Next Month</a>
                  <a href="explore_events_by_date.html">This Year</a>
                  <a href="explore_events_by_date.html">Next Year</a>
                </div>
                <div class="controls">
                  <button type="button" class="control" data-filter="all">
                    All
                  </button>
                  <button type="button" class="control" data-filter=".arts">
                    Arts
                  </button>
                  <button type="button" class="control" data-filter=".business">
                    Business
                  </button>
                  <button type="button" class="control" data-filter=".concert">
                    Concert
                  </button>
                  <button
                    type="button"
                    class="control"
                    data-filter=".workshops"
                  >
                    Workshops
                  </button>
                  <button
                    type="button"
                    class="control"
                    data-filter=".coaching_consulting"
                  >
                    Coaching and Consulting
                  </button>
                  <button
                    type="button"
                    class="control"
                    data-filter=".health_Wellness"
                  >
                    Health and Wellbeing
                  </button>
                  <button
                    type="button"
                    class="control"
                    data-filter=".volunteer"
                  >
                    Volunteer
                  </button>
                  <button type="button" class="control" data-filter=".sports">
                    Sports
                  </button>
                  <button type="button" class="control" data-filter=".free">
                    Free
                  </button>
                </div>
                <div class="row" data-ref="event-filter-content">
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert ateliers bénévolat sports santé_bien-être"
                    data-ref="mixitup-target"
                  >
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <router-link
                          :to="{ name: 'details-event' }"
                          class="thumbnail-img"
                        >
                          <img
                            src="/assets/images/event-imgs/big-2.jpg"
                            alt=""
                          />
                        </router-link>
                        <span class="bookmark-icon" title="Enregistrer"></span>
                      </div>
                      <div class="event-content">
                        <router-link
                          :to="{ name: 'details-event' }"
                          class="event-title"
                          >Une nouvelle façon de vivre</router-link
                        >
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD 100,00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span
                              ><i class="fa-solid fa-calendar-day me-2"></i>15
                              Avril</span
                            >
                            <span class="dot"
                              ><i class="fa-solid fa-circle"></i
                            ></span>
                            <span>Ven, 15h45</span>
                          </div>
                          <span class="publish-time"
                            ><i class="fa-solid fa-clock me-2"></i>1h</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>


                  <div
                    v-for="event in events"
                    :key="event.id"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix affaires ateliers bénévolat sports santé_bien-être"
                    data-ref="mixitup-target"
                  >
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <router-link
                          :to="`/event/${event.id}`"
                          class="thumbnail-img"
                        >
                          <img
                            :src="
                              event.image ||
                              `/assets/images/event-imgs/img-${event.id}.jpg`
                            "
                            alt="Image de l'événement"
                          />
                        </router-link>

                        <span class="bookmark-icon" title="Enregistrer"></span>
                      </div>
                      <div class="event-content">
                        <router-link
                          :to="`/event/${event.id}`"
                          class="event-title"

                        >{{ event.title }}</router-link>
                        
                         
                        <div class="duration-price-remaining">
                          <span class="duration-price"
                            >F cfa {{ event.price }}*</span
                          >
                          <span class="remaining">
                            <i class="fa-solid fa-ticket fa-rotate-90"></i
                            >{{
                              event.total_tickets - event.total_reservations
                            }}
                            Restants
                          </span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span
                              ><i class="fa-solid fa-calendar-day me-2"></i
                              >{{ event.event_date }}</span
                            >
                            <span class="dot"
                              ><i class="fa-solid fa-circle"></i
                            ></span>
                            <span>{{ event.event_time }}</span>
                          </div>
                          <span class="publish-time"
                            ><i class="fa-solid fa-clock me-2"></i>2h</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>



                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from "@/config/config"; // Chemin à adapter selon votre structure
import axios from "axios";

export default {
  name: "AppExplorer",
  data() {
    return {
      events: [], // On va stocker la liste des événements ici
    };
  },
  mounted() {
    this.fetchEvents(); // Appeler la méthode pour récupérer les événements dès que le composant est monté
  },
  methods: {
  fetchEvents() {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true'; // Add the header
    axios
      .get(`${API_BASE_URL}/events`) // Your API URL
      .then((response) => {
        this.events = response.data;
        console.log(this.events);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des événements :', error);
      });
  },
}


};
</script>
