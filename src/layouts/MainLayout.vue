<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from 'src/boot/firebase.js';
const usuarioActivo= ref(false)
const router = useRouter();

//detecta si el usuario esta logeado o o no
auth.onAuthStateChanged((user) => {
  if (user) {
    usuarioActivo.value = false
  } else {
    usuarioActivo.value = true
  }
});

//cambiarRuta cuando es admin
function cambiarRuta (ruta : string){
  router.push({
      path: ruta
    })
}

const drawerRight = ref(false);
//array elementos  controla el scroll en windows y dispositivos android o ios
const tab = ref("inicio");
const tabs = ref([
  {
    name: "inicio",
    label: "inicio",
    icon: "home_filled",
    click: () => scrollToSection("#inicio"),
  },

  {
    name: "servicios",
    label: "servicios",
    icon: "home_repair_service",
    click: () => scrollToSection("#servicios"),
  },
  {
    name: "galeria",
    label: "galeria",
    icon: "satellite",
    click: () => scrollToSection("#galeria"),
  },
  {
    name: "marcas",
    label: "marcas",
    icon: "diamond",
    click: () => scrollToSection("#marcas"),
  },
  {
    name: "contacto",
    label: "contacto",
    icon: "contact_page",
    click: () => scrollToSection("#contacto"),
  },
]);

const sections = [
  { id: "#inicio", name: "inicio" },
  { id: "#marcas", name: "marcas" },
  { id: "#servicios", name: "servicios" },
  { id: "#galeria", name: "galeria" },
  { id: "#contacto", name: "contacto" },
];

//click 5 veces ir a login
const clickCount = ref(0);
const clickCountAumentar = () => {
  clickCount.value += 1;

  if (clickCount.value === 3) {
    router.push({
      path: "/login"
    })
  }
};

//cuando se hace click en el tab aqui se ejecuta (windows)
const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

//aca se cambia el scroll de manera dinamica (cuando se navega por la web) (windows)
window.addEventListener("scroll", () => {
  for (const section of sections) {
    const el = document.querySelector(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      if (rect.top >= 0 && rect.top <= viewHeight) {
        tab.value = section.name;
        break;
      }
    }
  }
});
</script>

<template>
  <q-layout view="hHh lpr ffr" class="bg-secondary">
    <q-header class="bg-secondary text-white">
      <!--navbar-->
      <q-toolbar>
        <q-btn
          flat
          icon="crop_square"
          rounded
          class="text-primary"
          :class="[{ textlogoXs: $q.screen.xs }, 'textlogo']"
          @click="clickCountAumentar"
        />

        <q-toolbar-title
          class="text-bold text-primary textTitulo"
          :class="[{ textTitleXs: $q.screen.xs }, 'textlogo']"
          @click="scrollToSection('#inicio')"
          style="cursor: pointer"
        >
          R&H</q-toolbar-title
        >

        <div class="q-pa-md q-gutter-md colum text-white mobile-hide">
          <q-tabs v-if="usuarioActivo"
            v-model="tab"
            indicator-color="primary"
            active-color="primary"
          >
            <q-tab
              v-for="(tab, index) in tabs"
              :key="index"
              :name="tab.name"
              :label="tab.label"
              @click="tab.click()"
            />
          </q-tabs>
        </div>
        <!--boron lateral solo dispositivo movil-->
        <div v-if="usuarioActivo" class="q-pa-md q-gutter-md colum text-primary desktop-hide">
          <q-btn
            icon="menu"
            size="md"
            flat
            rounded
            @click="drawerRight = !drawerRight"
          ></q-btn>
        </div>

        <!--boton de navegacion de administrador movil y escritorio -->
        <div v-if="!usuarioActivo" class="q-pa-md q-gutter-md colum text-primary">
          <q-btn
            icon="home"
            size="lg"
            flat
            rounded
            @click="cambiarRuta('/')"
          ></q-btn>
          <q-btn
            icon="dashboard"
            size="lg"
            flat
            rounded
            @click="cambiarRuta('/dashboard')"
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- navegacion mobile (solo en dispositivo movil) -->
    <q-drawer v-if="usuarioActivo"
      side="right"
      v-model="drawerRight"
      :width="200"
      :breakpoint="500"
      class="bg-secondary text-white"
    >
      <q-scroll-area class="fit q-mt-md">
        <q-list padding class="menu-list">
          <q-item
            v-for="(item, index) in tabs"
            :key="index"
            :active="tab === item.name"
            clickable
            v-ripple
            @click="item.click()"
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

<style scoped>
.toolba {
  height: 65px;
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
