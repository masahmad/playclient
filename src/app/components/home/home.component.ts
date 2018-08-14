
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';


import { AngularFirestore } from 'angularfire2/firestore';


//templates
import { T4Component } from '../../components/templates/t4/t4.component';
import { T6Component } from '../../components/templates/t6/t6.component';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  componentRef: any;
  @ViewChild('templatecontainer', { read: ViewContainerRef }) templateEntry: ViewContainerRef;

  private container: any;
  private user;

  constructor(
    private resolver: ComponentFactoryResolver,
    private db: AngularFirestore,
    private authService:AuthService
   
  ) { }

  ngOnInit() {

    this.user = this.authService.getCurrentUSer();
    console.log("auth user xxxx ",this.user);
//    this.container = 
    this.db.collection(`/users/${this.user}/containers/`)
    .valueChanges()
    .subscribe(result => {
      console.log(result);
    });
  
  }






  createT4(message) {
    console.log('message', message)
    this.templateEntry.clear();
    const factory = this.resolver.resolveComponentFactory(T4Component);
    const componentRef = this.templateEntry.createComponent(factory);
    componentRef.instance.message = message;
  }



  createT6(message) {
    console.log('message', message)
    this.templateEntry.clear();
    const factory = this.resolver.resolveComponentFactory(T6Component);
    const componentRef = this.templateEntry.createComponent(factory);
    //componentRef.instance.message = message;
  }






  clear() {
    this.templateEntry.clear();
  }


  destroyComponent() {
    this.componentRef.destroy();
  }

}
