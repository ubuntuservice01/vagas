import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({base:'./',build:{rollupOptions:{input:{home:resolve('index.html'),passenger:resolve('apps/passenger/index.html'),driver:resolve('apps/driver/index.html'),admin:resolve('apps/admin/index.html')}}}});
