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
    
    public partial class GetPayslipX_Result
    {
        public System.DateTime PayDate { get; set; }
        public System.DateTime PeriodStart { get; set; }
        public System.DateTime PeriodEnd { get; set; }
        public int ID { get; set; }
        public long PayrollNumber { get; set; }
        public string EmployeeNumber { get; set; }
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
        public decimal NonTaxableLoans { get; set; }
        public decimal TaxableLoans { get; set; }
        public decimal SalaryWTax { get; set; }
        public decimal Tax { get; set; }
        public decimal Net { get; set; }
        public decimal DailyRate { get; set; }
        public decimal HourlyRate { get; set; }
        public decimal MinuteRate { get; set; }
        public Nullable<decimal> TaxShield { get; set; }
        public string TaxCode { get; set; }
        public string Name { get; set; }
        public Nullable<int> CivilStatus { get; set; }
        public string TinNo { get; set; }
        public string SSSNo { get; set; }
        public string Department { get; set; }
        public string Position { get; set; }
        public string EmployeeType { get; set; }
        public Nullable<decimal> Rep { get; set; }
        public Nullable<decimal> Transpo { get; set; }
        public Nullable<decimal> Spiff { get; set; }
        public Nullable<decimal> C13TH { get; set; }
        public Nullable<decimal> TaxRefund { get; set; }
        public Nullable<decimal> Adjust { get; set; }
        public Nullable<decimal> Meal { get; set; }
        public Nullable<decimal> Sick { get; set; }
        public Nullable<decimal> Vacation { get; set; }
        public Nullable<decimal> Emergency { get; set; }
        public Nullable<decimal> Maternity { get; set; }
        public Nullable<decimal> Paternity { get; set; }
        public Nullable<decimal> Used_SL { get; set; }
        public Nullable<decimal> Used_VL { get; set; }
        public Nullable<decimal> Used_EL { get; set; }
        public Nullable<decimal> Used_ML { get; set; }
        public Nullable<decimal> Used_PL { get; set; }
    }
}
