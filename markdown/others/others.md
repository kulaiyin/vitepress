# 杂项

## 局域网下如何ping另一台电脑

[两台电脑相互之间A能ping通B ,而B 不能ping通A 2台电脑局域网的机器互联问题](https://zhuanlan.zhihu.com/p/139492390)

```txt
搜索 -> 防火墙 -> 高级设置 -> 入站规则 -> 文件和打印机共享(回显请求 - ICMPv4-In) -> 启用规则
注意选择 专有/公用 的配置文件
```
![文件和打印机共享(回显请求](../../images/server/文件和打印机共享（ping）.png)

## 我在电脑A中使用wsl安装了ubuntu的子系统，我现在在电脑B中如何去ping电脑A的子系统呢

1. 获取linux子系统的虚拟网卡代理端口
   
```bash
ifconfig
# eth0:  inet addr:172.18.148.203

# 格式：netsh interface portproxy add v4tov4 listenport=Windows端口 listenaddress=WindowsIP connectport=WSL端口 connectaddress=WSL_IP
netsh interface portproxy add v4tov4 listenport=2222 listenaddress=0.0.0.0 connectport=22 connectaddress=172.18.148.203

ping 192.168.32.89:2222
```

## telnet 安装

[Window10安装Telnet/SSH服务端服务端](https://blog.csdn.net/weixin_43886198/article/details/113040163)

```txt
搜索 -> 启动或关闭 Windows 功能 -> 勾选 Telnet 服务 
```

![安装 Telnet 服务](../images/server/telnet安装.png)

### 命令
```bash
# 查看端口是否被占用
# telnet ip port
telnet 192.168.32.89 22 # ssh服务端口
```