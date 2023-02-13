<script setup lang="ts">
import { ref } from "vue";
import {
  getStorage,
  ref as reFfirebase,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

const storage = getStorage();
const ruta = reFfirebase(storage, "logos/");
const marcas = ref<{ name: string; url: string; id: string }[]>([]);

//carga las logos
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
    marcas.value = result.filter((item) => item !== undefined) as {
      name: string;
      url: string;
      id: string;
    }[];
  });
});

const marcaLimite = ref(6);
const marcaMostrarTodo = () => {
marcaLimite.value = marcas.value.length;
};
</script>
<template>
  <q-page class="bg-secondary text-white q-my-xl q-py-xl" id="marcas">
    <div class="text-h4 text-primary text-center q-mt-xl q-pa-sm">
      MARCAS QUE SOLEMOS REPARAR CON FRECUENCIA
    </div>

    <!--galeria v-for-->
    <div
      class="row"
      :class="[
        $q.screen.xs
          ? ' q-mt-xl items-center'
          : 'q-mt-xl q-ma-xl row items-center justify-center q-gutter-xl',
      ]"
    >
      <div
        v-for="marca in marcas.slice(0, marcaLimite)"
        :key="marca.id"
        class="col-xs-12 col-sm-6 col-md-3 flex justify-center q-mt-xl"
      >
        <img :src="marca.url" class="logoImg" :alt="marca.name" />
      </div>
    </div>

    <!--btn ver mas -->
    <div class="flex justify-center">
      <q-btn
        size="lg"
        class="q-mt-xl"
        flat
        rounded
        icon-right="expand_more"
        label="Ver mas"
        @click="marcaMostrarTodo"
      />
    </div>
  </q-page>
</template>

<style lang="sass">
.logoImg
  width: 60%
  min-width: 230px
  height: 60%
  min-height: 220px
  object-fit: contain

.icon-arow
  animation: moveUp 1s infinite

@keyframes moveUp
  from
    transform: translateY(0)
  to
    transform: translateY(-15px)

</style>
