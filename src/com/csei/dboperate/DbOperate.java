package com.csei.dboperate;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.csei.model.Device;
import com.csei.model.MyDataSource;


public class DbOperate {
    private MyDataSource ds=new MyDataSource();
    public void closeSource(Connection connection,PreparedStatement statement,ResultSet rs){
        if(rs!= null){
            try{
                rs.close() ;
            }catch(SQLException e){
                e.printStackTrace() ;
            }
        }
        if(statement!= null){
            try{
                statement.close() ;
            }catch(SQLException e){
                e.printStackTrace() ;
            }
        }
        if(connection!= null){
            try{
                connection.close() ;
            }catch(SQLException e){
                e.printStackTrace() ;
            }
        }
    }
	public int queryIdByName(String name){
		Connection connection=ds.getConnection();
		PreparedStatement statement=null;
		ResultSet rs=null;
		String sql="select id from Company where name=?";
		int n=0;
		try{
			statement=connection.prepareStatement(sql);
			statement.setString(1, name);
			rs=statement.executeQuery();
			while(rs.next()){
				n=rs.getInt(1);
			}
		}catch (SQLException e) {
			// TODO: handle exception
		}finally{
			closeSource(connection, statement, rs);
		}
		return n;
	}
	public List<Device> queryDeviceInfo(int id){
		Connection connection=ds.getConnection();
		PreparedStatement statement=null;
		ResultSet rs=null;
		String sql="select d.* from Device d,Company c where c.id=d.cid and c.id=?";
		List<Device> list=new ArrayList<Device>();
		try{
			statement=connection.prepareStatement(sql);
			statement.setInt(1, id);
			rs=statement.executeQuery();
			while(rs.next()){
				Device d=new Device();
				d.setName(rs.getString("name"));
				d.setDescription(rs.getString("description"));
				d.setPicurl(rs.getString("picurl"));
				d.setRikvalue(rs.getInt("riskvalue"));
				list.add(d);
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}finally{
			closeSource(connection, statement, rs);
		}
		return list;
		
		
		
		
	}
	
	
}
