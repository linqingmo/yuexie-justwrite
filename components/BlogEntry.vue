<template>
  <a :href="blog.url" class="blog-entry" @mouseover="hoverTitle = true" @mouseleave="hoverTitle = false">
    <h3 :style="{ color: hoverTitle ? 'var(--vp-c-indigo-1)' : 'var(--vp-c-text-1)' }">{{ blog.title }}</h3>
    <p style="color: var(--vp-c-text-1)">{{ blog.summary }}</p>
    <p style="color: var(--vp-c-gray-1)">发布日期: {{ blog.publishedDate }}</p>
  </a>
</template>

<script setup>
import { ref } from 'vue';
// 定义 props
const props = defineProps({
  blog: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      summary: '',
      publishedDate: '',
      url: ''
    })
  }
});
const hoverTitle = ref(false);
</script>

<style scoped>
.blog-entry {
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  /* border-bottom: 1px solid var(--vp-c-divider); */
}
</style>