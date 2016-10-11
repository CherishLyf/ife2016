## 任务十七：零基础JavaScript编码（五)

### 任务描述

- 参考以下示例代码，原始数据包含几个城市的空气质量指数数据
- 用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
- 天：显示每天的空气质量指数
- 周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算
- 月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
- 用户可以通过select切换城市
- 通过在"aqi-chart-wrap"里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数，参考图（点击打开）。天、周、月的数据只根据用户的选择显示一种
- 天：每天的数据是一个很细的矩形
- 周：每周的数据是一个矩形
- 月：每周的数据是一个很粗的矩形
- 鼠标移动到柱状图的某个柱子时，用 title 属性提示这个柱子的具体日期和数据

task.html

```
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
    <script src="task.js"></script>
  </head>
<body>
  <fieldset id="form-gra-time">
    <legend>请选择日期粒度：</legend>
    <label>日<input name="gra-time" value="day" type="radio" checked="checked"></label>
    <label>周<input name="gra-time" value="week" type="radio"></label>
    <label>月<input name="gra-time" value="month" type="radio"></label>
  </fieldset>

  <fieldset>
    <legend>请选择查看的城市：</legend>
    <select id="city-select">
      <option>北京</option>
    </select>
  </fieldset>

  <div class="aqi-chart-wrap">
  </div>
</body>
</html>
```

task.js

```
/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();

```
总结:
看完要求后没有思路, review 了下别人的代码.

说下从中学到哪些知识点:

Date() 对象的相关方法:

---

`getFullYear()` 方法返回一个表示年份的 4 位数字

```
dateObject.getFullYear()
```

`getMonth()` 方法返回表示月份的数字, 返回值是 0(一月) 到 11(十二月)之间的一个整数

语法:

```
dateObject.getMonth()

// 个位月份数前 + 0
var m = date.getMonth() + 1;
m = m < 10 ? '0' + m : m;
```

`getDate()` 方法可返回月份某一天, 返回值是 1~31之间的整数

语法:

```
dateObject.getDate()

// 个位天数前 + 0
var d = date.getDate()
d = d < 10 ? '0' + d : d
```

`getDay()` 返回表示星期的某一天的数字, 返回值为 0 (周日) 到 6 (周一) 之间的一个整数

语法:

```
dateObject.getDay()
```

`setDate()` 方法用户设置一个月的某一天
语法:

```
dateObj.setDate(dayValue)

// 如果 dayValue 超出了月份的合理范围，setDate 将会相应地更新 Date 对象。例如，如果为 dayValue 指定0，那么日期就会被设置为上个月的最后一天。
```

例子:

```
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);  // 1962-08-01
```

随机颜色

---

```
var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
```
