// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://dev.webyt.com.cn',
	
	integrations: [
		starlight({
			title: '开发者命令手册',
			social: [{ icon: 'github', label: 'YOUKEZAN', href: 'https://github.com/youkezan/dev-command-handbook' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: "NET 命令",
					items: [{ autogenerate: { directory: "dotnet" } }],
				  },
			],
		}),
	],
});
