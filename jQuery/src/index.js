import { employees, tasks } from "./data.js";

$(() => {
  $("#gridContainer").dxDataGrid({
    dataSource: employees,
    keyExpr: "ID",
    showBorders: true,
    columns: ["FirstName", "LastName", "Position", "State", "BirthDate"],
    masterDetail: {
      enabled: true,
      template: function (container, options) {
        var currentEmployeeData = options.data;
        var detailGridId = `detailGrid${options.key}`;

        $("<div>").dxButton({
          text: "Focus row",
          onClick: function (e) {
            var detailGrid = $(`#${detailGridId}`).dxDataGrid("instance");
            detailGrid.option("focusedRowIndex", 0);
          }
        }).appendTo(container);

        $("<div>")
          .dxDataGrid({
            elementAttr: {
              id: detailGridId
            },
            focusedRowEnabled: true,
            showBorders: true,
            columns: ["Subject", "StartDate", "DueDate", "Priority"],
            dataSource: new DevExpress.data.DataSource({
              store: new DevExpress.data.ArrayStore({
                key: "ID",
                data: tasks
              }),
              filter: ["EmployeeID", "=", options.key]
            })
          }).appendTo(container);
      }
    }
  });
});
