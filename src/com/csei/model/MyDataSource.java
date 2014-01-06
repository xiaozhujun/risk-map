package com.csei.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class MyDataSource {
	private static String className="com.mysql.jdbc.Driver";
	private static String url="jdbc:mysql://localhost:3306/maprisk";
	private static String user="root";
	private static String password="root";
	static{
		try{
			Class.forName(className);
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	public Connection getConnection(){
		Connection connection=null;
		try{
			connection=DriverManager.getConnection(url,user,password);
		}catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return  connection;
	}
}
