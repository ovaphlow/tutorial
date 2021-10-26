# Docker

## Postgres

### 安装

```shell
docker pull postgres:latest
```

### 运行

```shell
docker run --detach --name postgres --env POSTGRES_PASSWORD=dsdfjk --env PGDATA=/var/lib/postgresql/data/pgdata --volume d:/asd:/var/lib/postgresql/data  --publish 5432:5432 postgres
```