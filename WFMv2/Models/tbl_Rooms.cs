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
    
    public partial class tbl_Rooms
    {
        public int ID { get; set; }
        public string Room_Name { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Audit_User { get; set; }
    }
}
