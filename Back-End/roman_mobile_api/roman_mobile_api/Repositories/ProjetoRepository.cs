using roman_mobile_api.Contexts;
using roman_mobile_api.Domains;
using roman_mobile_api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman_mobile_api.Repositories
{
    public class ProjetoRepository : IprojetoRepository
    {
        RomanContext ctx = new RomanContext();
        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);

            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos.ToList();
        }
    }
}
