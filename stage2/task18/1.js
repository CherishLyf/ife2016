var dataList = []
var numContainer = document.getElementById('numContainer')
var inputContainer = document.getElementById('inputContainer')
var btnContainer = document.getElementById('btnContainer')
var btns = btnContainer.getElementsByTagName('button')

// 渲染数组
function render(data) {
  numContainer.innerHTML = ''
  for(var i = 0, len = data.length; i < len; i++) {
    var oSpan = document.createElement('span')
    oSpan.innerHTML = data[i]
    numContainer.appendChild(oSpan)
  }
}

// 左侧入
function leftIn() {
  var num = inputContainer.value
  if(/(^[0-9]\d*$)/.test(num)) {
    dataList.unshift(num);
    render(dataList);
  } else {
    alert('请输入一个有效的数字.')
  }
  inputContainer.value = ''
}

// 右侧入
function rightIn() {
  var num = inputContainer.value
  if(/(^[0-9]\d*$)/.test(num)) {
    dataList.push(num);
    render(dataList);
  } else {
    alert('请输入一个有效的数字.')
  }
  inputContainer.value = ''
}

// 左侧出
function leftOut() {
  if(dataList.length == 0) {
    alert('当前没有元素可以移出.')
    return false;
  }
  var num = dataList.shift()
  render(dataList)
  alert('左侧第一个元素为: ' + num)
}

//右侧出
function rightOut() {
  if(dataList.length == 0) {
    alert('当前没有元素可以移出.')
    return false;
  }
  var num = dataList.pop()
  render(dataList)
  alert('右侧第一个元素为: ' + num)
}

function init() {
  btns[0].onclick = function(e) {
    e.stopPropagation()
    leftIn()
  }
  btns[1].onclick = function(e) {
    e.stopPropagation()
    rightIn()
  }
  btns[2].onclick = function(e) {
    e.stopPropagation()
    leftOut()
  }
  btns[3].onclick = function(e) {
    e.stopPropagation()
    rightOut()
  }
}

init()
