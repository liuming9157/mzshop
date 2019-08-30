全局工具函数
==========
为了简化开发，MzShop对UniAPP部分方法进行了改写，改写后书写更加简洁，让您开发有爽的感觉。
1. this.$get函数
this.$get函数是对uni.request函数的改写，并且进行了Promise的封装，能够避免你您陷入回调地狱.  
改写后该函数一共有三个参数:
+ 请求地址url(必填),
+ 请求数据data(可选，默认请求数据为空)
+ 请求方法method(可选，默认请求方法为GET). 
示例如下：
```
//不带参数的请求：获取所有商品信息
let res=await this.$get(url);
console.log(res)
//带参数请求：获取某用户的优惠券信息
let data={user_id:1};
let res=await this.$get(url,data);
console.log(res)
//POST请求
let res=await this.$get(url,'','POST');
console.log(res);

```
**注意使用await关键词，否则无法得到返回数据**  
2. this.$msg函数  
this.$msg是对uni.showToast函数的改写。
改写后该函数一共有四个参数：
+ 显示信息title(必填)
+ 显示时间duration(可选，默认1500)
+ 遮挡面板mask(可选，默认false)
+ 显示图标icon(可选，默认none)
示例如下：
```
//输入信息有误时弹出提示
this.$msg('您输入的信息有误')
```
3. this.$prePage函数
this.$prePage函数可以获取上一页实例，通过该方法获取上一页实例后可以调用上一页的所有属性和方法。
示例如下：
```
//待完善
```