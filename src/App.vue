<template>
  <div class="container">
    Welcome!
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@import url('./index.css');
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
