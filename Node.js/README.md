## Node.js

略过

### Node.js 是什么

略过

### 用途

- 纯前端的工程化

- 服务端渲染

- 后端Rest API

- 运维工具及代理工具

### 谁在用

- 前端：几乎所有的互联网公司

- 服务端渲染：流量非常高的网站（比如阿里系）

- 后端Rest API：一些架构比较复杂的系统中的一部分

- 代理工具：一些架构比较复杂的系统中的一部分

- 运维工具：很少

### 为什么使用Node.js

主要是用来做前端工程化，和一些特定情况的后端API

[性能测试](https://www.techempower.com/benchmarks/#section=data-r16)

- 优点

1. 性能不错
在单进程下，Node.js(Expressjs和Koajs)与Spring测试的成绩相当，但是Java(Spring)基于多线程模式，启动一个进程就可以使用全部CPU；而Node.js有Cluster支持，比如可以在一个8核心的服务器上启动8个Node.js进程作为集群，整体性能会比单进程多线程的Spring好，适合做API网关、代理或者负载均衡类的工作,但是Go在这方面性能比Node还要好。

2. 资源占用

同样或者接近的功能，单个Node进程占用大概在几十M的情况下，单个Java(Spring)进程会占用几百M，CPU占用相当。

- 缺点

1. 可靠性不如同步语言

由于异步的特性，某些极端的情况下，**据说**会丢数据。

2. 不适合做CPU密集的工作

还是由于异步特性的原因，在同时处理大量数据的时候性能比同步语言的程序低，这个缺点是没办法避免的，一般这种情况下会把数据交给同步语言的程序处理。

### 工具

推荐Web Storm或者VS Code

### 架构上的用法 

前端 --> 反代(Nginx) --> 后端

前端 --> Node(Expressjs/Koajs) --> 后端

后端同时存在Java和Node的情况：
```
前端 --> 反代(Nginx) --> Java
                   --> Node
```

## NPM

### NPM是什么

NPM是Node平台中用来管理第三方包的工具，同时也有一些其它功能，比如处理脚本等。

### NPM用法

- 初始化Node工程

``npm init``

生成了package.json文件，这个文件有很多功能，最主要的功能是用来保存工程所需第三方包的信息。
下载的第三方包保存在node_modules目录下。

大多数前端所用的库、插件、框架都可以通过NPM获取

**所有**Node平台下的第三方库可以通过NPM获取

- 安装第三方库

``npm install xxxx``

安装某个指定版本的库

``npm install jquery@1``

``npm install jquery@3``

国内网络用npm.taobao.org会快一点，但是cnpm和npm的node_modules中库的目录结构不同，需要注意。

- 移除第三方库

``npm uninstall xxxx``

- 安装临时使用的库或者运行一次性命令

``npx create-react-app webapp``

*create-react-app是React官方的初始化工程工具，也可以通过*
``npm install -g create-react-app``
*安装。-g的意思是安装到Node的全局环境，保存在Node目录的node_modules下，相当于把create-react-app程序添加到了系统环境变量中的path下。*
