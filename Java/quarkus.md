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

## JsonWebToken

```shell
./mvnw quarkus:add-extension -Dextensions="smallrye-jwt, smallrye-jwt-build"
```

生成key

```shell
openssl genrsa -out rsaPrivateKey.pem 2048
openssl rsa -pubout -in rsaPrivateKey.pem -out publicKey.pem

openssl pkcs8 -topk8 -nocrypt -inform pem -in rsaPrivateKey.pem -outform pem -out privateKey.pem
```

配置文件

```properties
mp.jwt.verify.publickey.location=publicKey.pem 
mp.jwt.verify.issuer=https://example.com/issuer 

quarkus.native.resources.includes=publicKey.pem

smallrye.jwt.sign.key.location=privateKey.pem
```
