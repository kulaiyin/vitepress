# cz-git

[cz-git](https://cz-git.qbb.sh/zh/)

工程性更强，轻量级，高度自定义，
输出标准格式的 Commitizen 适配器和 CLI

## 使用

### 全局使用

```bash
npm install -g czg

# 检查下载是否成功
czg --help
git czg -h
```

配置文件

```json
// .czrc
{
  "$schema": "https://cdn.jsdelivr.net/gh/Zhengqbbb/cz-git@1.11.1/docs/public/schema/cz-git.json",
  "alias": {
    "fd": "docs: fix typos"
  },
  "messages": {
    "type": "选择你要提交的类型 :",
    "scope": "选择一个提交范围（可选）:",
    "customScope": "请输入自定义的提交范围 :",
    "subject": "填写简短精炼的变更描述 :\n",
    "body": "填写更加详细的变更描述（可选）。使用 \"|\" 换行 :\n",
    "breaking": "列举非兼容性重大的变更（可选）。使用 \"|\" 换行 :\n",
    "footerPrefixesSelect": "选择关联issue前缀（可选）:",
    "customFooterPrefix": "输入自定义issue前缀 :",
    "footer": "列举关联issue (可选) 例如: #31, #I3244 :\n",
    "generatingByAI": "正在通过 AI 生成你的提交简短描述...",
    "generatedSelectByAI": "选择一个 AI 生成的简短描述:",
    "confirmCommit": "是否提交或修改commit ?"
  },
  "types": [
    {
      "value": "[feat]",
      "name": "[feat](新特性):     新增功能"
    },
    {
      "value": "[fix]",
      "name": "[fix](修复) :     修复缺陷"
    },
    {
      "value": "[docs]",
      "name": "[docs](文档):     文档变更"
    },
    {
      "value": "[style]",
      "name": "[style](格式):     代码格式（不影响功能，例如空格、分号等格式修正）"
    },
    {
      "value": "[refactor]",
      "name": "[refactor](重构):     代码重构（不包括 bug 修复、功能新增）"
    },
    {
      "value": "[perf]",
      "name": "[perf](性能):     性能优化"
    },
    {
      "value": "[test]",
      "name": "[test](测试):     添加疏漏测试或已有测试改动"
    },
    {
      "value": "[build]",
      "name": "[build](构建):     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）"
    },
    {
      "value": "[ci]",
      "name": "[ci](集成):     修改 CI 配置、脚本"
    },
    {
      "value": "[revert]",
      "name": "[revert](回退):     回滚 commit"
    },
    {
      "value": "[chore]",
      "name": "[chore](其他):     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）"
    }
  ],
  "useEmoji": false,
  "emojiAlign": "center",
  "useAI": false,
  "aiNumber": 1,
  "themeColorCode": "",
  "scopes": [],
  "allowCustomScopes": true,
  "allowEmptyScopes": true,
  "customScopesAlign": "bottom",
  "customScopesAlias": "custom",
  "emptyScopesAlias": "empty",
  "upperCaseSubject": false,
  "markBreakingChangeMode": false,
  "allowBreakingChanges": [
    "feat",
    "fix"
  ],
  "breaklineNumber": 100,
  "breaklineChar": "|",
  "skipQuestions": [],
  "issuePrefixes": [
    {
      "value": "closed",
      "name": "closed:   ISSUES has been processed"
    }
  ],
  "customIssuePrefixAlign": "top",
  "emptyIssuePrefixAlias": "skip",
  "customIssuePrefixAlias": "custom",
  "allowCustomIssuePrefix": true,
  "allowEmptyIssuePrefix": true,
  "confirmColorize": true,
  "minSubjectLength": 0,
  "defaultBody": "",
  "defaultIssues": "",
  "defaultScope": "",
  "defaultSubject": ""
}
```
