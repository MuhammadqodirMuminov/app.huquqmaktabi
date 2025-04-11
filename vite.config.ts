import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import * as path from 'path';
import { defineConfig } from 'vite';
// import purgecss from '@fullhuman/postcss-purgecss';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
// import { visualizer } from 'rollup-plugin-visualizer';

const date = Date.now();

export default defineConfig({
  server: {
    port: 6699,
  },
  envPrefix: 'APP_',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
    exclude: ['js-big-decimal'],
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        // purgecss({
        //   content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
        // }),
      ],
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
        entryFileNames: `assets/[name]-${date}.js`,
        chunkFileNames: `assets/[name]-[hash]-${date}.js`,
        assetFileNames: `assets/[name]-[hash]-${date}.[ext]`,
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    VitePWA({
      selfDestroying: true,
      registerType: 'autoUpdate',
      manifest: {
        name: "Let's Trip",
        short_name: "Let's Trip",
        description: 'Travel application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
            },
          },
        ],
      },
    }),
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      svg: {
        multipass: true,
      },
    }),
    // visualizer({
    //   emitFile: true,
    //   filename: 'stats.html',
    // }),
    {
      name: 'vite-plugin-app-version',
      resolveId(id) {
        if (id === 'virtual:app-version') {
          return '\0' + 'virtual:app-version';
        }
      },
      load(id) {
        if (id === '\0' + 'virtual:app-version') {
          return `export const appVersion = '${date}';`;
        }
      },
    },
  ],
});
