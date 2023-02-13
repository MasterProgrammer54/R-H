<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

import Inicio from "../components/index/inicio.vue";
import Marcas from "../components/index/marcas.vue";
import Servicios from "../components/index/servicios.vue";
import Galeria from "../components/index/galeria.vue";
import Contacto from "../components/index/contacto.vue";

const $q = useQuasar();
const positionBwhatsapp = ref($q.screen.xs ? [20, 30] : [70, 23]);

components: {
  Inicio;
  Marcas;
  Servicios;
  Galeria;
  Contacto;
}

const redirectWhatsapp = () => {
  window.open("https://wa.me/56934211417");
};
</script>

<template class="bg-secondary">
  <div>
    <Inicio />
    <Servicios />
    <Galeria />
    <Marcas />
    <Contacto />
  </div>

  <!--boton flotante whatsapp-->
  <q-page-sticky
    position="bottom-right"
    :offset="positionBwhatsapp"
    @click="redirectWhatsapp"
  >
    <q-btn round>
      <q-avatar size="70px">
        <img src="../assets/logoRedes/logowhatsapp.png" />
      </q-avatar>
    </q-btn>
  </q-page-sticky>
</template>

<style lang="scss"></style>
