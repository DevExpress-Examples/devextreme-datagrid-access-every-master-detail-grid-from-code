<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/198618838/19.1.4%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T828588)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid - Master-Detail - Access every detail grid from code
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/198618838/)**
<!-- run online end -->

This example illustrates how to access the detail DataGrid instance from the [onClick](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) event handler of the button placed to the [masterDetail template](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template).

The main idea is to generate every detail grid's `id` dynamically so that we can address the grid's instance in the `onClick` event handler later. Although this example is focused on the DataGrid widget, the same approach is applicable for any other widget placed into the masterDetail template.
