/**
 * Created by miracle on 2015/12/29.
 */
var secTree=document.getElementsByClassName("k-sec-tree");
var dragBu=document.getElementById("k-drop");
var dragEle=document.getElementsByClassName("k-drag");
var dragsecEle=document.getElementsByClassName("k-sec-drag");
dragBu.onclick=handleonecli;
    function handleonecli(e){
    if(e.target.classList.contains("k-icon-collapse")){
        for(var i=0;i<dragsecEle.length;i++){
            dragsecEle[i].classList.remove("k-drop");
            dragsecEle[i].classList.add("k-rise");
        }
        e.target.classList.remove("k-icon-collapse");
        e.target.classList.add("k-icon-expand");
        for(var j=0;j<secTree.length;j++){
            secTree[j].classList.remove("k-icon-expand");
            secTree[j].classList.add("k-icon-collapse");
        }
        var test=e.target;
       e.target.nextSibling.style.color="#E9573F";
    }
    else if(e.target.classList.contains("k-icon-expand")){
        for(var i=0;i<dragEle.length;i++){
            dragEle[i].classList.remove("k-rise");
            dragEle[i].classList.add("k-drop");
        }
        e.target.classList.remove("k-icon-expand");
        e.target.classList.add("k-icon-collapse");
        e.target.nextSibling.style.removeProperty("color");
    }
        colorChange();
};//第一级树下拉时仅二级树出现，第一级树上拉时所有树消失
var secTree=document.getElementsByClassName("k-sec-tree");
var secElement=document.getElementsByClassName("k-drag");
for(var i=0;i<secTree.length;i++){
    secTree[i].onclick=handleseccli;
}
function expandsectree(target,conclass){
    for(var i=0;i<secElement.length;i++){
        if(secElement[i].classList.contains(conclass)){
            secElement[i].classList.remove("k-drop");
            secElement[i].classList.add("k-rise");
        }
    }
   target.classList.remove("k-icon-collapse");
   target.classList.add("k-icon-expand");
}//两个过程，被点对象换方向，子树出现，target是被点对象，conclass是用于查找对应子树的标志名
function collapsesectree(target,conclass){
    for(var i=0;i<secElement.length;i++){
        if(secElement[i].classList.contains(conclass)){
            secElement[i].classList.remove("k-rise");
            secElement[i].classList.add("k-drop");
        }
    }
    target.classList.remove("k-icon-expand");
    target.classList.add("k-icon-collapse");
}
function handleseccli(e){
    var conclass= e.target.classList[0];
    var target= e.target;
    if(e.target.classList.contains("k-icon-collapse")){
        expandsectree(target,conclass);
    }
    else if(e.target.classList.contains("k-icon-expand")){
        collapsesectree(target,conclass);
    }
    colorChange();
}//第二级树定义一个class用以定位其子树

function colorChange(){
for(var i=0;i<secTree.length;i++){
    if(secTree[i].classList.contains("k-icon-collapse")){
        secTree[i].nextSibling.style.removeProperty("color");
    }else if(secTree[i].classList.contains("k-icon-expand")){
        secTree[i].nextSibling.style.color="#E9573F";
    }
}}//改变颜色


