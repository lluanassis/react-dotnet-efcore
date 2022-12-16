using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
            };

        [HttpGet]
        public IEnumerable<Atividade> get (){
            return Atividades;
        }

        [HttpGet ("{id}")]
        public string get (int id){
            return $"Meu primeiro método get id {id}";
        }

        [HttpPost]
        public Atividade post (Atividade atividade){
            return atividade;
        }

        [HttpPut ("{id}")]
        public string put (int id, Atividade atividade){
            return $"Meu primeiro método put {id}";
        }

        [HttpDelete ("{id}")]
        public string delete (int id){
            return $"Meu primeiro método delete {id}";
        }
    }
}