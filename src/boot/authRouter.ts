import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { auth } from "src/boot/firebase";

async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        unsubscribe();
        resolve(user);
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
}

async function requiresAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  // Obtener el usuario actual
  const user = await getCurrentUser();

  // Si el usuario no existe, redirigir a la página de inicio de sesión o de registro
  if (!user) {
    if (to.path === '/login' || to.path === '/registrarse') {
      // Permitir el acceso a las rutas de inicio de sesión o de registro
      next();
    } else {
      // Redirigir a la página de inicio de sesión
      next({ path: '/login' });
    }
  } else {
    // Si el usuario existe, redirigir a la página de inicio de usuario o a la ruta solicitada
    if (to.path === '/login' || to.path === '/registrarse') {
      // Redirigir a la página de inicio de usuario si el usuario intenta acceder a la página de inicio de sesión o de registro
      next({ path: '/dashboard' });
    } else {
      // Permitir el acceso a la ruta solicitada
      next();
    }
  }
}



export default requiresAuth;
