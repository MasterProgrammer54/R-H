import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { auth } from "src/boot/firebase";

async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      user => {
        unsubscribe();
        resolve(user);
      },
      error => {
        unsubscribe();
        reject(error);
      }
    );
  });
}

async function requiresAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const user = await getCurrentUser();
  if (!user) {
    console.log(user, 'primer if');
    next({ path: '/login' });
  } else {
    console.log('false se ejecuto');
    next();
  }
}

export default  requiresAuth

