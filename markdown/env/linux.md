# linux 下开发环境安装

```sh
gitVersion=`git --version`
if [ -z "$gitVersion" ] ; then
    echo "git不存在，请先安装git..."
    exit 0
else
    echo "git已经安装过了..."
fi
# git用户信息
git config --global user.name "kulaiyin"
git config --global user.email "kly0214@163.com"
# 保存账号密码
git config --global credential.helper store
```
