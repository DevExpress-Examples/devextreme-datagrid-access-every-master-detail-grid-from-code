using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers;

[Route("api/[controller]")]
public class SampleDataController: Controller {

    [HttpGet("Employees")]
    public object GetEmployees(DataSourceLoadOptions loadOptions) {
        return DataSourceLoader.Load(SampleData.Employees, loadOptions);
    }

    [HttpGet("Tasks")]
    public object GetTasks(DataSourceLoadOptions loadOptions, int employeeId) {
        return DataSourceLoader.Load(
            SampleData.Tasks.Where(task => task.EmployeeID == employeeId),
            loadOptions
        );
    }

}
