using hrBack.core.Interfaces;
using hrBack.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core
{
    public interface IUnitOfWork
    {
        IBaseRepository<Employee> Employees { get; }

 

        int Complete();
    }
}
