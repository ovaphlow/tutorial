# USER-SERVICE

## 编译 .proto

```shell
python -m grpc_tools.protoc -I./proto --python_out=. --grpc_python_out=. ./proto/current-user.proto
```
