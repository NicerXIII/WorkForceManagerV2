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
    
    public partial class PayslipHeaders_Result
    {
        public int ID { get; set; }
        public long PayrollNumber { get; set; }
        public string PayDate { get; set; }
        public string CutOffPeriod { get; set; }
        public Nullable<decimal> Earnings { get; set; }
        public Nullable<decimal> Deductions { get; set; }
        public Nullable<decimal> SSS { get; set; }
        public Nullable<decimal> SSSLoanPayment { get; set; }
        public Nullable<decimal> PhilHealth { get; set; }
        public Nullable<decimal> HDMF { get; set; }
        public Nullable<decimal> Tax { get; set; }
        public Nullable<decimal> Net { get; set; }
        public Nullable<decimal> SalaryWithTax { get; set; }
    }
}
