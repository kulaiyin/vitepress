# docker

## docker命令

> windows下重启docker服务
```shell
# 重启docker
net stop "Docker Desktop Service"
# 启动docker
net start "Docker Desktop Service"
# 验证是否启动成功
docker info
```

## 国内镜像

> 路径: ``
```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn/",
    "https://hub-mirror.c.163.com/",
    "https://reg-mirror.qiniu.com",
    "https://registry.cn-hangzhou.aliyuncs.com",
    "https://mirror.ccs.tencentyun.com"
  ]
}
```
