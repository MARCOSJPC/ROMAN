using System;
using System.Collections.Generic;

#nullable disable

namespace roman_mobile_api.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public string NomeProjeto { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdTema { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
