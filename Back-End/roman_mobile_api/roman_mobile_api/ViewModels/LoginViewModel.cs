using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace roman_mobile_api.ViewModels
{
    public class LoginViewModel
    {
        /// <summary>
        /// Classe responsavel pelo modelo de login
        /// </summary>
   
        [Required(ErrorMessage = "Informe o e-mail do Usuario")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha do Usuario")]
        public string Senha { get; set; }
    }
}
