import { contextBridge, ipcRenderer } from 'electron'

// 将安全 API 暴露给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => ipcRenderer.invoke('ping')
})

