import { getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
// Public web configuration. Authorization of stored data belongs in server rules.
const config = {
  apiKey: 'AIzaSyCDpYpar6S9X1uQvjm8yf4WXJGxXHxZLNM',
  authDomain: 'atividades-extras-e40b6.firebaseapp.com',
  projectId: 'atividades-extras-e40b6',
  storageBucket: 'atividades-extras-e40b6.firebasestorage.app',
  messagingSenderId: '220943378937',
  appId: '1:220943378937:web:7c24574644d58a760bf528',
};
function appAuth() {
  const name = 'fisiologia-em-fuga';
  const app = getApps().find((a) => a.name === name) || initializeApp(config, name);
  const auth = getAuth(app);
  auth.languageCode = 'pt-BR';
  return auth;
}
export function observeUser(next, error) { return onAuthStateChanged(appAuth(), next, error); }
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return signInWithPopup(appAuth(), provider);
}
export function logout() { return signOut(appAuth()); }
