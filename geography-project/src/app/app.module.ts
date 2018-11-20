import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { AfricaComponent } from './africa/africa.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { AustraliaComponent } from './australia/australia.component';
import { AntarcticaComponent } from './antarctica/antarctica.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsiaComponent,
    EuropeComponent,
    AfricaComponent,
    SouthAmericaComponent,
    NorthAmericaComponent,
    AustraliaComponent,
    AntarcticaComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
