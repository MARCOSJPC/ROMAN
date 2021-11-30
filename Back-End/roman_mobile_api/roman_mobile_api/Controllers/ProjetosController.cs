using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using roman_mobile_api.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using roman_mobile_api.Repositories;
using Microsoft.AspNetCore.Authorization;
using roman_mobile_api.Domains;

namespace roman_mobile_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IprojetoRepository _projetosRepository { get; set; }

        public ProjetosController()
        {
            _projetosRepository = new ProjetoRepository();
        }

        /// <summary>
        /// Lista todos os projetos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_projetosRepository.Listar());
        }

        /// <summary>
        /// Cadastra um novo projeto
        /// </summary>
        /// <param name="novoProjeto">objeto que será cadastrado</param>
        /// <returns>um status code 201: no content</returns>
        [Authorize(Roles = "2")]
        [HttpPost]
        public IActionResult Cadastrar(Projeto novoProjeto)
        {
            _projetosRepository.Cadastrar(novoProjeto);

            return StatusCode(201);
        }
    }
}
