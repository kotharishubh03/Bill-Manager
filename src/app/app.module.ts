import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from "angular-datatables";

import { AboutComponent } from './MyComponents/about/about.component';
import { PurchaseComponent } from './MyComponents/purchase/purchase.component';
import { TopNavComponent } from './MyComponents/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PurchaseComponent,
    TopNavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule,
    BsDropdownModule,
    FontAwesomeModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
