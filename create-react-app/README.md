## create-react-app

### 用途
create-react-app是用来创建React工程的官方工具

### React
和Vue相比，React中需要记忆的核心关键词更少，但是对JavaScript基础要求更高，尤其是大量使用了ES6版本的语法；React周边的库更多，也有React Native这种很多人用的工具。

### 创建并初始化React工程
``npx create-react-app xxx``

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
