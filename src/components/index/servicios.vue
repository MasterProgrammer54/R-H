<script setup lang="ts"></script>

<template>
  <q-page
    class="bg-secondary q-pt-xl"
    :class="[$q.screen.xs ? 'q-pa-md' : 'q-pa-xl']"
  >
    <!--flecha abajo-->
    <div class="flex justify-center" style="height: 1px">
      <div style="transform: translateY(-30%); cursor: pointer">
        <q-icon
          name="keyboard_arrow_down"
          size="6.5em"
          class="icon-arow"
          color="white"
        ></q-icon>
      </div>
    </div>

    <div class="q-mt-xl q-pt-xl">
      <div
        class="row flex justify-evenly items-center q-pt-xl"
        :class="[$q.screen.lg ? 'justify-center' : 'justify-around']"
      >
        <div
          class="col-xs-12 col-sm-4 col-md-5 col-lg-6 col-xl-6 flex justify-center"
        >
          <transition appear enter-active-class="animated slideInRight">
            <div>
              <q-img
                src="../../assets/local.jpeg"
                :ratio="4 / 4"
                style="border-radius: 10px"
                class="ImgEscalable"
              />
            </div>
          </transition>
        </div>

        <div
          class="col-xs-12 col-sm-6 col-md-7 col-lg-6 col-xl-6 text-h4 text-white"
          :class="[
            $q.screen.xs
              ? 'text-center text-h5 q-mt-xl'
              : 'text-h5 text-center',
            $q.screen.sm ? 'q-mt-xl' : null,
          ]"
          :style="[{ width: $q.screen.xs ? '' : '600px' }]"
        >
          <span class="text-primary">Ofrecemos</span> una amplia gama de
          <span class="text-primary">servicios</span> de reparación para su
          dispositivo móvil. Desde
          <span class="text-primary">pantallas rotas</span> hasta problemas con
          la batería, nuestro equipo técnico altamente
          <span class="text-primary">capacitado</span> está listo para brindarle
          un servicio rápido y eficiente.

          <div
            class="row flex justify-center items-start"
            :class="[
              $q.screen.xs ? 'q-mt-lg q-gutter-lg flex' : 'q-mt-xl q-gutter-lg',
            ]"
          >
            <div class="col-3">
              <q-img
                class="servicioCardImg"
                src="../../assets/servicios/pantalla.jpeg"
              />
              <div
                class="q-mt-md text-center text-weight-bold"
                :class="[$q.screen.xs ? 'text-body1' : 'text-h6']"
              >
                Cambios de pantallas
              </div>
            </div>

            <div class="col-3">
              <q-img
                class="servicioCardImg"
                src="../../assets/servicios/humedad.jpeg"
              />
              <div
                class="q-mt-md text-center text-weight-bold"
                :class="[$q.screen.xs ? 'text-body1' : 'text-h6']"
              >
                Reparacion por humedad
              </div>
            </div>

            <div class="col-3">
              <q-img
                class="servicioCardImg"
                src="../../assets/servicios/socalo.jpeg"
              />
              <div
                class="q-mt-md text-center text-weight-bold"
                :class="[$q.screen.xs ? 'text-body1' : 'text-h6']"
              >
                Cambios de zocalos
              </div>
            </div>
            <div>
              <q-btn
                outline
                size="lg"
                class="q-mt-lg"
                style="color: goldenrod"
                label="Consultar otros servicios"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
 .icon-arow {
    animation: moveUp 1s infinite;
  }

  @keyframes moveUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-15px);
    }
  }

.ImgEscalable {
  width: 500px;
  height: 500px;
}
@media only screen and (max-width: 800px) {
  .ImgEscalable {
    width: 340px;
    height: 340px;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1230px) {
  .ImgEscalable {
    width: 500px;
    height: 600px;
  }
}

.servicioCardImg {
  max-height: 120px;
  height: 100%;
  max-width: 200px;
  width: 100%;
  object-fit: contain;
  border-radius: 13px;
}
</style>
