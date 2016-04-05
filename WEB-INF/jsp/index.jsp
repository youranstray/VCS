<%@page import="com.kedacom.vcs.data.dataobject.User"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<%@include file="resource.jsp"%>
	<%
		String userRole = (String)request.getSession().getAttribute("USER_ROLE");
		String[] userRoles = userRole.split(",");
		User user = (User)request.getSession().getAttribute("sessionUser");
		String userName = (String)request.getSession().getAttribute("USER_USERNAME"); 
	%>

	<title></title>
	<link rel="stylesheet" href="${RESOUCE_STATIC_URL}/css/ajtl.css" type="text/css">
	<script type="text/javascript">
		var RESOUCE_STATIC_URL = '${RESOUCE_STATIC_URL}';
		var G_USER_ROLE = '<%=userRole%>';
		var G_USER = ${USER_JSON};
		var G_USERNAME = '<%=userName%>';
	</script>
	<script type="text/javascript" data-main="${RESOUCE_STATIC_URL}/js/apps/app.js" src="${RESOUCE_STATIC_URL}/js/libs/require.js"></script>
</head>
<body>
	<div class="header">
		<div class="logo-icon"><img src="img/logo.png" alt=""></div>
		<div class="title">VCS2.0可视化指挥调度系统</div>
		<div class="sysMenu">
			<div class="log-out">
				<span>注销</span>

			</div>
			<div class="sys-setting">
		        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		        	<span>设置</span>
		        </a>
		        <ul class="dropdown-menu">
		        	<!-- <li class="cur-myinfo"><a href="#">个人信息</a></li>
		        	<li class="modify_password"><a href="#">修改密码</a></li> -->
		        </ul>
			</div>
			<div class="cur-user">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
		        	<span title="administrator">administrator</span>
		        	<span class="drop-icon"></span>
		        </a>
		        <ul class="dropdown-menu">
		        	<!-- <li class="cur-myinfo"><a href="#">个人信息</a></li>
		        	<li class="modify_password"><a href="#">修改密码</a></li> -->
		        </ul>
			</div>
			<div style="clear: both;"></div>
		</div>
	</div>
	<div class="container">
		<div class="nav-group">
			<%for(int i = 0; i < userRoles.length; i++){
				if(userRoles[i].equals("operator") || userName.equals("administrator")){%>

				<div class="command nav nav-btn" data-navpage=".command-page">
					<span class="nav-iten">指挥调度</span>
				</div>

				<% break;
				}
			}%>
			<%for(int i = 0; i < userRoles.length; i++){
				if(userRoles[i].equals("dispatcher") || userName.equals("administrator")){%>

				<div class="bigScreen nav nav-btn">
					<span class="nav-item">大屏调度</span>
					<ul class="bigScreen">
						<li class="dBDispatch nav" data-navpage=".dBDispatch-page">解码板卡</li>
						<li class="mDispatch nav" data-navpage=".mDispatch-page">矩阵</li>
					</ul>
				</div>
				<% break;
				}
			}%>
			<%for(int i = 0; i < userRoles.length; i++){
				if(userRoles[i].equals("admin") || userName.equals("administrator")){%>

				<div class="resource nav nav-btn">
					<span class="nav-item">资源配置</span>
					<ul class="resource">
						<!-- <li class=" nav" data-navpage=".dBSet-page"></li> -->
						<li class="mSet nav" data-navpage=".mSet-page">矩阵</li>
					</ul>
				</div>
				

				<% break;
				}
			}%>
			<%for(int i = 0; i < userRoles.length; i++){
				if(userRoles[i].equals("operator") || userRoles[i].equals("dispatcher") || userName.equals("administrator")){%>

				<div class="map nav nav-btn" data-navpage=".map-page">
					<span class="nav-item">电子地图</span>
				</div>

				<% break;
				}
			}%>
		</div>
		<div class="main pages">
			<div class="command-page page">
				<div class="content"></div>
				<div class="mpform"></div>
			</div>
			<div class="dBDispatch-page page">
				<div class="content"></div>
			</div>
			<div class="mDispatch-page page">
				<div class="content"></div>
			</div>
			<div class="mSet-page page">
				<div class="content"></div>
			</div>
			<div class="map-page page">
				<div class="content"></div>
			</div>
		</div>
		<div style="clear: both;"></div>
	</div>
</body>
</html>