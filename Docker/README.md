# Docker

## Postgres

### 安装

```shell
docker pull postgres:latest
```

### 运行

```shell
docker run --name postgres --env POSTGRES_PASSWORD=dsdfjk --volume d:/asd:/var/lib/postgresql --publish 5432:5432 --detach postgres
```