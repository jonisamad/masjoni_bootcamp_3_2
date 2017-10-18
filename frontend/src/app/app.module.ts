import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { roomlistcomponent } from './roomlist/roomlist.component';
import { LogInComponent } from './log-in/log-in.component';
import { TambahKamarComponent } from './tambah-kamar/tambah-kamar.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    roomlistcomponent,
    LogInComponent,
    TambahKamarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }