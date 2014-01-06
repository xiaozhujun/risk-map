if (typeof console == "undefined"){ 
  window.console = {log: function(){}}; 
}    
var map = new BMap.Map("container"); 
map.centerAndZoom(new BMap.Point(116.403765, 39.914850), 5); 
var stdMapCtrl = new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_SMALL}); 
map.addControl(stdMapCtrl); 
map.enableScrollWheelZoom(); 
map.enableContinuousZoom(); 
function getBoundary(data){ 
    var bdary=new BMap.Boundary(); 
    bdary.get(data.split("-")[0],function(rs){ 
        console.log(rs);     
        var maxNum=-1,maxPly;
        var color=data.split("-")[1];   
        var count=rs.boundaries.length;  
        for(var i=0;i<count;i++){ 
            var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:1,strokeOpacity:0.5,fillColor:color,strokeColor:"#000000"}); 
            map.addOverlay(ply); 
            ply.addEventListener("click",function(e){
			                name=data.split("-")[0];
                            var latlng=e.point;
                            var info=new BMap.InfoWindow(name+" "+latlng.lat+","+latlng.lng,{width:220});
                            map.openInfoWindow(info,latlng);
                         
                            //������˸��ʾ�������ʡ
                            delay=0;
                            for (flashTimes=0;flashTimes<3;flashTimes++){
                                delay+=400;
                                setTimeout(function(){
                                    ply.setFillColor("#FFFF00");
                                },delay);
                         
                                delay+=400;
                                setTimeout(function(){
                                    ply.setFillColor(color);
                                },delay);
                            }
							window.location.href="showCity.html?pname="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                        });
						
        } 
        if(maxPly){ 
            map.setViewport(maxPly.getPoints()); 
        }       
    }); 
} 
map.clearOverlays(); 
var datas = [
                "����-#FF0000", "�㶫-#FF3300", "����-#FF0000", "����-#FF3300", "����-#FF3300",
        "����-#FF0066", "����-#FF3300", "�㽭-#33FF00", "����-#FF0000", "����-#FF0066",
        "����-#33FF00", "����-#FF0000", "�Ĵ�-#FF0000", "����ʡ-#FF3300", "ɽ��-#FF0066", "����-#FF3300",
        "�½�-#FF0000", "����-#33FF00", "����-#FF0000", "�ӱ�-#33FF00", "������-#FF3300", "����-#FF3300",
        "���ɹ�������-#33FF00", "�ຣ-#FF3300", "����-#33FF00", "ɽ��-#FF0066", "����ʡ-#33FF00",
        "����-#FBC5DC", "���-#33FF00", "�Ϻ�-#FF0000", "������-#33FF00", "���-#C8C1E3"
];
for(var i=0;i<datas.length;i++){ 
    getBoundary(datas[i]); 
} 