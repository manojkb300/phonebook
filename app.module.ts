import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
  ],
  imports: [
    FormsModule, BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [PhoneComponent]
})
export class AppModule { }

