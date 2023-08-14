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

        private static string address { get; set; } = ConfigurationManager.AppSettings["EmailConfig:Address"];//发件人邮箱
        private static string authPwd { get; set; } = ConfigurationManager.AppSettings["EmailConfig:AuthPwd"];//授权密码
        private static string name { get; set; } = ConfigurationManager.AppSettings["EmailConfig:Name"];//发件人名
        private static string host { get; set; } = ConfigurationManager.AppSettings["EmailConfig:Host"];//smtp服务地址
        private static int port= int.Parse(ConfigurationManager.AppSettings["EmailConfig:Port"]);//端口
        private static bool enableSsl { get; set; } = bool.Parse(ConfigurationManager.AppSettings["EmailConfig:EnableSsl"]);


        [HttpGet]
        public IHttpActionResult GetUserList()
        {

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                List<User> users = new List<User>();
                string query = "SELECT Id, UserName, Email FROM Users";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            User user = new User
                            {
                                id = (int)reader["Id"],
                                name = (string)reader["Username"],
                                email = (string)reader["Email"],
                            };

                            users.Add(user);
                        }
                    }
                }


                return Json(users);
            }
        }

        /// <summary>
        /// 发送邮件
        /// </summary>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <param name="list">收件人</param>
        public IHttpActionResult sendEmail( [FromBody] Email email)
        {
            try
            {
                MailMessage message = new MailMessage
                {
                    From = new MailAddress(address, name)//发送人邮箱
                };
                //foreach (var item in list)
                //{
                //    message.To.Add(item);//收件人地址
                //}
                message.To.Add(email.email);//收件人地址
                message.Subject = email.title;//发送邮件的标题
                message.Body = email.message;//发送邮件的内容
                                       //配置smtp服务地址
                SmtpClient client = new SmtpClient
                {
                    Host = host,
                    Port = port,//端口587
                    EnableSsl = enableSsl,
                    //发送人邮箱与授权密码
                    Credentials = new NetworkCredential(address, authPwd)
                };
                client.Send(message);
                return Json("Mail sent successfully");
            }
            catch(Exception ex)
            {
                return BadRequest("Email sending failed");
            }

        }
    }

    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }

    }
    public class Email
    {
        public string title { get; set; }
        public string message { get; set; }
        public string email { get; set; }

    }
}
