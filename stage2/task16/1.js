/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var cityName = document.getElementById('aqi-city-input').value
  var airNum = document.getElementById('aqi-value-input').value

  // 去空格
  cityName = cityName.trim()
  airNum = airNum.trim()

  // 通过验证
  if(validateFun.stringCheck(cityName) && validateFun.numCheck(airNum)) {
    // alert('成功验证')
    airNum = parseInt(airNum);
    aqiData[cityName] = airNum
    // aqiData['"' + cityName + '"'] = airNum
  } else if (!validateFun.stringCheck(cityName)) {
    alert('城市名称应为中文或英文')
  } else if (!validateFun.numCheck(airNum)) {
    alert('空气质量指数应为整数')
  }
  console.dir(aqiData)
}

// 验证
var validateFun = {
  // 中英文
  stringCheck: function(value) {
    return /^[a-zA-Z\u4E00-\u9FA5]+$/.test(value);
  },
  // 数字
  numCheck: function(value) {
    return /(^[1-9]\d*$)/.test(value);
  }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var aqiTable = document.getElementById('aqi-table')

  for(var city in aqiData) {

    // 防止进入 原型属性
    if(aqiData.hasOwnProperty(city)) {

      var oTr = document.createElement('tr')
      oTr.innerHTML = '<td>' + city + '</td>' + '<td>' + aqiData[city] + '</td>' + '<button>删除</button>'
      aqiTable.appendChild(oTr)
    }
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn = document.getElementById('add-btn')
  addBtn.onclick = function() {
    addBtnHandle()
  }

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
