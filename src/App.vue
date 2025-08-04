<template>
  <div class="container">
    <video ref="videoRef" autoplay muted playsinline></video>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const videoRef = ref<HTMLVideoElement | null>(null)

    onMounted(async () => {
      if (!navigator.mediaDevices || !videoRef.value) return

      try {
        // 请求摄像头
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoRef.value.srcObject = stream
      } catch (err) {
        console.error('无法访问摄像头：', err)
      }
    })

    return { videoRef }
  }
}
</script>

<style>
.container {
  width: 300px;
  height: 300px;
  margin: 2rem auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  /* 去掉默认黑边 */
  background: #000;
}
</style>
