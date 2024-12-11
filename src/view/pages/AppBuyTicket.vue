<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row">


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
