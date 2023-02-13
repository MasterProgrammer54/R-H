<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import toolbar from "../components/dashboard/toolbar.vue";
import {
  getStorage,
  ref as reFfirebase,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";

componets: {
  toolbar
}

const $q = useQuasar();
const imagenes = ref<{ name: string; url: string; id: string }[]>([]);
const logos = ref<{ name: string; url: string; id: string }[]>([]);

const storage = getStorage();
const ruta = reFfirebase(storage, "celularesReparados/")
const rutaLogos = reFfirebase(storage, "logos/")

// Descargar la imagen a partir de la URL (mejorar)
const descargarImg = (data: { url: string; name: string }) => {
  const link = document.createElement("a")
  link.href = data.url
  link.setAttribute("download", data.name)
  document.body.appendChild(link)
  link.click()
}

//elimina foto galeria del array
function eliminarDEimagenes(id: string) {
  const index = imagenes.value.findIndex((data) => data.id === id)
  if (index !== -1) {
    imagenes.value.splice(index, 1)
  }
}
//elimina foto logo del array
function eliminarDElogo(id: string) {
  const index = imagenes.value.findIndex((data) => data.id === id)
  if (index !== -1) {
    imagenes.value.splice(index, 1)
  }
}

//eliminar foto de fitestorage
async function eliminarFoto(name: string, id: string) {
  const rutaEliminar = reFfirebase(storage, `celularesReparados/${name}`)
  deleteObject(rutaEliminar)
    .then(() => {
      eliminarDEimagenes(id)
      $q.notify({
        type: "positive",
        message: `Se elimino. `,
      });
    })
    .catch(() => {
      $q.notify({
        type: "negative",
        message: `ocurrio un error. `,
      });
    });
}
//eliminar logo de firestorage
async function eliminarLogo(name: string, id: string) {
  const rutaEliminar = reFfirebase(storage, `logos/${name}`)
  deleteObject(rutaEliminar)
    .then(() => {
      eliminarDEimagenes(id)
      $q.notify({
        type: "positive",
        message: `Se elimino el logo. `,
      });
    })
    .catch(() => {
      $q.notify({
        type: "negative",
        message: `ocurrio un error. `,
      });
    });
}

//carga galeria a la vista principal
listAll(rutaLogos).then((result) => {
  const promises = result.items.map(async (itemR) => {
    return Promise.all([
      await getDownloadURL(itemR),
      await getMetadata(itemR),
    ]).then(([url, metadata]) => {
      if (metadata.customMetadata) {
        const name = metadata.customMetadata.name;
        const id = metadata.customMetadata.id;
        return { name, url, id }
      }
    })
  })

  Promise.all(promises).then((result) => {
    logos.value = result.filter((item) => item !== undefined) as {
      name: string
      url: string
      id: string
    }[]
  })
})

//carga logos a la vista principal
listAll(ruta).then((result) => {
  const promises = result.items.map(async (itemR) => {
    return Promise.all([
      await getDownloadURL(itemR),
      await getMetadata(itemR),
    ]).then(([url, metadata]) => {
      if (metadata.customMetadata) {
        const name = metadata.customMetadata.name;
        const id = metadata.customMetadata.id;
        return { name, url, id }
      }
    })
  })

  Promise.all(promises).then((result) => {
    imagenes.value = result.filter((item) => item !== undefined) as {
      name: string
      url: string
      id: string
    }[]
  })
})


</script>

<template>
  <toolbar />
  <q-page class="bg-secondary text-grey-4">
    <div class="text-h2">
      <div class="q-py-lg text-h4 text-bold text-center ">
        SECCIÓN DE SERVICIOS
      </div>
      <div class="q-py-sm"><br /></div>
    </div>
    <!--card img edit-->
    <div
      :style="[
        { transform: $q.screen.xs ? 'translateY(-3%)' : 'translateY(-10%)' },
      ]"
    >
      <div
        class="row flex items-center justify-center q-px-md"
        :class="[$q.screen.xs ? 'q-gutter-xl' : 'q-gutter-lg']"
      >
        <div v-for="item in imagenes" :key="item.id">
          <q-card class="bg-dark card">
            <img class="imgCard" :src="item.url" />
            <q-card-actions class="text-white">
              <span class="q-ml-md">{{ item.name }}</span>
              <q-space />
              <q-btn
                flat
                round
                color="red"
                icon="delete"
                @click="eliminarFoto(item.name, item.id)"
              />
              <q-btn
                flat
                round
                color="white"
                icon="file_download"
                @click="descargarImg(item)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
  <q-page   class="bg-dark">
    <div class="q-pa-xs bg-dark q-pt-xl">

      <div class="text-h2 q-py-xl text-grey-4 text-h4 text-bold text-center">
        SECCIÓN DE LOGOS
      </div>
      </div>
      <div
        class="row flex items-center justify-center q-px-md"
        :class="[$q.screen.xs ? 'q-gutter-xl' : 'q-gutter-lg']"
      >
        <div v-for="item in logos" :key="item.id">
          <q-card class="bg-dark card">
            <img class="imgCard" :src="item.url" />
            <q-card-actions class="text-white">
              <span class="q-ml-md">{{ item.name }}</span>
              <q-space />
              <q-btn
                flat
                round
                color="red"
                icon="delete"
                @click="eliminarLogo(item.name, item.id)"
              />
              <q-btn
                flat
                round
                color="white"
                icon="file_download"
                @click="descargarImg(item)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
  </q-page>
</template>

<style lang="scss" scoped>
//
.card {
  border-radius: 30px;
  box-shadow: -0px -0px 4px 2px rgba(12, 12, 12, 0.75);
}
.imgCard {
  width: 300px;
  height: 220px;
  object-fit: fill;
}
</style>
