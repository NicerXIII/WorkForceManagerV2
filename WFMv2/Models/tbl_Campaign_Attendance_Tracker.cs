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
    
    public partial class tbl_Campaign_Attendance_Tracker
    {
        public int Id { get; set; }
        public string EmployeeNo { get; set; }
        public string Name { get; set; }
        public string CampaignName { get; set; }
        public Nullable<System.DateTime> Month { get; set; }
        public Nullable<decimal> Late { get; set; }
        public Nullable<decimal> Undertime { get; set; }
    }
}
