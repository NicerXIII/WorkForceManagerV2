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
    
    public partial class GetSchedulerNoSchedule_Result
    {
        public Nullable<int> UserLogID { get; set; }
        public Nullable<int> ScheduleID { get; set; }
        public string Day { get; set; }
        public Nullable<System.DateTime> TimeIn { get; set; }
        public Nullable<System.DateTime> TimeOut { get; set; }
        public string EarlyLogin { get; set; }
        public Nullable<System.DateTime> CoveredDate { get; set; }
        public string Schedule { get; set; }
        public Nullable<System.DateTime> SchedIn { get; set; }
        public Nullable<System.DateTime> SortIndex { get; set; }
        public string ScheduleIDDesc { get; set; }
        public string Remarks { get; set; }
    }
}
