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
    
    public partial class EmployeeKioskGetLeaveFiledByEmployee_Result
    {
        public long LeaveID { get; set; }
        public string DateFiled { get; set; }
        public Nullable<System.DateTime> LeaveFrom { get; set; }
        public Nullable<System.DateTime> LeaveTo { get; set; }
        public decimal LeaveCount { get; set; }
        public string Type { get; set; }
        public string Reason { get; set; }
        public string WithPay { get; set; }
    }
}
