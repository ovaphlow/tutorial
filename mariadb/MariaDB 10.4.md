# MariaDB 10.4 在 Windows 上的安装过程

## 准备

于[MariaDB官网](https://mariadb.com)下载 10.4 系列版本的二进制包

## 解压缩

## 初始化数据库

在终端中进入 MariaDB 目录，运行：

```bash
bin\mysql_install_db.exe
```

## 配置 MariaDB 服务

编辑初始化数据库后生成的 data 目录下的 my.ini 文件，在 [mysqld] 段内增加如下内容：

```ini
# 需要远程访问数据库时设置为0.0.0.0
bind_address=127.0.0.1
port=3306

default_time_zone='+8:00'

character_set_server=utf8mb4
collation_server=utf8mb4_general_ci

general_log=1
slow_query_log=1
slow_query_log_file=mysqld-slow.log

# 下面两项在后续的 10.5 版本失效
innodb_buffer_pool_instances=2
innodb_buffer_pool_size=2G
```

## 启动

在终端中进入 MariaDB 目录，运行：

```bash
bin\mysqld.exe
```
