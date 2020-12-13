import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertyThumbnailComponent } from './property-thumbnail/property-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesListComponent,
    PropertyThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
