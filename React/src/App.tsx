import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, { Column, MasterDetail } from 'devextreme-react/data-grid';
import DetailTemplate from './DetailTemplate.tsx';
import { employees } from './data';

function App(): JSX.Element {
  return (
    <div className='demo-container'>
      <DataGrid
        id='grid-container'
        dataSource={employees}
        keyExpr='ID'
        showBorders={true}
      >
        <Column dataField='FirstName' />
        <Column dataField='LastName' />
        <Column dataField='Position' />
        <Column dataField='State' />
        <Column dataField='BirthDate' />
        <MasterDetail enabled={true} component={DetailTemplate} />
      </DataGrid>
    </div>
  );
}

export default App;
