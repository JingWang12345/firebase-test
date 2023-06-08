import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyCrO_SzzOOUlLXf844OnoJ3GMptDazhOk0",
    authDomain: "superprogetto-997dd.firebaseapp.com",
    projectId: "superprogetto-997dd",
    storageBucket: "superprogetto-997dd.appspot.com",
    messagingSenderId: "887748310303",
    appId: "1:887748310303:web:fe9dac26c701a959d82c2a"
  };

  app = initializeApp(this.firebaseConfig);

  constructor() { }
}
