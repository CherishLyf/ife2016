// 事件绑定函数

function addEventHandler(ele, event, handler) {
  if(ele.addEventHandler) {
    ele.addEventListener(event, handler, false)
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + event, handler)
  } else {
    ele['on' + event] = handler
  }
}

// 遍历数组的方法,针对数组中每一个元素执行 fn 函数, 并将数组索引和元素作为参数传递
function each(arr, fn) {
  for(var i = 0, len = arr.length; i < len; i++) {
    fn(arr[i], i)
  }
}

window.onload = function() {
  var numContainer = document.getElementById('numContainer')
  var inputContainer = document.getElementById('inputContainer')
  var btnContainer = document.getElementById('btnContainer')
  var btns = btnContainer.getElementsByTagName('button')

  // 定义队列对象
  var queue = {
    str: [],

    leftPush: function(num) {
      this.str.unshift(num)
      this.render()
    },

    rightPush: function(num) {
      this.str.push(num)
      this.render()
    },

    isEmpty: function() {
      return (this.str.length == 0)
    },

    leftPop: function() {
      if(!this.isEmpty()) {
        alert(this.str.shift())
        this.render()
      } else {
        alert('当前没有数据可以进行操作.')
      }
    },

    rightPop: function() {
      if(!this.isEmpty()) {
        alert(this.str.pop())
        this.render()
      } else {
        alert('当前没有数据可以进行操作.')
      }
    },

    render: function() {
      var str = ''
      each(this.str, function(item) {
        str += ('<span>' + parseInt(item) + '</span>')
      })
      numContainer.innerHTML = str
      addDivDelEvent()
    },

    deleteID: function(id) {
      console.log(id)
      this.str.splice(id, 1)
      this.render()
    }
  }

  // 为 container 中每个 div 绑定删除函数
  function addDivDelEvent() {
    for(var i = 0, len = numContainer.childNodes.length; i < len; i++) {
      addEventHandler(numContainer.childNodes[i], 'click', function(i){
        return function() {
          return queue.deleteID(i)
        }
      }(i))
    }
  }

  // 为 4 个按钮绑定函数
  addEventHandler(btns[0], 'click', function() {
    var num = inputContainer.value
    if ((/^[0-9]+$/).test(num)) {
      queue.leftPush(num);
    }
    else {
      alert("请输入数字!");
    }
    inputContainer.value = ''
  })
  addEventHandler(btns[1], 'click', function() {
    var num = inputContainer.value
    if ((/^[0-9]+$/).test(num)) {
      queue.rightPush(num);
    }
    else {
      alert("请输入数字!");
    }
    inputContainer.value = ''
  })
  addEventHandler(btns[2], "click", function() {
    queue.leftPop()
  })
  addEventHandler(btns[3], "click", function() {
    queue.rightPop()
  })
}
