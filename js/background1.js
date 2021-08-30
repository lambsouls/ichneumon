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
                //jstext1=jstext1.replace(/\s*/g,'');  
                jstext1=jstext1.replace("\"","").replace(/\"$/gi,"");
                //jstext1=jstext1.replace(/\/\/.*?\\r\\n/g,'');
                jstext1=jstext1.replace(/\\r\\n/g,'\\n');  //干脆不去除注释
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

  gjzy="\n 起来 饥寒交迫的奴隶 \n 起来 全世界受苦的人 \n 满腔的热血已经沸腾 要为真理而斗争 \n 旧世界打个落花流水 \n 奴隶们起来 起来 \n 不要说我们一无所有 我们要做天下的主人 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 从来就没有什么救世主 也不靠神仙皇帝 \n 要创造人类的幸福 全靠我们自己 \n 我们要夺回劳动果实 让思想冲破牢笼 \n 快把那炉火烧得通红 趁热打铁才能成功 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 最可恨那些毒蛇猛兽吃尽了我们的血肉 \n 一旦把他们消灭干净 鲜红的太阳照遍全球 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 这是最后的斗争 团结起来到明天 \n 英特纳雄耐尔就一定要实现 \n 英特纳雄耐尔就一定要实现";
  console.log(gjzy);