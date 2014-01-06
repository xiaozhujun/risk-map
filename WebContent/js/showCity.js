var pname=decodeURI($.getUrlVar("pname"));
var lat=decodeURI($.getUrlVar("lat"));
var lng=decodeURI($.getUrlVar("lng"));
if (typeof console == "undefined"){ 
  window.console = {log: function(){}}; 
} 
var map = new BMap.Map("container"); 
map.centerAndZoom(new BMap.Point(lng, lat), 8); 
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
				window.location.href="showArea.html?pname="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
            });
        } 
        if(maxPly){ 
            map.setViewport(maxPly.getPoints()); 
        }       
    }); 
} 
map.clearOverlays(); 
var liaonings = [
                 "������-#FF0000", "��Ϫ��-#33FF00", "��ɽ��-#FF0066", "������-#33FF00", "������-#FF3300",
         "������-#33FF00", "�̽���-#FF0000", "��«����-#FF0000", "Ӫ����-#33FF00", "������-#FF3300",
         "������-#FF3300","������-#FF0000","��˳��-#FF0066","������-#FF0000"];
var guangxis=[
				 "������-#FF0000", "������-#33FF00", "������-#FF3300", "������-#33FF00", "������-#FF3300",
		  "���Ǹ���-#FF0000", "������-#33FF00", "�����-#FF3300", "������-#FF0000", "��ɫ��-#FF3300",
		  "������-#FF0000", "�ӳ���-#33FF00", "������-#FF0000", "������-#33FF00"
 ];  
var guangdongs=[
			     "������-#33FF00", "�ع���-#FF3300", "������-#FF0000", "�麣��-#FCFBBB", "��ͷ��-#FF3300",
		   "��ɽ��-#FF3300", "������-#FF0000", "տ����-#E7CCAF", "ï����-#E7CCAF", "������-#FF0000", "������-#FF0066",
		   "÷����-#FF0000", "��β��-#33FF00", "��Դ��-#FF0000","������-#C8C1E3", "��Զ��-#FF0066", "��ݸ��-#FF3300", "��ɽ��-#FF0066", "������-#33FF00",
		   "������-#FF3300", "�Ƹ���-#FF0000"   
                ];
var hunans=[
            "��ɳ��-#FF3300", "������-#FF0000", "��̶��-#FF0000", "������-#FF0000", "������-#33FF00",
            "������-#33FF00", "������-#FF0000", "�żҽ���-#33FF00", "������-#FF0000", "������-#E7CCAF",
            "������-#DBECC8","������-#FF0000", "¦����-#33FF00", "��������������������-#33FF00" 
            ];
var guizhous=[
			"������-#FF0000", "����ˮ��-#FF0066", "������-#33FF00", "��˳��-#FF0066", "ͭ�ʵ���-#FF0000",
			"������-#33FF00", "�Ͻڵ���-#33FF00", "ǭ�������嶱��������-#FF0000", "ǭ�ϲ���������������-#FF0000"
              ];
var yunnans=[
			"������-#FF0000", "������-#33FF00", "��Ϫ��-#FF0066", "��ɽ��-#FF0066", "��ͨ��-#FF0000",
			"������-#FF0066", "ī��������������-#33FF00", "�ٲ���-#FF0000", "��������������-#FBC5DC", "��ӹ���������������-#FF0000",
			"��ɽ׳������������-#FF0000", "��˫���ɴ���������-#FF0000", "�������������-#FF0000", "�º���徰����������-#FF0066","ŭ��������������-#FF0066", 
			"�������������-#FF0000","�ն���-#33FF00"
             ]; 
var fujians=[
			"������-#FF0000", "������-#33FF00", "������-#33FF00", "������-#FF0000", "Ȫ����-#FF0066",
			"������-#FF0066", "��ƽ��-#33FF00", "������-#FF0000"
             ];
var jiangxis=[
              "�ϲ���-#FF0000", "��������-#FF0066", "Ƽ����-#33FF00", "�Ž���-#FF0000", "������-#FF0066",
   		   "ӥ̶��-#FF0066", "������-#FF0000", "������-#33FF00", "�˴���-#33FF00", "������-#FF0066", "������-#FF0000"
              ];
var zhejiangs=[
			"������-#FF0000", "������-#FF0066", "������-#33FF00", "������-#FF0066", "������-#33FF00",
			"������-#33FF00", "����-#FF0066", "������-#33FF00", "��ɽ��-#FF0000", "̨����-#33FF00",
			"��ˮ��-#FF0000"
               ];
var anhuis=[
            "�Ϸ���-#33FF00", "�ߺ���-#FF0000", "������-#33FF00", "������-#33FF00", "��ɽ��-#33FF00",
 		   "������-#FF0000", "ͭ����-#FF0000", "������-#33FF00", "��ɽ��-#FF0000", "������-#FF0000", "������-#FF0066",
 		   "������-#FF0000", "������-#FF0066", "������-#33FF00","������-#FF0000", "������-#FF0000", "������-#33FF00"
            ];
