using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;

static class SampleData {
    public static List<SampleEmployee> Employees = [
        new SampleEmployee {
            ID = 1,
            Prefix = "Mr.",
            FirstName = "John",
            LastName = "Heart",
            Position = "CEO",
            State = "California",
            BirthDate = new DateTime(1964, 3, 16)
        },
        new SampleEmployee {
            ID = 2,
            Prefix = "Mrs.",
            FirstName = "Olivia",
            LastName = "Peyton",
            Position = "Sales Assistant",
            State = "California",
            BirthDate = new DateTime(1981, 6, 3)
        },
        new SampleEmployee {
            ID = 3,
            Prefix = "Mr.",
            FirstName = "Robert",
            LastName = "Reagan",
            Position = "CMO",
            State = "Arkansas",
            BirthDate = new DateTime(1974, 9, 7)
        }
    ];

    public static List<SampleTask> Tasks = [
        new SampleTask {
            ID = 3,
            Subject = "Update Personnel Files",
            StartDate = new DateTime(2013, 2, 3),
            DueDate = new DateTime(2013, 2, 28),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 2
        },
        new SampleTask {
            ID = 4,
            Subject = "Review Health Insurance Options Under the Affordable Care Act",
            StartDate = new DateTime(2013, 2, 12),
            DueDate = new DateTime(2013, 4, 25),
            Status = "In Progress",
            Priority = "High",
            Completion = 50,
            EmployeeID = 2
        },
        new SampleTask {
            ID = 5,
            Subject = "Choose between PPO and HMO Health Plan",
            StartDate = new DateTime(2013, 2, 15),
            DueDate = new DateTime(2013, 4, 15),
            Status = "In Progress",
            Priority = "High",
            Completion = 75,
            EmployeeID = 1
        },
        new SampleTask {
            ID = 6,
            Subject = "Google AdWords Strategy",
            StartDate = new DateTime(2013, 2, 16),
            DueDate = new DateTime(2013, 2, 28),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 1
        },
        new SampleTask {
            ID = 7,
            Subject = "New Brochures",
            StartDate = new DateTime(2013, 2, 17),
            DueDate = new DateTime(2013, 2, 24),
            Status = "Completed",
            Priority = "Normal",
            Completion = 100,
            EmployeeID = 1
        },
        new SampleTask {
            ID = 16,
            Subject = "Deliver R&D Plans for 2013",
            StartDate = new DateTime(2013, 3, 1),
            DueDate = new DateTime(2013, 3, 10),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 3
        },
        new SampleTask {
            ID = 21,
            Subject = "Non-Compete Agreements",
            StartDate = new DateTime(2013, 3, 12),
            DueDate = new DateTime(2013, 3, 14),
            Status = "Completed",
            Priority = "Low",
            Completion = 100,
            EmployeeID = 2
        },
        new SampleTask {
            ID = 22,
            Subject = "Update NDA Agreement",
            StartDate = new DateTime(2013, 3, 14),
            DueDate = new DateTime(2013, 3, 16),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 1
        },
        new SampleTask {
            ID = 50,
            Subject = "Give Final Approval for Refunds",
            StartDate = new DateTime(2013, 5, 5),
            DueDate = new DateTime(2013, 5, 15),
            Status = "Completed",
            Priority = "Normal",
            Completion = 100,
            EmployeeID = 2
        },
        new SampleTask {
            ID = 52,
            Subject = "Review Product Recall Report by Engineering Team",
            StartDate = new DateTime(2013, 5, 17),
            DueDate = new DateTime(2013, 5, 20),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 1
        },
        new SampleTask {
            ID = 74,
            Subject = "Decide on Mobile Devices to Use in the Field",
            StartDate = new DateTime(2013, 7, 30),
            DueDate = new DateTime(2013, 8, 2),
            Status = "Completed",
            Priority = "High",
            Completion = 100,
            EmployeeID = 3
        },
        new SampleTask {
            ID = 78,
            Subject = "Try New Touch-Enabled WinForms Apps",
            StartDate = new DateTime(2013, 8, 11),
            DueDate = new DateTime(2013, 8, 15),
            Status = "Completed",
            Priority = "Normal",
            Completion = 100,
            EmployeeID = 3
        },
        new SampleTask {
            ID = 117,
            Subject = "Approval on Converting to New HDMI Specification",
            StartDate = new DateTime(2014, 1, 11),
            DueDate = new DateTime(2014, 1, 31),
            Status = "Deferred",
            Priority = "Normal",
            Completion = 75,
            EmployeeID = 3
        }
    ];
}
