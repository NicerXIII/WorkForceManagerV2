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
    
    public partial class GetEmpActualHoursAgentsNewREV30_Result
    {
        public string EmpNo { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Active { get; set; }
        public string Campaign { get; set; }
        public Nullable<decimal> Schedhours { get; set; }
        public Nullable<decimal> Lates { get; set; }
        public Nullable<decimal> Undertime { get; set; }
        public Nullable<decimal> ActualOTHours { get; set; }
        public Nullable<decimal> ApprovedOTHours { get; set; }
        public Nullable<decimal> HolidayHours { get; set; }
        public Nullable<decimal> Totalhours { get; set; }
    }
}
