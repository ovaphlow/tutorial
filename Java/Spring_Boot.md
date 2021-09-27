# Spring Boot

## 配置

### 从系统变量中读取配置

以如下形式编辑 application.properties 文件，yaml 格式的配置文件同理：

```properties
# application.properties

server.port=${PORT:8080}

spring.r2dbc.url=r2dbc:mysql://${DB_HOST:127.0.0.1}:${DB_PORT:3306}/${DB_NAME:ovaphlow}?serverZoneId=Asia/Shanghai
```

运行程序前，设置对应的系统变量：

```powershell
# PowerShell

$env:PORT=9000
$env:DB_HOST='localhost'
```

DB_PORT 等变量没有设置的话，程序会自动使用默认值 3306。

### 使用 R2DBC 时 MySQL 的时区设置方法

```properties
# application.properties

spring.r2dbc.url=r2dbc:mysql://127.0.0.1:3306/ovaphlow?serverZoneId=Asia/Shanghai
```
