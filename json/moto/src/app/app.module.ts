import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Cb125Component } from './cb125/cb125.component';
import { Cb1000Component } from './cb1000/cb1000.component';
import { Cb500Component } from './cb500/cb500.component';
import { Cb600Component } from './cb600/cb600.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Cb125Component,
    Cb1000Component,
    Cb500Component,
    Cb600Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
