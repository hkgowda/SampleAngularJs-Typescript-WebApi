using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EMS.WebApi.Repository.Interfaces;
using EMS.WebApi.Models;

namespace EMS.WebApi.Controllers
{
    [RoutePrefix("api/v1/employee")]
    public class EmployeeController : ApiController
    {
        private readonly IEmployeeRepository _employeeRepo;
        public EmployeeController(IEmployeeRepository employeeRepo)
        {
            _employeeRepo = employeeRepo;
        }

        [HttpGet]
        [Route("getEmployeeDetails")]
        public IHttpActionResult GetEmployeeDetails()
        {
            EmployeeDetailsModel empDetails = _employeeRepo.getEmployeeDetails();
            if (empDetails != null)
            {
                return Ok(empDetails);
            }
            else
            {
                string message = "EmployeeDetails are not available";
                return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.NotFound, message));
            }   
        }

        [HttpPut]
        [Route("postNewEmployee")]
        public IHttpActionResult PostNewEmployee(EmployeeModel emp)
        {
            _employeeRepo.postEmployeeDetails(emp);
            return Ok();
        }
    }
}
