import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	userData
  constructor() { }

  getUserData(pUser){
  	console.log("pUser",pUser);
  	this.userData = pUser;
  }

}
