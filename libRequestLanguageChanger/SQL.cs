
#if false 


namespace libRequestLanguageChanger
{


    internal class SQL
    {

        /*
        CREATE TABLE dbo.__LogRequests
        (
	         REQ_ID int IDENTITY(1,1) NOT NULL
	        ,REQ_URL nvarchar(4000) NULL
	        ,REQ_Referrer nvarchar(4000) NULL
	        ,REQ_Text nvarchar(MAX) NULL
	        ,CONSTRAINT PK___LogRequests PRIMARY KEY(REQ_ID)
        ); 
        
        -- DELETE FROM __LogRequests;
        SELECT * FROM __LogRequests 
         */


        public static string GetConnectionString()
        {
            System.Data.SqlClient.SqlConnectionStringBuilder csb = new System.Data.SqlClient.SqlConnectionStringBuilder();

            csb.DataSource = System.Environment.MachineName;
            csb.InitialCatalog = "ReportServer";

            csb.IntegratedSecurity = true;
            if (!csb.IntegratedSecurity)
            {
                csb.UserID = "";
                csb.Password = "";
            }

            csb.PacketSize = 4096;
            csb.MultipleActiveResultSets = true;
            csb.Pooling = true;

            return csb.ConnectionString;
        } // End Function GetConnectionString 


        private static string s_connectionString = GetConnectionString();


        public static void Log(string url, string referrer, string text)
        {
            string sql = "INSERT INTO __LogRequests(REQ_URL, REQ_Referrer, REQ_Text) VALUES ( @__url, @__ref, @__text );";

            using (System.Data.Common.DbConnection conn = new System.Data.SqlClient.SqlConnection(s_connectionString))
            {
                if (conn.State != System.Data.ConnectionState.Open)
                    conn.Open();

                using (System.Data.Common.DbCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = sql;

                    System.Data.Common.DbParameter paramUrl = cmd.CreateParameter();
                    paramUrl.ParameterName = "__url";

                    if (url != null)
                        paramUrl.Value = url;
                    else
                        paramUrl.Value = System.DBNull.Value;

                    paramUrl.DbType = System.Data.DbType.String;
                    cmd.Parameters.Add(paramUrl);

                    System.Data.Common.DbParameter paramReferrer = cmd.CreateParameter();
                    paramReferrer.ParameterName = "__ref";

                    if (referrer != null)
                        paramReferrer.Value = referrer;
                    else
                        paramReferrer.Value = System.DBNull.Value;

                    paramReferrer.DbType = System.Data.DbType.String;
                    cmd.Parameters.Add(paramReferrer);


                    System.Data.Common.DbParameter paramText = cmd.CreateParameter();
                    paramText.ParameterName = "__text";

                    if (text != null)
                        paramText.Value = text;
                    else
                        paramText.Value = System.DBNull.Value;

                    paramText.DbType = System.Data.DbType.String;
                    cmd.Parameters.Add(paramText);


                    cmd.ExecuteNonQuery();
                } // End Using cmd 

                if (conn.State != System.Data.ConnectionState.Closed)
                    conn.Close();
            } // End Using conn 

        } // End Sub Log 


    } // End Class SQL 


} // End Namespace libRequestLanguageChanger 


#endif 
