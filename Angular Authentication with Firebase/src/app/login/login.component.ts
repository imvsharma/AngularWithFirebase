import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  googleLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
      console.log("data",data);
    })
  }

  twitterLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(data => {
      console.log("data", data);
    })
  }

}
