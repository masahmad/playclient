import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { MessageComponent } from '../../message/message.component';
import { TableComponent } from '../../widgets/table/table.component';
import { CarouselComponent } from '../../widgets/carousel/carousel.component';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.css']
})
export class T4Component implements OnInit {

  ngOnInit(): void {
    
  }

  title = 'app';
  componentRef: any;
  tblcomponentRef: any;


  @Input() message:string;

  @ViewChild('zone1container', { read: ViewContainerRef }) messageEntry: ViewContainerRef;
  @ViewChild('zone2container', { read: ViewContainerRef }) tableEntry: ViewContainerRef;
  @ViewChild('zone4container', { read: ViewContainerRef }) carouselEntry: ViewContainerRef;




  constructor(private resolver: ComponentFactoryResolver) { }


testRef() {

  this.tblcomponentRef.instance.tableData ='new data for table';

}

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
   this.tblcomponentRef = this.tableEntry.createComponent(factory);
  this.tblcomponentRef.instance.tableData = message + " yoo hoo";
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
