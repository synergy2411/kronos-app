import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {

  token : string = null;

  register(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res)=>{
        console.log("User registered!" , res)
      }).catch(err => console.log(err));
  }

  login(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(res=>{
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            console.log(token);
            this.token = token;
            this.router.navigate(['/users']);
          })
        console.log("User Logged in!", res)
      }).catch(err=>console.log(err));
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }
  constructor(private router : Router) { }

}
