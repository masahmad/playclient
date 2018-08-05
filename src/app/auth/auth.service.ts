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
userId:string;



constructor(
    private router: Router, 
    private afAuth: AngularFireAuth) {

        this.afAuth.authState.subscribe(user => {
            if (user) this.userId = user.uid;
        });
}


registerUser(authData: AuthData) {



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

    this.afAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password
    ).then (result=>{
        console.log(result);
        this.userIsAuthenticated=true;
        this.authChange.next(true);
        this.router.navigate(['/home']);
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

return   this.userId;
//firebase.auth().currentUser;
}
}
