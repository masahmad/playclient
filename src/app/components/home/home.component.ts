
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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  componentRef: any;
  @ViewChild('templatecontainer', { read: ViewContainerRef }) templateEntry: ViewContainerRef;


  constructor(
    private resolver: ComponentFactoryResolver,
    private db: AngularFirestore
  ) { }

  ngOnInit() {

    this.db.collection('/containers/containerdoc/conlist')
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
