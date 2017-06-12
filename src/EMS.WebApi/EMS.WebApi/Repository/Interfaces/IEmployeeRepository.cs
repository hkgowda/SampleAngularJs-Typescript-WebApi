using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EMS.WebApi.Models;

namespace EMS.WebApi.Repository.Interfaces
{
    public interface IEmployeeRepository
    {
        EmployeeDetailsModel getEmployeeDetails();
        void postEmployeeDetails(EmployeeModel emp);
    }
}
