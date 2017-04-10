
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



        // https://stackoverflow.com/questions/31870789/check-whether-browser-is-chrome-or-edge
        public class BrowserInfo
        {

            public System.Web.HttpBrowserCapabilities Browser { get; set; }
            public string Name { get; set; }
            public string Version { get; set; }
            public string Platform { get; set; }
            public bool IsMobileDevice { get; set; }
            public string MobileBrand { get; set; }
            public string MobileModel { get; set; }


            public BrowserInfo(System.Web.HttpRequest request)
            {
                if (request.Browser != null)
                {
                    if (request.UserAgent.Contains("Edge")
                        && request.Browser.Browser != "Edge")
                    {
                        this.Name = "Edge";
                    }
                    else
                    {
                        this.Name = request.Browser.Browser;
                        this.Version = request.Browser.MajorVersion.ToString();
                    }
                    this.Browser = request.Browser;
                    this.Platform = request.Browser.Platform;
                    this.IsMobileDevice = request.Browser.IsMobileDevice;
                    if (IsMobileDevice)
                    {
                        this.Name = request.Browser.Browser;
                        this.Name = request.Browser.Browser;
                    }
                }
            }


        }


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
                    // response.AppendHeader("X-Frame-Options", "SAMEORIGIN");
                    // response.AppendHeader("X-Frame-Options", "AllowAll");

                    if (System.Web.HttpContext.Current.Request.UrlReferrer != null)
                    {
                        // "X-Frame-Options": "ALLOW-FROM " Not recognized in CHrome 
                        string host = System.Web.HttpContext.Current.Request.UrlReferrer.Scheme + System.Uri.SchemeDelimiter
                                    + System.Web.HttpContext.Current.Request.UrlReferrer.Authority
                            // + System.Web.HttpContext.Current.Request.UrlReferrer.AbsolutePath;
                        ;

                        string selfAuth = System.Web.HttpContext.Current.Request.Url.Authority;
                        string refAuth = System.Web.HttpContext.Current.Request.UrlReferrer.Authority;

                        // SQL.Log(System.Web.HttpContext.Current.Request.RawUrl, System.Web.HttpContext.Current.Request.UrlReferrer.OriginalString, refAuth);

                        if (IsHostAllowed(refAuth))
                        {
                            BrowserInfo bi = new BrowserInfo(System.Web.HttpContext.Current.Request);

                            // bi.Name = Firefox
                            // bi.Name = InternetExplorer
                            // bi.Name = Chrome

                            // Chrome wants entire path... 
                            if (!System.StringComparer.OrdinalIgnoreCase.Equals(bi.Name, "Chrome"))
                                response.AppendHeader("X-Frame-Options", "ALLOW-FROM " + host);    

                            // unsafe-eval: invalid JSON https://github.com/keen/keen-js/issues/394
                            // unsafe-inline: styles
                            // data: url(data:image/png:...)

                            // https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet
                            // https://www.ietf.org/rfc/rfc7034.txt
                            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
                            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

                            // https://stackoverflow.com/questions/10205192/x-frame-options-allow-from-multiple-domains
                            // https://content-security-policy.com/
                            // http://rehansaeed.com/content-security-policy-for-asp-net-mvc/

                            // This is for Chrome:
                            response.AppendHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: *.msecnd.net vortex.data.microsoft.com " + selfAuth + " " + refAuth);

                            /*
                            System.Collections.Generic.List<string> ls = new System.Collections.Generic.List<string>();
                            ls.Add("default-src");
                            ls.Add("'self'");
                            ls.Add("'unsafe-inline'");
                            ls.Add("'unsafe-eval'");
                            ls.Add("data:");
                            ls.Add("*.msecnd.net");
                            ls.Add("vortex.data.microsoft.com");
                            ls.Add(selfAuth);
                            ls.Add(refAuth);

                            string contentSecurityPolicy = string.Join(" ", ls.ToArray());
                            response.AppendHeader("Content-Security-Policy", contentSecurityPolicy);
                            */

                        }
                        else
                        {
                            response.AppendHeader("X-Frame-Options", "SAMEORIGIN");
                        }
                        
                    }
                    else
                        response.AppendHeader("X-Frame-Options", "SAMEORIGIN");
                }
                catch (System.Exception ex)
                {
                    // WTF ? 
                    System.Console.WriteLine(ex.Message); // Suppress warning
                }

            } // End if (System.Web.HttpContext.Current != null && System.Web.HttpContext.Current.Response != null)

        } // End Using context_EndRequest


        private static string[] s_allowedHosts = new string[] 
        {
             "localhost:49533"
            ,"localhost:52257"
            ,"vmsursee"
            ,"vmswisslife"
            ,"vmsursee"
            ,"vmsrg"
            ,"vmsnb"
            ,"vmsrg"
            ,"vmraiffeisen"
            ,"roomplanning"
            ,"vmszhm7050"
            ,"vmpost"
        };

        public static bool IsHostAllowed(string host)
        {
            return Contains(s_allowedHosts, host);
        } // End Function IsHostAllowed 


        public static bool Contains(string[] allowed, string current)
        {
            for (int i = 0; i < allowed.Length; ++i)
            {
                if (System.StringComparer.OrdinalIgnoreCase.Equals(allowed[i], current))
                    return true;
            } // Next i 

            return false;
        } // End Function Contains 


    } // End Class RequestLanguageChanger 


} // End Namespcae libRequestLanguageChanger 