/*          var json_news=[{"Name":"行业动态","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"其他资讯","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"技术前沿","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"政策动向","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"comodel","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"软件资讯","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"}]
          var json_blog=[{"Name":"行业观察","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"建模仿真","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"产品设计","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"软件应用","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"其他博客","Ename":"英文名称","Descibe":"描述","Image":"../../images/admin/test1.jpg"},]
          var json_know=[{"Name":"IT服务","Ename":"IT Service","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 技术服务","Ename":"Technology ","Descibe":"描述","Image":"../../images/admin/test1.jpg"},]
          var json_class=[{"Name":"行业应用研究","Ename":"Industry application research ","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"Modelica技术培训","Ename":"Modelica Technology Training ","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"软件应用培训","Ename":"Software application training","Descibe":"描述","Image":"../../images/admin/test1.jpg"},]
          var json_model=[{"Name":" 车辆工程","Ename":"Vehicle Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"生化工程","Ename":"Biochemical Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"数学模型","Ename":"Math Model","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"控制系统","Ename":"Control System","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"电力工程","Ename":"Power Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"建筑工程","Ename":"Architectural Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"热电工程","Ename":"Thermoelectric Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"流体系统","Ename":"Fluid System","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"机械工程","Ename":"Mechanical Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"电子工程","Ename":"Electronic Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},]
          var json_profess=[{"Name":" 能源动力","Ename":"Energy power ","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 环境工程","Ename":"Environmental Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 机械工程","Ename":"Mechanical Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"电气工程","Ename":"Electrical engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"电子科学","Ename":"Electronic Science","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"土木工程","Ename":"Civil Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 海洋工程","Ename":"Oceanographic Engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 航天航空","Ename":"Aerospace","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":"核电工程 ","Ename":"Nuclear power engineering","Descibe":"描述","Image":"../../images/admin/test1.jpg"},
                {"Name":" 其他领域","Ename":"Other","Descibe":"描述","Image":"../../images/admin/test1.jpg"},]
function initial(){
localStorage.setItem("json_news",JSON.stringify(json_news));
localStorage.setItem("json_blog",JSON.stringify(json_blog));
localStorage.setItem("json_know",JSON.stringify(json_know));
localStorage.setItem("json_class",JSON.stringify(json_class));
localStorage.setItem("json_model",JSON.stringify(json_model));
localStorage.setItem("json_profess",JSON.stringify(json_profess));
    htmlClear();
    displayAll();}*/
