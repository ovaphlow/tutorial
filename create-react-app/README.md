## create-react-app

### 用途
create-react-app是用来创建React工程的官方工具，默认设置下是单页应用，所以一般还需要react-router库

### React
和Vue相比，React中需要记忆的核心关键词更少，但是对JavaScript基础要求更高，尤其是大量使用了ES6版本的语法；React周边的库更多，也有React Native这种很多人用的工具。

### 创建并初始化React工程
``npx create-react-app xxx``

### 安装React Router库
进入create-react-app创建的新目录，运行
``npm install react-router react-router-dom``

### 安装之后
*package.json文件中 script 下的test和eject部分目前用不到，可以选择删掉。尤其是eject命令是不可逆过程，对webpack工具不了解的情况下不要运行。*

终端下运行
``npm run start``
之后，会自动打开浏览器窗口，能看到页面内容就说明React安装配置正确了。

### React 工程目录结构
public/用来存放纯静态文件，其中index.html为React使用的页面模板，可以根据需要自己更改。
src/ 用来存放程序代码，主要是js文件，并且css文件和一些媒体文件也可以放到这里，看实际使用情况决定。其中App.css，index.css，logo.svg没有实际用处，可以删掉。App.test.js是测试程序，如果不用的话也可以删掉，删掉之后需要修改对应的js文件来移除引用。

### 开始使用
根据需要修改模板文件 public/index.html

样式文件主要由两种用法：
1. 直接写在public/中，由模板文件调用，但最好加上%PUBLIC_URL%前缀；
2. 写在src/目录下，由React组件调用
``import Style from './style.css'``
React中的JSX下就可以在html标签中添加className属性来使用。

React中的JSX部分不能写class属性，因为class是JS本身的保留字，所以要用className代替，由React处理转义，同样一些其它html标签中的属性也不能直接使用，要更改为React中的写法，比如style、readonly等。

每次修改src下的源代码或者public/index.html(及其它模板文件)文件后，React(create-react-app)会自动刷新浏览器。

由于JSX语法源自XML语法，所以一些html中的自闭合标签要加上最后的 / 字符，比如html中正常使用的
``<input>``
要写成
``<input />``
，其它标签同理。

每一个React基础元素都可以叫做Component(组件)，其中的constructor函数用来初始化props。constructor函数不是必需的。

props是用来在父子组件间传递数据。

render()函数是用来渲染页面的，其中return内部的代码就是JSX语法。每个组件被调用后，会由组件自己执行render函数中的代码，相当于把其中的内容渲染到页面上。

React Router 有三种路由的用法，这里用的是其中的HashRouter，和AngularJS的路由机制类似。JSX中的路由标签的写法有一些限制，根据保存信息修改就可以了。

每段JSX，换句话说就是每个render函数内部，只能有一个父元素。Router标签应该全部写在一个单独的标签下。

每个React组件都可以设置自身的state属性，state和props都可以用来渲染动态数据，但props多用来在组件间传递数据，state多用来渲染组件内的动态数据。

state中的数据可以由程序控制改变。改变state的内容不能通过直接赋值的方法：
``this.state = { list: [1, 2, 3] }``
只能通过
``this.setState({ list: [1, 2, 3] })``
来设置。
在需要循环一个state或者props的时候，map函数后的箭头函数不能有{}字符。
被循环的标签要加上key属性，key的值应该是一个循环内唯一的值，比如数据库中的主键。

对于多个页面都会使用的一些代码，可以封装成一个React组件，类似于传统web开发中模板的作用。

## Expressjs

### 用途
Node平台下的后端框架，与Java下的Spring框架类似。

### 安装
Expressjs
``npm install express``

body-parser
用来解析发给Express的表单或JSON数据的库
``npm install body-parser``

mysql2
Node平台下连接MySQL的库。
mysql也可以，不过没有async/await支持
``npm install mysql2``

sequelize
兼容MySQL、PostgresQL等数据库的ORM框架，这里主要用来管理MySQL2的数据库连接池
``npm install sequelize``

**其它可能会用到的库/框架，根据情况安装。**
axios：浏览器和Node下都可以用的http请求工具，类似jQuery的$.ajax函数，但功能更多，库文件也更小。
jsonwebtoken：生成JWT的库。
log4js：Node下的日志库，也可以用来格式化终端输出格式。
moment：浏览器和Node下都可以用的日期/时间处理库。
multer：Express下处理文件上传的库。
node-xlsx：Node下处理Excel(xlsx)文件的库。
lodash：浏览器和Node下都可以用的常用工具包，类似于Java下的Guava。
