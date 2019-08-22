<%--
  Created by IntelliJ IDEA.
  User: sa
  Date: 2019/8/13
  Time: 16:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="login.action" method="post">
    <table>
        <tr>
            <td>用户名：</td>
            <td><input type="text" name="userName"></td>
        </tr>
        <tr>
            <td>密码：</td>
            <td><input type="password" name="password"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align: center"><input type="submit" value="登录"></td>
        </tr>
    </table>
</form>
</body>
</html>
