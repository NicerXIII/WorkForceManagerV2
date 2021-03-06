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
    
    public partial class GetPayroll4MetricCost2_Result
    {
        public Nullable<int> PayID { get; set; }
        public Nullable<System.DateTime> MetricDateFrom { get; set; }
        public Nullable<System.DateTime> MetricDateTo { get; set; }
        public Nullable<int> PayrollNumber { get; set; }
        public Nullable<System.DateTime> PayDate { get; set; }
        public Nullable<System.DateTime> PeriodStart { get; set; }
        public Nullable<System.DateTime> PeriodEnd { get; set; }
        public string EmployeeNumber { get; set; }
        public string EmployeeName { get; set; }
        public string Campaign { get; set; }
        public Nullable<decimal> BasicRate { get; set; }
        public Nullable<int> Lates { get; set; }
        public Nullable<decimal> LatesAmt { get; set; }
        public Nullable<int> Undertime { get; set; }
        public Nullable<decimal> UndertimeAmt { get; set; }
        public Nullable<int> Absences { get; set; }
        public Nullable<decimal> AbsencesAmt { get; set; }
        public Nullable<int> OT { get; set; }
        public Nullable<decimal> OTamt { get; set; }
        public Nullable<decimal> Basicsalary { get; set; }
        public Nullable<decimal> Grosssalary { get; set; }
        public Nullable<decimal> GrossPayPerHour { get; set; }
        public Nullable<decimal> PayrollHours { get; set; }
        public Nullable<decimal> MetricHours { get; set; }
        public Nullable<decimal> FullyLoadedRatePerHour { get; set; }
        public Nullable<decimal> Cost { get; set; }
    }
}
