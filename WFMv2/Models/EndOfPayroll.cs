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
    using System.Collections.Generic;
    
    public partial class EndOfPayroll
    {
        public int ID { get; set; }
        public string EmployeeNumber { get; set; }
        public System.DateTime Date { get; set; }
        public string Remarks { get; set; }
        public string AuditUser { get; set; }
        public System.DateTime AuditDate { get; set; }
    }
}
