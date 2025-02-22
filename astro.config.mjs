// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Catalyst',
			description: 'Dokumentasi Catalyst',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				
			],
			customCss: [
				'./src/styles/catalyst.css',
			],
		}),
	],
});