/*var initialButton=document.getElementById("initial");
initialButton.onclick=initial;//还原初始值*/
function htmlClear(){
    var target=document.getElementsByClassName("newAdd");
    var test=target.length;
       for(var i=0;i<test;i++){
           target[0].parentNode.removeChild(target[0]);
       }//这删除的循环也是rilegoule,每执行一次删除target少一项，执行下一次时使用的是新的target。
}//清空html
var secTreeElement=document.getElementsByClassName("k-sec-drag");
var _token=getBasicData()[0];
var USERID=$("#userID").val();
var PROPATH = $("#propath").val();
var LANG = $("#langVal").val();
var SERVICEPATH=$("#servicepath").val();
var auid=Math.uuid();
var current = null;
var jcropID = null;
function displayAllElement(){
for(var i=0;i<secTreeElement.length;i++){
	var beInserted=secTreeElement[i];
    var idName=secTreeElement[i].id;
    $.ajax({
        url:PROPATH+"/param/"+idName+"/",
        dataType:"json",
        type:"get",
        async:false,
        cache:false,
        data:{
        	"page":"1",
        	"size":"0",
            "_token":_token,
            "user":USERID,
    },
        success:function(data){
        var target=data.data;
        $.each(target,function(index,item){
            var newElement=display(item);
            var test=newElement.getElementsByClassName("elementImage");
            if(newElement.getElementsByClassName("elementImage")[0].src=="http://localhost:8080/web/view/admin/null"){
            	newElement.getElementsByClassName("elementImage")[0].src=USERIMGDEFAULT;
            }
            addEvent(newElement,idName,item);
            newElement.className="k-drag k-drop newAdd "+idName;
            beInserted.parentNode.insertBefore(newElement,beInserted.nextSibling);
        })
    }

    })
}
displayway();
} 
displayAllElement();
/*var elementImage=$(".elementImage")
for(var i=0;i<=elementImage.length;i++){
	var test=elementImage[i];
	if(elementImage[i].src=="http://localhost:8080/web/view/admin/null"){
		elementImage[i].src=USERIMGDEFAULT;
	}
	
}*/
function display(element){
   var newEle=document.createElement("tr");
    newEle.innerHTML+="<td><span class='k-icon'></span><span class='k-icon'></span>" +
    "<span class='k-icon'></span><div class='destree-icon'></div><div class='k-word destree'>"+element.value+"</div></td>"
    +"<td><div class='destree'><span class='k-icon'></span><span class='k-icon'></span>"+element.local+"</div></td><td><div style='width:300px;word-break:break-all;height:50px;' class='destree'><p class='describeContent'>"+element.summary+"</p></div></td>"
    +"<td><img class='elementImage' style='width:50px;height:50px;margin-top: 4px' src='"+element.cover+
    "'></td><td><div class='delete'> <div class='delete-icon'></div><div class='delete-word'></div></div>"
    +"<div class='revise'><div class='revise-icon'></div><div class='revise-word'></div> </div>";
    return newEle;
}//根据数据库数据创建一个元素
function displayway(){
	var treeIcon=$(".k-sec-tree");
    var target=document.getElementsByClassName("newAdd");
    for(var i=0;i<treeIcon.length;i++){
        var conclass=treeIcon[i].classList[0];
    if(treeIcon[i].classList.contains("k-icon-collapse")){
        for(var j=0;j<target.length;j++){
            if(target[j].classList.contains(conclass)){
              target[j].classList.remove("k-rise");
                target[j].classList.add("k-drop")
            }
        }
    }
        else if(treeIcon[i].classList.contains("k-icon-expand")){
            for(var j=0;j<target.length;j++){
                if(target[j].classList.contains(conclass)){
                    target[j].classList.remove("k-drop");
                    target[j].classList.add("k-rise");
                }
            }
    }
    }
}//实现每次执行displayall时，出现元素的display属性应该受第二级树的状态控制
var imagePath="";
var reviseForm=document.getElementById("reviseForm");
function addEvent(newElement,idName,item){
	var deleteIcon=newElement.getElementsByClassName("delete");
    deleteIcon[0].onclick=function(){
    		var box = new BlackBox();
    		box.confirm('您确定删除 &nbsp;&nbsp;&nbsp;['+item.value+']&nbsp;&nbsp;&nbsp;分类吗？', function (data) {
    	        if (data) {
    	        	$.ajax({
    	        		url:PROPATH+"/param/"+idName+"/"+item.id,
    	        		dataType:"json",
    	        		type:"post",
    	        		cache:false,
    	        		async:false,
    	        		data:{
    	        			"_token":_token,
    	        			"user":USERID,
    	        			"_method":"delete",
    	        		},
    	        		success:function(data){
    	        			htmlClear();
    	        			displayAllElement();
    	        			if(data.code=="00000"){
    	        				Notifier.success('删除[ '+item.value+' ]案例分类成功');
    	        			}else{
    	        				Notifier.error('删除[ '+item.value+' ]案例分类失败');
    	        			}
    	        		}
    	        	})//发送请求执行删除事件
    	        }
    	    }, {
    	        title: '删除提示'
    	    })//调用的这个要搞搞明白
	}//为每个元素添加删除事件
    var resubmit=document.getElementById("rsubmit");
    var inputreElement=document.getElementsByClassName("formb");
    var recancel=document.getElementById("rcancel")
    var reviseit=newElement.getElementsByClassName("revise");
    var img=document.getElementById("reviseformimg");
    var previewimg=document.getElementById("pupload_big_revise");
   /* var fileinput=document.getElementById("rimage");*/
        reviseit[0].onclick=function(e){
        	icon100100=item.cover;
        	/*fileinput.value="";*/
    	    img.src=USERIMGDEFAULT;
    	    previewimg.src=item.cover;
    	    /*img.width=80;
    	    img.height=95;*/
            inputreElement[0].value=item.value;
            inputreElement[1].value=item.local;
            inputreElement[2].value=item.summary;
            reviseForm.style.display="block";
            mask.style.display="block";//初始化表单信息
            revise();          
            resubmit.onclick=function(){
            	if(inputreElement[0].value==""||inputreElement[1].value==""||inputreElement[2].value=="")
            		{
            		Notifier.info("请将信息填写完整");
            		}
            	else{
            	$.ajax({
            		url:PROPATH+"/param/"+idName+"/"+item.id,
            		dataType:"json",
            		type:"post",
            		cache:false,
            		async:false,
            		data:{
            			"_token":_token,
            			"user":USERID,
            			"value":inputreElement[0].value,
            			"local":inputreElement[1].value,
            			"cover":icon100100,
            			"summary":inputreElement[2].value,
            			"_method":"put",
            		},
            		success:function(data){
            			reviseForm.style.display="none";
            	        mask.style.display="none";
            			htmlClear();
            			displayAllElement();
            			if(data.code=="00000"){//???这句话是什么意思？？？
            				Notifier.success('修改[ '+item.value+' ]知识服务商分类成功');
            			}else{
            				Notifier.error('修改[ '+item.value+' ]知识服务商分类失败');
            			}
            		}
            	})
    }
        recancel.onclick=function(e){
            reviseForm.style.display="none";
            mask.style.display="none";
        }}}
}
function revise(){
	$("#selectPicture").html("");
	var auid=Math.uuid();
	var params="_token="+_token+"&user="+USERID;
	var url=PROPATH+"/file/"+auid+"/2?"+params;
		$("#selectPicture").Huploadify({
			auto:true,
		    fileTypeExts:"*.jpg;*.jpeg;*.png;",
		    multi:true,
		    fileSizeLimit:1024,
		    buttonText:"修改头像",
		    uploader:url,
		    onInit:function(){
		    	
		    },
		    onUploadStart:function(file){
		    },
		    onSelect:function(file){
		    	
		    },
		    onUploadComplete:function(file,responseText){
		    	var textJSON = $.parseJSON(responseText);
		    	if(null!=textJSON&&""!=textJSON){
		    		var err = textJSON.error;
		    		if(null==err||""==err){
		    			var lists = textJSON.data;
		    			if(lists.length>0){
		    				var item = lists[0];
		    				var imgPath= item.url;
		    				var showImg = SERVICEPATH+imgPath;
		    				var imgId = item.id;
		    				jcropID=item.id;
		    				$("#imagePreview").html('<img id="reviseformimg" class="previewPicture" src="'+showImg+'"/>');		    				
		    				$("#pupload_big_revise").attr("src","");
		    				$("#pupload_big_revise").attr("src",showImg);
		    				rcropIcon(showImg)
		    				imagePath=showImg;
			    		}
		    		}
		    	}
		    }
	})
}
var closereForm=$("#closereForm")[0];
closereForm.onclick=function(){
	 reviseForm.style.display="none";
     mask.style.display="none";
}
var rjcrop_api,
rboundx,
rboundy,
$rpreview = $('#preview-pane-revise'),
$rpcnt = $('#preview-pane-revise .preview-container-add'),
$rpimg = $('#preview-pane-revise .preview-container-add img'),
rxsize = $rpcnt.width(),
rysize = $rpcnt.height();
var xr = "";
var yr = "";
var wr = "";
var hr = "";
function rshowPreview(coords) {
	if(parseInt(coords.w)>0){
		var rrx = rxsize / coords.w;
        var rry = rysize / coords.h;
		$rpimg.css({
			width : Math.round(rrx * rboundx) + 'px',
			height : Math.round(rry * rboundy) + 'px',
			marginLeft : '-' + Math.round(rrx * coords.x) + 'px',
			marginTop : '-' + Math.round(rry * coords.y) + 'px'
		});
		xr = coords.x;
		yr = coords.y;
		wr = coords.w;
		hr = coords.h;
	}
	
}
function rcropIcon(imgPath){
	refreshRatio(revisePreviewImg);
	$("#reviseformimg").Jcrop({
		onChange : rshowPreview,
		onSelect : rshowPreview,
		setImage:imgPath,
		setSelect: [ 93, 94, 213, 214 ],
		aspectRatio : 1
		
	},function(){
	  var bounds = this.getBounds();
      rboundx = bounds[0];
      rboundy = bounds[1];
	});
}
function rsaveIcon(){
	$("#riconSaveBtn").click(function(){
		auid = auid;
		var itemid = auid;
		var srcobjid = jcropID;
		var xVal = xr;
		var yVal = yr;
		var wVal = wr;
		var hVal = hr;
		$.ajax({
			url:PROPATH+"/file/"+itemid+"/cut/"+srcobjid,
			type:"post",
			cache:false,
			dataType:"json",
			data:{
				"x":xVal,
				"y":yVal,
				"width":wVal,
				"height":hVal,//？？？如上用以保存图片的局部吗
				"cw":"100",
				"ch":"100",
				"_token":_token,
				"user":USERID
			},
			success:function(data){
				if("00000" != data.code){
					Notifier.error(data.error.localizedMessage);
					return;
				}
				
				icon100100 = data.data[0].url;
				var previewUrl = data.data[0].url;
				for(var index = 0; index < data.data.length; index++){
					if(data.data[index].spec == ""){
						previewUrl = SERVICEPATH+ data.data[index].url;
						continue;
					}
					if(data.data[index].spec =="100*100"){
						icon100100 = SERVICEPATH+data.data[index].url;
						continue;
					}
				}
				$("#pupload_big_revise").attr("src",previewUrl);
				refreshRatio(revisePreviewImg);						
				$("#imagePreview").html("");
				$("#imagePreview").html('<img class="previewPicture" id="reviseformimg" src="'+icon100100+'"/>');
				/*if("00000"==data.code){//？？？有何含义
					if(data.rows>0){
						var iconid = srcobjid;
						var itemUrl = data.data[0].url;
						var iconPath = getObjPic(auid,"120*120",false,"blog");//是什么意思
						//var setImgPath = USERIMGDEFAULT;
						if(iconPath!=USERIMGDEFAULT){
							setImgPath = iconPath;
						}
						$("#pupload_big_revise").attr("src",setImgPath);
						refreshRatio(revisePreviewImg);						
						$("#imagePreview").html("");
						$("#imagePreview").html('<img class="previewPicture" id="reviseformimg" src="'+setImgPath+'"/>');
					}
					Notifier.info("保存头像成功");
				}else{
					Notifier.error(data.error.localizedMessage);
				}*/
			}
		});
	})	
}
var revisePreviewImg=$("#pupload_big_revise");
var addPreviewImg=$("#pupload_big_add");
function refreshRatio(element){
	element.css({
		width:"100px",
		height:"100px",
		marginLeft:"0px",
		marginTop: "0px",
	});
}
rsaveIcon();
//为新添元素添加删除和修改事件
//1、不能再函数内调用该函数会造成死循环，但可以在该函数的事件内可以调用该函数
//2、为新增加的元素添加事件，
/*function displayAll(){
    var itemcount=localStorage.length;
    for(var i=0;i<itemcount;i++){
        var key=localStorage.key(i);
            var json_ele=localStorage[key];
            json_ele=JSON.parse(json_ele);//将json文本转化为script对象
            for(var j=json_ele.length-1;j>=0;j--){
                var newEle=display(json_ele[j]);
                newEle.className="k-drag k-drop newAdd "+key;
                addEvent(newEle,key,json_ele[j]);
                addreevent(newEle,key,json_ele[j]);
                var findEle=document.getElementById(key);
                findEle.parentNode.insertBefore(newEle,findEle.nextSibling);
            }
    }
    displayway();
}//将localstorage中的值显示为html
displayAll();*/
var form=document.getElementById("addForm")
var linkButton=document.getElementsByClassName("linkButton");
var inputElement=document.getElementsByClassName("forma");
var submit=document.getElementById("submit");
var cancel=document.getElementById("cancel");
var mask=document.getElementById("form-mask");
var addimg=document.getElementById("reviseAddFormimg");
/*var addfileinput=document.getElementById("Image")*/
for(var i=0;i<linkButton.length;i++){
    linkButton[i].onclick=handlelink;
}
function handlelink(e) {
	icon100100=USERIMGDEFAULT;
	$("#addPreview").html('<img id="reviseAddFormimg" class="previewPicture" src="http://172.28.211.12//images/index/blue/user_gray.png"/>');
	$("#pupload_big_add").attr("src","");
	$("#pupload_big_add").attr("src","http://172.28.211.12//images/index/blue/user_gray.png")
    refreshRatio(addPreviewImg);
	//#pupload_big_out_add").html('<img class="jcrop-preview-add" id="pupload_big_add" src="http://172.28.211.12//images/index/blue/user_gray.png"/>');
	mask.style.display="block";
    var key= e.target.id.substring(1);
    if(key==""){
        key= e.target.parentNode.id.substring(1);
    }///***为了避免点击其后代元素时返回值出现错误；可以找到控制响应区的方法进行改进
    var sectree=document.getElementsByClassName("k-sec-tree");
    var target="";
    for(var i=0;i<sectree.length;i++){
        if(sectree[i].classList[0]==key){
            target=sectree[i];
        }
      
    }
    expandsectree(target,key);
    window.history.pushState("","","?"+key);
    form.style.display="block";
    reviseAddImage();
}//两个过程：展开树和出现表单
function reviseAddImage(){
	$("#selectAddImage").html("");
	/*var reviseit=newElement.getElementsByClassName("revise");*/
	var auid=Math.uuid();
	var params="_token="+_token+"&user="+USERID;
	var url=PROPATH+"/file/"+auid+"/2?"+params;
		$("#selectAddImage").Huploadify({
			auto:true,
		    fileTypeExts:"*.jpg;*.jpeg;*.png;",
		    multi:true,
		    fileSizeLimit:1024,
		    buttonText:"上传头像",
		    uploader:url,
		    onInit:function(){
		    	
		    },
		    onUploadStart:function(file){
		    },
		    onSelect:function(file){
		    	
		    },
		    onUploadComplete:function(file,responseText){
		    	var textJSON = $.parseJSON(responseText);
		    	if(null!=textJSON&&""!=textJSON){
		    		var err = textJSON.error;
		    		if(null==err||""==err){
		    			var lists = textJSON.data;
		    			if(lists.length>0){
		    				var item = lists[0];
		    				var imgPath= item.url;
		    				var showImg = SERVICEPATH+imgPath;
		    				var imgId = item.id;
		    				jcropID = imgId;
		    				$("#addPreview").html('<img id="reviseAddFormimg" class="previewPicture" src="'+showImg+'"/>');
		    				$("#pupload_big_add").attr("src","");
		    				$("#pupload_big_add").attr("src",showImg);		    				
		    				cropIcon(showImg);
		    				imagePath=showImg;
			    		}
		    		}
		    	}
		    }
	})
}
cancel.onclick=function(e){
    e.preventDefault();
    form.style.display="none";
    clearaddInput();
    mask.style.display="none";
}//取消表单输入
submit.onclick=function(e){
	if(inputElement[0].value==""||inputElement[1].value==""||inputElement[0].value==""){
		Notifier.info("请将信息填写完整");
	}
	else{
    var key=window.location.search;
    var key=key.substring(1);
    $.ajax({
    	url:PROPATH+"/param/"+key+"/",
    	dataType:"json",
    	cache:false,
    	async:false,
    	type:"post",
    	data:{
    		"value":inputElement[0].value,
    		"local":inputElement[1].value,
    		"summary":inputElement[2].value,
    		"cover":icon100100,
    		"_token":_token,
    		"user":USERID,
    		"method":"post",
    	},
    	success:function(){
    		htmlClear();
    		displayAllElement();
    	}
    
    })
    form.style.display="none";
    mask.style.display="none";
    clearaddInput();
	}}//提交表单