var hubeis=[
            "�人��-#FF0066", "��ʯ��-#33FF00", "ʮ����-#FF0066", "�˲���-#FF0066", "�差��-#FF0000",
  		  "������-#FF0066", "������-#33FF00", "Т����-#33FF00", "������-#33FF00", "�Ƹ���-#FF0000",
  		  "������-#33FF00", "������-#FF0066", "��ʩ����������������-#33FF00", "������-#FF0000","������-#FF0066","Ǳ����-#33FF00","��ũ������-#FF0066"           
            ];
var henans=[
				"֣����-#33FF00", "������-#FF0000", "������-#33FF00", "ƽ��ɽ��-#FF0066", "������-#33FF00",
				"�ױ���-#FF0066", "������-#FF0066", "������-#FF0066", "�����-#FF0000", "�����-#FF0000",
				"�����-#FF0000", "����Ͽ��-#33FF00", "������-#33FF00", "������-#33FF00","������-#FF0000", 
				"�ܿ���-#FF0066","פ�����-#33FF00","������-#FF0000"
            ];
var jiangsus=[
			"�Ͼ���-#FF0066", "������-#33FF00", "������-#FF0066", "������-#FF0000", "������-#33FF00",
			 "��ͨ��-#FF0000", "���Ƹ���-#FF0000", "������-#33FF00", "�γ���-#FF0066", "������-#FF0000", "����-#33FF00",
			 "̩����-#FF0066", "��Ǩ��-#FF0066"
              ];	
var sichuans=[
			"�ɶ���-#FF0066", "�Թ���-#FF0000", "��֦����-#FF0066", "������-#FF0000", "������-#FF0066",
			 "������-#FF0000", "��Ԫ��-#FF0066", "������-#33FF00", "�ڽ���-#33FF00", "��ɽ��-#33FF00", "�ϳ���-#FF0000",
			 "üɽ��-#FF0066", "�˱���-#FF0000", "�㰲��-#33FF00","������-#FF0066", "�Ű���-#FF0066", "������-#FF0066",
			 "������-#FF0000", "���Ӳ���Ǽ��������-#FF0000", "���β���������-#FF0066", "��ɽ����������-#FF0000"
              ];
var hainans=[
             "������-#FF0066", "������-#FF0000", "��ָɽ��-#33FF00","������-#FF0066","�Ĳ���-#33FF00"            
             ];
var shandongs=[
			"������-#FF0066", "�ൺ��-#FF0000", "�Ͳ���-#FF0066", "��ׯ��-#FF0000", "��Ӫ��-#FF0066",
			"��̨��-#FF0000", "Ϋ����-#33FF00", "������-#FF0000", "̩����-#33FF00", "������-#FF0000", "������-#FF0000",
			"������-#FF0000", "������-#FF0066","������-#33FF00", "�ĳ���-#FF0066", "������-#33FF00"
            ];
 var xinjiangs=[
			"��³ľ����-#FF0000", "����������-#FF0000", "��������������-#FF0000", "���������ɹ�������-#FF0066", "���������ɹ�������-#FF0066",
			"�����յ���-#FF0066", "��ͼʲ��-#FF0066", "��ʲ����-#FF0066", "�������-#FF0066", "���������������-#FF0000", "���ǵ���-#FF0000",
			"����̩����-#FF0000", "ʯ������-#FF0066"
                ];     
var xizangs=[
			"������-#FF0000", "��������-#FF0066", "ɽ�ϵ���-#FF0000", "�տ������-#FF0066", "��������-#FF0000",
			"�������-#33FF00", "��֥����-#FF0000"
             ];
var shanxis=[
			"������-#FF0000", "ͭ����-#FF0066", "������-#FF0000", "������-#FF0066", "μ����-#33FF00",
			"�Ӱ���-#FF0066", "������-#FF0000", "������-#33FF00", "������-#FF0000", "������-#FF0066"            
             ];
var hebeis=[
			"ʯ��ׯ��-#FF0000", "��ɽ��-#FF0066", "�ػʵ���-#FF0000", "������-#FCFBBB", "��̨��-#FF0066",
			"������-#FF0066", "�żҿ���-#FF0000", "�е���-#FF0066", "������-#FF0000", "�ȷ���-#FF0000", "��ˮ��-#FF0000"
            ];
var heilongjiangs=[
			"��������-#FF0000", "���������-#FF0066", "������-#FF0066", "�׸���-#FF0000", "˫Ѽɽ��-#FF0066",
			"������-#33FF00", "������-#33FF00", "��ľ˹��-#FF0000", "��̨����-#33FF00", "ĵ������-#FF0000", "�ں���-#FF0000",
			"�绯��-#FF0000", "���˰������-#FF0000"      
                   ];
