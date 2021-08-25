var fileupload = document.getElementById('upload')
//localStorage.setItem('filename', JSON.stringify(''));

filename=localStorage.getItem('filename');
if(filename!=null){filename=filename.replace(/\"/g, "");
if(filename!=''){//console.log(filename);
filename=filename.split(',');
console.log('filename:'+filename);
filenamelength=filename.length;
filenamelength1=0;
while(filenamelength1<filenamelength)
{
  filename1 = filename[filenamelength1];
  console.log(filename1+':');
  filescript=localStorage.getItem(filename1);
  console.log(filescript);
  filenamelength1+=1

  var secH11 = document.createElement("a");
  secH11.setAttribute("href", "jscontent.html?filename="+filename1);
  H11id='h11'+filenamelength1.toString();
  secH11.setAttribute("id", H11id);
  document.body.insertBefore(secH11, document.body.lastChild);
  document.getElementById(H11id).innerHTML=filename1

  /*var secA1 = document.createElement("a");
  secA1.setAttribute("href", "JavaScript:DelateJs();");
  secA1.setAttribute("style", "display:block;text-align:right;");
  secA1.setAttribute("id", filenamelength1);
  document.body.insertBefore(secA1, document.body.lastChild);
  document.getElementById(filenamelength1).innerHTML='Delete';*/

  var secH12 = document.createElement("h1");
  H12id='h12'+filenamelength1.toString();
  secH12.setAttribute("id", H12id);
  document.body.insertBefore(secH12, document.body.lastChild);
  document.getElementById(H12id).innerHTML='';
}}}


fileupload.addEventListener('change', function() {
  for (var i = 0, fileCount = fileupload.files.length; i < fileCount; i++) {  
    if(fileupload.files[i].type!='text/javascript'){
      console.log("error file type")
      location.reload();}
    if(fileupload.files[i].type=='text/javascript'){
      var newfilename = fileupload.files[i].name;//获取文件名

      console.log(newfilename);
      filename=localStorage.getItem('filename');
      if(filename!=null){filename=filename.replace(/\"/g, "");}
      //console.log(filename)
      if(filename!=null){var bool = filename.indexOf(newfilename);}
      else{bool=-1}
      if(bool==-1)
      {   if(filename==""){filename=newfilename}
          else{filename=filename+','+newfilename}
          if(filename!=null){filename=filename.replace(/\"/g, "");}
          filename=filename.replace("null,","");
          filename=filename.replace("null","");
          localStorage.setItem('filename', JSON.stringify(filename));

          reader = new FileReader()
          reader.readAsText(fileupload.files[0],'utf8')
          reader.onload = function(){
            var result=document.getElementById("upload");  
            result.innerHTML=this.result;
            jstext=this.result;//获取文件内容
            //console.log(jstext);
            localStorage.setItem(newfilename, JSON.stringify(jstext));

        
      }}
      location.reload();
}}});