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
    
    public partial class tbl_notification
    {
        public long id { get; set; }
        public string notif_title { get; set; }
        public string notif_content { get; set; }
        public string notif_image { get; set; }
        public Nullable<System.DateTime> notif_datetime { get; set; }
        public Nullable<long> emp_no { get; set; }
    }
}
