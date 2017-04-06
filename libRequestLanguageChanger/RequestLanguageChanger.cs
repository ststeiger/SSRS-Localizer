
namespace libRequestLanguageChanger
{


    public class RequestLanguageChanger : System.Web.IHttpModule
    {


        void System.Web.IHttpModule.Dispose()
        {
            // throw new NotImplementedException();
        }


        void System.Web.IHttpModule.Init(System.Web.HttpApplication context)
        {
            // https://stackoverflow.com/questions/441421/httpmodule-event-execution-order
            context.BeginRequest += new System.EventHandler(context_BeginRequest);
            context.EndRequest += new System.EventHandler(context_EndRequest);
        }


        void context_BeginRequest(object sender, System.EventArgs e)
        {
            System.Web.HttpApplication application = sender as System.Web.HttpApplication;
            System.Web.HttpContext context = application.Context;

            if (context.Request != null)
            {
                // string language = context.Request.Headers["Accept-Language"];
                string language = null;
                // string url = context.Request.RawUrl;
                // string referrer = null;
                
                
                if (context.Request.UrlReferrer != null)
                {
                    // referrer = context.Request.UrlReferrer.OriginalString;

                    string queryString = context.Request.UrlReferrer.Query;
                    System.Collections.Specialized.NameValueCollection queryStrings = System.Web.HttpUtility.ParseQueryString(queryString);
                    language = queryStrings["in_sprache"];
                }

                if(context.Request.QueryString["in_sprache"] != null)
                    language = context.Request.QueryString["in_sprache"];

                if (!string.IsNullOrEmpty(language))
                {
                    language = language.ToLowerInvariant();

                    switch (language)
                    {
                        case "de":
                            language = "de-CH";
                            break;
                        case "fr":
                            language = "fr-CH";
                            break;
                        case "it":
                            language = "it-CH";
                            break;
                        case "en":
                            language = "en-US";
                            break;
                        default:
                            language = "";
                            break;
                    }

                } // End if (!string.IsNullOrEmpty(sprache)) 

                // SQL.Log(url, referrer, sprache);


                // Simulate Browser-Language = in_sprache 
                if (!string.IsNullOrEmpty(language))
                {
                    // context.Request.Headers["Accept-Language"] = language;

                    System.Globalization.CultureInfo culture = new System.Globalization.CultureInfo(language);
                    System.Threading.Thread.CurrentThread.CurrentCulture = culture;
                    System.Threading.Thread.CurrentThread.CurrentUICulture = culture;

                    for (int i = 0; i < context.Request.UserLanguages.Length; ++i)
                    {
                        // context.Request.UserLanguages[i] = "en-US";
                        context.Request.UserLanguages[i] = language;
                    }

                } // End if (!string.IsNullOrEmpty(language)) 

            } // End if (context.Request != null) 


        } // End Sub context_BeginRequest 


        void context_EndRequest(object sender, System.EventArgs e)
        {
            if (System.Web.HttpContext.Current != null && System.Web.HttpContext.Current.Response != null)
            {
                System.Web.HttpResponse response = System.Web.HttpContext.Current.Response;

                try
                {

                    // response.Headers["P3P"] = "CP=\\\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\\\"":
                    // response.Headers.Set("P3P", "CP=\\\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\\\"");
                    // response.AddHeader("P3P", "CP=\\\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\\\"");
                    response.AppendHeader("P3P", "CP=\\\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\\\"");
                    
                    // response.AppendHeader("X-Frame-Options", "DENY");
                    // response.AppendHeader("X-Frame-Options", "AllowAll");
                    response.AppendHeader("X-Frame-Options", "SAMEORIGIN");
                }
                catch (System.Exception ex)
                {
                    // WTF ? 
                    System.Console.WriteLine(ex.Message); // Suppress warning
                }

            } // End if (System.Web.HttpContext.Current != null && System.Web.HttpContext.Current.Response != null)

        } // End Using context_EndRequest


    } // End Class RequestLanguageChanger 


} // End Namespcae libRequestLanguageChanger 
