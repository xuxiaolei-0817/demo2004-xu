// 购物车模块练习
// 遵从AMD规范
define(['parabola','jquery','jquery-cookie'],function(Parabola,$){
    function body(){
        $(function(){
          
            var aData = [{
              "imgUrl": "images/x1.jpg",
              "proName": "MI 小米 10 5G智能手机",
              "proPrice": "3129",
              "proComm": "1"
          },
          {
              "imgUrl": "images/x2.jpg",
              "proName": "Steam 蒸汽 骑马与砍杀2:霸主 电脑游戏 标准版",
              "proPrice": "188",
              "proComm": "9.7"
          },
          {
              "imgUrl": "images/x3.jpg",
              "proName": "TCL 75V2 75英寸 4K 液晶电视 黑色",
              "proPrice": "1855",
              "proComm": "1.3"
          },
          {
              "imgUrl": "images/x4.jpg",
              "proName": "伊诗兰顿竹炭去黑头套装",
              "proPrice": "149",
              "proComm": "1.1"
          },
          {
              "imgUrl": "images/x5.jpg",
              "proName": "lululemon丨Pleat to Street 女士运动短裙",
              "proPrice": "34.9",
              "proComm": "0.3"
          },
          {
              "imgUrl": "images/x6.jpg",
              "proName": "太子龙（TEDELON）牛仔裤",
              "proPrice": "96.9",
              "proComm": "3.3"
          },
          {
              "imgUrl": "images/x1.jpg",
              "proName": " 小米手环3 / 4 通用腕带",
              "proPrice": "19.9",
              "proComm": "1.2"
          },
          {
              "imgUrl": "images/x1.jpg",
              "proName": "  米家温湿度传感器 ",
              "proPrice": "45",
              "proComm": "0.6"
          },
          {
              "imgUrl": "images/x1.jpg",
              "proName": "  米家电子温湿度计Pro 3个装  ",
              "proPrice": "207",
              "proComm": "0.3"
          },
          {
              "imgUrl": "images/x1.jpg",
              "proName": " 小米手环3 ",
              "proPrice": "199",
              "proComm": "7.2"
          }
      ];
                var oBox = document.getElementById("box");
                var oCar = document.getElementById("car");
                var oUl = document.getElementsByTagName("ul")[0];

                for (var i = 0; i < aData.length; i++) {
                    var oLi = document.createElement("li");
                    var data = aData[i];
                    oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
                    oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
                    oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
                    oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
                    oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
                    oUl.appendChild(oLi);
                }
                var aBtn = getClass(oBox, "add_btn");//获取box下的所有添加购物车按钮
                var number = 0;//初始化商品数量
                for (var i = 0; i < aBtn.length; i++) {
                    number++;
                    aBtn[i].index = i;
                    aBtn[i].onclick = function() {
                        var oDiv = document.createElement("div");
                        var data = aData[this.index];
                        oDiv.className = "row hid";
                        oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
                        oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
                        oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
                        oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
                        oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
                        oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
                        oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
                        oCar.appendChild(oDiv);
                        var flag = true;
                        var check = oDiv.firstChild.getElementsByTagName("i")[0];
                        check.onclick = function() {
                            // console.log(check.className);
                            if (check.className == "i_check i_acity") {
                                check.classList.remove("i_acity");

                            } else {
                                check.classList.add("i_acity");
                            }
                            getAmount();
                        }
                        var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
                        delBtn.onclick = function() {
                            var result = confirm("确定删除吗?");
                            if (result) {
                                oCar.removeChild(oDiv);
                                number--;
                                getAmount();
                            }
                        }
                        var i_btn = document.getElementsByClassName("count_i");
                        for (var k = 0; k < i_btn.length; k++) {
                            i_btn[k].onclick = function() {
                                bt = this;
                                //获取小计节点
                                at = this.parentElement.parentElement.nextElementSibling;
                                //获取单价节点
                                pt = this.parentElement.parentElement.previousElementSibling;
                                //获取数量值
                                node = bt.parentNode.childNodes[1];
                                console.log(node);
                                num = node.innerText;
                                num = parseInt(num);
                                num++;
                                node.innerText = num;
                                //获取单价
                                price = pt.innerText;
                                price = price.substring(0, price.length - 1);
                                //计算小计值
                                at.innerText = price * num + "元";
                                //计算总计值
                                getAmount();
                            }
                        }
                        //获取所有的数量减号按钮
                        var d_btn = document.getElementsByClassName("count_d");
                        for (k = 0; k < i_btn.length; k++) {
                            d_btn[k].onclick = function() {
                                bt = this;
                                //获取小计节点
                                at = this.parentElement.parentElement.nextElementSibling;
                                //获取单价节点
                                pt = this.parentElement.parentElement.previousElementSibling;
                                //获取c_num节点
                                node = bt.parentNode.childNodes[1];
                                num = node.innerText;
                                num = parseInt(num);
                                if (num > 1) {
                                    num--;
                                }
                                node.innerText = num;
                                //获取单价
                                price = pt.innerText;
                                price = price.substring(0, price.length - 1);
                                //计算小计值     
                                at.innerText = price * num + "元";
                                //计算总计值
                                getAmount();
                            }
                        }

                        delBtn.onclick = function() {
                            var result = confirm("确定删除吗?");
                            if (result) {
                                oCar.removeChild(oDiv);
                                number--;
                                getAmount();
                            }
                        }

                    }
                }
      
        function getClass(oBox, tagname) {
          var aTag = oBox.getElementsByTagName("*");
          var aBox = [];
          for (var i = 0; i < aTag.length; i++) {
              if (aTag[i].className == tagname) {
                  aBox.push(aTag[i]);
              }
          }
          return aBox;
      }
      var index = false;
      function checkAll() {
          var choose = document.getElementById("car").getElementsByTagName("i");
          // console.log(choose);
          if (choose.length != 1) {
              for (i = 1; i < choose.length; i++) {
                  if (!index) {
                      choose[0].classList.add("i_acity2")
                      choose[i].classList.add("i_acity");
                  } else {
                      choose[i].classList.remove("i_acity");
                      choose[0].classList.remove("i_acity2")
                  }
              }
              index = !index;
          }
          getAmount();
      }
       //进行价格合计
       function getAmount() {
        // console.log(ys);
        ns = document.getElementsByClassName("i_acity");
        console.log(ns);
        sum = 0;
        //选中框
        document.getElementById("price_num").innerText = sum;
        for (y = 0; y < ns.length; y++) {
            //小计
            amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
            num = parseInt(amount_info.innerText);
            sum += num;
            document.getElementById("price_num").innerText = sum;
        }
    }

        })
    }
    return{
        body:body
    }

})
