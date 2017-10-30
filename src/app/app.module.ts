import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
export const firebaseConfig = {
  apiKey: "AIzaSyDLDUrGuVcIOanhMQcnzen52yYTJdX6fX0",
  authDomain: "angular-4-firebase-1e23e.firebaseapp.com",
  databaseURL: "https://angular-4-firebase-1e23e.firebaseio.com",
  projectId: "angular-4-firebase-1e23e",
  storageBucket: "angular-4-firebase-1e23e.appspot.com",
  messagingSenderId: "951016784805"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
