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
    
    public partial class EmployeeKioskGetAbsencesandLates_Result
    {
        public string EmpID { get; set; }
        public string Name { get; set; }
        public string SchedDate { get; set; }
        public string DayOfWeek { get; set; }
        public string SchedIn { get; set; }
        public string SchedOut { get; set; }
        public string TimeIn { get; set; }
        public string TimeOut { get; set; }
        public Nullable<double> Late { get; set; }
        public Nullable<System.DateTime> ScheduleDatetime { get; set; }
        public string Remarks { get; set; }
        public Nullable<int> UserlogID { get; set; }
    }
}