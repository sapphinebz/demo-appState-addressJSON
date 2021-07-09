import { Component } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employeeList = ['Sam', 'Moe', 'Lisa'];
  employee$ = this.appState.employee$;
  constructor(private appState: AppStateService) {}

  viewEmployee(name: string) {
    this.appState.loadEmployeeName(name);
  }
}
