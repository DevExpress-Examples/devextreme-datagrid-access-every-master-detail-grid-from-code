var employees = [{
  "ID": 1,
  "Prefix": "Mr.",
  "FirstName": "John",
  "LastName": "Heart",
  "Position": "CEO",
  "State": "California",
  "BirthDate": "1964/03/16"
},
{
  "ID": 2,
  "Prefix": "Mrs.",
  "FirstName": "Olivia",
  "LastName": "Peyton",
  "Position": "Sales Assistant",
  "State": "California",
  "BirthDate": "1981/06/03"
},
{
  "ID": 3,
  "Prefix": "Mr.",
  "FirstName": "Robert",
  "LastName": "Reagan",
  "Position": "CMO",
  "State": "Arkansas",
  "BirthDate": "1974/09/07"
}]

var tasks = [
{
  "ID": 3,
  "Subject": "Update Personnel Files",
  "StartDate": "2013/02/03",
  "DueDate": "2013/02/28",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 2
},
{
  "ID": 4,
  "Subject": "Review Health Insurance Options Under the Affordable Care Act",
  "StartDate": "2013/02/12",
  "DueDate": "2013/04/25",
  "Status": "In Progress",
  "Priority": "High",
  "Completion": 50,
  "EmployeeID": 2
},
{
  "ID": 5,
  "Subject": "Choose between PPO and HMO Health Plan",
  "StartDate": "2013/02/15",
  "DueDate": "2013/04/15",
  "Status": "In Progress", "Priority": "High",
  "Completion": 75,
  "EmployeeID": 1
},
{
  "ID": 6,
  "Subject": "Google AdWords Strategy",
  "StartDate": "2013/02/16",
  "DueDate": "2013/02/28",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 1
},
{
  "ID": 7,
  "Subject": "New Brochures",
  "StartDate": "2013/02/17",
  "DueDate": "2013/02/24",
  "Status": "Completed",
  "Priority": "Normal",
  "Completion": 100,
  "EmployeeID": 1
},
{
  "ID": 16,
  "Subject": "Deliver R&D Plans for 2013",
  "StartDate": "2013/03/01",
  "DueDate": "2013/03/10",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 3
},
{
  "ID": 21,
  "Subject": "Non-Compete Agreements",
  "StartDate": "2013/03/12",
  "DueDate": "2013/03/14",
  "Status": "Completed",
  "Priority": "Low",
  "Completion": 100,
  "EmployeeID": 2
},
{
  "ID": 22,
  "Subject": "Update NDA Agreement",
  "StartDate": "2013/03/14",
  "DueDate": "2013/03/16",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 1
},
{
  "ID": 50,
  "Subject": "Give Final Approval for Refunds",
  "StartDate": "2013/05/05",
  "DueDate": "2013/05/15",
  "Status": "Completed",
  "Priority": "Normal",
  "Completion": 100,
  "EmployeeID": 2
},
{
  "ID": 52,
  "Subject": "Review Product Recall Report by Engineering Team",
  "StartDate": "2013/05/17",
  "DueDate": "2013/05/20",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 1
},
{
  "ID": 74,
  "Subject": "Decide on Mobile Devices to Use in the Field",
  "StartDate": "2013/07/30",
  "DueDate": "2013/08/02",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "EmployeeID": 3
},
{
  "ID": 78,
  "Subject": "Try New Touch-Enabled WinForms Apps",
  "StartDate": "2013/08/11",
  "DueDate": "2013/08/15",
  "Status": "Completed",
  "Priority": "Normal",
  "Completion": 100,
  "EmployeeID": 3
},
{
  "ID": 117,
  "Subject": "Approval on Converting to New HDMI Specification",
  "StartDate": "2014/01/11",
  "DueDate": "2014/01/31",
  "Status": "Deferred",
  "Priority": "Normal",
  "Completion": 75,
  "EmployeeID": 3
}]

export default {
  getEmployees() {
    return employees;
  },
  getTasks() {
    return tasks;
  }
};
