using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WFMv2.Models.ViewModel;
using WFMv2.Models;

namespace WFMv2.Controllers
{
    public class LogInController : Controller
    {
        // GET: LogIn
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult LogIn(VMLogIn model)
        {
            var stats = "";
            var response = new JsonResult();
            if (model != null)
            {
                if (model.Server == "1")
                {
                    try
                    {
                        PayrollEntities db = new PayrollEntities();
                        var logInDataT = db.EmployeeKioskLoginUser(model.Username, model.Password).SingleOrDefault();
                        if (logInDataT != null)
                        {
                            Session["EmployeeNumber"] = logInDataT.EmployeeNumber.ToString();
                            Session["EmployeeName"] = logInDataT.EmployeeName.ToString();
                            Session["EmployeeDeptName"] = logInDataT.Department.ToString();
                            Session["EmployeePositionName"] = logInDataT.Position_name.ToString();
                            Session["EmployeeReportTo"] = logInDataT.ReportTo.ToString();
                            stats = "T";
                            //return RedirectToAction("Index", "Home");
                            //return View("~/Views/Home/Index.cshtml");
                        }
                        else
                        {
                            stats = "F";
                        }
                    }
                    catch (Exception ex) { }
                    response.Data = new
                    {
                        result = stats
                    };
                }
                else if (model.Server == "2" && model.Server != "1")
                {
                    try
                    {
                        ServiceNowDAL Scon = new ServiceNowDAL();
                        var logInDataS = Scon.LogInUser(model.Username, model.Password).SingleOrDefault();
                        if (logInDataS != null)
                        {
                            Session["EmployeeNumber"] = logInDataS.EmpNumber.ToString();
                            Session["EmployeeName"] = logInDataS.EmpName.ToString();
                            Session["EmployeeDeptName"] = logInDataS.EmpDepNum.ToString();
                            Session["EmployeePositionName"] = logInDataS.EmpPos.ToString();
                            Session["EmployeeReportTo"] = logInDataS.EmpReportTo.ToString();
                            stats = "S";
                        }
                        else
                        {
                            stats = "F";
                        }

                    }
                    catch (Exception ex) { }
                    response.Data = new
                    {
                        result = stats
                    };
                }
            }

            return response;
        }
    }
}