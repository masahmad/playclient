import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { MessageComponent } from './components/message/message.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;


  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;



  
  constructor(private resolver: ComponentFactoryResolver) { }




  createComponent(message) {
    console.log('message',message)
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.message = message;
}


destroyComponent() {
  this.componentRef.destroy();
}



}
