// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Catalyst',
			logo: {
				light: './src/assets/catalyst-logo-monochrome-dark.svg',
				dark: './src/assets/catalyst-logo-monochrome-light.svg',
				replacesTitle: true,
			},
			description: 'Pengenalan Catalyst beserta ruang lingkupnya',
			social: {
				github: 'https://github.com/rulyardiansyah/catalyst',
			},
			sidebar: [
				{ slug: 'index' },
				{
					label: 'UI Framework',
					items: [
						'ui-framework/design-token',
						'ui-framework/file-structure',
						{
							label: 'Core',
							items: [
								'ui-framework/font-size',
								'ui-framework/misc',
							]
						},
						{
							label: 'Thematic',
							items: [
								'ui-framework/semantic-typography',
								'ui-framework/semantic-color-grid',
							]
						},
						{
							label: 'Foundation',
							items: [
								'ui-framework/text-styles',
							]
						},
					]
				},
				{ slug: 'release-notes' },
			],
			customCss: [
				'./src/fonts/font-face.css',
				'./src/styles/catalyst-doc.css',
			],
		}),
	],
});