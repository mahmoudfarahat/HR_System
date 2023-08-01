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
        public  IActionResult Get(string? search ,string? special, int start = 0 , int length = 10)
        {
            if(search == null)
            {
                search = "";
            }
            if (special == null)
            {
                special = "";
            }
            return Ok(_unit.Employees.GetAll(start, length,

                  (new EmployeeFilter()).FilterAll(search)
                ,
                    (new EmployeeFilter()).SpecialFilter(special),
                a => new {
                    Id = a.Id,
                    Code = a.EmployeeCode,
                    SNN = a.SNN,
                    Name = a.Name,
                    Email = a.Email,
                    HireDate= a.HireDate,
                    HomePhone = a.HomePhone,
                    MobilePhone  =a.MobilePhone,
                    OfficePhone = a.OfficePhone






 

    }));
        }
    }
}
