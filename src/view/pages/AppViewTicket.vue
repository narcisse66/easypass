<template>
  <div class="invoice clearfix">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-lg-8 col-md-10">
          <div class="invoice-header justify-content-between">
            <div class="invoice-header-logo">
              <img src="/assets/images/dark-logo.svg" alt="logo-facture" />
            </div>
            <div class="invoice-header-text">
              <a href="#" class="download-link">Télécharger</a>
            </div>
          </div>
          <div class="invoice-body">
            <div class="invoice_dts">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="invoice_title">Facture</h2>
                </div>
                <div class="col-md-6">
                  <div class="vhls140">
                    <ul>
                      <li><div class="vdt-list">Facturé à : John Doe</div></li>
                      <li><div class="vdt-list">140 St Kilda Rd</div></li>
                      <li><div class="vdt-list">Melbourne, Victoria</div></li>
                      <li><div class="vdt-list">3000, Australie</div></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="vhls140">
                    <ul>
                      <li>
                        <div class="vdt-list">ID Facture : YCCURW-000000</div>
                      </li>
                      <li>
                        <div class="vdt-list">
                          Date de commande : 10/05/2022
                        </div>
                      </li>
                      <li><div class="vdt-list">Près du centre MBD,</div></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-table bt_40">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Détails de l'événement</th>
                      <th scope="col">Type</th>
                      <th scope="col">Quantité</th>
                      <th scope="col">Prix unitaire</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a href="#" target="_blank"
                          >Tutoriel de peinture sur toile pour débutants</a
                        >
                      </td>
                      <td>En ligne</td>
                      <td>1</td>
                      <td>75,00 $</td>
                      <td>75,00 $</td>
                    </tr>
                    <tr>
                      <td colspan="1"></td>
                      <td colspan="5">
                        <div class="user_dt_trans text-end pe-xl-4">
                          <div class="totalinv2">
                            Total de la facture : USD 36,00 $
                          </div>
                          <p>Payé via Paypal</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="invoice_footer">
              <div class="cut-line">
                <i class="fa-solid fa-scissors"></i>
              </div>
              <div class="main-card">
                <div class="row g-0">
                  <div class="col-lg-7">
                    <div class="event-order-dt p-4">
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
                  </div>
                  <div class="col-lg-5">
                    <div class="QR-dt p-4">
                      <ul class="QR-counter-type">
                        <li>En ligne</li>
                        <li>Comptoir</li>
                        <li>0000000001</li>
                      </ul>
                      <div class="QR-scanner">
                        <img src="/assets/images/qr.png" alt="QR-Code-Billet" />
                      </div>
                      <p>Propulsé par Barren</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cut-line">
                <i class="fa-solid fa-scissors"></i>
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
  name: "AppViewTicket",
};
</script>
