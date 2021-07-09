import { Employee, EmployeeAPI } from '@ac/api-interfaces';
import { InstantAddressService } from '@ac/location/address/instant-address';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, EMPTY, forkJoin, of } from 'rxjs';
import { switchMap, filter, map, shareReplay } from 'rxjs/operators';

interface State {
  selectedEmployeeName: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private appState = new BehaviorSubject<State>({ selectedEmployeeName: null });
  employee$ = this.appState.pipe(
    filter((state) => Boolean(state.selectedEmployeeName)),
    switchMap((state) => this.getEmployeeByName(state.selectedEmployeeName)),
    switchMap((employeeApi) => {
      return this.fetchAddress(employeeApi);
    }),
    shareReplay(1)
  );

  constructor(
    private http: HttpClient,
    private instantAddressService: InstantAddressService
  ) {}

  loadEmployeeName(name: string) {
    this.appState.next({ selectedEmployeeName: name });
  }

  private getEmployeeByName(name: string | null) {
    if (name) {
      return this.http.get<EmployeeAPI>(`/api/employee?name=${name}`);
    }
    return EMPTY;
  }

  private fetchAddress(employeeAPI: EmployeeAPI): Observable<Employee> {
    const province$ = this.instantAddressService.getProvinceByCode(
      employeeAPI.location.provinceCode
    );
    const district$ = this.instantAddressService.getDistrictByCode(
      employeeAPI.location.distirictCode
    );
    return forkJoin([province$, district$]).pipe(
      map(([province, district]) => {
        const employee: Employee = {
          id: employeeAPI.id,
          name: employeeAPI.name,
          province: province,
          district: district,
        };
        return employee;
      })
    );
  }
}
