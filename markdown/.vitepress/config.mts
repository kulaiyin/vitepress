import { defineConfig } from 'vitepress'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发日记博客",
  description: "记录开发过程中环境配置,遇到的问题和解决方案,TodoList,Week Record等.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'http://47.116.182.231:3061' },
    ],

    sidebar: {
      // 开发环境
      '/env': {
        base: "",
        items: [
          {
            text: 'linux 环境配置',
            link: "/env/linux.md"
          },
          {
            text: 'macos 环境配置',
            link: "/env/macos.md"
          },
          {
            text: 'windows 环境配置',
            link: "/env/windows.md"
          },
          {
            text: 'vscode 环境配置',
            link: "/env/vscode.md"
          }
        ]
      },
      // 日报
      "/dev-week-record": {
        base: "",
        items: [
          {
            text: '2025-06',
            items: [
              { text: '09-15(24周)', link: '/years/2025/06/24-week.md' },
              { text: '16-22(25周)', link: '/years/2025/06/25-week.md' },
              { text: '16-22(26周)', link: '/years/2025/06/26-week.md' },
              { text: '23-29(27周)', link: '/years/2025/06/26-week.md' }
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(markdownItTaskCheckbox)
    },
  }
})
