import { Province, District } from '@ac/location/address//address-interface';
export interface Message {
  message: string;
}

export interface EmployeeAPI {
  id: number;
  name: string;
  location: LocationAPI;
}

export interface LocationAPI {
  provinceCode: string;
  distirictCode: string;
}

export interface Employee {
  id: number;
  name: string;
  province: Province | null;
  district: District | null;
}
