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
    
    public partial class GetSchedulerCompleteAttendanceSummary_Result
    {
        public string EmployeeNumber { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string CompleteName { get; set; }
        public Nullable<int> NumDaysNoSchedule { get; set; }
        public Nullable<int> NumDaysLate { get; set; }
        public Nullable<int> NumDaysUndertime { get; set; }
        public Nullable<int> NumDaysAbsent { get; set; }
        public Nullable<int> NumDaysRestDay { get; set; }
        public Nullable<int> NumDaysLeave { get; set; }
        public Nullable<int> NumDaysSL { get; set; }
        public Nullable<int> NumDaysEL { get; set; }
        public Nullable<int> NumDaysVL { get; set; }
        public Nullable<int> NumDaysLWOP { get; set; }
        public Nullable<decimal> TotalOvertime { get; set; }
        public Nullable<decimal> TotalApprovedOT { get; set; }
    }
}