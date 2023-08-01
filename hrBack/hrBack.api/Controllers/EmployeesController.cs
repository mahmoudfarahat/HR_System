using hrBack.core;
using hrBack.core.Specifications;
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
        public  IActionResult Get(string? search ,int start = 0 , int length = 10)
        {
            if(search == null)
            {
                search = "";
            }
            return Ok(_unit.Employees.GetAll(start, length,
                  (new EmployeeFilter(search)).GetExpression()
                ,
                a=> new {
                    id = a.Id,
                    code = a.EmployeeCode,
                    name = a.Name,
                    email = a.Email,

            }));
        }
    }
}
