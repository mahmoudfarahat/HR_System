﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hrBack.core.Models
{
    public class AuthModel
    {
        public string Message { get; set; }

        public bool  IsAuthenticated { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public List<String> Roles { get; set; }

        public string Token { get; set; }

        public DateTime ExpiresOn { get; set; }



    }
}
