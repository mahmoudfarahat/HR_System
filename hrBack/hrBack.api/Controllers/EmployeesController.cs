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
        public  IActionResult Get()
        {
            return Ok(_unit.Employees.GetAll());
        }
    }
}
