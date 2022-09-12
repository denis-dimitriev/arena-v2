import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect
} from 'firebase/auth';
import { firebaseApp } from './firebase-config';

export const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export const signInWithGoogleRedirect = async () => await signInWithRedirect(auth, provider);

export const createNewUserWithEmailAndPassword = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInUserWithEmailAndPassword = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);
