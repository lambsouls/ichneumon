//注入js1
chrome.runtime.sendMessage({greeting: 'jstext'}, function(response) {
  jstext1=response.farewell;
  jstext1=jstext1.replace(/null/g,'');
  //console.log(jstext1)  
  var secScript = document.createElement("script");
  secScript.setAttribute("type", "text/javascript");
  secScript.setAttribute("id", "newscript");
  document.body.insertBefore(secScript, document.body.lastChild);
  document.getElementById("newscript").innerHTML=jstext1
  });
  gjzy="\n 起来 饥寒交迫的奴隶 \r 起来 全世界受苦的人 \r 满腔的热血已经沸腾 要为真理而斗争 \r 旧世界打个落花流水 \r 奴隶们起来 起来 \r 不要说我们一无所有 我们要做天下的主人 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 从来就没有什么救世主 也不靠神仙皇帝 \r 要创造人类的幸福 全靠我们自己 \r 我们要夺回劳动果实 让思想冲破牢笼 \r 快把那炉火烧得通红 趁热打铁才能成功 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 最可恨那些毒蛇猛兽吃尽了我们的血肉 \r 一旦把他们消灭干净 鲜红的太阳照遍全球 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 这是最后的斗争 团结起来到明天 \r 英特纳雄耐尔就一定要实现 \r 英特纳雄耐尔就一定要实现 \n \n";
  console.log(gjzy);

