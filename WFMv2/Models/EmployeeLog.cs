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
    
    public partial class EmployeeLog
    {
        public int UserlogID { get; set; }
        public string EmployeeNumber { get; set; }
        public Nullable<System.DateTime> TimeIn { get; set; }
        public Nullable<System.DateTime> Timeout { get; set; }
        public Nullable<double> Regular { get; set; }
        public Nullable<int> Overtime { get; set; }
        public string StatusOT { get; set; }
        public string OTReason { get; set; }
        public Nullable<decimal> ApprovedOT { get; set; }
        public Nullable<double> OTRD { get; set; }
        public Nullable<double> ApprovedOTRD { get; set; }
        public Nullable<double> SH { get; set; }
        public Nullable<double> OTSH { get; set; }
        public Nullable<double> ApprovedOTSH { get; set; }
        public Nullable<double> OTSHR { get; set; }
        public Nullable<double> ApprovedOTSHR { get; set; }
        public Nullable<double> LH { get; set; }
        public Nullable<double> OTLH { get; set; }
        public Nullable<double> ApprovedOTLH { get; set; }
        public Nullable<double> OTLHR { get; set; }
        public Nullable<double> ApprovedOTLHR { get; set; }
        public Nullable<int> NightDifferential { get; set; }
        public Nullable<int> NDRD { get; set; }
        public Nullable<int> NDSH { get; set; }
        public Nullable<int> NDSHR { get; set; }
        public Nullable<int> NDLH { get; set; }
        public Nullable<int> NDLHR { get; set; }
        public Nullable<double> NDOTReg { get; set; }
        public Nullable<double> NDOTRD { get; set; }
        public Nullable<double> NDOTSH { get; set; }
        public Nullable<double> NDOTSHR { get; set; }
        public Nullable<double> NDOTLH { get; set; }
        public Nullable<double> NDOTLHR { get; set; }
        public Nullable<int> Undertime { get; set; }
        public Nullable<int> Late { get; set; }
        public Nullable<int> ScheduleID { get; set; }
        public string EarlyLogin { get; set; }
        public string AttendanceType { get; set; }
        public string AuditUser { get; set; }
        public Nullable<System.DateTime> AuditDate { get; set; }
        public Nullable<long> LeaveFiledID { get; set; }
        public string HL { get; set; }
        public Nullable<double> ApprovedTranspo { get; set; }
        public string TimeOutCode { get; set; }
        public string InLocation { get; set; }
        public string OutLocation { get; set; }
    }
}
