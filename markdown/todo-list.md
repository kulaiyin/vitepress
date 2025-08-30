# 待办清单

## 2025-06-08

- [ ] ~~gitea 自动化部署流程~~
  ~~效果: 代码提交到指定分支,自动化打包发布~~
- [ ] ~~直播业务~~
  1. ~~直播端发送视频帧到服务器~~
  2. ~~服务器推流到观看直播的用户~~
  3. ~~用户端拉流,观看直播~~

## 2025-07-30

- [ ] ~~gitee 自动化部署流程~~
- [ ] ~~qiankun 微前端框架集成~~

## 2025-08-30

- [x] [服务器继承sftp服务,服务器进行文件上传](./server/sftp/sftp.md)
  - [x] [客户端实现连接(nodejs实现)](./server/sftp/sftp.md#nodejs-连接)
- [ ] 域名问题备案问题处理

## 2025-08-31

- [x] vitepress 添加本地搜索功能
- [ ] kuikly 框架搭建
  - [ ] h5
  - [ ] 微信小程序
  - [ ] android app
  - [ ] ios app
  - [ ] harmony app
- [ ] 鸿蒙课堂学习
- [x] [反向代理服务器实现路径转发(nginx)](./server/nginx/nginx.md)
```txt
同一个域名下存在多个服务，那么可以通过

如域名是: www.example.com
存在服务A: auth(5050), 服务B: user(5051)
客户端访问方式:
  A服务接口: www.example.com/auth/api/v1/xx -> nginx分发 -> www.example.com:5050/api/v1/xx
  B服务接口: www.example.com/user/api/v1/xx -> nginx分发 -> www.example.com:5051/api/v1/xx
```