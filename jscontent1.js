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
console.log(filename);
//输出标题
var jsname = document.createElement("h1");
jsnameid="jsname";
jsname.setAttribute("id", jsnameid);
jsname.setAttribute("style", "font-size:5px;display: inline;");
document.body.insertBefore(jsname, document.body.lastChild);
document.getElementById(jsnameid).innerHTML=filename+":"+"<br />"+"<br />";
//输出内容
filescript=localStorage.getItem(filename);
console.log(filescript);
var jsscript = document.createElement("h1");
jsscriptid="jsscriptid";
jsscript.setAttribute("id", jsscriptid);
jsscript.setAttribute("style", "font-size:5px;display: inline;");
document.body.insertBefore(jsscript, document.body.lastChild);
jstext1=filescript.replace(/\s*/g,'');  
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