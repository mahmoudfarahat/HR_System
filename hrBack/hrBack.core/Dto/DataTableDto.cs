using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Dto
{
    public class DataTableDto<T> where T : class
    {
         
        public IEnumerable<T> data { get; set; }
        /// <summary>
        /// The Total Number of Filtered Records 
        /// </summary>
        public int recordsFiltered { get; set; }
        /// <summary>
        /// The Total Number of Records
        /// </summary>
        public int recordsTotal { get; set; }
    }
}
