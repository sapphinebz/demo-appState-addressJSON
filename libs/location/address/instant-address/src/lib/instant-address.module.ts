import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstantAddressService } from './instant-address.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [InstantAddressService],
})
export class InstantAddressModule {}
