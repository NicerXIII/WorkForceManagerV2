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
    
    public partial class Employee_Rate
    {
        public string EmployeeNumber { get; set; }
        public double PerMonth { get; set; }
        public double PerHalfMonth { get; set; }
        public double PerDay { get; set; }
        public double PerHour { get; set; }
        public double PerMinute { get; set; }
        public Nullable<decimal> Representation { get; set; }
        public Nullable<decimal> Allowance { get; set; }
        public Nullable<decimal> TaxShield { get; set; }
        public Nullable<decimal> Transpo { get; set; }
        public Nullable<decimal> L2Incentive { get; set; }
    }
}