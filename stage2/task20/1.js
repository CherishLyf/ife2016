var $ = function(id) {
  return document.getElementById(id)
}

var arrData = []

$('insert').onclick = function() {
  var str = $('textArea').value.trim()
  var arrWord = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e){
    return e.length !== 0
  })
  // var arrWord = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
  arrData = arrData.concat(arrWord)
  console.log(arrData)

  render()
}

$('search').onclick = function() {
  var str = $('searchInput').value.trim();
  render(str);
}

function render(str) {
  $('result').innerHTML = arrData.map(function(d) {
    if (str != null && str.length > 0) {
      d = d.replace(new RegExp(str, "g"), "<span class='select'>" + str + "</span>");
    }
    return '<div>' + d + '</div>';
  }).join('');
}
