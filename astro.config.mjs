import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RI Vision',
			social: {
				github: 'https://github.com/CerberusProgrammer/ri_vision',
			},
			customCss: [
				'./src/styles/custom.css'
			],
			sidebar: [
				{
					label: 'Guias',
					autogenerate: { directory: 'guias' }
				},
				{
					label: 'Primeros pasos',
					autogenerate: { directory: 'primeros-pasos' }
				},
				{
					label: 'RI Compras',
					autogenerate: { directory: 'ri-compras' }
				},
				{
					label: 'RI Produccion',
					autogenerate: { directory: 'ri-produccion' }
				},
				{
					label: 'RI Vision',
					autogenerate: { directory: 'ri-vision' }
				},
				{
					label: 'Base de datos',
					autogenerate: { directory: 'database' }
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'referencias' },
				},
			],
		}),
	],
});
