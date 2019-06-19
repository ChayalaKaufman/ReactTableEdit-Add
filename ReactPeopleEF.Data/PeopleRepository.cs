using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ReactPeopleEF.Data
{
    public class PeopleRepository
    {
        private string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.ToList();
            }
        }

        public void Add(Person person)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand(
                    "DELETE FROM People WHERE Id = @id",
                    new SqlParameter("@id", id));
            }
        }

        public Person GetPersonById(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.FirstOrDefault(p => p.Id == id);
            }
        }

        public void Update(Person p)
        {

            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Attach(p);
                context.Entry(p).State = EntityState.Modified;
                context.SaveChanges();
            }

        }
    }
}