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
    
    public partial class Tracker_EmployeeInfo_Result
    {
        public string employeenumber { get; set; }
        public string name { get; set; }
        public string campaignname { get; set; }
        public Nullable<short> campaignid { get; set; }
        public string department { get; set; }
        public string schedule { get; set; }
        public Nullable<long> scheduleid { get; set; }
        public string reportto { get; set; }
        public string reporttoadd { get; set; }
        public Nullable<decimal> Sick { get; set; }
        public Nullable<decimal> Vacation { get; set; }
        public Nullable<decimal> emergency { get; set; }
        public Nullable<System.DateTime> datehired { get; set; }
    }
}
