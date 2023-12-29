import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
        projectId: 'katastasis-wed',
        appId: '1:643885718313:web:f5ac353293a28c7ffcb538',
        storageBucket: 'katastasis-wed.appspot.com',
        apiKey: 'AIzaSyDN5pe_z-DdIMhfUEi7BBGcS20yWgT5Ny0',
        authDomain: 'katastasis-wed.firebaseapp.com',
        messagingSenderId: '643885718313',
        measurementId: 'G-N4LCMGGYEV',
    }))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
