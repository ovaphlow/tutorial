apt install mariadb-server

mysql_secure_installation

CREATE USER username IDENTIFIED BY 'password';

GRANT ALL ON *.* TO 'username'@'%' WITH GRANT OPTION;

my.cnf
    bind-address=0.0.0.0
    listen 0.0.0.0

start .\bin\mysqld.exe --bind-address=0.0.0.0 --port=3306 --innodb-buffer-pool-instances=2 --innodb-buffer-pool-size=2048M --query-cache-type=1 --query-cache-size=256M
