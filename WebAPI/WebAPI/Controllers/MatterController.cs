using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http; 
using System.Web.Http;
using WebAPI.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebAPI.Controllers
{
    public class MatterController : ApiController
    {
       public HttpResponseMessage Get()
        {

            DataTable table = new DataTable();
            string query = @" 
                select ID, Identifiant, NameMa , Coeff, Exam, TP, CC from dbo.Matt
                                                                ";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["GestionScoAppDB"].ConnectionString)) 
            using (var cmd = new SqlCommand(query, con)) 
                using (var da=new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK,table);
        }
        public string Post(Matter mat)
        {
            try 
            {
                DataTable table = new DataTable();
                string query = @" 
                insert into dbo.Matt(Identifiant,NameMa,Coeff,Exam,TP,CC) values ('" + mat.Identifiant + @"', '" + mat.NameMa + @"' ,'" + mat.Coeff + @"', '" + mat.Exam + @"', '" + mat.TP + @"', '" + mat.CC + @"')";


                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["GestionScoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Succesfully";
            }
            catch (Exception)
            {
                return "Failed to Added";
            }
        }
        public string Put(Matter mat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" 
                update dbo.Matt set Identifiant='"+mat.Identifiant+ @"',NameMa='" + mat.NameMa + @"', Coeff='" + mat.Coeff + @"', Exam='" + mat.Exam + @"', TP='" + mat.TP + @"', CC='" + mat.CC + @"' where ID=" + mat.ID +@" ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["GestionScoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Succesfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }
        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" 
                delete from dbo.Matt where ID=" +id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["GestionScoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Succesfully";
            }
            catch (Exception)
            {
                return "Failed to delete";
            }
        }
    }
}
