<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="event-top-dts">
            <div class="event-top-date">
              <span class="event-month">Avr</span>
              <span class="event-date">30</span>
            </div>
            <div class="event-top-dt">
              <h3 class="event-main-title">
                Printemps Showcase Samedi 30 Avril 2022 à 19h
              </h3>
              <div class="event-top-info-status">
                <span class="event-type-name">
                  <i class="fa-solid fa-location-dot"></i>Événement sur place
                </span>
                <span class="event-type-name details-hr">
                  Commence le
                  <span class="ev-event-date">Sam, 30 Avr 2022 11:30</span>
                </span>
                <span class="event-type-name details-hr">2h</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-7 col-md-12">
          <div class="main-event-dt">
            <div class="event-img">
              <img src="/assets/images/event-imgs/big-2.jpg" alt="" />
            </div>
            <div class="share-save-btns dropdown">
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-brands fa-facebook me-3"></i>Facebook</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-brands fa-twitter me-3"></i>Twitter</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-brands fa-linkedin-in me-3"></i>LinkedIn</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-regular fa-envelope me-3"></i>Email</a
                  >
                </li>
              </ul>
            </div>
            <div class="main-event-content">
              <h4>À propos de cet événement</h4>
              <p>
                Cet événement est une opportunité unique de partager des moments
                enrichissants et de découvrir de nouvelles perspectives. Vous
                pourrez profiter d'activités variées, adaptées à tous les goûts
                et niveaux, dans un cadre convivial et stimulant. Nous mettons
                un point d'honneur à créer une expérience mémorable, axée sur
                l'apprentissage, l'échange et le divertissement.
              </p>
              <p>
                Chaque détail a été soigneusement pensé pour garantir votre
                confort et votre satisfaction. Que vous soyez passionné, curieux
                ou simplement en quête d'une nouvelle expérience, cet événement
                promet de répondre à vos attentes. Rejoignez-nous pour un moment
                inoubliable, riche en découvertes et en connexions humaines.
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
                <div class="countdown-item"><span id="day">172</span>jours</div>
                <div class="countdown-item"><span id="hour">7</span>heures</div>
                <div class="countdown-item">
                  <span id="minute">56</span>minutes
                </div>
                <div class="countdown-item">
                  <span id="second">33</span>secondes
                </div>
              </div>
            </div>
            <div class="event-dt-right-group mt-5">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Organisé par</h4>
                <h5>The Teeny Rabbit</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-calendar-day"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Date et heure</h4>
                <h5>Sam, 30 Avr 2022 11:30</h5>
              </div>
            </div>
            <div class="event-dt-right-group">
              <div class="event-dt-right-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="event-dt-right-content">
                <h4>Lieu</h4>
                <h5 class="mb-0">
                  00 Challis St, Newport, Victoria, 0000, Australie
                </h5>
                <a href="#"
                  ><i class="fa-solid fa-location-dot me-2"></i>Voir la carte</a
                >
              </div>
            </div>
            <div class="select-tickets-block">
              <h6>Sélectionnez des billets</h6>
              <div class="select-ticket-action">
                <div class="ticket-price">AUD $75.00</div>
                <div class="quantity">
                  <div class="counter">
                    <span class="down" onclick="decreaseCount(event, this)"
                      >-</span
                    >
                    <input type="text" value="0" />
                    <span class="up" onclick="increaseCount(event, this)"
                      >+</span
                    >
                  </div>
                </div>
              </div>
              <p>
                2 x paire de boucles d'oreilles peintes à la main<br />
                1 x verre de bulles ou café<br />
                Boîte de collation individuelle / coupe de fruits
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
  name: "AppDetailsEvent",
};
</script>
