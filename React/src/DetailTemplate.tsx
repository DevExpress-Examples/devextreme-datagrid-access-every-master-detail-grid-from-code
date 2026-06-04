import React, { useRef, useMemo, useCallback } from 'react';

import { DataGrid, Column } from 'devextreme-react/data-grid';
import type { DataGridRef, DataGridTypes } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import { ArrayStore, DataSource } from 'devextreme-react/common/data';

import { tasks } from './data';

const buttonStyle = { marginBottom: 10 };

function getTasks(key: number) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    }),
    filter: ['EmployeeID', '=', key],
  });
}

function DetailTemplate(props: DataGridTypes.MasterDetailTemplateData): JSX.Element {
  const detailGridInstance = useRef<DataGridRef>(null);

  const dataSource = useMemo(() => getTasks(props.data.key), [props.data.key]);

  const onButtonClick = useCallback(() => {
    detailGridInstance.current?.instance().option('focusedRowIndex', 0);
  }, []);

  return (
    <React.Fragment>
      <Button
        text='Focus row'
        onClick={onButtonClick}
        style={buttonStyle}
      />

      <DataGrid
        ref={detailGridInstance}
        dataSource={dataSource}
        showBorders={true}
        focusedRowEnabled={true}
      >
        <Column dataField='Subject' />
        <Column dataField='StartDate' />
        <Column dataField='DueDate' />
        <Column dataField='Priority' />
      </DataGrid>
    </React.Fragment>
  );
}

export default DetailTemplate;
