/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
				serif: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				// Tema claro: fondo blanco, texto negro
				'white': '#111111',
				'black': '#ffffff',
				'ciava': {
					'black': '#ffffff',
					'dark': '#f6f6f6',
					'charcoal': '#efefef',
					'graphite': '#e2e2e2',
					'warm': '#111111',
					'cream': '#111111',
					'gold': '#111111',
					'gold-light': '#333333',
				},
			},
			boxShadow: {
				'elevation-1': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
				'elevation-2': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
				'elevation-3': '0 10px 30px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
				'elevation-4': '0 20px 50px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)',
			},
			transitionTimingFunction: {
				'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'pulse-soft': 'pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulseSoft: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
			},
		},
	},
	plugins: [],
}
