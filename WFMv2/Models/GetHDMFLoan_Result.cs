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
    
    public partial class GetHDMFLoan_Result
    {
        public Nullable<double> MonthlyAmortization { get; set; }
        public decimal LoanPayment { get; set; }
        public string Period { get; set; }
        public Nullable<double> Balance { get; set; }
        public Nullable<double> TotalPayable { get; set; }
        public double LoanAmount { get; set; }
        public string DateIssued { get; set; }
        public string DeductionStart { get; set; }
        public string Remarks { get; set; }
        public string AuditUser { get; set; }
        public System.DateTime AuditDate { get; set; }
    }
}
