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
    
    public partial class EmployeeKioskValidateRoom_Result
    {
        public long ID { get; set; }
        public string Emp_No { get; set; }
        public string Room { get; set; }
        public string Purpose { get; set; }
        public Nullable<System.DateTime> DateFrom { get; set; }
        public Nullable<System.DateTime> DateTo { get; set; }
        public Nullable<System.TimeSpan> TimeFrom { get; set; }
        public Nullable<System.TimeSpan> TimeTo { get; set; }
        public string Equipments { get; set; }
        public string Status { get; set; }
        public string Approved_by { get; set; }
        public string Remarks { get; set; }
    }
}
