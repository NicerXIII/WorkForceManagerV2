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
    
    public partial class GetSchedulerCompleteAttendanceEmp_Result
    {
        public string EmpNo { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string CampaignName { get; set; }
        public string Day { get; set; }
        public string Schedule { get; set; }
        public string Remarks { get; set; }
        public string TimeIn { get; set; }
        public string Timeout { get; set; }
        public Nullable<decimal> OverTime { get; set; }
        public Nullable<decimal> ApprovedOT { get; set; }
        public Nullable<decimal> Late { get; set; }
        public Nullable<decimal> UnderTime { get; set; }
        public Nullable<decimal> ND { get; set; }
        public string LoginFlag { get; set; }
    }
}
