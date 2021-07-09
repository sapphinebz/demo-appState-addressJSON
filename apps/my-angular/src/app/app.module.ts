import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InstantAddressModule } from '@ac/location/address/instant-address';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, InstantAddressModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
