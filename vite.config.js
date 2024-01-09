//Variablen importieren 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint';

// Quelle bei https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ],
})
