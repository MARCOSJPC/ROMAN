using roman_mobile_api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman_mobile_api.Interfaces
{
    interface IprojetoRepository
    {
        /// <summary>
        /// Lista todos os Projetos
        /// </summary>
        /// <returns>Uma lista de Projetos</returns>
        List<Projeto> Listar();

        /// <summary>
        /// Cadastra um novo Projeto
        /// </summary>
        /// <param name="novoProjeto">Objeto novoProjeto com os dados que serão cadastrados</param>
        void Cadastrar(Projeto novoProjeto);

    }
}
