---
title: 博客
---

<script setup>
import BlogEntry from './components/BlogEntry.vue'
const blogs = [
    {
    title: '关于悦写App',
    summary: '市面上已经有那么多写作App了，为什么我还要开发一款新的写作App?',
    publishedDate: '2025-01-15',
    url: './blogs/start',
    },
    {
    title: '悦写重磅更新',
    summary: '悦写更新了重磅功能，快来下载试用吧',
    publishedDate: '2025-01-17',
    url: './blogs/new-version',
    },
];
</script>

<BlogEntry v-for="blog in blogs.reverse()" :blog="blog"/>