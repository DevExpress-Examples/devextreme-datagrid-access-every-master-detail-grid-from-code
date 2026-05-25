import { Component, Input, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent, DxButtonModule } from 'devextreme-angular';
import { DataSource, ArrayStore } from 'devextreme-angular/common/data';
import { Service, Task } from '../app/app.service';

@Component({
    selector: 'app-detail-grid',
    imports: [DxDataGridModule, DxButtonModule],
    templateUrl: './detail-grid.component.html',
    providers: [Service]
})
export class DetailGridComponent implements AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) detailGrid!: DxDataGridComponent;
  @Input() key!: number;
  
  tasksDataSource!: DataSource;
  tasks: Task[];
  
  constructor(private service: Service, private changeDetectorRef: ChangeDetectorRef) {
    this.tasks = service.getTasks();
  }

  ngAfterViewInit(): void {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: 'ID',
      }),
      filter: ['EmployeeID', '=', this.key],
    });

    this.changeDetectorRef.detectChanges();
  }

  focusRow() {
    this.detailGrid.instance.option('focusedRowIndex', 0);
  }
}
