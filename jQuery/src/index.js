import { employees, tasks } from "./data.js";

$(() => {
  $("#gridContainer").dxDataGrid({
    dataSource: employees,
    keyExpr: "ID",
    showBorders: true,
    columns: ["FirstName", "LastName", "Position", "State", "BirthDate"],
    masterDetail: {
      enabled: true,
      template(container, options) {
        const detailGridId = `detailGrid${options.key}`;

        $("<div>")
          .dxButton({
            text: "Focus row",
            onClick(e) {
              const detailGrid = $(`#${detailGridId}`).dxDataGrid("instance");
              detailGrid.option("focusedRowIndex", 0);
            },
          })
          .css("margin-bottom", "10px")
          .appendTo(container);

        $("<div>")
          .dxDataGrid({
            elementAttr: {
              id: detailGridId,
            },
            focusedRowEnabled: true,
            showBorders: true,
            columns: ["Subject", "StartDate", "DueDate", "Priority"],
            dataSource: new DevExpress.data.DataSource({
              store: new DevExpress.data.ArrayStore({
                key: "ID",
                data: tasks,
              }),
              filter: ["EmployeeID", "=", options.key],
            }),
          })
          .appendTo(container);
      },
    },
  });
});
