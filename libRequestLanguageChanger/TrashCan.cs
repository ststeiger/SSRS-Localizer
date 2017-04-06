
namespace libRequestLanguageChanger
{


    internal class TrashCan
    {


        public static void OverwriteAccept(System.Web.HttpContext context)
        {
            string sprache = "en-US";

            System.Collections.ArrayList item = new System.Collections.ArrayList();
            item.Add(sprache);

            System.Type t = context.Request.Headers.GetType();

            // BaseSet: System.NotSupportedException: Listing is write-protected
            //t.InvokeMember("BaseSet", System.Reflection.BindingFlags.InvokeMethod
            //    | System.Reflection.BindingFlags.NonPublic
            //    | System.Reflection.BindingFlags.Instance, null, context.Request.Headers
            //    , new object[] { "Accept-Language", sprache }
            //);


            // https://stackoverflow.com/questions/3975240/how-to-modify-http-header-of-a-request-using-c
            t.InvokeMember("MakeReadWrite", System.Reflection.BindingFlags.InvokeMethod
                | System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance, null, context.Request.Headers, null);

            t.InvokeMember("InvalidateCachedArrays", System.Reflection.BindingFlags.InvokeMethod
                | System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance, null, context.Request.Headers, null);


            // t.InvokeMember("BaseAdd", System.Reflection.BindingFlags.InvokeMethod | System.Reflection.BindingFlags.NonPublic
            //     | System.Reflection.BindingFlags.Instance, null, context.Request.Headers, new object[] { "Accept-Language", item });


            t.InvokeMember("BaseSet", System.Reflection.BindingFlags.InvokeMethod
                | System.Reflection.BindingFlags.NonPublic
                | System.Reflection.BindingFlags.Instance, null, context.Request.Headers
                , new object[] { "Accept-Language", item }
            );


            t.InvokeMember("MakeReadOnly", System.Reflection.BindingFlags.InvokeMethod | System.Reflection.BindingFlags.NonPublic
                | System.Reflection.BindingFlags.Instance, null, context.Request.Headers, null);
        }


        public static void ParseAccept(string lang)
        {

            if (!string.IsNullOrEmpty(lang))
            {
                string[] languages = lang.Split(',');


                for (int i = 0; i < languages.Length; ++i)
                {
                    int l = languages[i].IndexOf(";");
                    if (l != -1)
                        languages[i] = languages[i].Substring(0, l);

                    // languages[i] = "en-US";
                }



            }
        }


    }


}
