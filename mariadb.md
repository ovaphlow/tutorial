apt install mariadb-server

mysql_secure_installation

CREATE USER username IDENTIFIED BY 'password';

GRANT ALL ON *.* TO 'username'@'%' WITH GRANT OPTION;

my.cnf
    listen 0.0.0.0
