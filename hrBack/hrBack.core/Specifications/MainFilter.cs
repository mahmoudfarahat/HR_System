using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Specifications
{
    public abstract class MainFilter<T>
    {

        public abstract Expression<Func<T, bool>> GetExpression();




    }
}
