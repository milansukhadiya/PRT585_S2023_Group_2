using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Mail;
using System.Web.Http;

namespace DemoApi.Controllers
{
    public class MovieController : ApiController
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings["connStr"].ConnectionString;



        [HttpGet]
        public IHttpActionResult GetList()
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                List<Movie> list = new List<Movie>();
                string query = "SELECT * FROM Movie";
                using (SqlCommand command = new SqlCommand(query, connection))
                {

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Movie movie = new Movie
                            {
                                id = (int)reader["Id"],
                                name = (string)reader["Name"],
                                releaseDate = (DateTime)reader["ReleaseDate"],
                                director = (string)reader["Director"],
                                emailAddress = (string)reader["EmailAddress"],
                                language = (string)reader["Language"],
                                category = (string)reader["Category"],
                            };

                            list.Add(movie);
                        }
                    }
                }


                return Json(list);
            }
        }

        [HttpPost]
        public IHttpActionResult Create([FromBody] Movie movie)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"INSERT INTO [dbo].[Movie]
           ([Name]
           ,[ReleaseDate]
           ,[Director]
           ,[EmailAddress]
           ,[Language]
           ,[Category])
     VALUES
           (@Name
           ,@ReleaseDate
           ,@Director
           ,@EmailAddress
           ,@Language
           ,@Category)";
                
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.Add("@Name", SqlDbType.NVarChar).Value = movie.name;
                    command.Parameters.Add("@ReleaseDate", SqlDbType.DateTime).Value = movie.releaseDate;
                    command.Parameters.Add("@Director", SqlDbType.NVarChar).Value = movie.director;
                    command.Parameters.Add("@EmailAddress", SqlDbType.VarChar).Value = movie.emailAddress;
                    command.Parameters.Add("@Language", SqlDbType.VarChar).Value = movie.language;
                    command.Parameters.Add("@Category", SqlDbType.VarChar).Value = movie.category;
                    int count=command.ExecuteNonQuery();
                    if (count > 0)
                    {
                        return Json("Ok");
                    }
                    else
                    {
                        return Json("Fail");
                    }
                }


                
            }
        }
        [HttpPost]
        public IHttpActionResult Edit(int id, [FromBody] Movie movie)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"UPDATE [dbo].[Movie]
   SET [Name] = @Name
      ,[ReleaseDate] = @ReleaseDate
      ,[Director] = @Director
      ,[EmailAddress] = @EmailAddress
      ,[Language] = @Language
      ,[Category] = @Category
 WHERE Id=@Id";

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.Add("@Name", SqlDbType.NVarChar).Value = movie.name;
                    command.Parameters.Add("@ReleaseDate", SqlDbType.DateTime).Value = movie.releaseDate;
                    command.Parameters.Add("@Director", SqlDbType.NVarChar).Value = movie.director;
                    command.Parameters.Add("@EmailAddress", SqlDbType.VarChar).Value = movie.emailAddress;
                    command.Parameters.Add("@Language", SqlDbType.VarChar).Value = movie.language;
                    command.Parameters.Add("@Category", SqlDbType.VarChar).Value = movie.category;
                    command.Parameters.Add("@Id", SqlDbType.Int).Value = id;
                    int count = command.ExecuteNonQuery();
                    if (count > 0)
                    {
                        return Json("Ok");
                    }
                    else
                    {
                        return Json("Fail");
                    }
                }



            }
        }
        [HttpPost]
        public IHttpActionResult Delete(int id)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"DELETE FROM [dbo].[Movie] WHERE Id=@Id";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    
                    command.Parameters.Add("@Id", SqlDbType.Int).Value = id;
                    int count = command.ExecuteNonQuery();
                    if (count > 0)
                    {
                        return Json("Ok");
                    }
                    else
                    {
                        return Json("Fail");
                    }
                }



            }
        }
    }
    public class Movie
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime releaseDate { get; set; }
        public string director { get; set; }
        public string emailAddress { get; set; }
        public string language { get; set; }
        public string category { get; set; }

    }

}
