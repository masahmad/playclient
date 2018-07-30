import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MessageComponent } from './components/message/message.component';
import { TableComponent } from './components/widgets/table/table.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';
import { T4Component } from './components/templates/t4/t4.component';
import { T6Component } from './components/templates/t6/t6.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TableComponent,
    CarouselComponent,
    T4Component,
    T6Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    T4Component,T6Component,
    MessageComponent, TableComponent,CarouselComponent]
})
export class AppModule { }
