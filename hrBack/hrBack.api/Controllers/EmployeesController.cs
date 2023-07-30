using hrBack.core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hrBack.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IUnitOfWork _unit;

        public EmployeesController(IUnitOfWork unit)
        {
           _unit = unit;
        }

        [HttpGet]
        public  IActionResult Get(int start = 0 , int length = 10)
        {
            return Ok(_unit.Employees.GetAll(start, length));
        }
    }
}
