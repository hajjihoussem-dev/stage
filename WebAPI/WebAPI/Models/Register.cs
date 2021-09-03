using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Register
    {
        public long ID { get; set; }
        public string Identifiant { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string Adresse { get; set; }
        public int CodePostal { get; set; }
        public string Telephone { get; set; }
        public DateTime? Datenai { get; set; }
    }
}