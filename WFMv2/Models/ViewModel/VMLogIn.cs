using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WFMv2.Models.ViewModel
{
    public class VMLogIn
    {
        [Required(ErrorMessage ="Please enter you username")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Please enter you password")]
        public string Password { get; set; }
        public string Server { get; set; }
    }
}