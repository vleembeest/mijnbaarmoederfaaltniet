import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  MijnbaarmoederfaaltnietComponent
} from "./components/mijnbaarmoederfaaltniet/mijnbaarmoederfaaltniet.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MijnbaarmoederfaaltnietComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
