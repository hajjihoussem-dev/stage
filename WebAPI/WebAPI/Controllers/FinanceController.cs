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
    public class FinanceController : ApiController
    {
        public HttpResponseMessage Get()
        {

            DataTable table = new DataTable();
            string query = @" 
                select ID, Identifiant, Nom , Prenom, Email, Mdv, Bank, Sf, Ts from dbo.Finance
                                                                ";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["GestionScoAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Finance fin)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" 
                insert into dbo.Finance(Identifiant,Nom ,Prenom,Mdv,Bank,Sf,Ts,Email) values ('" + fin.Identifiant + @"', '" + fin.Nom + @"' ,'" + fin.Prenom + @"', '" + fin.Mdv + @"', '" + fin.Bank + @"', '" + fin.Sf + @"', '" + fin.Ts + @"',  '" + fin.Email + @"')";


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
        public string Put(Finance fin)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" 
                update dbo.Finance set Identifiant='" + fin.Identifiant + @"',Nom='" + fin.Nom + @"', Prenom='" + fin.Prenom + @"', Mdv='" + fin.Mdv + @"', Bank='" + fin.Bank + @"', Sf='" + fin.Sf + @"', Ts='" + fin.Ts + @"', Email='" + fin.Email + @"' where ID=" + fin.ID + @" ";

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
                delete from dbo.Finance where ID=" + id;

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