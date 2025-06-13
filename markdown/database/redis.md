# redis 数据库

## 安装

[Redis 安装](https://www.redis.net.cn/tutorial/3503.html)

### linux 下安装 redis
```sh
sudo apt-get update
sudo apt-get install redis-server -y

# 启动 redis
redis-server
# 查看 redis 是否启动？
redis-cli
# redis 127.0.0.1:6379>
```


## 配置

redis默认安装后,是没有账号和密码的.在生产环境下,需要配置账号和密码.
我们可以通过 redis 的配置文件设置密码参数，这样客户端连接到 redis 服务就需要密码验证，这样可以让你的 redis 服务更安全。

[Redis 安全](https://www.redis.net.cn/tutorial/3520.html)


查看是否设置了密码验证

```sh
CONFIG get requirepass
# 1) "requirepass"
# 2) ""

CONFIG set requirepass "redis_server"

AUTH redis_server
```
