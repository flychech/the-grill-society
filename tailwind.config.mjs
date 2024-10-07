/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'grill-society-bg': "linear-gradient(to bottom left,#efdd03,rgba(249,70,22,0.8))",
				'grill-image': "url('/assets/fondo.svg')",
			},
			backgroundColor: {
				'grill-society-bg-yellow': '#efdd03',
			},
			colors: {
				'grill-yellow': {
					DEFAULT: '#efdd03',
					'50': '#fcfee8',
					'100': '#faffc2',
					'200': '#f8ff87',
					'300': '#fcff43',
					'400': '#fff710',
					'500': '#efdd03',
					'600': '#ceae00',
					'700': '#a47e04',
					'800': '#88620b',
					'900': '#735010',
					'950': '#432a05',
				},
				'grill-red': {
					DEFAULT: '#f94616',
					'50': '#fff3ed',
					'100': '#ffe5d5',
					'200': '#fec6aa',
					'300': '#fd9f74',
					'400': '#fb6c3c',
					'500': '#f94616',
					'600': '#ea2c0c',
					'700': '#c21d0c',
					'800': '#9a1912',
					'900': '#7c1812',
					'950': '#430807',
				},
      		}
		},
	},
	plugins: [],
}
