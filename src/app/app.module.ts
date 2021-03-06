import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { Routes , RouterModule  } from '@angular/router' ;
import { HttpClientModule } from "@angular/common/http";

const routes : Routes = [
  {"path" : "cinema" , component : CinemaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(routes) , 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
