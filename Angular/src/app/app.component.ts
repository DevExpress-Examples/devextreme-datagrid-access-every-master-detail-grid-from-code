import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { Service, type Employee } from './app.service';

@Component({
    selector: 'app-root',
    imports: [DxDataGridModule, DetailGridComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Service],
})
export class AppComponent {
  employees: Employee[];

  constructor(private service: Service) {
    this.employees = service.getEmployees();
  }
}
