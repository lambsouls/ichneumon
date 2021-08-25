//注入js1
chrome.runtime.sendMessage({greeting: 'jstext'}, function(response) {
  jstext1=response.farewell;
  jstext1=jstext1.replace(/null/g,'');
  console.log(jstext1)  
  var secScript = document.createElement("script");
  secScript.setAttribute("type", "text/javascript");
  secScript.setAttribute("id", "newscript");
  document.body.insertBefore(secScript, document.body.lastChild);
  document.getElementById("newscript").innerHTML=jstext1
  });

