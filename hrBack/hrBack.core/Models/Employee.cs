using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string SNN { get; set; }
        public string EmployeeCode { get; set; }

        public string Email { get; set; }

        public DateTime HireDate { get; set; }

        public string HomePhone { get; set; }

        public string MobilePhone { get; set; }

        public string OfficePhone { get; set; }


    }
}
