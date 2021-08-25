chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting == "jstext")
        filename=localStorage.getItem('filename');
        filename=filename.replace(/\"/g, "");
        var filenames=new Array();
        filenames=filename.split(",");
        jstext='';
        for (i=0;i<filenames.length ;i++ )
            {
            jstext1=localStorage.getItem(filenames[i]);
            if (jstext1!=null){
              if(jstext1!=""){
                jstext1=jstext1.replace(/null/g,'');
                jstext1=jstext1.replace(/\s*/g,'');  
                jstext1=jstext1.replace("\"","").replace(/\"$/gi,"");
                jstext1=jstext1.replace(/\/\/.*?\\r\\n/g,'');
                jstext1=jstext1.replace(/\\r\\n/g,'');  
                jstext1=jstext1.replace(/\\'/g,'\'');
                jstext1=jstext1.replace(/\\"/g,'\"');
                jstext1=jstext1.replace(/\\&/g,'\&');
                jstext1=jstext1.replace(/\\\\/g,'\\');
                jstext1=jstext1.replace(/\\n/g,'\n');
                jstext1=jstext1.replace(/\\\r/g,'\r');
                jstext1=jstext1.replace(/\\t/g,'\t');
                jstext1=jstext1.replace(/\\b/g,'\b');
                jstext1=jstext1.replace(/\\f/g,'\f');}
                jstext=jstext+"console.log('JavaScript Inject:"+filenames[i]+"==>');"+jstext1+"console.log('');" //分割后的字符输出
                }}
        sendResponse({farewell: jstext});
    });