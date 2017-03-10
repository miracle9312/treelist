/**
 * Created by miracle on 2016/3/14.
 */
var canvasElems=document.getElementById("canvas");
var ctx=canvasElems.getContext("2d");
var canvasfake=document.getElementById("canvasfake");
var ctx_fake=canvasfake.getContext("2d");
var canvasX=canvasfake.offsetLeft;
var canvasY=canvasfake.offsetTop;
var canvasH=canvasfake.height;
var canvasW=canvasfake.width;
var cancelList=new Array();
var cancelIndex=0;
ctx_fake.strokeStyle="black";
ctx_fake.lineWidth=1;
var candraw;


function freeDraw(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor="url(pencil.ico),default";
    };
    canvasfake.onmousedown=function(e){
        candraw=true;
        var startX= e.clientX-canvasX+5;
        var startY= e.clientY-canvasY+27;
        ctx_fake.moveTo(startX, startY);
        ctx_fake.beginPath();
        canvasfake.onmousemove=function(e){
            if(candraw) {
               // ctx_fake.beginPath();
                ctx_fake.lineTo(e.clientX - canvasX+5, e.clientY - canvasY+27);
                ctx_fake.stroke();
            }
        }
    };
    canvasfake.onmouseup=function(e){
        candraw=false;
        copyImage();
        saveImage();
    }
}//铅笔工具

function drawLine(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor="crosshair"
    };
    canvasfake.onmousedown=function(e){
        candraw=true;
        var startX= e.clientX-canvasX;
        var startY= e.clientY-canvasY;
        canvasfake.onmousemove=function(e){
            if(candraw){
            ctx_fake.clearRect(0,0,canvasH,canvasW);
            ctx_fake.beginPath();
            ctx_fake.moveTo(startX,startY);
            ctx_fake.lineTo(e.clientX-canvasX, e.clientY-canvasY);
            ctx_fake.stroke();
        }
        }
    };
    canvasfake.onmouseup=function(e){
        candraw=false;
        copyImage();
        saveImage();
    }
}//直线工具

function drawCircle(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor="crosshair";
    };
    canvasfake.onmousedown=function(e){
        candraw=true;
        var startX= e.clientX-canvasX;
        var startY= e.clientY-canvasY;
        drawPoint(startX,startY);
        var rad=0;
        canvasfake.onmousemove=function(e){
            if(candraw){
            rad=Math.sqrt((e.clientX-startX-canvasX)*(e.clientX-startX-canvasX)+(e.clientY-startY-canvasY)*(e.clientY-startY-canvasY));
            ctx_fake.clearRect(0,0,canvasH,canvasW);
            ctx_fake.beginPath();
            //ctx_fake.moveTo(startX,startY);
            ctx_fake.arc(startX,startY,rad,0,Math.PI*2,true);
            ctx_fake.stroke();
            }
        }
    };
    canvasfake.onmouseup=function(e){
        candraw=false;
        copyImage();
        saveImage();
    }
}//圆形工具

function drawRect(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor="crosshair";
    };
    canvasfake.onmousedown=function(e){
        candraw=true;
        var startX= e.clientX-canvasX;
        var startY= e.clientY-canvasY;
        canvasfake.onmousemove=function(e){
            if(candraw){
            ctx_fake.clearRect(0,0,canvasH,canvasW);
            ctx_fake.beginPath();
            ctx_fake.moveTo(startX,startY);
            ctx_fake.rect(startX,startY, e.clientX-canvasX-startX, e.clientY-canvasY-startY);
            ctx_fake.stroke();
            }
        }
    };
    canvasfake.onmouseup=function(e){
        candraw=false;
        copyImage();
        saveImage();
    }
}//矩形工具

function erase(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor='url(eraser.ico),default';
    };
    canvasfake.onmousedown=function(e){
        candraw=true;
        canvasfake.onmousemove=function(e){
            if(candraw) {
                ctx_fake.clearRect(e.clientX-canvasX+5, e.clientY-canvasY+5 , 32, 32);
                ctx.clearRect(e.clientX -canvasX+5, e.clientY-canvasY+5 , 32, 32);
            }
        }
    };
    canvasfake.onmouseup=function(e){
        candraw=false;
        copyImage();
        saveImage();
    }
}//橡皮工具

function brush(){
    canvasfake.onmousemove=function(e){
        canvasfake.style.cursor="url(brush.ico),default";
    };
    canvasfake.onmousedown=function(e){
        ctx_fake.lineWidth=5;
        ctx_fake.lineCap="round";
        candraw=true;
        var startX= e.clientX-canvasX+6;
        var startY= e.clientY-canvasY+5;
        ctx_fake.moveTo(startX, startY);
        ctx_fake.beginPath();
        canvasfake.onmousemove=function(e){
            if(candraw) {
                ctx_fake.lineTo(e.clientX - canvasX+6, e.clientY - canvasY+5);
                ctx_fake.stroke();
            }
        }
    };
    canvasfake.onmouseup=function(e){
        ctx_fake.lineWidth=1;
        ctx_fake.lineCap="butt";
        candraw=false;
        copyImage();
        saveImage();
    }

}//刷子工具

