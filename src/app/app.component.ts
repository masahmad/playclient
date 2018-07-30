import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';



//templates
import { T4Component } from './components/templates/t4/t4.component';
import { T6Component } from './components/templates/t6/t6.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;


  @ViewChild('templatecontainer', { read: ViewContainerRef }) templateEntry: ViewContainerRef;


  constructor(private resolver: ComponentFactoryResolver) { }






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
