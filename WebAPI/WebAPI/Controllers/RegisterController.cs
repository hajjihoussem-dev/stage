using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class RegisterController : ApiController
    {


        public HttpResponseMessage Get()
        {

            DataTable table = new DataTable();
            string query = @" 
                select ID, Identifiant, Nom, Prenom, Email, Adresse, CodePostal, Telephone, Datenai from dbo.Registre 
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
        public string Post(Register reg)
        {
            try
            {
                DataTable table = new DataTable();

                string datenai = reg.Datenai.ToString().Split(' ')[0];
                string query = @" 
                insert into dbo.Registre(Identifiant,Nom,Prenom,Email,Adresse,CodePostal,Telephone,Datenai) values ('" + reg.Identifiant + @"', '" + reg.Nom + @"' ,'" + reg.Prenom + @"', '" + reg.Email + @"', '" + reg.Adresse + @"', '" + reg.CodePostal + @"', '" + reg.Telephone + @"', '" + reg.Datenai + @"')";

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
            public string Put(Register reg)
            {
                try
                {
                    DataTable table = new DataTable();
                    string query = @" 
                update dbo.Registre set Identifiant='" + reg.Identifiant + @"', Nom='" + reg.Nom + @"', Prenom='" + reg.Prenom + @"', Email='" + reg.Email + @"' , Adresse='" + reg.Adresse + @"', CodePostal='" + reg.CodePostal + @"', Telephone='" + reg.Telephone + @"', Datenai='" + reg.Datenai + @"'  where ID=" + reg.ID + @" ";

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
                delete from dbo.Registre where ID=" + id;

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

