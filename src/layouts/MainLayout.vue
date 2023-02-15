<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "src/boot/firebase.js";
const usuarioActivo = ref(false);
const router = useRouter();
const avatarLoginGoogle = ref();

auth.onAuthStateChanged((user) => {
  if (user) {
    usuarioActivo.value = false;
    avatarLoginGoogle.value = user.photoURL || null;
  } else {
    usuarioActivo.value = true;
  }
  return user
});


//barra lateral dispositivo movil
const drawerRight = ref(false);

const tab = ref("inicio");

//array elementos  controla el scroll en windows y dispositivos moviles
const tabs = ref([
  {
    name: "inicio",
    label: "inicio",
    icon: "home_filled",
    to: "#inicio",
  },

  {
    name: "servicios",
    label: "servicios",
    icon: "home_repair_service",
    to: "#servicios",
  },
  {
    name: "galeria",
    label: "galeria",
    icon: "satellite",
    to: "#galeria",
  },
  {
    name: "marcas",
    label: "marcas",
    icon: "diamond",
    to: "#marcas",
  },
  {
    name: "contacto",
    label: "contacto",
    icon: "contact_page",
    to: "#contacto",
  },
]);

//click 3 veces ir a login
const clickCount = ref(0);
const clickCountAumentar = () => {
  clickCount.value += 1;

  if (clickCount.value >= 3) {
    router.push({
      path: "/login",
    });
  }
};
</script>

<template>
  <q-layout view="hHh lpr ffr" class="bg-secondary">
    <q-header class="bg-secondary text-white">
      <!--navbar-->
      <q-toolbar>
        <q-btn
        v-if="usuarioActivo"
          flat
          icon="crop_square"
          round
          class="text-primary"
          :class="[{ textlogoXs: $q.screen.xs }, 'textlogo']"
          @click="clickCountAumentar"
        />
        <q-btn round v-if="!usuarioActivo" class="q-mx-md">
      <q-avatar size="42px">
        <img :src="avatarLoginGoogle">
      </q-avatar>
    </q-btn>

        <q-toolbar-title
          class="text-bold text-primary textTitulo"
          :class="[{ textTitleXs: $q.screen.xs }, 'textlogo']"
          style="cursor: pointer"
        >
          R&H</q-toolbar-title
        >

        <!-- tabs que se mostraran en pantallas grandes-->
        <div class="q-pa-md q-gutter-md colum text-white mobile-hide">
          <q-tabs
            v-if="usuarioActivo"
            v-model="tab"
            indicator-color="primary"
            active-color="primary"
          >
            <q-tab
              v-for="(itemTabs, index) in tabs"
              :key="index"
              :name="itemTabs.name"
              :label="itemTabs.label"
            />
          </q-tabs>
        </div>

        <!--boton para abrir barra lateral solo dispositivo movil-->
        <div
          v-if="usuarioActivo"
          class="q-pa-md q-gutter-md colum text-primary desktop-hide"
        >
          <q-btn
            icon="menu"
            size="md"
            flat
            round
            @click="drawerRight = !drawerRight"
          ></q-btn>
        </div>

        <!--boton de navegacion de administrador movil y escritorio -->
        <div
          v-if="!usuarioActivo"
          class="q-pa-md q-gutter-md colum text-primary"
        >
          <q-btn icon="home" size="lg" round flat to="/"></q-btn>
          <q-btn icon="dashboard" size="lg" round flat to="/dashboard"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- navegacion lateral (solo en movil) -->
    <q-drawer
      v-if="usuarioActivo"
      side="right"
      v-model="drawerRight"
      :width="200"
      :breakpoint="500"
      overlay
      class="bg-secondary text-white"
    >
      <q-scroll-area class="fit q-mt-md">
        <q-list padding class="menu-list">
          <q-item
            v-for="(item, index) in tabs"
            :key="index"
            :active="tab === item.name"
            active-class="menu-link"
            @click="tab = item.name"
            clickable
            v-ripple
            exact
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section> {{ item.label }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.menu-link {
  color: rgb(12, 12, 12);
  background: #f2c037;
}

.textlogo {
  font-size: 2.3em;
}
.textlogoXs {
  font-size: 1.5em;
}
.textTitle {
  font-size: 3em;
  padding: 0;
}
.textTitleXs {
  font-size: 2em;
  padding: 0;
}
</style>
