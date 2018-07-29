import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MessageComponent } from './components/message/message.component';
import { TableComponent } from './components/widgets/table/table.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TableComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, TableComponent,CarouselComponent]
})
export class AppModule { }
