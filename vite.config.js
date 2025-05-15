import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/greedy-dp-board/', // 注意：这里的路径应与你的仓库名一致
});
