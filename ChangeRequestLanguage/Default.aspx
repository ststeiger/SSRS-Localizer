<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ChangeRequestLanguage._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    
    <form id="form1" runat="server">
        <h1>
        <asp:Label ID="lblDate" runat="server" Text="Label"></asp:Label>
            </h1>
    </form>

    <iframe src="ajax/getResource.ashx" frameborder="0" style="width: 500px; height: 500px;"></iframe>

</body>
</html>
