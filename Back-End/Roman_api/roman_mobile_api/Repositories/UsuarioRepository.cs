using Microsoft.EntityFrameworkCore;
using roman_mobile_api.Contexts;
using roman_mobile_api.Domains;
using roman_mobile_api.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace roman_mobile_api.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        RomanContext ctx = new RomanContext();


        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);





        }
    }
}
