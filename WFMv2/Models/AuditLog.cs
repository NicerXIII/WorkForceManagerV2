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
    
    public partial class AuditLog
    {
        public int ID { get; set; }
        public string Employeenumber { get; set; }
        public string Module { get; set; }
        public string Status { get; set; }
        public string Remarks { get; set; }
        public System.DateTime AuditDate { get; set; }
        public string ClientPcName { get; set; }
        public string IPAddress { get; set; }
        public string WSFootPrint { get; set; }
    }
}
