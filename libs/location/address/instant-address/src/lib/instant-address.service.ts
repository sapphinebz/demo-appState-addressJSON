import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Province,
  SubDistrict,
  District,
} from '@ac/location/address//address-interface';
import { shareReplay, map } from 'rxjs/operators';

@Injectable()
export class InstantAddressService {
  provinceList$ = this.getProvinceJSON().pipe(shareReplay(1));
  districtList$ = this.getDistrictJSON().pipe(shareReplay(1));
  subdistrictList$ = this.getSubDistrictJSON().pipe(shareReplay(1));

  constructor(private readonly http: HttpClient) {}

  getProvinceByCode(PROVINCE_CODE: string) {
    return this.provinceList$.pipe(
      map(
        (list) =>
          list.find((province) => province.PROVINCE_CODE === PROVINCE_CODE) ||
          null
      )
    );
  }

  getDistrictByCode(DISTRICT_CODE: string) {
    return this.districtList$.pipe(
      map(
        (list) =>
          list.find((district) => district.DISTRICT_CODE === DISTRICT_CODE) ||
          null
      )
    );
  }

  // getSubdistrictByCode(){

  // }

  private getDistrictJSON() {
    return this.http.get<District[]>(
      './assets/location/json/master-district.json'
    );
  }

  private getSubDistrictJSON() {
    return this.http.get<SubDistrict[]>(
      './assets/location/json/master-sub-district.json'
    );
  }

  private getProvinceJSON() {
    return this.http.get<Province[]>(
      './assets/location/json/master-province.json'
    );
  }
}
