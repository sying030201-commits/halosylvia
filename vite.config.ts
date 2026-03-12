import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 关键：这里的名字必须和你 GitHub 仓库的名字完全一致
  base: '/halosylvia/', 
})
