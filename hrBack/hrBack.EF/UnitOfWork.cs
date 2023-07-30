using hrBack.core;
using hrBack.core.Interfaces;
using hrBack.core.Models;
using hrBack.EF.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public IBaseRepository<Employee> Employees { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
         
            Employees = new BaseRepository<Employee>(_context);
        }

        public int Complete()
        {
            throw new NotImplementedException();
        }
    }
}
