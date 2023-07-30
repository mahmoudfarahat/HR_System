using hrBack.core.Dto;
using hrBack.core.Interfaces;
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

        public DataTableDto<T> GetAll(int start, int lenght)
        {
            var query = _context.Set<T>().Skip(start)
                 .Take(lenght);

            var count = _context.Set<T>().Count();


            return  new DataTableDto<T>
            {
                data =   query.ToList(),
                recordsFiltered = count,
                recordsTotal = count
            };
        }
    }
}
