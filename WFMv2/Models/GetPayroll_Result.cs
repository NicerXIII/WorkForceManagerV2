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
    
    public partial class GetPayroll_Result
    {
        public long PayrollNumber { get; set; }
        public string EmployeeNumber { get; set; }
        public string CampaignName { get; set; }
        public string AccountNumber { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public decimal MonthlyRate { get; set; }
        public decimal BasicRate { get; set; }
        public int Lates { get; set; }
        public decimal LatesAmt { get; set; }
        public int Undertime { get; set; }
        public decimal UndertimeAmt { get; set; }
        public int Absences { get; set; }
        public decimal AbsencesAmt { get; set; }
        public int NDReg { get; set; }
        public decimal NDRegAmt { get; set; }
        public int NDRD { get; set; }
        public decimal NDRDAmt { get; set; }
        public int NDSH { get; set; }
        public decimal NDSHAmt { get; set; }
        public int NDSHR { get; set; }
        public decimal NDSHRAmt { get; set; }
        public int NDLH { get; set; }
        public decimal NDLHAmt { get; set; }
        public int NDLHR { get; set; }
        public decimal NDLHRAmt { get; set; }
        public int OTReg { get; set; }
        public decimal OTRegAmt { get; set; }
        public int OTRD { get; set; }
        public decimal OTRDAmt { get; set; }
        public Nullable<int> SH { get; set; }
        public Nullable<decimal> SHAmt { get; set; }
        public int OTSH { get; set; }
        public decimal OTSHAmt { get; set; }
        public int OTSHR { get; set; }
        public decimal OTSHRAmt { get; set; }
        public Nullable<int> LH { get; set; }
        public Nullable<decimal> LHAmt { get; set; }
        public int OTLH { get; set; }
        public decimal OTLHAmt { get; set; }
        public int OTLHR { get; set; }
        public decimal OTLHRAmt { get; set; }
        public decimal Adjustment { get; set; }
        public decimal Representation { get; set; }
        public decimal Advances { get; set; }
        public decimal GrossSalary { get; set; }
        public decimal SSS { get; set; }
        public decimal SSSLoanPayment { get; set; }
        public decimal PhilHealth { get; set; }
        public decimal HDMF { get; set; }
        public decimal SalaryWTax { get; set; }
        public decimal Tax { get; set; }
        public Nullable<decimal> Net { get; set; }
        public decimal DailyRate { get; set; }
        public decimal HourlyRate { get; set; }
        public decimal MinuteRate { get; set; }
    }
}
