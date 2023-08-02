using hrBack.core.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        DataTableDto<TResult> GetAll<TResult>(int start, int length, Expression<Func<T, bool>> Filter ,Expression<Func<T, bool>>?  special   , Expression<Func<T, TResult>> select) where TResult : class;
    }
}
