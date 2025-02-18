import { type MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'EuroPark',
		short_name: 'EuroPark',
		start_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		scope: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#ffffff', // TODO kada dobijes od hare UI details i logo napravi ovo zavisno koju temu (belu ili crnu) odredis da bude default
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		],
		screenshots: [
			{
				src: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
				sizes: '1200x630',
				type: 'image/png'
			}
		]
	};
}
