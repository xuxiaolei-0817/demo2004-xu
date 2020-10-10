console.log("加载成功");

//配置我们要引入的模块的路径 jquery 遵从AMD规范， parabola.js不支持AMD规范
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "index",
    index1:'index1',
    index2:'index2',
    // index3:'index3'
  },
  //jquery-cookie 依赖于jquery
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //某一个模块，不遵从AMD
    parabola: {
      exports: "_",
    }
  }
})


//调用首页的代码
require(["index", "index2",'index1','index3'], function(index, index2,index1,index3){
  index.body();
  index2.body();
  index1.body();
  // index3.body();
})

