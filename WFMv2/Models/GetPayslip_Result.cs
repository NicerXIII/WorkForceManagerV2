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
    
    public partial class GetPayslip_Result
    {
        public Nullable<System.DateTime> PayDate { get; set; }
        public Nullable<System.DateTime> PeriodStart { get; set; }
        public Nullable<System.DateTime> PeriodEnd { get; set; }
        public int ID { get; set; }
        public long PayrollNumber { get; set; }
        public string EmployeeNumber { get; set; }
        public Nullable<decimal> MonhtlyRate { get; set; }
        public decimal BasicRate { get; set; }
        public Nullable<decimal> Lates { get; set; }
        public Nullable<decimal> LatesAmt { get; set; }
        public Nullable<decimal> Undertime { get; set; }
        public Nullable<decimal> UnderTimeAmt { get; set; }
        public decimal regularhours { get; set; }
        public Nullable<decimal> Absences { get; set; }
        public Nullable<decimal> AbsencesAmt { get; set; }
        public Nullable<decimal> NDRegAmt { get; set; }
        public Nullable<decimal> NDReg { get; set; }
        public Nullable<int> NDRD { get; set; }
        public Nullable<int> NDRDAmt { get; set; }
        public Nullable<int> NDSH { get; set; }
        public Nullable<int> NDSHAmt { get; set; }
        public Nullable<int> NDSHR { get; set; }
        public Nullable<int> NDSHRAmt { get; set; }
        public Nullable<int> NDLH { get; set; }
        public Nullable<int> NDLHAmt { get; set; }
        public Nullable<decimal> NDLHR { get; set; }
        public Nullable<decimal> NDLHRAmt { get; set; }
        public Nullable<decimal> SH { get; set; }
        public Nullable<decimal> SHAmt { get; set; }
        public Nullable<decimal> LH { get; set; }
        public Nullable<decimal> LHAmt { get; set; }
        public Nullable<decimal> TotalOT { get; set; }
        public Nullable<decimal> TotalOTHours { get; set; }
        public Nullable<decimal> OTReg { get; set; }
        public Nullable<decimal> OTRD { get; set; }
        public int OTRDAmt { get; set; }
        public Nullable<decimal> OTSH { get; set; }
        public Nullable<decimal> OTSHAmt { get; set; }
        public Nullable<decimal> OTSHR { get; set; }
        public Nullable<decimal> OTSHRAmt { get; set; }
        public Nullable<decimal> OTLH { get; set; }
        public Nullable<decimal> OTLHAmt { get; set; }
        public Nullable<decimal> OTLHR { get; set; }
        public Nullable<decimal> OTLHRAmt { get; set; }
        public int Adjustment { get; set; }
        public int Representation { get; set; }
        public Nullable<decimal> Advances { get; set; }
        public Nullable<decimal> GrossSalary { get; set; }
        public Nullable<decimal> SSS { get; set; }
        public Nullable<decimal> SSSLoanPayment { get; set; }
        public Nullable<decimal> HDMFPayment { get; set; }
        public Nullable<decimal> PhilHealth { get; set; }
        public Nullable<decimal> HDMF { get; set; }
        public Nullable<int> NonTaxableLoans { get; set; }
        public Nullable<int> TaxableLoans { get; set; }
        public Nullable<decimal> SalaryWTax { get; set; }
        public Nullable<decimal> Tax { get; set; }
        public Nullable<decimal> Net { get; set; }
        public Nullable<int> DailyRate { get; set; }
        public Nullable<int> HourlyRate { get; set; }
        public Nullable<int> MinuteRate { get; set; }
        public Nullable<int> TaxShield { get; set; }
        public string TaxCode { get; set; }
        public string Name { get; set; }
        public Nullable<int> CivilStatus { get; set; }
        public Nullable<int> TinNo { get; set; }
        public Nullable<int> SSSNo { get; set; }
        public string Department { get; set; }
        public Nullable<int> Position { get; set; }
        public Nullable<int> EmployeeType { get; set; }
        public Nullable<decimal> Rep { get; set; }
        public Nullable<decimal> Transpo { get; set; }
        public Nullable<decimal> Spiff { get; set; }
        public Nullable<decimal> C13TH { get; set; }
        public Nullable<decimal> TaxRefund { get; set; }
        public Nullable<decimal> Adjust { get; set; }
        public Nullable<decimal> Meal { get; set; }
        public Nullable<decimal> AbsencesAmount { get; set; }
        public Nullable<decimal> AbsencesHours { get; set; }
        public Nullable<int> Sick { get; set; }
        public Nullable<int> Vacation { get; set; }
        public Nullable<int> Emergency { get; set; }
        public Nullable<int> Maternity { get; set; }
        public Nullable<int> Paternity { get; set; }
        public Nullable<int> Used_SL { get; set; }
        public Nullable<int> Used_VL { get; set; }
        public Nullable<int> Used_EL { get; set; }
        public Nullable<int> Used_ML { get; set; }
        public Nullable<int> Used_PL { get; set; }
    }
}