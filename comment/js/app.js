/**
 * Created by hxsd on 2016/12/17.
 */
//创建一个主模块
var myApp=angular.module("myApp",["ngMessages"]);

//在主模块下注册一个控制器
myApp.controller("postCtrl",function($scope){
    //跟帖数
    $scope.hotPostNum=376;

    //参与人数
    $scope.hotPostPer=4856;

    $scope.data={
        //发帖人信息
        poster:[
            {name:"苇之禽",content:"我看秋田犬很天真哟。",date:"2016-12-17 06:18:14",imgsrc:"images/touxiang.png",support:"800",digg:"5",switch:true,switch2:true},
            {name:"用心玩",content:"因为矛盾要转移",date:"2016-12-17 12:22:55",imgsrc:"images/touxiang.png",support:"650",digg:"5",switch:true,switch2:true},
            {name:"网易泰国手机网友",content:"相当于32个台湾面积的国土被谁卖了？",date:"2016-12-17 03:21:57",imgsrc:"images/touxiang.png",support:"632",digg:"3",switch:true,switch2:true},
            {name:"hgdfjkmbf",content:"国内是“梅普”二人转，国际上也有个“二人转”",date:"2016-12-17 00:47:35",imgsrc:"images/touxiang.png",support:"300",digg:"2",switch:true,switch2:true},
            {name:"czp_707",content:"放屁，是我们先糟蹋国民的钱举办奥运 世博 亚运会，日本停了对华的无偿援助的。",date:"2016-12-17 08:26:58",imgsrc:"images/touxiang.png",support:"260",digg:"0",switch:true,switch2:true},
            {name:"（︶︿︶）╭&cap;╮",content:"某些人有政治意图。上位靠日本人，保位也靠日本人。",date:"2016-12-17 06:00:06",imgsrc:"images/touxiang.png",support:"165",digg:"0",switch:true,switch2:true},
            {name:"煮席本拉矢",content:"印度，东南亚，韩国早晚有一天会收回领土！！！！到那时，拆K这个最大红色就完蛋了！！！",date:"2016-12-17 01:10:13",imgsrc:"images/touxiang.png",support:"154",digg:"0",switch:true,switch2:true},
            {name:"网易山东省济南市手机网友",content:"你才是日狗，你说说日本举办过几界奥运会.",date:"2016-12-17 00:37:06",imgsrc:"images/touxiang.png",support:"86",digg:"0",switch:true,switch2:true},
            {name:"TFgirls",content:"秋田犬都养成狗熊了！",date:"2016-12-17 01:58:39",imgsrc:"images/touxiang.png",support:"50",digg:"0",switch:true,switch2:true},
            {name:"网易福建省网友",content:"中日断交是大势所趋，我等屁民要共同努力",date:"2016-12-17 10:40:47",imgsrc:"images/touxiang.png",support:"32",digg:"0",switch:true,switch2:true},
            {name:"gsaleisi",content:"呵呵，傻逼喷子。",date:"2016-12-17 13:47:00",imgsrc:"images/touxiang.png",support:"35",digg:"5",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"20",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"5",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"6",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"3",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"8",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"6",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"0",digg:"0",switch:true,switch2:true},
            {name:"xiongbagege1314",content:"安培就是煞笔 这样的谈判想要回领土？送条狗就想搞掂普京？ 感人的智商",date:"2016-12-17 13:46:46",imgsrc:"images/touxiang.png",support:"2",digg:"0",switch:true,switch2:true}
        ]
    };

    //点击显示&隐藏发帖框
    $scope.switch=false;
    $scope.show=function(){
        $scope.switch?$scope.switch=false:$scope.switch=true;
    };

    //与分页有关的数据
    $scope.pageNum=1;   //请求的页码
    $scope.pageSize=10;  //页面大小

    //分页按钮响应函数
    $scope.page=function(p){
        $scope.pageNum=p;
    };

    //上一页
    $scope.pre=function(){
        $scope.pageNum-=1;
        if($scope.pageNum<1){
            $scope.pageNum=1;
        }
    };

    //下一页
    $scope.next=function(){
        $scope.pageNum+=1;
        if($scope.pageNum>=Math.ceil($scope.data.poster.length/$scope.pageSize)){
            $scope.pageNum=Math.ceil($scope.data.poster.length/$scope.pageSize);
        }
    };

    //发表新帖函数
    $scope.send=function(){
        //定义事件
        var date=new Date();

        //将新对象加入数组中
        $scope.data.poster.unshift({name:$scope.username,content:$scope.userContent,date:date,imgsrc:"images/touxiang.png",support:"0",digg:"0",switch:true,switch2:true});
        //发送完毕后将昵称和输入内容清空
        $scope.username=null;
        $scope.userContent=null;
        $scope.hotPostNum++;
    };

    //点击对应按钮,增加顶和踩的数量
    $scope.support=function(post){
        if(post.switch){
            post.support++;
            $scope.hotPostPer++;
            post.switch=false;
        }
    };

    $scope.digg=function(post){
        if(post.switch2){
            post.digg++;
            $scope.hotPostPer++;
            post.switch2=false;
        }

    }


})
//注册一个分页过滤器
.filter("pageFilter",function(){
        /**
         * 参数1.products--被过滤出的商品数组
         * 参数2.pageNum--请求的页码数
         * 参数3.pageSize--页面大小
         **/
        return function (poster,pageNum,pageSize){
            //要让代码更加健壮,最好是对转入的参数进行判断
            if(!angular.isArray(poster) || !angular.isNumber(pageNum) || !angular.isNumber(pageSize)){
                //将被过滤出的数组原封不动的返回
                return poster;
            }
            //计算出请求的数据的初始值索引值
            var startIndex=(pageNum-1)*pageSize;

            //判断起始索引是否在数组范围内
            if(startIndex>=poster.length){
                //如果是智联,是跳到最后一页
                //这里返回一个空数组
                return [];
            }
            //提取一页的数据到新数组中
            var newArr=poster.slice(startIndex,startIndex+pageSize);
            //返回新数组用于view显示
            return newArr;
        }
    })
    .filter("btnFilter",function(){
        return function (poster,pageSize){
            //生成页码
            var pageArr = [];

            //获得页码数
            var page=Math.ceil(poster.length/pageSize);

            for(var i=0;i<page;i++){
                pageArr.push(i+1);
            }

            return pageArr;
        }
    });