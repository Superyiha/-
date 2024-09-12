// Super易出品自动填表脚本
//F12打开控制台，粘贴这段代码，回车，即可自动填写
//收藏保留备用
//2024.9.12

//填分脚本
//请根据实际情况修改以下内容
document.getElementsByClassName = function (Name, e, tag) {
  var ele = [],
    allEle,
    length,
    i = 0;

  if (typeof tag === "undefined") tag = "*";
  if (typeof e === "undefined") e = document;

  allEle = e.getElementsByTagName(tag);
  for (length = allEle.length; i < length; i++) {
    if (allEle[i].className === Name) ele.push(allEle[i]);
  }

  return ele;
};

var table = document
  .getElementsByClassName("tablebody")[2]
  .getElementsByTagName("tbody")[0];
var tableTr = table.getElementsByTagName("tr");

var scores = {
  zzpd: 20,
  xxtd: 20,
  fjgn: 15,
  jtgn: 15,
  shgd: 15,
  ldws: 15,
};

var fullScoreCount = {
  zzpd: 0,
  xxtd: 0,
  fjgn: 0,
  jtgn: 0,
  shgd: 0,
  ldws: 0,
};

var maxFullScoreLimit = 10;

for (var i = 1; i < tableTr.length - 3; ++i) {
  var tableTd = tableTr[i].getElementsByTagName("td");

  for (var j = 3; j < tableTd.length; ++j) {
    var input = tableTd[j].getElementsByTagName("input")[0];
    var inputName = input.getAttribute("name");

    if (scores[inputName] && fullScoreCount[inputName] < maxFullScoreLimit) {
      input.setAttribute("value", scores[inputName]);
      fullScoreCount[inputName]++;
    } else {
      input.setAttribute("value", Math.floor(scores[inputName] - 1));
    }

    console.log(inputName + ": " + input.value);
  }
}


//覆写vbscript,改成js
//解决了自动填写后无法提交，浏览器适配问题
// 定义一个函数来模拟原来的 VBScript 功能
function queren() {
    var x = confirm("前两项分值应≤20，后四项分值应≤15!\n\n注：正确填写测评表后就不能再修改数据了！");
    if (x) {
        // 提交表单
        document.querySelector('form').submit(); 
    }
}

// 找到并点击提交按钮
document.querySelector('input[type="button"]').click = queren;
