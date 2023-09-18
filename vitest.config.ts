import path from 'path'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src')
		}
	},
	test: {
		css: true,
		globals: true,
		environment: 'jsdom',
		passWithNoTests: true,
		setupFiles: './test.setup.ts',
		include: ['src/**/test.{ts,tsx}'],
		coverage: {
			exclude: ['src/**/stories.tsx', 'src/pages/**/*.tsx', 'src/styles/**/*.ts']
		}
	}
})
