using System;

namespace EMS.WebApi.Models
{
    public class EmployeeModel
    {
        public string EmployeeId { get; set; }
        public string EmployeeFName { get; set; }
        public string EmployeeLName { get; set; }
        public DateTime EmployeeJoiningDate { get; set; }
        public string EmployeeRole { get; set; }
        public double EmployeeSalary { get; set; }
        public long EmployeePhoneNumber { get; set; }
        public string EmployeeEmail { get; set; }
    }
}