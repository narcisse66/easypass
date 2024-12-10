<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="event-top-dts">
            <div class="event-top-date">
              <span class="event-month">Mai</span>
              <span class="event-date">15</span>
            </div>
            <div class="event-top-dt">
              <h3 class="event-main-title">
                Atelier de Photographie Dimanche 15 Mai 2022 à 10h
              </h3>
              <div class="event-top-info-status">
                <span class="event-type-name">
                  <i class="fa-solid fa-location-dot"></i>Événement sur place
                </span>
                <span class="event-type-name details-hr">
                  Commence le
                  <span class="ev-event-date">Dim, 15 Mai 2022 10:00</span>
                </span>
                <span class="event-type-name details-hr">4h</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-7 col-md-12">
          <div class="main-event-dt">
            <div class="event-img">
              <img src="/assets/images/event-imgs/img-7.jpg" alt="" />
            </div>
            <div class="share-save-btns dropdown">
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="fa-brands fa-facebook me-3"></i>Facebook</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="fa-brands fa-twitter me-3"></i>Twitter</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="fa-brands fa-linkedin-in me-3"></i>LinkedIn</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="fa-regular fa-envelope me-3"></i>Email</a
                  >
                </li>
              </ul>
            </div>
            <div class="main-event-content">
              <h4>À propos de cet événement</h4>
              <p>
                Ce workshop de photographie vous permettra de découvrir les
                techniques de base pour capturer des images d'une qualité
                professionnelle. Nous aborderons l'utilisation des différents
                modes de la caméra, les astuces pour régler l'exposition, ainsi
                que des conseils sur les meilleures pratiques en matière de
                composition. Que vous soyez un amateur ou un professionnel, cet
                atelier vous offrira une opportunité unique d'améliorer vos
                compétences photographiques.
              </p>
              <p>
                L'événement se tiendra dans un environnement agréable où vous
                pourrez mettre en pratique les concepts appris en temps réel. Un
                espace de critique constructive sera également disponible pour
                discuter des œuvres et des photos prises par les participants.
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-12">
          <div class="main-card event-right-dt">
            <div class="bp-title">
              <h4>Détails de l'événement</h4>
            </div>
            <div class="time-left">
              <div class="countdown">
                <div class="countdown-item"><span id="day">135</span>jours</div>
                <div class="countdown-item"><span id="hour">6</span>heures</div>
                <div class="countdown-item">
                  <span id="minute">45</span>minutes
                </div>
                <div class="countdown-item">
                  <span id="second">12</span>secondes
                </div>
              </div>
            </div>
            <div class="event-dt-right-group mt-5">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Organisé par</h4>
                <h5>Photographers Collective</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-calendar-day"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Date et heure</h4>
                <h5>Dim, 15 Mai 2022 10:00</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Lieu</h4>
                <h5 class="mb-0">
                  123 Creative St, Melbourne, Victoria, 3000, Australie
                </h5>
              </div>
            </div>
            <div class="select-tickets-block">
              <h6>Sélectionnez des billets</h6>
              <div class="select-ticket-action">
                <div class="ticket-price">AUD $100.00</div>
                <div class="quantity">
                  <div class="counter">
                    <span class="down" onclick="decreaseCount(event, this)">
                      -</span
                    >
                    <input type="text" value="0" />
                    <span class="up" onclick="increaseCount(event, this)">
                      +</span
                    >
                  </div>
                </div>
              </div>
              <p>
                1 x séance de mentorat personnalisée<br />
                1 x accès au matériel de l'événement<br />
                Snacks et boissons non alcoolisées inclus
              </p>
              <div class="xtotel-tickets-count">
                <div class="x-title">1x Billet(s)</div>
                <h4>AUD <span>$0.00</span></h4>
              </div>
            </div>
            <div class="booking-btn">
              <router-link
                :to="{ name: 'ticket-details' }"
                class="main-btn btn-hover w-100"
                >Réservez maintenant</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDetailsEvent3",
};
</script>
