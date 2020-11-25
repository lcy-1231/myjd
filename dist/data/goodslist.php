<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$link=mysqli_connect('localhost','root','123456','db2010');
//设置编码
mysqli_set_charset($link,'utf8');
//sql语句
$sql="select * from goodslist";
//执行sql语句
$result=mysqli_query($link,$sql);
//用个数组来接收数据并存储
$arr=[];
//遍历结果集中的所有的数据
while($row=mysqli_fetch_assoc($result)){
    //给数值追加元素
    array_push($arr,$row);
}
 //把数组转为json字符串，并响应给浏览器
 echo json_encode($arr);
?>