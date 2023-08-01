using hrBack.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Specifications
{
    public class EmployeeFilter : MainFilter<Employee> 
    {
        private readonly string _search;

        public EmployeeFilter(string search)
        {
            _search = search;
        }

        public override Expression<Func<Employee, bool>> GetExpression()
        {
            return a => a.Name.Contains(_search) || a.EmployeeCode.Contains(_search);
        }
    }
}
 