function clearaddInput(){
    for(var i=0;i<inputElement.length;i++){
        inputElement[i].value=""
    }
}//添加时的表单事件
var closeForm=document.getElementById("closeForm");
closeForm.onmousedown=function(e){
		e.stopPropagation();
	    form.style.display="none";
	    clearaddInput();
	    mask.style.display="none";
}
var msgobj=document.getElementsByClassName("form-style")
var titlebar=document.getElementsByClassName("title-bar")
var moveX=0;
var moveY=0;//鼠标所在位置
var targetX=0;
var targetY=0;//信息窗所在位置
var targetWidth=408;
var targetHeight=167;
var moveable=false;
for(var i=0;i<titlebar.length;i++){
    titlebar[i].onmousedown=handlemousedown;
}
function handlemousedown(e){
    for(var j=0;j<msgobj.length;j++){
        if(e.target.classList.contains(msgobj[j].id)){
          msgobjTarget=msgobj[j];
        }
    }
    var evt=getevent();
    moveable=true;
    moveX=evt.clientX;
    moveY=evt.clientY;
    targetX=parseInt( msgobjTarget.style.left);//别忘了转化成整形
    targetY=parseInt( msgobjTarget.style.top);
    document.onmousemove=function(e){
        if(moveable) {
            var evt = getevent();
            var x = targetX + evt.clientX - moveX;//信息框坐标加鼠标移动坐标
            var y = targetY + evt.clientY - moveY;
            if (x > 0 && x + targetWidth < document.documentElement.clientWidth && y > 0 && y + targetHeight < document.documentElement.clientHeight) {
                msgobjTarget.style.left = x + "px";
                msgobjTarget.style.top = y + "px";}
            }//document.documentElement.clientWidth浏览器的宽度
        }
    document.onmouseup=function(){
        if(moveable){
            moveX=0;
            moveY=0;//鼠标所在位置
            targetX=0;
            targetY=0;//信息窗所在位置
            moveable=false;
        }
    }
}
function getevent(){
    return window.event||arguments.callee.caller.arguments[0];
}//实现表单的拖动
var jcrop_api,
boundx,
boundy,
$preview = $('#preview-pane-add'),
$pcnt = $('#preview-pane-add .preview-container-add'),
$pimg = $('#preview-pane-add .preview-container-add img'),
xsize = $pcnt.width(),
ysize = $pcnt.height();
var x = "";
var y = "";
var w = "";
var h = "";
function showPreview(coords) {
	if(parseInt(coords.w)>0){
		var rx = xsize / coords.w;
        var ry = ysize / coords.h;
		$pimg.css({
			width : Math.round(rx * boundx) + 'px',
			height : Math.round(ry * boundy) + 'px',
			marginLeft : '-' + Math.round(rx * coords.x) + 'px',
			marginTop : '-' + Math.round(ry * coords.y) + 'px'
		});
		x = coords.x;
		y = coords.y;
		w = coords.w;
		h = coords.h;
	}
	
}
function cropIcon(imgPath){
	refreshRatio(addPreviewImg);
	$("#reviseAddFormimg").Jcrop({
		onChange : showPreview,
		onSelect : showPreview,
		setImage:imgPath,
		setSelect: [ 93, 94, 213, 214 ],
		aspectRatio : 1
		
	},function(){
	  var bounds = this.getBounds();
      boundx = bounds[0];
      boundy = bounds[1];
	});
}
var icon100100= USERIMGDEFAULT;
function saveIcon(){
	$("#iconSaveBtn").click(function(){
		auid = auid;
		var itemid = auid;
		var srcobjid = jcropID;
		var xVal = x;
		var yVal = y;
		var wVal = w;
		var hVal = h;
		$.ajax({
			url:PROPATH+"/file/"+itemid+"/cut/"+srcobjid,
			type:"post",
			cache:false,
			dataType:"json",
			data:{
				"x":xVal,
				"y":yVal,
				"width":wVal,
				"height":hVal,//？？？如上用以保存图片的局部吗
				"cw":"100",
				"ch":"100",
				"_token":_token,
				"user":USERID
			},
			success:function(data){

				if("00000" != data.code){
					Notifier.error(data.error.localizedMessage);
					return;
				}
				
				icon100100 = data.data[0].url;
				var previewUrl = data.data[0].url;
				for(var index = 0; index < data.data.length; index++){
					if(data.data[index].spec == ""){
						previewUrl = SERVICEPATH+ data.data[index].url;
						continue;
					}
					if(data.data[index].spec =="100*100"){
						icon100100 = SERVICEPATH+data.data[index].url;
						continue;
					}
				}
				$("#pupload_big_add").attr("src",previewUrl);
				refreshRatio(addPreviewImg);
				$("#addPreview").html("");
				$("#addPreview").html('<img class="previewPicture" id="reviseAddFormimg" src="'+icon100100+'"/>');
				Notifier.info("保存头像成功");
				/*if("00000"==data.code){//？？？有何含义
					if(data.rows>0){
						var iconid = srcobjid;
						var itemUrl = data.data[0].url;
						var iconPath = getObjPic(auid,"120*120",false,"blog");//是什么意思
						//var setImgPath = USERIMGDEFAULT;
						if(iconPath!=USERIMGDEFAULT){
							setImgPath = iconPath;
						}
						$("#pupload_big_add").attr("src",setImgPath);
						refreshRatio(addPreviewImg);
						$("#addPreview").html("");
						$("#addPreview").html('<img class="previewPicture" id="reviseAddFormimg" src="'+setImgPath+'"/>');
					}
					Notifier.info("保存头像成功");
				}else{
					Notifier.error(data.error.localizedMessage);
				}*/
			}
		});
	})	
}
saveIcon();//截图预览并保存
function checkContent(element){
	if(element.value==''){
		element.nextSibling.style.display="block";}
	else{
		element.nextSibling.style.display="none";
	}
}
/*var addimage="";
function addpreview(file){
	var filepath=file.value;
    var index=filepath.indexOf(".");
    var realtype=filepath.substring(index,filepath.length).toUpperCase();
    if(realtype!=".BMP"&&realtype!=".PNG"&&realtype!=".GIF"&&realtype!=".JPG"&&realtype!=".JPEG")
    {alert("选择正确的图片格式")
    file.value="";
    }
    else
    {
    	var img=document.getElementById("addformimg")
	    var maxwidth=80;
	    var maxheight=95;
	    img.onload=function(){
	        img.width=maxwidth;
	        img.height=maxheight;
	    }
	    var reader=new FileReader();
	    reader.onload=function(e){
	    	img.src=e.target.result
	    	addimage=img.src;
	    };
	    reader.readAsDataURL(file.files[0]);
	}}
var reviseimage="";
var img=document.getElementById("reviseformimg");
function revisepreview(file){
	var filepath=file.value;
    var index=filepath.indexOf(".");
    var realtype=filepath.substring(index,filepath.length).toUpperCase();
    if(realtype!=".BMP"&&realtype!=".PNG"&&realtype!=".GIF"&&realtype!=".JPG"&&realtype!=".JPEG")
    {alert("选择正确的图片格式")
    file.value="";
    }
    else
    {
    var maxwidth=80;
    var maxheight=95;
    img.onload=function(){
        img.width=maxwidth;
        img.height=maxheight=95;
    }
    var reader=new FileReader();
    reader.onload=function(e){
    	img.src=e.target.result
    	reviseimage=img.src;
    	};
    reader.readAsDataURL(file.files[0]);
}}*/


