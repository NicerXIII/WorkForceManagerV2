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
    
    public partial class GetLatesTodays_Result
    {
        public string EmployeeNumber { get; set; }
        public string EmployeeName { get; set; }
        public string ReportID { get; set; }
        public string ReportTo { get; set; }
        public string Sponsorship { get; set; }
        public string ScheduleDate { get; set; }
        public string SchedIn { get; set; }
        public string TimeIn { get; set; }
        public Nullable<short> MinutesLate { get; set; }
        public string Late30 { get; set; }
        public string Late90 { get; set; }
    }
}
