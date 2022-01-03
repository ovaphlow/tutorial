# Consul

## 启动 Consul

开发/测试模式

```shell
consul agent -dev
```

服务器模式

```cmd
consul agent -server -bootstrap-expect 1 -rejoin -data-dir C:\Users\ovaphlow\consul\data -ui
```

## consul-template

编辑配置文件 consule/nginx-conf/nginx.ctmpl

```conf
upstream test {
    {{range service "test"}}
    server {{ .Address }}:{{ .Port }};
    {{ end }}
}

server {
    listen       8008;
    location / {
        proxy_pass   http://test ;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 启动 consul-template

windows

```conf
#nginx.conf
http {
    include c:/Users/ovaphlow/consul/nginx-conf/*.conf;
}
```

```cmd
consul-template --consul-addr localhost:8500 --template "c:\users\ovaphlow\consul\nginx-conf\nginx.ctmpl:c:\users\ovaphlow\consul\nginx-conf\vhost.conf" --dry
```

linux

```conf
#nginx.conf
http {
    include /root/consul/nginx-conf/*.conf;
}
```

```shell
consul-template --consul-addr localhost:8500 --template "/root/consul/nginx-conf/nginx.ctmpl:/root/consul/nginx-conf/vhost.conf:systemctl nginx reload" --dry
```
