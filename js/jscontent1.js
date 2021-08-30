function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

filename=getQueryVariable("filename");
//console.log(filename);
//输出标题
var jsname = document.createElement("h1");
jsnameid="jsname";
jsname.setAttribute("id", jsnameid);
jsname.setAttribute("style", "font-size:5px;display: inline;");
document.body.insertBefore(jsname, document.body.lastChild);
document.getElementById(jsnameid).innerHTML=filename+":"+"<br />"+"<br />";
//输出内容
filescript=localStorage.getItem(filename);
//console.log(filescript);
var jsscript = document.createElement("h1");
jsscriptid="jsscriptid";
jsscript.setAttribute("id", jsscriptid);
jsscript.setAttribute("style", "font-size:5px;display: inline;");
document.body.insertBefore(jsscript, document.body.lastChild);
//jstext1=filescript.replace(/\s*/g,''); 
jstext1=filescript;
jstext1=jstext1.replace("\"","").replace(/\"$/gi,"");
jstext1=jstext1.replace(/\\r\\n/g,'<br />');  
jstext1=jstext1.replace(/\\'/g,'\'');
jstext1=jstext1.replace(/\\"/g,'\"');
jstext1=jstext1.replace(/\\&/g,'\&');
jstext1=jstext1.replace(/\\\\/g,'\\');
jstext1=jstext1.replace(/\\n/g,'\n');
jstext1=jstext1.replace(/\\\r/g,'\r');
jstext1=jstext1.replace(/\\t/g,'\t');
jstext1=jstext1.replace(/\\b/g,'\b');
filescript=jstext1.replace(/\\f/g,'\f');
document.getElementById(jsscriptid).innerHTML=filescript+"<br />"+"<br />";
//Delete按钮
var delate = document.createElement("a");
delate.setAttribute("href", "delate.html?filename="+filename);
delateid='delate';
delate.setAttribute("id", delateid);
document.body.insertBefore(delate, document.body.lastChild);
document.getElementById(delateid).innerHTML="Delate"

gjzy="\n 起来 饥寒交迫的奴隶 \n 起来 全世界受苦的人 \n 满腔的热血已经沸腾 要为真理而斗争 \n 旧世界打个落花流水 \n 奴隶们起来 起来 \n 不要说我们一无所有 我们要做天下的主人 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 从来就没有什么救世主 也不靠神仙皇帝 \n 要创造人类的幸福 全靠我们自己 \n 我们要夺回劳动果实 让思想冲破牢笼 \n 快把那炉火烧得通红 趁热打铁才能成功 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 最可恨那些毒蛇猛兽吃尽了我们的血肉 \n 一旦把他们消灭干净 鲜红的太阳照遍全球 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 英特纳雄耐尔就一定要实现";
console.log(gjzy);