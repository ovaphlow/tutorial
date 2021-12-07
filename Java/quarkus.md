# Quarkus 工程

## 添加数据库支持：reactive_pg_client

```shell
./mvnw quarkus:add-extension -Dextensions="reactive-pg-client"
```

```shell
./mvnw quarkus:add-extension -Dextensions="resteasy-mutiny"
```

```shell
./mvnw quarkus:add-extension -Dextensions="resteasy-jackson"
```

配置文件

```properties
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=quarkus_test
quarkus.datasource.password=quarkus_test
quarkus.datasource.reactive.url=postgresql://localhost:5432/quarkus_test
```
