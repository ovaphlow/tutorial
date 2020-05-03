# PostgreSQL数据库

## 安装

### Windows 二进制包

#### 下载

[Version 10.12](https://sbp.enterprisedb.com/getfile.jsp?fileid=12498)

#### 解压

压缩包内的文件解压至某盘的根目录下，例如d:\pgsql。

#### 初始化数据库

终端下进入pgsql/bin目录，输入下方命令（可能需要管理员权限）：

```cmd
initdb --encoding=UTF-8 --locale=chs --pgdata=d:\pgsql\data
```

在pgsql目录下会生成data目录。

#### 启动服务进程

```cmd
pg_ctl --pgdata=d:\pgsql\data --log=d:\pgsql\logfile start
```

在操作系统的任务管理器中能看到postgres.exe进程。

#### 完成

现在可以使用客户端工具连接数据库了。
