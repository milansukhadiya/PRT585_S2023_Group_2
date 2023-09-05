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
    public class UserController : ApiController
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings["connStr"].ConnectionString;



        [HttpGet]
        public IHttpActionResult GetUserList()
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                List<User> users = new List<User>();
                string query = "SELECT * FROM Users";
                using (SqlCommand command = new SqlCommand(query, connection))
                {

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            User user = new User
                            {
                                id = (int)reader["Id"],
                                name = (string)reader["Name"],
                                gender = (string)reader["Gender"],
                                email = (string)reader["Email"],
                            };

                            users.Add(user);
                        }
                    }
                }


                return Json(users);
            }
        }

        [HttpPost]
        public IHttpActionResult CreateUser([FromBody] User user)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"INSERT INTO [dbo].[Users]
           ([Name]
           ,[Gender]
           ,[Email])
     VALUES
           (@Name
           ,@Gender
           ,@Email)";
                
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.Add("@Name", SqlDbType.VarChar).Value = user.name;
                    command.Parameters.Add("@Gender", SqlDbType.VarChar).Value = user.gender;
                    command.Parameters.Add("@Email", SqlDbType.VarChar).Value = user.email;
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
        public IHttpActionResult EditUser(int id, [FromBody] User user)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"UPDATE [dbo].[Users]
   SET [Name] =@Name 
      ,[Gender] =@Gender 
      ,[Email] = @Email
 WHERE Id=@Id";

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.Add("@Name", SqlDbType.VarChar).Value = user.name;
                    command.Parameters.Add("@Gender", SqlDbType.VarChar).Value = user.gender;
                    command.Parameters.Add("@Email", SqlDbType.VarChar).Value = user.email;
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
        public IHttpActionResult DelUser(int id)
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                string query = @"DELETE FROM [dbo].[Users]
  
 WHERE Id=@Id";

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

    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string gender { get; set; }
        public string email { get; set; }

    }
    public class Email
    {
        public string title { get; set; }
        public string message { get; set; }
        public string email { get; set; }

    }
}