function cancelDraw(){
    ctx.clearRect(0,0,canvasH,canvasW);
    ctx_fake.clearRect(0,0,canvasH,canvasW);
    cancelIndex++;
    var index=cancelList.length-1-cancelIndex;
    var dataurl;
    if(index>=0){
     dataurl=cancelList[index];
    }else{
        dataurl=cancelList[0];
    }
    var image=new Image();
    image.src=dataurl;
    image.onload=function(){
        ctx.drawImage(image,0,0,canvasH,canvasW);
    }
}//撤销

function stepDraw(){
    ctx.clearRect(0,0,canvasH,canvasW);
    ctx_fake.clearRect(0,0,canvasH,canvasW);
    cancelIndex--;
    var maxIndex=cancelList.length-1;
    var index=maxIndex-cancelIndex;
    var dataurl
    if(index<=maxIndex) {
        dataurl = cancelList[index];
    }else{
        dataurl=cancelList[maxIndex];
    }
    var image=new Image();
    image.src=dataurl;
    image.onload=function(){
        ctx.drawImage(image,0,0,canvasH,canvasW);
    }
}//前进

var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split("");
function createId(){
    var uuid=[];
    var range=chars.length;
    uuid[3]='-';uuid[7]='-';
    for(var i=0;i<11;i++){
        if(!uuid[i]){
            uuid[i]=chars[0|Math.random()*range];
        }
    }
    return uuid.join("");
}//产生一个id值

var db=openDatabase("drawBoradSql",1.0,"绘图板图片数据",10*1024,function(){});
db.transaction(function(tx){
    tx.executeSql("CREATE TABLE IF NOT EXISTS picture(id TEXT,content TEXT)");
});//创建数据库和表

function addItem(content){
    var itemId=createId();
    db.transaction(function(tx){
        tx.executeSql("insert into picture values('"+itemId+"','"+content+"')");
    })
}
function saveFile(){
var dataUrl=canvasElems.toDataURL();
    addItem(dataUrl);
    displayItem();
}//保存图片

var mypictures=document.getElementsByClassName("img-contain");
function displayItem(id){
    if(!id){
        db.transaction(function(tx){
            tx.executeSql("select * from picture",[],function(tx,result){
                for(var i=0;i<mypictures.length;i++){
                    if(i<result.rows.length){
                    mypictures[i].src=result.rows.item(i).content;
                    }else{
                        mypictures[i].src="nopicture.jpg";
                    }
                }
            })
        })
    }
}//显示图片
displayItem();

function deleteItem(content){
    db.transaction(function(tx){
        tx.executeSql("delete from picture where content=?",[content],function(){
            alert("the item has been removed");
        });
    })
}

function deletePicture(e){
        e.preventDefault();
        var pictureElem= e.target.parentNode.previousSibling.previousSibling;
        if(pictureElem.src!="nopicture.jpg"){
            deleteItem(pictureElem.src);
            pictureElem.src="nopicture.jpg";
        }
    }//删除图片

/*function download(){
    var downElem=document.getElementById("download0");
    downElem.download=canvasfake.toDataURL();
    downElem.click();
}*/
function saveImage(){
    cancelIndex=0;
    var dataUrl=canvasElems.toDataURL();
    cancelList.push(dataUrl);
}

var lineContain=document.getElementById("line-contain");
function lineweight(Obj){
    switch (Obj.id){
        case "thin-line":
            ctx_fake.lineWidth=1;
            break;
        case "middle-line":
            ctx_fake.lineWidth=5;
            break;
        case "thick-line":
            ctx_fake.lineWidth=10;
            break;
    }
    lineContain.style.display="none";
}
function chooseLine(e){
    var test=lineContain.style.display;
    if(lineContain.style.display==""){
        lineContain.style.display="none";
    }
       else if(lineContain.style.display=="none"){
    lineContain.style.display="";
        }
    var test1=lineContain.style.display;
    lineContain.style.left= e.clientX+10+"px";
    lineContain.style.top= e.clientY-10+"px";
}//选择线宽

function clearBoard(e){
    ctx.clearRect(0,0,canvasH,canvasW);
    ctx_fake.clearRect(0,0,canvasH,canvasW);
}//清屏

function copyImage(){
    ctx.drawImage(canvasfake,0,0,canvasH,canvasW);
}
function drawPoint(x,y){
    ctx.fillStyle="black";
    ctx.fillRect(x-1,y-1,2,2);
}
