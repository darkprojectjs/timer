"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxME6yzHKx2Qr-55J2j1gbB8yk1VVoTc",
  authDomain: "times-e7ae8.firebaseapp.com",
  projectId: "times-e7ae8",
  storageBucket: "times-e7ae8.appspot.com",
  messagingSenderId: "1071045355615",
  appId: "1:1071045355615:web:e83236cf9e613f899e93ea",
  measurementId: "G-6C2QENDVV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const guild_1 = __importDefault(require("./guild"));
const location_1 = __importDefault(require("./location"));
exports.default = {
    ...guild_1.default,
    ...location_1.default,
};
