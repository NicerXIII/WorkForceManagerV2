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
    
    public partial class GetPreviousMetricsDetails_Result
    {
        public long MetricsID { get; set; }
        public string EmployeeID { get; set; }
        public string CampaignName { get; set; }
        public double Regular { get; set; }
        public double OT { get; set; }
        public string Remarks { get; set; }
        public System.DateTime DateCreated { get; set; }
        public long UserlogID { get; set; }
    }
}
