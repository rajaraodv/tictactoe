<%@ page import="org.auraframework.*,java.nio.file.Paths,java.nio.file.Path,org.auraframework.impl.source.file.FileSourceListener,org.auraframework.util.FileChangeEvent" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title> Aura OSS</title>
</head>
<body>
loading..
 <%
  //Point path to main component 
  Path p = Paths.get("/Users/rraodv/docker-stuff/tictactoe/src/main/webapp/WEB-INF/components/");

  //create a FileSourceListener file listner
  FileSourceListener listener = new FileSourceListener();

  //pass a dummy file changed event.. Profit! 
  listener.fileChanged(new FileChangeEvent(p));
%>

<!-- load the app in a fullscreen iframe instead of redirecting it -->
<iframe src="/ttt/tictactoe.app" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
</body>
</html>