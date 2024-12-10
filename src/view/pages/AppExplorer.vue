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
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix ateliers concert arts bénévolat sports"
                    data-ref="mixitup-target"
                  >
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <router-link
                          :to="{ name: 'details-event2' }"
                          class="thumbnail-img"
                        >
                          <img
                            src="/assets/images/event-imgs/img-6.jpg"
                            alt=""
                          />
                        </router-link>
                        <span class="bookmark-icon" title="Enregistrer"></span>
                      </div>
                      <div class="event-content">
                        <router-link
                          :to="{ name: 'details-event' }"
                          class="event-title"
                          >Spectacle Open Mic "Step Up"</router-link
                        >
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD 200,00*</span>
                          <span class="remaining"></span>
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span
                              ><i class="fa-solid fa-calendar-day me-2"></i>30
                              Juin</span
                            >
                            <span class="dot"
                              ><i class="fa-solid fa-circle"></i
                            ></span>
                            <span>Jeu, 16h30</span>
                          </div>
                          <span class="publish-time"
                            ><i class="fa-solid fa-clock me-2"></i>1h</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix bénévolat gratuit santé_bien-être"
                    data-ref="mixitup-target"
                  >
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <router-link
                          :to="{ name: 'details-event3' }"
                          class="thumbnail-img"
                        >
                          <img
                            src="/assets/images/event-imgs/img-7.jpg"
                            alt=""
                          />
                        </router-link>
                        <span class="bookmark-icon" title="Enregistrer"></span>
                      </div>
                      <div class="event-content">
                        <router-link
                          :to="{ name: 'details-event' }"
                          class="event-title"
                          >Tutoriel sur la peinture sur toile pour
                          débutants</router-link
                        >
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD 50,00*</span>
                          <span class="remaining"
                            ><i class="fa-solid fa-ticket fa-rotate-90"></i>17
                            Restants</span
                          >
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span
                              ><i class="fa-solid fa-calendar-day me-2"></i>17
                              Juillet</span
                            >
                            <span class="dot"
                              ><i class="fa-solid fa-circle"></i
                            ></span>
                            <span>Dim, 17h30</span>
                          </div>
                          <span class="publish-time"
                            ><i class="fa-solid fa-clock me-2"></i>1h</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert bénévolat arts"
                    data-ref="mixitup-target"
                  >
                    <div class="main-card mt-4">
                      <div class="event-thumbnail">
                        <router-link
                          :to="{ name: 'details-event4' }"
                          class="thumbnail-img"
                        >
                          <img
                            src="/assets/images/event-imgs/img-8.jpg"
                            alt=""
                          />
                        </router-link>
                        <span class="bookmark-icon" title="Enregistrer"></span>
                      </div>
                      <div class="event-content">
                        <router-link
                          :to="{ name: 'details-event' }"
                          class="event-title"
                          >Programme de formation sur le leadership
                          2022</router-link
                        >
                        <div class="duration-price-remaining">
                          <span class="duration-price">AUD 120,00*</span>
                          <span class="remaining"
                            ><i class="fa-solid fa-ticket fa-rotate-90"></i>7
                            Restants</span
                          >
                        </div>
                      </div>
                      <div class="event-footer">
                        <div class="event-timing">
                          <div class="publish-date">
                            <span
                              ><i class="fa-solid fa-calendar-day me-2"></i>20
                              Juillet</span
                            >
                            <span class="dot"
                              ><i class="fa-solid fa-circle"></i
                            ></span>
                            <span>Mer, 23h30</span>
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
  </div>
</template>

<script>
export default {
  name: "AppExplorer",
};
</script>
