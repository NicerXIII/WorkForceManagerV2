using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WFMv2.Models.ViewModel;

namespace WFMv2.Models
{
    public class ServiceNowDAL
    {
        string Cons = ConfigurationManager.ConnectionStrings["PayRollExtensionCon"].ConnectionString;



        public VMUserDataLogInList LogInUser(string ID, string Pass)
        {
            VMUserDataLogInList UserDataList = new VMUserDataLogInList();

            using (SqlConnection con = new SqlConnection(Cons))
            {
                using (SqlCommand cmd = new SqlCommand("EmployeeKioskLoginUser", con))
                {
                    try
                    {
                        con.Open();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@EmployeeNumber", SqlDbType.VarChar).Value = ID;
                        cmd.Parameters.Add("@Password", SqlDbType.VarChar).Value = Pass;
                        SqlDataReader dr = cmd.ExecuteReader();
                        while (dr.Read())
                        {
                            VMUserDataLogIn uData = new VMUserDataLogIn();
                            uData.EmpNumber = dr["EmployeeNumber"].ToString();
                            uData.EmpName = dr["EmployeeName"].ToString();
                            uData.EmpDepNum = dr["Department"].ToString();
                            uData.EmpPos = dr["Position_name"].ToString();
                            uData.EmpReportTo = dr["ReportTo"].ToString();
                            UserDataList.Add(uData);
                        }
                        return UserDataList;
                    }
                    catch (Exception ex)
                    {

                    }
                    finally
                    {
                        con.Close();
                    }
                }
            }
            return null;
        }



    }
}