using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace api_fechadura.Repository
{
    public class MySqlConnectionFactory
    {
         public static MySqlConnection GetConnection()
        {
            string connectionString = "Server=localhost;Database=mydb_fechadura;Uid=root;Pwd=Lara@1603;";
            MySqlConnection connection = new MySqlConnection(connectionString);
            return connection;
        }
    }
}