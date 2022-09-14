import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
    signInWithPopup
} from 'firebase/auth';
import { firebaseApp } from './firebase-config';

export const arenaAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export const signInWithGoogleRedirect = async () => await signInWithRedirect(arenaAuth, provider);
export const signInWithGooglePopUp = async () => await signInWithPopup(arenaAuth, provider);

export const createNewUserWithEmailAndPassword = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(arenaAuth, email, password);

export const signInUserWithEmailAndPassword = async (email: string, password: string) =>
  await signInWithEmailAndPassword(arenaAuth, email, password);

export const signOutUser = async () => await signOut(arenaAuth);
