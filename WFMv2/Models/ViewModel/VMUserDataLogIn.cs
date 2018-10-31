using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WFMv2.Models.ViewModel
{
    public class VMUserDataLogIn
    {
        public string EmpNumber { get; set; }
        public string EmpName { get; set; }
        public string EmpDepNum { get; set; }
        public string EmpPos { get; set; }
        public string EmpReportTo { get; set; }
    }

    public class VMUserDataLogInList : List<VMUserDataLogIn> { }
}