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

filename1=getQueryVariable("filename");
filename=localStorage.getItem('filename');
console.log(filename);
console.log(filename1);
filename=filename.replace(filename1+",","");
filename=filename.replace(filename1,"");
filename=filename.replace(/\"/g, "");
console.log(filename);
localStorage.setItem('filename', JSON.stringify(filename));
localStorage.setItem(filename1, JSON.stringify(""));

window.location = "background.html"