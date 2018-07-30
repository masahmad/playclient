import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import {Subject} from 'rxjs/Subject';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import {AngularFireAuth} from 'angularfire2/auth';





@Injectable({
  providedIn: 'root'
})


export class AuthService {

  

  private userIsAuthenticated =false;
authChange = new Subject<boolean>();




constructor(
    private router: Router, 
    private afAuth: AngularFireAuth) {

}

registerUser(authData: AuthData) {

    // this.user = {
    //     email: authData.email,
    //     userId: Math.round(Math.random()*10000).toString()
    // }

    this.afAuth.auth.createUserWithEmailAndPassword(
        authData.email,authData.password
    ).then (result=>{
        console.log(result);
        this.authChange.next(true);
        this.router.navigate(['/']);
    })
    .catch(error => {
        console.log(error);
    })

   
}


login(authData: AuthData) {

    // this.user = {
    //     email: authData.email,
    //     userId: Math.round(Math.random()*10000).toString()
    // }

    this.afAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password
    ).then (result=>{
        console.log(result);
        this.userIsAuthenticated=true;
        this.authChange.next(true);
        this.router.navigate(['/']);
    })
    .catch(error => {
        console.log(error);
    })

   
}


logout() {
    //this.user=null;
    this.userIsAuthenticated=false;
    this.afAuth.auth.signOut();
    this.authChange.next(false);
    this.router.navigate(['/login']);
}





isAuth() {
    return this.userIsAuthenticated;
}


getCurrentUSer() {

   // var user = firebase.auth().currentUser;
}
}
