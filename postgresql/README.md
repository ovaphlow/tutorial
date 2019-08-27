### Manjaro
    pacman -S postgresql

    sudo su postgres -l
    initdb -D /usr/local/postgres/data
    exit

    sudo pacman -S pgadmin4

### Windows
解压缩版

1. 初始化数据库（可能需要管理员权限）
```
initdb --encoding=UTF-8 --locale=chs --pgdata=c:\pgsql\data
```

2. 启动服务器进程（可能需要管理员权限）
```
pg_ctl -D c:\pgsql\data -l c:\pgsql\logfile start
```

3. [可选]添加用户
添加PostgresQL用户
```
createuser --superuser [用户名]
```
编辑第一步生成的data目录下的pg_ident.conf文件，按照注释中的说明加入用户
```
[用户名] [用户名] [用户名]
```

4. 注册为系统服务（需要管理员权限）
```
pg_ctl --pgdata=c:\pgsql\data -N PostgresQL -S auto register
```
-S 为启动类型，auto时为自动启动，demand时为手动启动
