<script setup lang="ts">
//firebase import
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { auth, db } from "src/boot/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFormRules } from "../composables/rules";
import { useQuasar } from "quasar";

const $q = useQuasar();

const router = useRouter();
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

// iniciando con google
async function autenticarConGoogle() {
  let keyin = prompt("Introduce tu key:");
  if (keyin === null) {
    // prompt cancelado
    $q.notify({
      message: `Cancelado`,
    });
  } else if (keyin === "") {
    // El usuario no ingresó una clave
    $q.notify({
      type: "warning",
      message: `La key esta vacia.`,
    });
  } else if (keyin === import.meta.env.VITE_clave) {
    // La clave es válida
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((userR) => {
       $q.notify({
          type: 'ongoing',
          timeout: 1000
        })
      setDoc(doc(db, `usuarios/${userR.user.uid}`), {
        email: userR.user.email,
        id: userR.user.uid,
      })
        .then(() => {
          router.push({
            path: "/dashboard",
          });
        })
        .catch(() => {
          $q.notify({
            type: "negative",
            message: `Ocurrio un errror. `,
          });
        });
    });
  } else {
    // La clave es inválida
    $q.notify({
      type: "negative",
      message: `La key es inválida. `,
    });
  }
}

//Aqui el registro
const correo = ref(null);
const contraseña = ref(null);
const key = ref(null);

const procesarRegistro = () => {
  if (correo.value && contraseña.value && key.value) {
    if (key.value === import.meta.env.VITE_clave) {
      createUserWithEmailAndPassword(auth, correo.value, contraseña.value)
        .then((userR) => {
          // Agregar información a la base de datos de Firebase
          setDoc(doc(db, `usuarios/${userR.user.uid}`), {
            email: userR.user.email,
            id: userR.user.uid,
          })
            .then(() => {
              router.push({
                path: "/dashboard",
              });
            })
            .catch(() => {
              alert("ocurrio un error");
            });
        })
        .catch((e) => {
          alert("ocurrio un error al procesar la solicitud");
          console.log(e);
        });
    } else {
      key.value = null;
      $q.notify({
        type: "warning",
        message: `la key no es valida. `,
      });
    }
  } else {
    $q.notify({
      type: "warning",
      message: `Hay una casilla que esta vacia. `,
    });
  }
};


</script>

<template>
  <q-page class="bg-dark text-white flex items-center justify-center">
    <div>
      <q-form @submit.prevent="procesarRegistro">
        <q-card flat class="bg-secondary my-form">
          <q-card-section :class="[$q.screen.xs ? '' : 'q-pa-lg']">
            <div class="text-bold text-h5 text-center text-primary">
              SERVICIO DE ADMINISTRACION
            </div>
            <p class="text-center">Necesitas una key para poder registrarte</p>

            <div>
              <q-btn
                outline
                rounded
                color="secondary"
                class="full-width q-mt-md bg-white"
                @click="autenticarConGoogle"
              >
                <q-avatar size="27px">
                  <img
                    class="imgGooogle"
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-logo-google-image-pixabay-6.png"
                  />
                </q-avatar>
                &nbsp;Registrarse con google
              </q-btn>
            </div>

            <div align="center">
              <q-separator class="q-my-lg" color="dark" inset />
            </div>

            <div class="q-gutter-md q-mt-md">
              <q-input
                dark
                outlined
                v-model="correo"
                label="correo"
                dense
                color="primary"
                :rules="[ruleRequired, ruleEmail]"
              />
              <q-input
                dark
                outlined
                v-model="contraseña"
                label="contraseña"
                dense
                color="primary"
                type="password"
                :rules="[ruleRequired, rulePassLen]"
              /><q-input
                dark
                outlined
                v-model="key"
                label="key"
                dense
                color="primary"
              />
            </div>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn
              type="submit"
              size="lg"
              dense
              label="registrarse"
              outline
              color="primary"
              class="full-width radius bg-dark"
            />
            <p class="q-mt-lg">
              Puedes volver al
              <router-link to="/login" class="irlogin text-bold">LOGIN</router-link>
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

.irlogin {
  color: gold;
  text-decoration: none;
}

.irlogin:hover {
  cursor: pointer;
  border-bottom-color: lightblue;
}
.radius {
  border-radius: 8px !important;
}
</style>
