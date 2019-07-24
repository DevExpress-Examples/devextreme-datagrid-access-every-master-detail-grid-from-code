import { Component } from "@angular/core";
import { Employee, Service, Task } from "./app.service";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import DataGrid from "devextreme/ui/data_grid";

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[];
  tasks: Task[];
  tasksDataSourceStorage: any;
  
  constructor(private service: Service) {
    this.employees = service.getEmployees();
    this.tasks = service.getTasks();
    this.tasksDataSourceStorage = [];
  }

  buttonClick(e, key) {
    let detailGridId = `detailGrid${key}`;
    let element = document.getElementById(detailGridId);
    let instance = DataGrid.getInstance(element) as DataGrid;
    instance.option("focusedRowIndex", 0);
  }

  getTasks(key) {
    let item = this.tasksDataSourceStorage.find(i => i.key === key);
    if (!item) {
      item = {
        key: key,
        dataSourceInstance: new DataSource({
          store: new ArrayStore({
            data: this.tasks,
            key: "ID"
          }),
          filter: ["EmployeeID", "=", key]
        })
      };
      this.tasksDataSourceStorage.push(item);
    }
    return item.dataSourceInstance;
  }
}