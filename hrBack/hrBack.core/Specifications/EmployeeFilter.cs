using hrBack.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Specifications
{
    public class EmployeeFilter : MainFilter<Employee>
    {
   

        public override Expression<Func<Employee, bool>> FilterAll(string search)
        {
         
            return a => a.Name.Contains(search) || a.EmployeeCode.Contains(search);
        }

        public override Expression<Func<Employee, bool>> SpecialFilter(string special)
        {
            if( special != ""  )
            {
                var parameter = Expression.Parameter(typeof(Employee), "a");

                var expression = DynamicExpressionParser.ParseLambda(new[] { parameter }, null, special);

                return (Expression<Func<Employee, bool>>)expression;
            }
            return null;
        }
    }
}
 