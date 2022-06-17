import { defineConfig } from 'cypress';

export default defineConfig({
  baseUrl: 'http://localhost:3000',
  integrationFolder: './test',
  testFiles: '*.spec.ts',
});
