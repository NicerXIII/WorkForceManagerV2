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
    
    public partial class EmployeeDispute
    {
        public long ID { get; set; }
        public string EmployeeNumber { get; set; }
        public string CampaignID { get; set; }
        public Nullable<decimal> AdjustmentAmt { get; set; }
        public int Type { get; set; }
        public System.DateTime DateOccurred { get; set; }
        public System.DateTime PeriodStart { get; set; }
        public System.DateTime PeriodEnd { get; set; }
        public string Remarks { get; set; }
        public string AuditUser { get; set; }
        public System.DateTime AuditDate { get; set; }
        public int Status { get; set; }
        public string SecurityNotes { get; set; }
        public Nullable<long> SecurityID { get; set; }
        public Nullable<decimal> TaxableAmt { get; set; }
        public string FinanceNotes { get; set; }
    }
}