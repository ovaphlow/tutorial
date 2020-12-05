# Node.js

## npm

### 设置 registry 使用国内镜像

```shell
npm config set registry https://registry.npm.taobao.org

# 设置gRPC镜像
npm config set grpc_node_binary_host_mirror https://npm.taobao.org/mirrors/
```

## Yarn

### 安装

```shell
npm install yarn --global
```

### 设置 registry 使用国内镜像

```shell
yarn config set registry https://registry.npm.taobao.org

# 设置gRPC镜像
yarn config set grpc_node_binary_host_mirror https://npm.taobao.org/mirrors/
```

## gRPC

```shell
npm install --grpc_node_binary_host_mirror=https://npm.taobao.org/mirrors/
```
