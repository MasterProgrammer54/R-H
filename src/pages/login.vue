<script setup lang="ts">
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth, db } from "src/boot/firebase";
import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { useFormRules } from "../composables/rules";
import { useQuasar } from "quasar";

const $q = useQuasar();

const correo = ref(null);
const contraseña = ref(null);
const router = useRouter();
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

// iniciando con google
const provider = new GoogleAuthProvider();
async function autenticarConGoogle() {
  await signInWithPopup(auth, provider).then(async (result) => {
    $q.notify({
      type: "ongoing",
      timeout: 1000,
    });
    const { user } = result;
    const userData = doc(db, `usuarios/${user.uid}`);
    const dataRespuesta = await getDoc(userData);
    //
    console.log(dataRespuesta.exists());
    if (dataRespuesta.exists()) {
      router.push({
        path: "/dashboard",
      });
    } else {
      $q.notify({
        type: "warning",
        message: `Aun no estas registrado, registrate e ingresa nuevamente. `,
      });
      signOut(auth).then(() => {});
    }
    //
  });
}

//login boton original
const procesarInicio = () => {
  if (correo.value && contraseña.value) {
    signInWithEmailAndPassword(auth, correo.value, contraseña.value)
      .then(() => {
        router.push({
          path: "/dashboard",
        });
      })
      .catch(() => {
        $q.notify({
          type: "negative",
          message: `Usuario no encontrado. `,
        });
      });
  }
};
</script>

<template>
  <q-page class="bg-dark text-white flex items-center justify-center">
    <div>
      <q-form class="" @submit.prevent="procesarInicio">
        <q-card flat class="bg-secondary my-form">
          <q-card-section :class="[$q.screen.xs ? '' : 'q-pa-lg']">
            <div class="text-bold text-h5 text-center text-primary">
              SERVICIO DE ADMINISTRACION
            </div>
            <p class="text-center">ingresa tus datos para comenzar <br /></p>

            <div>
              <q-btn
                outline
                rounded
                color="secondary bg-grey-4"
                class="full-width q-mt-md bg-white"
                @click="autenticarConGoogle"
              >
                <q-avatar size="27px">
                  <img
                    class="imgGooogle"
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-logo-google-image-pixabay-6.png"
                  />
                </q-avatar>
                &nbsp;Iniciar con google
              </q-btn>
            </div>

            <div align="center">
              <q-separator class="q-my-lg" color="dark" inset />
            </div>

            <div class="q-gutter-md q-mt-md text-white">
              <q-input
                dark
                outlined
                v-model="correo"
                label="correo"
                dense
                color="primary"
                class="text-primary"
                :rules="[ruleRequired, ruleEmail]"
              />
              <q-input
                dark
                outlined
                v-model="contraseña"
                label="contraseña"
                dense
                color="dark"
                type="password"
                :rules="[ruleRequired, rulePassLen]"
              />
            </div>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn
              type="submit"
              size="lg"
              dense
              label="iniciar"
              outline
              color="primary"
              class="full-width radius bg-dark"
            />
            <p class="q-mt-lg">
              Aun no estas registrado?
              <router-link to="/registrarse" class="irRegistro text-bold">REGISTRARSE</router-link>
            </p>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>
.my-form {
  border-radius: 15px;
  border: 6px solid rgb(27, 27, 27);
}
.irRegistro {
  color: gold;
  text-decoration: none;
}

.irRegistro:hover {
  cursor: pointer;
  border-bottom-color: lightblue;
}
.radius {
  border-radius: 8px !important;
}
</style>
