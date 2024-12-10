<template>
  <div class="event-dt-block p-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-7 col-md-10">
          <div class="booking-confirmed-content">
            <div class="main-card">
              <div class="booking-confirmed-top text-center p_30">
                <div class="booking-confirmed-img mt-4">
                  <img src="/assets/images/confirmed.png" alt="" />
                </div>
                <h4>Réservation Confirmée</h4>
                <p class="ps-lg-4 pe-lg-4">
                  Nous sommes ravis de vous informer que votre demande de
                  réservation a été reçue et confirmée.
                </p>
              </div>
              <div class="booking-confirmed-bottom">
                <div class="booking-confirmed-bottom-bg p_30">
                  <div class="event-order-dt">
                    <div class="event-thumbnail-img">
                      <img src="/assets/images/event-imgs/img-7.jpg" alt="" />
                    </div>
                    <div class="event-order-dt-content">
                      <h5>Tutoriel de peinture sur toile pour débutants</h5>
                      <span>Mer, 1 Juin 2022, 5:30 AM. Durée 1h</span>
                      <div class="buyer-name">John Doe</div>
                      <div class="booking-total-tickets">
                        <i class="fa-solid fa-ticket rotate-icon"></i>
                        <span class="booking-count-tickets mx-2">1</span>x
                        Billet
                      </div>
                      <div class="booking-total-grand">
                        Total : <span>75,00 $</span>
                      </div>
                    </div>
                  </div>
                  <router-link
                    :to="{ name: 'detail-ticket' }"
                    class="main-btn btn-hover h_50 w-100 mt-5"
                    ><i class="fa-solid fa-ticket rotate-icon me-3"></i>Voir le
                    billet</router-link
                  >
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
  name: "AppValiderPay",
};
</script>
