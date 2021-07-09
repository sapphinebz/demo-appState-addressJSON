export interface District {
  DISTRICT_CODE: string;
  DISTRICT_NAME: string;
  DISTRICT_NAME_EN: string;
  PROVINCE_CODE: string;
}

export interface SubDistrict {
  LOCATION_CODE: number;
  SUB_DISTRICT_NAME: string;
  SUB_DISTRICT_NAME_EN: string;
  PROVINCE_CODE: string;
  DISTRICT_CODE: string;
  POSTAL_CODE: string;
}

export interface Province {
  PROVINCE_CODE: string;
  PROVINCE_NAME: string;
  PROVINCE_NAME_EN: string;
}
