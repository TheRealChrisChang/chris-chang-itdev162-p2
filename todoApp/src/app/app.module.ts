import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyDa0w0rWstfT7jcFHbSy2dLT5vQqDedPMA",
  authDomain: "todo-app-777dd.firebaseapp.com",
  projectId: "todo-app-777dd",
  storageBucket: "todo-app-777dd.appspot.com",
  messagingSenderId: "577431937280",
  appId: "1:577431937280:web:3955142cd52197ba8dd3e5"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
