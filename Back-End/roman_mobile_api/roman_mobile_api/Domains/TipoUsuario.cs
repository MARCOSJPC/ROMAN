using System;
using System.Collections.Generic;

#nullable disable

namespace roman_mobile_api.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public byte IdTipoUsuario { get; set; }
        public string NomeDescricao { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
