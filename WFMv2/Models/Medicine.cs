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
    
    public partial class Medicine
    {
        public string EmployeeNumber { get; set; }
        public string MedicineName { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<System.DateTime> DateTaken { get; set; }
        public Nullable<System.DateTime> AuditDate { get; set; }
        public string TypeOfSick { get; set; }
        public int MedicineID { get; set; }
    }
}