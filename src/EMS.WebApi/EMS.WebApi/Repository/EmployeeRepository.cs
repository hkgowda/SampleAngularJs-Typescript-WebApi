using System;
using System.Collections.Generic;
using EMS.WebApi.Models;
using EMS.WebApi.Repository.Interfaces;

namespace EMS.WebApi.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        public EmployeeDetailsModel getEmployeeDetails()
        {
            EmployeeDetailsModel empDetails = new EmployeeDetailsModel();
            List<EmployeeModel> empList = new List<EmployeeModel>()
            {
                new EmployeeModel()
                {
                    EmployeeId = "466",
                    EmployeeFName = "Harsha",
                    EmployeeLName = "Gowda",
                    EmployeeJoiningDate = new DateTime(),
                    EmployeeRole = "Software Engineer",
                    EmployeeSalary = 500000,
                    EmployeePhoneNumber = 9999977777,
                    EmployeeEmail = "harsha.gowda@gmail.com"
                },
                new EmployeeModel()
                {
                    EmployeeId = "450",
                    EmployeeFName = "Suresh",
                    EmployeeLName = "Kumar",
                    EmployeeJoiningDate = new DateTime(),
                    EmployeeRole = "Software Engineer",
                    EmployeeSalary = 600000,
                    EmployeePhoneNumber = 9999977777,
                    EmployeeEmail = "suresh.kumar@gmail.com"
                },
                new EmployeeModel()
                {
                    EmployeeId = "476",
                    EmployeeFName = "Abhi",
                    EmployeeLName = "Bhat",
                    EmployeeJoiningDate = new DateTime(),
                    EmployeeRole = "Software Engineer",
                    EmployeeSalary = 705000,
                    EmployeePhoneNumber = 9999977777,
                    EmployeeEmail = "abhi.bhat@gmail.com"
                },
                new EmployeeModel()
                {
                    EmployeeId = "155",
                    EmployeeFName = "Vishwas",
                    EmployeeLName = "Rai",
                    EmployeeJoiningDate = new DateTime(),
                    EmployeeRole = "Software Engineer",
                    EmployeeSalary = 500000,
                    EmployeePhoneNumber = 9999977777,
                    EmployeeEmail = "vishwas.rai@gmail.com"
                }
            };

            empDetails.RowData = empList;
            empDetails.ColumnData = GetColumnInfo();

            return empDetails;
        }

        public void postEmployeeDetails(EmployeeModel emp)
        {
            EmployeeDetailsModel empDetails = getEmployeeDetails();
            empDetails.RowData.Add(emp);
        }

        private List<TableColumnModel> GetColumnInfo()
        {
            return new List<TableColumnModel>
            {
                new TableColumnModel() { ColumnNumber=0,ColumnName="EmployeeId",ColumnDescription="Id",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=1,ColumnName="EmployeeFName",ColumnDescription="First Name",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=2,ColumnName="EmployeeLName",ColumnDescription="Last Name",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=3,ColumnName="EmployeeJoiningDate",ColumnDescription="Joining Date",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=4,ColumnName="EmployeeRole",ColumnDescription="Designation",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=5,ColumnName="EmployeeSalary",ColumnDescription="Salary",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=6,ColumnName="EmployeePhoneNumber",ColumnDescription="Phone Number",ColumnVisible=true},
                new TableColumnModel() { ColumnNumber=7,ColumnName="EmployeeEmail",ColumnDescription="Email",ColumnVisible=true},
            };
        }
    }
}
