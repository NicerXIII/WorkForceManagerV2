//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WFMv2.Models
{
    using System;
    
    public partial class Report_GetMonthylEmployeeLeavesDetailedREV_Result
    {
        public long leaveid { get; set; }
        public string employeenumber { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public Nullable<System.DateTime> datefiled { get; set; }
        public Nullable<System.DateTime> leavefrom { get; set; }
        public Nullable<System.DateTime> leaveto { get; set; }
        public Nullable<decimal> leavecount { get; set; }
        public string type { get; set; }
        public string reason { get; set; }
    }
}
