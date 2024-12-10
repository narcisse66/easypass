<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="main-title checkout-title">
            <h3>Order Confirmation</h3>
          </div>
        </div>
        <div class="col-xl-8 col-lg-12 col-md-12">
          <div class="checkout-block">
            <div class="main-card">
              <div class="bp-title">
                <h4>Informations de facturation</h4>
              </div>
              <div class="bp-content bp-form">
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">Prénom*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">Nom*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">Email*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                        disabled=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">Adresse*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">État/Région*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mt-4">
                      <label class="form-label">Ville/Quartier*</label>
                      <input
                        class="form-control h_50"
                        type="text"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-12 col-md-12">
          <div class="main-card order-summary">
            <div class="bp-title">
              <h4>Informations de facturation</h4>
            </div>
            <div class="order-summary-content p_30">
              <div class="event-order-dt">
                <div class="event-thumbnail-img">
                  <img src="/assets/images/event-imgs/img-7.jpg" alt="" />
                </div>
                <div class="event-order-dt-content">
                  <h5>Tutoriel sur la peinture sur toile pour débutants</h5>
                  <span>Mercredi, 01 Juin 2022 5:30</span>
                  <div class="category-type">Événement en ligne</div>
                </div>
              </div>
              <div class="order-total-block">
                <div class="order-total-dt">
                  <div class="order-text">Nombre total de billets</div>
                  <div class="order-number">1</div>
                </div>
                <div class="order-total-dt">
                  <div class="order-text">Sous-total</div>
                  <div class="order-number">$50.00</div>
                </div>
                <div class="divider-line"></div>
                <div class="order-total-dt">
                  <div class="order-text">Total</div>
                  <div class="order-number ttl-clr">AUD $50.00</div>
                </div>
              </div>
              <div class="confirmation-btn">
                <router-link
                  :to="{ name: 'valider-pay' }"
                  class="main-btn btn-hover h_50 w-100 mt-5"
                >
                  Confirmer &amp; Payer
                </router-link>
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
  name: "AppBuyTicket",
};
</script>
