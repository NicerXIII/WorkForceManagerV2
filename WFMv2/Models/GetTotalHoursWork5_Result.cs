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
    
    public partial class GetTotalHoursWork5_Result
    {
        public string EmployeeNumber { get; set; }
        public string EmployeeName { get; set; }
        public string CampaignName { get; set; }
        public string SchedIn { get; set; }
        public string TimeIn { get; set; }
        public string SchedOut { get; set; }
        public string TimeOut { get; set; }
        public Nullable<int> TotalHours { get; set; }
        public Nullable<int> Late { get; set; }
        public Nullable<int> Undertime { get; set; }
        public Nullable<int> TotalOTH { get; set; }
    }
}
