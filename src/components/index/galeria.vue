<script setup lang="ts">
import {
  getStorage,
  ref as reFfirebase,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { ref } from "vue";

const storage = getStorage();
const ruta = reFfirebase(storage, "celularesReparados/");
const imagenes = ref<{ name: string; url: string; id: string }[]>([]);

//carga las fotos
listAll(ruta).then((result) => {
  const promises = result.items.map(async (itemR) => {
    return Promise.all([
      await getDownloadURL(itemR),
      await getMetadata(itemR),
    ]).then(([url, metadata]) => {
      if (metadata.customMetadata) {
        const name = metadata.customMetadata.name;
        const id = metadata.customMetadata.id;
        return { name, url, id };
      }
    });
  });

  Promise.all(promises).then((result) => {
    imagenes.value = result.filter((item) => item !== undefined) as {
      name: string;
      url: string;
      id: string;
    }[];
  });
});
</script>
<template>
  <q-page class="bg-secondary q-px-md" id="galeria">
    <div
      class="text-primary text-h4"
      :class="[$q.screen.xs ? 'q-pt-xl text-center ' : 'q-mx-xl q-px-xl']"
    >
      <div
        class="text-center"
        :class="[$q.screen.xs ? 'q-mt-lg' : 'q-mt-xl q-py-xl']"
      >
        UN PEQUEÑO VISTAZO A NUESTRO TRABAJO
      </div>
      <div class="q-pa-md q-pt-xl">
        <div class="row justify-center q-gutter-lg">
          <q-intersection
            v-for="item in imagenes"
            :key="item.id"
            transition="scale"
            class="flex justify-center items-center galeriaImg"
          >
            <img :alt="item.name" :src="item.url" class="galeriaImg" />
          </q-intersection>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.galeriaImg {
  border-radius: 20px;
  height: 240px;
  width: 290px;
}
</style>
