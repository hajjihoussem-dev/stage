using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Matter
    {

        public long ID { get; set; }
        public  string Identifiant { get; set; }
        public string NameMa { get; set; }
        public int Coeff { get; set; }
        public int Exam { get; set; }
        public int TP { get; set; }
        public int CC { get; set; }
    }
}