using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using API_swagger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API_swagger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        List<Aluno> alunos = new List<Aluno>();

        /// <summary>
        /// Busca lista criada em loop for de
        /// informações de alunos
        /// </summary>
        /// <param name="aluno">Informações de aluno</param>
        /// <returns>Nome e matrícula do aluno, sendo "Aluno i" 
        /// com i representado o ciclo do loop que este aluno foi criado </returns>
        public AlunoController()
        {
            alunos = new List<Aluno>();
            for (int i = 1; i <= 5; i++)
            {
                alunos.Add(new Aluno()
                {
                    Id = i,
                    Nome = "Aluno " + i,
                    Matricula = i
                });
            }
        }
        // GET: /aluno
        [HttpGet]
        public IEnumerable<Aluno> Get()
        {
            return alunos;
        }

        //POST: /aluno
        [HttpPost]
        public List<Aluno> Post([FromBody] Aluno aluno)
        {
            alunos.Add(aluno);
            return alunos;
        }

        // PUT: aluno/id
        [HttpPut("{id}")]
        public List<Aluno> Put([FromBody] Aluno aluno)
        {
            alunos.RemoveAll(x => x.Id == aluno.Id);
            alunos.Add(aluno);
            return alunos;
        }

        // DELETE: aluno
        [HttpDelete("{id}")]
        public List<Aluno> Delete(int id)
        {
            alunos.RemoveAll(x => x.Id == id);
            return alunos;
        }
    }
}
