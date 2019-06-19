using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleEF.Data;
using ReactPeopleEF.Web.Models;

namespace ReactPeopleEF.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public IEnumerable<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("add")]
        public Person Add(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
            return person;
        }

        [Route("delete")]
        [HttpPost]
        public void Delete(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Delete(person.Id);
        }

        [Route("getPerson")]
        [HttpGet]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPersonById(id);
        }

        [Route("update")]
        [HttpPost]
        public void Update(Person p)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Update(p);
        }
    }
}