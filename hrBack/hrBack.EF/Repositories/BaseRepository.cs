using hrBack.core.Dto;
using hrBack.core.Interfaces;
using hrBack.core.Specifications;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.EF.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;

        public BaseRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public DataTableDto<TResult> GetAll<TResult>(int start, int length, Expression<Func<T, bool>> Filter, Expression<Func<T, bool>> special, Expression<Func<T, TResult>> select) where TResult : class
        {


            var query = _context.Set<T>().Where(Filter);

            if(special != null)
            {
                query = query.Where(special);
            }

            query = query.Skip(start)
                 .Take(length);



            var count = _context.Set<T>().Count();


            return  new DataTableDto<TResult>
            {
                data =   query.Select(select).ToList(),
                recordsFiltered = count,
                recordsTotal = count
            };
        }
    }
}
