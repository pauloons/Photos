import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import {AppRoutingModule} from './app.routing.module';
import {ErrorsModule} from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
    PhotoFormComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
