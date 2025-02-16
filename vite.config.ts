import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, './src/assets'),
			Scss: path.resolve(__dirname, './src/scss'),
			Components: path.resolve(__dirname, './src/components'),
			Common: path.resolve(__dirname, './src/common'),
			Pages: path.resolve(__dirname, './src/pages'),
			Store: path.resolve(__dirname, './src/store'),
		},
	},
});
