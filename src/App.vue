<template>
  <div class="container">
    <h1>Electron + Vue 3 + Vite 脚手架</h1>
    <button @click="onPing">向主进程发送 Ping</button>
    <p>{{ reply }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const reply = ref('')

    const onPing = async () => {
      // 调用 preload 暴露的 API
      // @ts-ignore
      reply.value = await window.electronAPI.ping()
    }

    return { reply, onPing }
  }
}
</script>

<style>
.container {
  padding: 2rem;
  text-align: center;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>

