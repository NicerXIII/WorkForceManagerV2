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
    
    public partial class NDComputation
    {
        public System.Guid EmpID { get; set; }
        public string EmpNo { get; set; }
        public string Name { get; set; }
        public Nullable<decimal> PerDay { get; set; }
        public Nullable<decimal> TotalOT { get; set; }
        public Nullable<decimal> TotalND { get; set; }
        public Nullable<decimal> SH { get; set; }
        public Nullable<decimal> OTSH { get; set; }
        public Nullable<decimal> NDSH_HRS { get; set; }
    }
}
