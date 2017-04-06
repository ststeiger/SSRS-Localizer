using System;
using System.Collections.Generic;
using System.Web;

namespace ChangeRequestLanguage.ajax
{
    /// <summary>
    /// Zusammenfassungsbeschreibung für getResource
    /// </summary>
    public class getResource : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/html";

            System.DateTime dt = new System.DateTime(2013, 12, 31);

            context.Response.Write(@"<html>
<head></head>
<body>
<h1>" + dt.ToString() + @"</h1>
</body>
</html>");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}