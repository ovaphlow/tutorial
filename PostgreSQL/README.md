# 安装

## Ubuntu Server

```shell
# Create the file repository configuration:
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

```shell
# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

```shell
# Update the package lists:
sudo apt-get update
```

```shell
# Install the latest version of PostgreSQL.
# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
sudo apt-get -y install postgresql
```

## Manjaro
    pacman -S postgresql

    sudo su postgres -l
    initdb -D /usr/local/postgres/data
    exit

    sudo pacman -S pgadmin4

## Windows
解压缩版

1. 初始化数据库（可能需要管理员权限）

```cmd
initdb --encoding=UTF-8 --locale=chs --pgdata=c:\pgsql\data
```

2. 启动服务器进程（可能需要管理员权限）
```
pg_ctl --pgdata=c:\pgsql\data --log=c:\pgsql\logfile start
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

## openSUSE

安装服务

```shell
sudo zypper install postgresql-server
```

切换用户
```shell
su postgres
```

初始化
```shell
initdb --pgdata /usr/local/pgsql/data --locale zh_CN.UTF-8 --encoding UTF8 --auth trust
```

启动

```shell
pg_ctl --pgdata /usr/local/pgsql/data --log /usr/local/pgsql/logfile start
```

### 设置接受局域网连接（可选）

1. 编辑文件 /usr/local/pgsql/data/postgres.conf，找到 listen_addresses 行，将其值改为 '*'；
1. 编辑文件 /usr/local/pgsql/data/pg_hba.conf，添加行 host all all 192.168.0.0/16 password；
1. 重载服务器

```shell
pg_ctl --pgdata /usr/local/pgsql/data --log /usr/local/pgsql/logfile reload
```

### 修改密码（可选）

连接数据库

```shell
psql --password
```

修改默认密码
```sql
alter user postgres with password 'dsdfjk';
```
