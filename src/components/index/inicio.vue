<script setup lang="ts">
const scrollToSection = () => {
  const section = document.querySelector("#contacto");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <div class="bg-secondary text-white" id="inicio">
    <div class="row">
      <div class="col-12 justify-center flex mobile-only">
        <q-img class="imgMiguel" src="../../assets/imgm.png" />
      </div>
      <div
        class="justify-center items-center col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
        :class="[
          $q.screen.xs ? 'text-h5 flex q-mt-md' : ' text-center ',
          $q.screen.sm ? 'text-h4 q-py-xl  flex' : null,
          $q.screen.md ? 'text-h4 q-mt-md q-pl-lg flex' : null,
          $q.screen.lg ? 'text-h3 flex q-mt-lg' : null,
          $q.screen.xl ? null : null,
        ]"
      >
        <transition appear enter-active-class="animated slideInLeft"
          ><div
            :ratio="4 / 4"
            :class="[$q.screen.xs ? 'text-center imgFondo' : '']"
            :style="[{ width: $q.screen.sm ? '80%' : '90%' }]"
          >
            <div>
              Reparaciones de celulares de alta calidad para todas las marcas y
              modelos
              <span class="text-primary"><br />Profesionales capacitados</span>
              <br v-if="$q.screen.xs" />
              con experiencia. Contáctanos para más información o para hacer una
              cita.
              <div class="text-subtitle2 text-weight-thin q-mt-md">
                <span class="text-primary">❝ </span>Reparamos todas las marcas y
                modelos de celulares. Con profesionales capacitados y precios
                asequibles. ¡Visítenos hoy!<span class="text-primary"> ❞</span>
              </div>
              <div class="flex justify-center q-mt-xl">
                <q-btn
                  outline
                  color="primary"
                  size="lg"
                  @click="scrollToSection"
                  >contactar</q-btn
                >
              </div>
            </div>
          </div>
        </transition>
      </div>

      <transition appear enter-active-class="animated slideInRight">
        <div
          class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          v-if="!$q.screen.xs && !$q.screen.sm"
        >
          <q-img src="../../assets/mesa.jpeg" :ratio="4 / 3" cover />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.imgMiguel {
  width: 60%;
  height: auto;
  max-height: 400px;

  @media only screen and (min-width: 400px) and (max-width: 990px) {
    width: 50%;
    height: auto;
    max-height: 800px;
  }
}
//  transform: translateX(120%) translateY(130%)
</style>
