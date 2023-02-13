<script setup lang="ts">
import { getStorage, uploadBytes, ref as reFfirebase } from "firebase/storage";
import { ref, reactive, computed  } from "vue";
import { useQuasar } from "quasar";
import { v4 as uuidv4 } from 'uuid';

const $q = useQuasar();

//llamada de error de q-file
const tamañoMaximo = () => {
  $q.notify({
    type: "negative",
    message: `La imagen que intentas subir tiene un tamaño que supera el máximo permitido de 2MB. `,
  })
}

const nombreImagen = reactive({ value: "" }) as { value: string }
const imageFile = reactive({ value: null }) as { value: File | null }

var botonEnviarActive = computed(() => {
  return !imageFile.value || !nombreImagen.value || !ruta.value || !activeBotonD.value
});

const storage = getStorage();

//enviar a storage de firebase
const uploadImage = () => {
  activeBotonD.value = false
  const file = imageFile.value
  if (!file) return

  const storage = getStorage()
  const storageRef = reFfirebase(storage, `${ruta.value}/${nombreImagen.value}`)

  const metadata = {
  contentType: 'image/png',
  customMetadata: {
    name: nombreImagen.value,
    id: uuidv4()
  }
};
  uploadBytes(storageRef, file, metadata).then(() => {
    nombreImagen.value = ''
    imageFile.value = null
    activeBotonD.value = true
    $q.notify({
    type: "positive",
    message: `Se subio correctamente`,
  });
  });
};

const activeBotonD = ref(true)
const  ruta = ref(null)
const options =  [
        'celularesReparados', 'logos'
      ]
</script>

<template>
  <q-card class="bg-dark my-card justify-center items-center" dark>
    <q-card-actions align="right" class="text-white q-pb-none">
  <q-btn icon="close" flat rounded v-close-popup />
    </q-card-actions>
    <div class="q-pa-xs">
      <q-card-section class="q-pt-none">
        <div class="q-py-md    ">
          <div class="text-h5 text-white text-bold text-center q-mt-none  q-mb-xl ">
            AGREGAR IMAGENES A LA GALERIA
          </div>

          <div class="q-gutter-lg">

            <q-input
            dark
            filled
            v-model="nombreImagen.value"
            label="Titulo de la imagen"
            color="primary"

            placeholder="ejemplo: pantalla rota"
          />

          <q-select dark filled v-model="ruta" :options="options" label="Selecione una ruta (celulares Reparados o logo)" stack-label />

            <q-file
              ref="fileInput"
              accept="image/jpeg, image/png"
              dark
              filled
              bottom-slots
              label="Cargar imagen, Hasta 2Mb maximo"
              max-file-size="2097152"
              counter
              flat
              @rejected="tamañoMaximo"
              v-model="imageFile.value"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.stop.prevent="imageFile.value = null"
                  class="cursor-pointer"
                />
              </template>

              <template v-slot:hint> informacion: </template>
            </q-file>
          </div>
          <div class="flex items-center justify-center">
            <q-btn
              outline
              dark
              class="q-mt-md"
              label="subir"
              color="primary"
              size="lg"
              :disabled="botonEnviarActive"
              style="width: 100%; border-radius: 20px"
              @click="uploadImage"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-white">
        <q-btn rounded class="q-mr-sm" flat label="cerrar" v-close-popup />
      </q-card-actions>
    </div>
  </q-card>
</template>

<style scoped lang="scss">
.my-card {
  border-radius: 25px;
  border: 1px solid rgb(139, 122, 23);
}
</style>
