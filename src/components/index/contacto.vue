<script setup lang="ts">
import { Notify } from "quasar";

const redirect = (link: string = "") => {
  switch (link) {
    case "direccion":
      window.open(
        "https://www.google.com/maps/dir//Av.+Errazuriz+533,+Santa+Cruz,+Chile/@-36.608074,-73.0671267,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9689c9c7b9a05c75:0x2c62e25f7ac04989!2m2!1d-73.0649327!2d-36.608074"
      );
      break;
    case "whatsapp":
      window.open("https://wa.me/56934211417");
      break;

    case "instagram":
      window.open("https://www.instagram.com/servicio_tecnico_ryh/");
      break;
  }
};

const MostrarNotificacion = () => {
  Notify.create({
    position: "top-right",
    type: "warning",
    message: "lo sentimos :( esta en mantenimiento",
  });
};
</script>

<template>
  <q-page id="contacto" class=" items-center justify-center">
    <div class="text-white bg-secondary">
      <div
        class="row"
        :class="[$q.screen.xs ? '' : 'q-pa-xl']"
      >
        <div class="col-xs-12 col-sm-6">
          <div class="q-mt-xl text-center text-h4 q-pa-xs">
            <span class="text-primary"
              >CONTACTO <span v-if="!$q.screen.xs">:</span> <br />
            </span>
            <span :class="[$q.screen.xs ? 'text-h5' : '']"
              >Estamos aqui para ayudarte</span
            >
          </div>
          <div class="flex justify-center "
          :class="[$q.screen.xs ? 'q-my-xl' : 'q-my-sm']">
            <img
              src="../../assets/trabajadores.png"
             :style="[{height: $q.screen.xs ? '350px' : '400px'}]"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 bg-secondary q-px-xs q-pb-lg">
          <div class="q-gutter-md">
            <q-list bordered class="rounded-borders" style="max-width: 450px">
              <q-item-label header>04/02/2023</q-item-label>

              <q-item
                clickable
                v-ripple
                class="q-my-md"
                @click="redirect('direccion')"
              >
                <q-item-section avatar>
                  <q-avatar
                    size="60px"
                    font-size="40px"
                    color="primary"
                    text-color="secondary"
                    icon="directions"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-primary text-h6"
                    >DIRECCION</q-item-label
                  >
                  <q-item-label caption>
                    <span class="text-weight-bold text-white text-h6"
                      >Santa Cruz chile</span
                    >
                    <span class="text-white text-h6"> Av. Errazuriz 533</span>
                  </q-item-label>
                </q-item-section>

                <q-item-section side top> 5 dias ago </q-item-section>
              </q-item>

              <q-separator inset="item" />

              <q-item
                clickable
                v-ripple
                class="q-my-md"
                @click="redirect('whatsapp')"
              >
                <q-item-section avatar>
                  <q-btn round>
                    <q-avatar size="60px">
                      <img src="../../assets/logoRedes/logowhatsapp.png" />
                    </q-avatar>
                  </q-btn>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-primary text-h6"
                    >WHATSAPP</q-item-label
                  >
                  <q-item-label caption>
                    <span class="text-weight-bold text-white text-h6"
                      >+56934211417</span
                    >
                  </q-item-label>
                </q-item-section>

                <q-item-section side top> 5 dias ago </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                class="q-my-md"
                @click="redirect('instagram')"
              >
                <q-item-section avatar>
                  <q-btn round>
                    <q-avatar size="60px">
                      <img src="../../assets/logoRedes/instagram.jpg" />
                    </q-avatar>
                  </q-btn>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-primary text-h6"
                    >INSTAGRAM</q-item-label
                  >
                  <q-item-label caption>
                    <span class="text-weight-bold text-white text-h6"
                      >servicio_tecnico_ryh</span
                    >
                  </q-item-label>
                </q-item-section>

                <q-item-section side top> 5 dias ago </q-item-section>
              </q-item>
            </q-list>

            <q-list bordered class="rounded-borders" style="max-width: 600px">
              <q-item-label header>Github Desarrollador</q-item-label>

              <q-item>
                <q-item-section avatar top>
                  <q-icon name="account_tree" color="black" size="34px" />
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                  <q-item-label class="q-mt-sm">GitHub</q-item-label>
                </q-item-section>

                <q-item-section top>
                  <q-item-label lines="1">
                    <span class="text-weight-medium"
                      >[quasarframework/quasar]</span
                    >
                    <span class="text-grey-8"> - GitHub repository</span>
                  </q-item-label>
                  <q-item-label caption lines="1" class="text-grey-8">
                    @rstoenescu in #3: >edit service tools
                  </q-item-label>
                  <q-item-label
                    lines="1"
                    class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                  >
                    <span class="cursor-pointer" @click="MostrarNotificacion"
                      >Abrir Portafolio</span
                    >
                  </q-item-label>
                </q-item-section>

                <q-item-section top side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn size="12px" flat dense round icon="more_vert" />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/footer.png" class="footerImg bg-secondary  " />
  </q-page>

</template>

<style lang="scss">
.footerImg {
  width: 100%;
  height: 30%;
  object-fit: contain;
}
</style>
