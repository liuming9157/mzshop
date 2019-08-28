MzShop(0.1)--大道至简，代码清晰易懂
=========
MzShop坚持大道至简的原则，简化源代码，易于维护，主要特性包括：
+ 前台采用UniAPP框架开发，跨平台多端部署，包括：
+ + 安卓APP
+ + 苹果APP
+ + 微信小程序(含QQ小程序)
+ + 百度智能小程序
+ + 支付宝小程序（含钉钉小程序）
+ + 头条小程序(含抖音小程序)
+ + H5页面
+ 后台采用FastAdmin开发，多插件选用
+ 前端代码模块化，清晰易懂，便于维护
## 管理后台

下载后端代码请至[后台代码下载](https://github.com/liuming9157/mzshop-admin)


## 安装
1. 下载IDE
[UniAPP专属开发工具HBuilderX](https://www.dcloud.io/hbuilderx.html)
2. 克隆代码  
` git clone git@github.com:liuming9157/mzshop.git `
3. 用IDE打开项目代码并生成发行版代码  

>强烈推荐开发者学习UniAPP开发方式，可参阅[UniAPP官方开发文档](https://uniapp.dcloud.io)

## 目录结构

初始的目录结构如下：

~~~
Mzshop
|-common                公共文件目录
|  |-util.js            助手函数文件
|-components            自定义组件
|  |-common             公共组定义组件目录
|  |-index              首页自定义组件目录
|  |-type               分类页自定义组件目录
|  |-cart               购物车页自定义组件目录
|  |-mine               个人中心页自定义组件目录
|-pages                 页面文件目录
|  |-tabs               tabbar页面目录
|     |-index.vue       首页
|     |-type.vue        分类页
|     |-cart.vue        购物车
|     |-mine.vue        个人中心页
|-static                静态资源文件目录
|-store                 全局状态管理文件目录
|-App.vue               应用生命周期文件
|-main.js               应用入口文件
|-manifest.json         配置文件
|-pages.json            页面配置文件
|-uni.scss              css预处理文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
~~~
> 修改uni.scss可修改css变量，可用于自定义主题色  
> 切换到common目录，可自由添加工具函数，然后挂载到Vue.prototype  
## 文档

详细开发文档参考 [MzShop文档](https://mzshop.mzyun.tech/doc)

## 参与开发

请参阅 [MzShop文档](https://mzshop.mzyun.tech/doc)。

## 版权信息
MzShop遵循Apache2开源协议发布，并提供免费使用。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2017-2019 by MzShop (https://www.mzyun.tech)

All rights reserved。

MzShop® 商标和著作权所有者为北京敬天明志教育科技有限公司。

更多细节参阅 [LICENSE.txt](LICENSE.txt)  

## 感谢以下开源项目及作者
1. [FastAdmin](http://fastadmin.net) 作者：Karson Zhang  
2. [UniApp](https://uniapp.dcloud.io) 作者：Dcould团队
3. [ThinkPHP](http://thinkphp.cn) 作者：流年
4. [EasyWechat](https://www.easywechat.com) 作者：overtrue

## 常见问题说明
1. 页面能否再美化一下？  
答：商城开发通常具有很强的个性需求，无论怎样美化页面，都无法满足所有人的要求，开发者可根据自己需求自行美化页面。
2. 能否添加一些功能？例如砍价、拼团等  
答：砍价、拼团等高级功能不在本项目的计划范围内。
## 定制开发
定制开发请联系作者
##### 作者信息
Jack Liu  
Email:liuming@mzsat.cn  
QQ Group：147835195  
Wechat:![liumingwx02](http://cdn.mzyun.tech/wxqrcode.png)