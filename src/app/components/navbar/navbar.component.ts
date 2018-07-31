import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  
  isAuth: boolean;
authSubscription:Subscription;


  constructor(private authService: AuthService) { }

  ngOnInit() {

   this.authSubscription =  this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })

  }


  logout() {

    console.log('logout');
    this.authService.logout();

  }



  ngOnDestroy(): void {
   
    this.authSubscription.unsubscribe();

  }

}
