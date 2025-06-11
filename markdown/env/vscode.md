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

## .prettierrc

```json
{
  // 每行代码的最大长度限制为 120 个字符。超过时，Prettier 会自动换行。默认值为 80，此处放宽至 120 以适应更宽屏的代码布局
  "printWidth": 120,
  // 缩进宽度为 2 个空格
  "tabWidth": 2,
  // 禁用制表符缩进，始终使用空格缩进
  "useTabs": false,
  // 在语句末尾自动添加分号
  "semi": true,
  // 字符串使用双引号 "（而非单引号 '）
  "singleQuote": false,
  // 禁止在对象、数组或函数参数的最后一项后添加尾随逗号（例如 {x: 1} 而非 {x: 1,}）
  "trailingComma": "none",
  // 在对象字面量的括号内保留空格（如 { foo: bar } 而非 {foo: bar}）
  "bracketSpacing": true,
  // 当箭头函数只有一个参数时，省略括号（如 x => x 而非 (x) => x）
  "arrowParens": "avoid",
  // 在 Vue 文件中，对 <script> 和 <style> 标签内容进行缩进（与模板保持一致）
  "vueIndentScriptAndStyle": true,
  // 保留文件原有的换行符风格（自动识别 LF \n 或 CRLF \r\n）
  "endOfLine": "auto"
}
```