var ningxias=[
			"������-#FF0000", "ʯ��ɽ��-#FF0066", "������-#FF0000", "��ԭ��-#FF0066", "������-#33FF00"
              ]; 
var neimenggus=[
                "���ͺ�����-#33FF00", "��ͷ��-#33FF00", "�ں���-#FF0000", "�����-#FF0066", "ͨ����-#FF0000",
                "������˹��-#FF0000", "���ױ�����-#33FF00", "�����׶���-#FF0000", "�����첼��-#FF0000", "�˰���-#FF0066",
                "���ֹ�����-#33FF00","��������-#FF0000"  
                ];
var qinghais=[
			"������-#FF0000", "��������-#FF0066", "��������������-#FF0000", "���ϲ���������-#FF0000", "���ϲ���������-#FF0066",
			"�������������-#FF0000", "��������������-#33FF00", "�����ɹ������������-#FF0066"
               ]; 
var gansus=[
			"������-#FF0066", "��������-#FF0000", "�����-#FF0066", "������-#33FF00", "��ˮ��-#FF0000",
			"������-#FF0000", "��Ҵ��-#FF0066", "ƽ����-#FF0000", "��Ȫ��-#33FF00", "������-#FF0000", "������-#33FF00",
			"¤����-#FF0066", "���Ļ���������-#FF0066","���ϲ���������-#FF0000"
            ];
var shanxishengs=[
			"̫ԭ��-#FF0066", "��ͬ��-#FF0000", "��Ȫ��-#FF0066", "������-#33FF00", "������-#FF0066",
			"˷����-#FF0000", "������-#FF0066", "�˳���-#FF0000", "������-#FF0066", "�ٷ���-#FF0000",
			"������-#FF0066"      
                  ];
var jilins=[
				"������-#FF0000", "������-#FF0066", "��ƽ��-#FF0000", "��Դ��-#FF0066", "ͨ����-#33FF00",
				"��ɽ��-#FF0066", "��ԭ��-#FF0000", "�׳���-#FF0066", "�ӱ߳�����������-#FF0000"
            ];
var  beijings=[
                "������-#FBC5DC"
               ];           
var tianjins=[
                 "�����-#33FF00"
              ];  
var shanghais=[
                 "�Ϻ���-#FF0000"
               ];
var chongqins=[
                 "������-#33FF00"
               ]; 
var xianggangs=[
                 "���-#FCFBBB"
                ];
if(pname=="����ʡ"){
drawColor(liaonings);
}else if(pname=="���ɹ�������"){
	drawColor(neimenggus);
}else if(pname=="����"){
	drawColor(guangxis);
}else if(pname=="�㶫"){
	drawColor(guangdongs);
}else if(pname=="����"){
	drawColor(hunans);
}else if(pname=="����"){
	drawColor(guizhous);
}else if(pname=="����"){
	drawColor(yunnans);
}else if(pname=="����"){
	drawColor(fujians);
}else if(pname=="����"){
	drawColor(jiangxis);
}else if(pname=="�㽭"){
	drawColor(zhejiangs);
}else if(pname=="����"){
	drawColor(anhuis);
}else if(pname=="����"){
	drawColor(hubeis);
}else if(pname=="����"){
	drawColor(henans);
}else if(pname=="����"){
	drawColor(jiangsus);
}else if(pname=="�Ĵ�"){
	drawColor(sichuans);
}else if(pname=="����ʡ"){
	drawColor(hainans);
}else if(pname=="ɽ��"){
	drawColor(shandongs);
}else if(pname=="����"){
	drawColor(liaonings);
}else if(pname=="�½�"){
	drawColor(xinjiangs);
}else if(pname=="����"){
	drawColor(xizangs);
}else if(pname=="����"){
	drawColor(shanxis);
}else if(pname=="�ӱ�"){
	drawColor(hebeis);
}else if(pname=="������"){
	drawColor(heilongjiangs);
}else if(pname=="����"){
	drawColor(ningxias);
}else if(pname=="�ຣ"){
	drawColor(qinghais);
}else if(pname=="����"){
	drawColor(gansus);
}else if(pname=="ɽ��"){
	drawColor(shanxishengs);
}else if(pname=="����ʡ"){
	drawColor(jilins);
}else if(pname=="����"){
	drawColor(beijings);
}else if(pname=="���"){
	drawColor(tianjins);
}else if(pname=="�Ϻ�"){
	drawColor(shanghais);
}else if(pname=="������"){
	drawColor(chongqins);
}else if(pname=="���"){
	drawColor(xianggangs);
}
//����ͬ���и��費ͬ��ɫ
function drawColor(array){
for(var i=0;i<array.length;i++){ 
    getBoundary(array[i]); 
} 
}