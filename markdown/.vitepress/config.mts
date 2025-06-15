import { defineConfig } from "vitepress"
import markdownItTaskCheckbox from "markdown-it-task-checkbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发日记博客",
  lang: "zh-CN",
  // 显示最后更新时间
  lastUpdated: true,
  description:
    "记录开发过程中环境配置,遇到的问题和解决方案,TodoList,Week Record等.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "http://47.116.182.231:3061" }],

    sidebar: {
      // 开发环境
      "/env": {
        base: "",
        items: [
          {
            text: "linux 环境配置",
            link: "/env/linux.md",
          },
          {
            text: "macos 环境配置",
            link: "/env/macos.md",
          },
          {
            text: "windows 环境配置",
            link: "/env/windows.md",
          },
          {
            text: "vscode 环境配置",
            link: "/env/vscode.md",
          },
        ],
      },
      // 开发环境
      "/frameworks": {
        base: "",
        items: [
          {
            text: "react框架",
            link: "/frameworks/react/index.md",
            items: [
              { text: "react18", link: "/frameworks/react/react18.md" },
              { text: "nextjs框架", link: "/frameworks/react/nextjs.md" },
            ],
          },
          {
            text: "nextjs框架",
            link: "/frameworks/nextjs/index.md",
          },
          {
            text: "vue框架",
            link: "/frameworks/vue/index.md",
            items: [
              { text: "vue2", link: "/frameworks/vue/vue2.md" },
              { text: "vue3", link: "/frameworks/vue/vue3.md" },
              { text: "全局状态", link: "/frameworks/vue/store.md" },
            ],
          },
          {
            text: "express框架",
            link: "/frameworks/express/index.md",
          },
          {
            text: "Kuikly框架",
            link: "/frameworks/kuikly/index.md",
          },
          {
            text: "Flutter框架",
            link: "/frameworks/flutter/index.md",
          },
        ],
      },
      // 数据库
      "/database": {
        base: "",
        items: [
          {
            text: "mysql数据库",
            link: "/database/mysql.md",
          },
          {
            text: "mongodb数据库",
            link: "/database/mongodb.md",
          },
          {
            text: "sqlite数据库",
            link: "/database/sqlite.md",
          },
          {
            text: "redis数据库",
            link: "/database/redis.md",
          },
        ],
      },
      // 数据库
      "/mobile-app": {
        base: "",
        items: [
          {
            text: "安卓移动开发",
            link: "/mobile-app/android/index.md",
          },
          {
            text: "Ios移动开发",
            link: "/mobile-app/ios/index.md",
          },
          {
            text: "鸿蒙移动开发",
            link: "/mobile-app/harmonynext/index.md",
          },
        ],
      },
      // 日报
      "/years": {
        base: "",
        items: [
          {
            text: "2025-06",
            items: [
              { text: "09-15(24周)", link: "/years/2025/06/24-week.md" },
              { text: "16-22(25周)", link: "/years/2025/06/25-week.md" },
              { text: "16-22(26周)", link: "/years/2025/06/26-week.md" },
              { text: "23-29(27周)", link: "/years/2025/06/26-week.md" },
              { text: "06-15", link: "/years/2025/2025-06/06-15.md" },
            ],
          },
        ],
      },
      // 开发规范
      "/dev-specification": {
        base: "",
        items: [
          {
            text: "git提交规范",
            link: "/dev-specification/git/index.md",
            items: [
              { text: "cz-git", link: "/dev-specification/git/cz-git.md" },
            ],
          },
          {
            text: "代码格式化规范",
            link: "/dev-specification/code/index.md",
            items: [
              { text: "prettier", link: "/dev-specification/code/prettier.md" },
              { text: "eslint", link: "/dev-specification/code/eslint.md" },
            ],
          },
        ],
      },
      // 网络
      "/network": {
        base: "",
        items: [
          {
            text: "实时消息推送",
            link: "/network/real-time-communication/index.md",
            items: [
              {
                text: "websocket",
                link: "/network/real-time-communication/websocket.md",
              },
              {
                text: "sse",
                link: "/network/real-time-communication/sse.md",
              },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config(md) {
      md.use(markdownItTaskCheckbox)
    },
  },
})
