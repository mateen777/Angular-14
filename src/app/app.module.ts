import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CardModule,
    ButtonModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
