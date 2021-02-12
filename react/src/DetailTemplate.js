import React from 'react';
import { Button } from 'devextreme-react/button';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import service from './data.js';

const tasks = service.getTasks();

const getTasks = (key) => {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID'
    }),
    filter: ['EmployeeID', '=', key]
  });
};

class DetailTemplate extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.detailGrids = [];
    this.dataSource = getTasks(props.data.key);
    this.onClick = this.onClick.bind(this); 
  }
    
  onClick(e) {
    this.detailGrids[this.props.data.key].instance.option("focusedRowIndex", 0);
  }
    
  render() {
    return (
      <React.Fragment>
        <Button text={"Focus row"} onClick={this.onClick}></Button>
        <DataGrid ref={grid => this.detailGrids[this.props.data.key] = grid}
          dataSource={this.dataSource}
          showBorders={true}
          focusedRowEnabled={true}>
          <Column dataField={'Subject'} />
          <Column dataField={'StartDate'} dataType={'date'} />
          <Column dataField={'DueDate'} dataType={'date'} />
          <Column dataField={'Priority'} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default DetailTemplate;