<template>
  <div class="explore-events p-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="main-title">
            <h3 style="margin: 5% auto; text-align: center">
              Bienvenue sur EasyPass !
            </h3>
          </div>
        </div>

        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="event-filter-items">
            <div class="featured-controls">
              <div class="row" data-ref="event-filter-content">
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <a href="#" class="thumbnail-img">
                        <img src="/assets/images/event-imgs/img-1.jpg" alt="" />
                      </a>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event' }"
                        class="event-title"
                        >A New Way Of Life</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $100.00*</span>
                        <span class="remaining"></span>
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>15
                            Apr</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Fri, 3.45 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>1h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-2.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event' }"
                        class="event-title"
                        >Earrings Workshop with Bronwyn David</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $75.00*</span>
                        <span class="remaining"
                          ><i class="fa-solid fa-ticket fa-rotate-90"></i>6
                          Remaining</span
                        >
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>30
                            Apr</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Sat, 11.20 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>2h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-3.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event' }"
                        class="event-title"
                        >Spring Showcase Saturday April 30th 2022 at
                        7pm</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">Free*</span>
                        <span class="remaining"></span>
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>1
                            May</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Sun, 4.30 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>3h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event2' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-4.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event2' }"
                        class="event-title"
                        >Shutter Life</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $85.00</span>
                        <span class="remaining"
                          ><i class="fa-solid fa-ticket fa-rotate-90"></i>7
                          Remaining</span
                        >
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>1
                            May</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Sun, 5.30 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>1h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <a href="#" class="thumbnail-img">
                        <img src="/assets/images/event-imgs/img-5.jpg" alt="" />
                      </a>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event2' }"
                        class="event-title"
                        >Friday Night Dinner at The Old Station May 27
                        2022</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $41.50*</span>
                        <span class="remaining"></span>
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>27
                            May</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Fri, 12.00 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>5h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event4' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-6.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event4' }"
                        class="event-title"
                        >Step Up Open Mic Show</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $200.00*</span>
                        <span class="remaining"></span>
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>30
                            Jun</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Thu, 4.30 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>1h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event3' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-7.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event3' }"
                        class="event-title"
                        >Tutorial on Canvas Painting for Beginners</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $50.00*</span>
                        <span class="remaining"
                          ><i class="fa-solid fa-ticket fa-rotate-90"></i>17
                          Remaining</span
                        >
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>17
                            Jul</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Sun, 5.30 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>1h</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts"
                  data-ref="mixitup-target"
                >
                  <div class="main-card mt-4">
                    <div class="event-thumbnail">
                      <router-link
                        :to="{ name: 'details-event4' }"
                        class="thumbnail-img"
                      >
                        <img src="/assets/images/event-imgs/img-8.jpg" alt="" />
                      </router-link>
                      <span class="bookmark-icon" title="Bookmark"></span>
                    </div>
                    <div class="event-content">
                      <router-link
                        :to="{ name: 'details-event4' }"
                        class="event-title"
                        >Trainee Program on Leadership' 2022</router-link
                      >
                      <div class="duration-price-remaining">
                        <span class="duration-price">AUD $120.00*</span>
                        <span class="remaining"
                          ><i class="fa-solid fa-ticket fa-rotate-90"></i>7
                          Remaining</span
                        >
                      </div>
                    </div>
                    <div class="event-footer">
                      <div class="event-timing">
                        <div class="publish-date">
                          <span
                            ><i class="fa-solid fa-calendar-day me-2"></i>20
                            Jul</span
                          >
                          <span class="dot"
                            ><i class="fa-solid fa-circle"></i
                          ></span>
                          <span>Wed, 11.30 PM</span>
                        </div>
                        <span class="publish-time"
                          ><i class="fa-solid fa-clock me-2"></i>12h</span
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

  <div class="host-engaging-event-block p-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="main-title">
            <h3>
              Organisez des Événements En Ligne et en Présentiel Engagés avec
              EasyPass
            </h3>
            <p>
              Organisez des événements en ligne ou en présentiel grâce à notre
              plateforme intégrée, et offrez une expérience unique à vos
              participants.
            </p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="engaging-block">
            <div class="owl-carousel engaging-slider owl-theme">
              <div class="item">
                <div class="main-card">
                  <div class="host-item">
                    <div class="host-img">
                      <img src="/assets/images/icons/venue-events.png" alt="" />
                    </div>
                    <h4>Événements en Présentiel</h4>
                    <p>
                      Créez des pages d'événements impressionnantes pour vos
                      événements en présentiel, attirez les participants et
                      vendez plus de billets.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-card">
                  <div class="host-item">
                    <div class="host-img">
                      <img src="/assets/images/icons/webinar.png" alt="" />
                    </div>
                    <h4>Webinaire</h4>
                    <p>
                      Les webinaires ont tendance à être des événements à sens
                      unique. EasyPass les rend plus engageants.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-card">
                  <div class="host-item">
                    <div class="host-img">
                      <img
                        src="/assets/images/icons/training-workshop.png"
                        alt=""
                      />
                    </div>
                    <h4>Formation & Atelier</h4>
                    <p>
                      Créez et organisez des ateliers et des sessions de
                      formation rentables en ligne, vendez des billets et gagnez
                      de l'argent.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-card">
                  <div class="host-item">
                    <div class="host-img">
                      <img src="/assets/images/icons/online-class.png" alt="" />
                    </div>
                    <h4>Classe En Ligne</h4>
                    <p>
                      Utilisez notre modèle d'e-learning pour créer une page
                      d'événement e-learning fantastique et générer de
                      l'engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-card">
                  <div class="host-item">
                    <div class="host-img">
                      <img src="/assets/images/icons/talk-show.png" alt="" />
                    </div>
                    <h4>Talk Show</h4>
                    <p>
                      Utilisez notre modèle d'événement intégré pour créer et
                      organiser un Talk Show engageant.
                    </p>
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
export default {
  name: "AppHome",
};
</script>
