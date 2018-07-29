import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { MessageComponent } from './components/message/message.component';
import { TableComponent } from './components/widgets/table/table.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;


  @ViewChild('messagecontainer', { read: ViewContainerRef }) messageEntry: ViewContainerRef;
  @ViewChild('tablecontainer', { read: ViewContainerRef }) tableEntry: ViewContainerRef;
  @ViewChild('carouselcontainer', { read: ViewContainerRef }) carouselEntry: ViewContainerRef;




  constructor(private resolver: ComponentFactoryResolver) { }






  createMessageComponent(message) {
    console.log('message',message)
    this.messageEntry.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    const componentRef = this.messageEntry.createComponent(factory);
    componentRef.instance.message = message;
}



createTableComponent(message) {
  console.log('message',message)
  this.tableEntry.clear();
  const factory = this.resolver.resolveComponentFactory(TableComponent);
  const componentRef = this.tableEntry.createComponent(factory);
  //componentRef.instance.message = message;
}




createCarouselComponent(message) {
  console.log('message',message)
  this.carouselEntry.clear();
  const factory = this.resolver.resolveComponentFactory(CarouselComponent);
  const componentRef = this.carouselEntry.createComponent(factory);
  //componentRef.instance.message = message;
}



clear() {
  this.carouselEntry.clear();
  this.messageEntry.clear();
  this.tableEntry.clear();
}

destroyComponent() {
  this.componentRef.destroy();
}



}
