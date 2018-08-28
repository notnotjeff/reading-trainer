import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReadingAppComponent } from './reading-app/reading-app.component';
import { ReadingPreferencesComponent } from './reading-preferences/reading-preferences.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingAppComponent,
    ReadingPreferencesComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
