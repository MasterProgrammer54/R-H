<script setup lang="ts">
import { ref } from "vue";
import { auth } from "src/boot/firebase.js";
import { useRouter } from "vue-router";
import subirImage from "../dashboard/subirImagen.vue";

componets: {
  subirImage;
}
const tab = ref('Galeria')
const router = useRouter();
const usuarioName = ref<string | null>(null);
auth.onAuthStateChanged((user) => {
  if (user) {
    usuarioName.value = user.displayName;
  } else {
    usuarioName.value = "Desconocido";
  }
});

const salir = () => {
  auth.signOut().then(() => {
    router.push({
      path: "/",
    });
  });
};

const showModal = ref(false);
</script>

<template>
  <q-toolbar class="bg-secondary text-white shadow-2">
    <q-btn flat v-if="$q.platform.is.desktop"
      >bienvenido: {{ usuarioName }}</q-btn
    >
    <q-btn
      class="q-ma-md"
      outline
      label="salir"
      color="primary"
      @click="salir"
      v-if="$q.platform.is.desktop"
    />

    <q-btn class="q-ma-md" outline color="primary" @click="showModal = true"
      ><span v-if="$q.platform.is.desktop">Agregar Imagen</span>
      <q-icon name="add_a_photo" class="q-ml-xs"></q-icon
    ></q-btn>
    <q-btn
      class="q-ma-md"
      outline
icon="logout"
      color="primary"
      @click="salir"
      v-if="$q.platform.is.mobile"
    />
    <q-space />
    <q-tabs v-model="tab" shrink class="q-mr-xl" active-color="primary">
      <q-tab name="Galeria" label="Galeria" />

    </q-tabs>
  </q-toolbar>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="showModal">
        <subirImage />
      </q-dialog>
    </div>
  </div>
</template>
