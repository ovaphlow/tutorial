### Manjaro
    pacman -S postgresql

    sudo su postgres -l
    initdb -D /usr/local/postgres/data
    exit

    sudo pacman -S pgadmin4

### Winwdows
解压缩版
    initdb --encoding=UTF-8 --locale=chs --pgdata=c:\pgsql\data
    
    pg_ctl -D c:\pgsql\data -l c:\pgsql\logfile start
