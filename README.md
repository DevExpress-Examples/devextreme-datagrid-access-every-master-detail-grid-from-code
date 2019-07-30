# DataGrid - Master-Detail - Access every detail grid from code

This example illustrates how to access the detail DataGrid instance from the [onClick](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) event handler of the button placed to the [masterDetail template](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template).

The main idea is to generate every detail grid's `id` dynamically so that we can address the grid's instance in the `onClick` event handler later. Although this example is focused on the DataGrid widget, the same approach is applicable for any other widget placed into the masterDetail template.

[Run Online](https://devexpress-examples.github.io/DataGrid-Master-Detail-Access-every-detail-grid-from-code/jquery/index.html)
