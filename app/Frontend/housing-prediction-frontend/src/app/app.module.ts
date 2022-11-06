import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './Features/navigation/navigation.component';
import { DataFormComponent } from './Features/prediction/data-form/data-form.component';
import { HomeComponent } from './Features/home/home.component';
import { AboutComponent } from './Features/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataFormComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
