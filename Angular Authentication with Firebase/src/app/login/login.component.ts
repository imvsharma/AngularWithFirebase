import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public angularFireAuth: AngularFireAuth, public authService:AuthService, public route:Router) { }

  ngOnInit() {
  }

  googleLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
      console.log("data",data);
      this.authService.getUserData(data);
      this.route.navigate(['/profile']);
    })
  }

  twitterLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(data => {
      console.log("data", data);
    })
  }

}
