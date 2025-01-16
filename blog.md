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
    }
];
</script>

<BlogEntry v-for="blog in blogs.reverse()" :blog="blog"/>