# vscode 配置

## 使用命令行安装插件

```sh
echo "开始安装vscode插件..."

plugins=(
    # 通意灵码
    Alibaba-Cloud.tongyi-lingma
    formulahendry.code-runner
    esbenp.prettier-vscode
    Vue.volar
    MS-CEINTL.vscode-language-pack-zh-hans
    foam.foam-vscode
    donjayamanne.githistory
    eamodio.gitlens
    yzhang.markdown-all-in-one
    Redis.redis-for-vscode
    sidthesloth.html5-boilerplate
    ecmel.vscode-html-css
)
for plugin in "${plugins[@]}"; do
    code --install-extension $plugin
done
```

## .vscode/settings.json

```json
{
  // 自动保存文件
  "files.autoSave": "afterDelay",
  // 保存文件时自动格式化代码
  "editor.formatOnSave": true,
  // 控制自动补全括号/引号的逻辑
  "editor.autoClosingBrackets": "beforeWhitespace",
  // 启用括号配对彩色高亮
  "editor.bracketPairColorization.enabled": true,
}
```
