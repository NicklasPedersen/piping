import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorsePipe } from './morse.pipe';
import { Md5Pipe } from './md5.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    Md5Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
