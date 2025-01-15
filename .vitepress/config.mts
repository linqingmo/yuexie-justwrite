import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "悦写空间",
  themeConfig: {
    logo: '/ico.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '产品',
        items: [
          { text: '悦写', link: '/product/yuexie' },
        ]
      },
      { text: '博客', link: '/blog' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favico.png' }]
  ],
  base: '/yuexie-justwrite/',
})