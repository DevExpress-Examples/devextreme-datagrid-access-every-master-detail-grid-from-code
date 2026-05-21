using System;

namespace ASP_NET_Core.Models;

public class SampleTask {
    public int ID { get; set; }
    public string Subject { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime DueDate { get; set; }
    public string Status { get; set; }
    public string Priority { get; set; }
    public int Completion { get; set; }
    public int EmployeeID { get; set; }
}
