<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <%@include file="resource.jsp"%>

  <title></title>
  <link rel="stylesheet" href="">
  <script type="text/javascript">
    var RESOUCE_STATIC_URL = '${RESOUCE_STATIC_URL}';
  </script>
</head>
<body>
	<form>
		用户名：<input type="text" placeholder="用户名">
		密码：<input type="text" placeholder="密码">
		<input type="checkbox">记住密码
		<button type="button">登陆</button>
	</form>
  
</body>
</html>
