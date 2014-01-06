package com.csei.map.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.csei.dboperate.DbOperate;
import com.csei.model.Device;

@SuppressWarnings("serial")
public class ShowInfoServlet extends HttpServlet{
	@SuppressWarnings("rawtypes")
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		    request.setCharacterEncoding("utf-8");
		    response.setContentType("text/html;charset=utf-8");
		    PrintWriter out=response.getWriter();
		    String name=request.getParameter("pname");
		    System.out.println(name+"---------");
		    DbOperate db=new DbOperate();
		    int id=db.queryIdByName(name);
		    out.println("<div id='righttitle'>"+name+"</div>");
            out.println("<div id='rightcontent'>");
		    List<Device> list=db.queryDeviceInfo(id);
		    Iterator it=list.iterator();
		    while(it.hasNext()){
		    	Device d=(Device) it.next();
	            out.println("<div class='rightitem'><span class='pic'><img src='image/qizhongji.jpg'></span><span class='info'><span class='itemfont'>"+d.getName()+"</span><span class='itemfont'>"+d.getDescription()+"</span></span><span class='riskvalue'>风险值:"+d.getRikvalue()+"</span></div>");
		    }
            out.println("</div>");
	}
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
             doPost(request, response);
	}
	
}
