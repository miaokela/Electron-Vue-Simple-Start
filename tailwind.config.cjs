// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,vue}',    // 这里覆盖 renderer 所有目录
    './electron/**/*.{js,ts}'         // 如果 preload/主进程也要用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
