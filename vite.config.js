import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import jsconfigPaths from 'vite-jsconfig-paths';
import sass from 'sass';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
	if (!mode) return;
	return {
		build: {
			sourcemap: true,
		},
		resolve: {
			alias: [{ find: '@', replacement: path.resolve(import.meta.dirname, './src') }],
		},
		plugins: [
			react(),
			jsconfigPaths(),
			eslintPlugin({
				cache: false,
				include: ['./src/**/*.js', './src/**/*.jsx'],
				exclude: [],
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					implementation: sass,
				},
			},
		},
	};
});
