using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ChangeRequestLanguage
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            System.DateTime dt = new System.DateTime(2013,12,31);

            this.lblDate.Text = dt.ToString();
        }
    }
}