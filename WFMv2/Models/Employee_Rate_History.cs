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
    
    public partial class Employee_Rate_History
    {
        public long Id { get; set; }
        public string EmployeeNumber { get; set; }
        public Nullable<double> PerMonth { get; set; }
        public Nullable<double> PerHalfMonth { get; set; }
        public Nullable<double> PerDay { get; set; }
        public Nullable<double> PerHour { get; set; }
        public Nullable<double> PerMinute { get; set; }
        public Nullable<decimal> Representation { get; set; }
        public Nullable<decimal> Allowance { get; set; }
        public Nullable<decimal> TaxShield { get; set; }
        public Nullable<decimal> Transpo { get; set; }
        public Nullable<decimal> L2Incentive { get; set; }
        public Nullable<System.DateTime> RepresentationDatetime { get; set; }
        public Nullable<System.DateTime> AllowanceDatetime { get; set; }
        public Nullable<System.DateTime> PerMonthDatetime { get; set; }
        public string Remarks { get; set; }
        public string AuditUser { get; set; }
    }
}
