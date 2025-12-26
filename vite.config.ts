
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'REPLACE_WITH_YOUR_REPO_NAME' with your actual repository name
  // if your URL is username.github.io/repo-name/
  base: './', 
});
