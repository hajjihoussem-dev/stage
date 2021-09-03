using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Finance
    {
        public long ID { get; set; }
        public string Identifiant { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Mdv { get; set; }
        public string Bank { get; set; }
        public string  Sf { get; set; }
        public string Ts { get; set; }
        public string Email { get; set; }

    }
}