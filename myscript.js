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
        e.target.nextSibling.nextSibling.style.color="#E9573F";
    }
    else if(e.target.classList.contains("k-icon-expand")){
        for(var i=0;i<dragEle.length;i++){
            dragEle[i].classList.remove("k-rise");
            dragEle[i].classList.add("k-drop");
        }
        e.target.classList.remove("k-icon-expand");
        e.target.classList.add("k-icon-collapse");
        e.target.nextSibling.nextSibling.style.removeProperty("color");
    }
        colorChange();
};//第一级树下拉时仅二级树出现，第一级树上拉时所有树消失
var secTree=document.getElementsByClassName("k-sec-tree");
var secElement=document.getElementsByClassName("k-drag");
for(var i=0;i<secTree.length;i++){
    secTree[i].onclick=handleseccli;
}
function handleseccli(e){
    var conclass= e.target.classList[0];
    if(e.target.classList.contains("k-icon-collapse")){
        for(var i=0;i<secElement.length;i++){
            if(secElement[i].classList.contains(conclass)){
            secElement[i].classList.remove("k-drop");
            secElement[i].classList.add("k-rise");
            }
        }
        e.target.classList.remove("k-icon-collapse");
        e.target.classList.add("k-icon-expand");
    }
    else if(e.target.classList.contains("k-icon-expand")){
        for(var i=0;i<secElement.length;i++){
            if(secElement[i].classList.contains(conclass)){
            secElement[i].classList.remove("k-rise");
            secElement[i].classList.add("k-drop");
            }
        }
        e.target.classList.remove("k-icon-expand");
        e.target.classList.add("k-icon-collapse");
    }
    colorChange();
}//第二级树定义一个class用以定位其子树，定义一个k-sec-tree作为寻找图标使用

function colorChange(){
for(var i=0;i<secTree.length;i++){
    if(secTree[i].classList.contains("k-icon-collapse")){
        secTree[i].nextSibling.nextSibling.style.removeProperty("color");
    }else if(secTree[i].classList.contains("k-icon-expand")){
        secTree[i].nextSibling.nextSibling.style.color="#E9573F";
    }
}}//改变颜色

var bulink=document.getElementsByClassName('bulink')
for(var i=0;i<bulink.length;i++){
    bulink[i].onclick=handledeclick;
}
function handledeclick(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        var confirmed=window.confirm("您确定要删除"+"["+ e.target.name+"]"+"吗？")
        if(confirmed){
            setTimeout(function(){
                e.target.parentNode.parentNode.remove();},400)
        }}

    else if(e.target.classList.contains("revise")){
        var deviseto=window.prompt("请输入"+"["+ e.target.name+"]"+"分类修改后的名称");
        if(deviseto!="") {
            var kWord=document.getElementsByClassName("k-word");
            for(var i=0;i<kWord.length;i++){
                if(kWord[i].innerHTML==e.target.name){
                    kWord[i].textContent=deviseto;
                }
            }
        }
        else if(deviseto==""){
            alert("分类名称不能为空")
        }
    }//kword寻找到要改的元素类型，用元素内容识别元素

    else if(e.target.classList.contains("revisefo")){
        var revisefo=window.prompt("请输入"+"["+ e.target.name+"]"+"分类修改后的名称");
        if(revisefo!="") {
            e.target.previousSibling.previousSibling.textContent = revisefo;
        }
        else if(revisefo==''){
            alert("分类名称不能为空")
        }
        //因为两个元素比较接近采用导航树查找
    }}
  //删除和修改操作

var addLink=document.getElementsByClassName("k-add");
for(var i=0;i<addLink.length;i++){
    addLink[i].onclick=handleAddcli;
}
function handleAddcli(e){
    if(e.target.classList.contains("hasone")){
        var chContent=window.prompt("请输入分类修改后的名称");
        if(chContent!=""&&chContent!=null){
        var addElement=document.createElement("tr");
        addElement.innerHTML+="<td><span class='k-icon'></span>" +
        "<span class='k-icon'></span><span class='k-icon'></span><div class='k-word'>"+chContent+"</div></td>"
        +"<td>英文名称（空）</td><td><div>描述</div></td>"
        +"<td>图像</td><td><a href='#' class='bulink delete' name="+chContent+">删除</a>"
        +" <a href='#' class='bulink revise' name="+chContent+">修改</a></td>";//所添加的元素
        var basicArray=document.getElementsByClassName(e.target.name);
        var basicElement=basicArray[1];
        basicElement.parentNode.insertBefore(addElement,basicElement);}

        else if(chContent==""){
            alert("分类名称不能为空");
        }
    }
    else if(e.target.classList.contains("hastwo")) {
        var chContent1 = window.prompt("请输入分类修改后的中文名称");
        var chContent2 = window.prompt("请输入分类修改后的英文名称");
        if (chContent1 != "" && chContent2 != ""&&chContent1 != null && chContent2 != null) {
            var addElement = document.createElement("tr");
            addElement.innerHTML += "<td><span class='k-icon'></span><span class='k-icon'></span>"
            + "<span class='k-icon'></span><span>" + chContent1 + "</span> <a href='#' class='bulink revisefo' name='" + chContent1 + "'>修改</a>"
            + "</td><td><span>" + chContent2 + "</span><span></span><a href='#' class='bulink revisefo' name='" + chContent2 + "'>修改</a>"
            + "</td><td><div>描述</div></td><td>图像</td><td>"
            + "<a href='#' class='bulink delete' name='" + chContent1 + "'>删除</a></td>"
            var basicArray = document.getElementsByClassName(e.target.name);
            var basicElement = basicArray[1];
            addElement.className=basicElement.className;
            basicElement.parentNode.insertBefore(addElement, basicElement);
        }
        else if (chContent =="") {
            alert("分类名称不能为空");
        }}
    var operation=document.getElementsByClassName("bulink");
    for(var i=0;i<operation.length;i++){
        operation[i].onclick=handledeclick;}
    }//添加分类操作

var jason_news=[{"Name":"行业动态","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"},
                {"Name":"其他资讯","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"},
                {"Name":"技术前沿","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"},
                {"Name":"政策动向","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"},
                {"Name":"comodel","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"},
                {"Name":"软件资讯","Ename":"英文名称","Descibe":"描述","Image":"图像","Operate":"delete"}
];

localStorage.setItem("jason_news",JSON.stringify(jason_news));
