import type { Metadata } from 'next';
import type { Viewport } from 'next';

export const coreMetadataObject: Metadata = {
	title: 'EuroPark | Najbolji aerodromski parking u Sarajevu',
	description:
		'Siguran i pristupačan parking kod Sarajevskog aerodroma. Video nadzor 24/7, osvjetljeno, besplatan transport. Rezervišite svoje parking mjesto unaprijed po najpovoljnijim cijenama.',
	applicationName: 'EuroPark',
	authors: [{ name: 'EuroPark', url: `${process.env.NEXT_PUBLIC_APP_URL}/` }],
	creator: 'EuroPark',
	publisher: 'EuroPark',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		languages: {
			bs: `${process.env.NEXT_PUBLIC_APP_URL}/`,
			en: `${process.env.NEXT_PUBLIC_APP_URL}/en`,
			de: `${process.env.NEXT_PUBLIC_APP_URL}/de`
		}
	},
	openGraph: {
		title: 'EuroPark | Najbolji aerodromski parking u Sarajevu',
		description:
			'Siguran i pristupačan parking kod Sarajevskog aerodroma. Video nadzor 24/7, osvjetljeno, besplatan transport. Rezervišite svoje parking mjesto unaprijed po najpovoljnijim cijenama.',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		siteName: 'EuroPark',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
				width: 1200,
				height: 630,
				alt: 'EuroPark OpenGraph Image'
			}
		],
		locale: 'bs',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	},
	icons: {
		icon: [
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
			{ url: '/favicon.svg', type: 'image/svg+xml' }
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png'
	},
	appleWebApp: {
		capable: true,
		title: 'Weekendica',
		statusBarStyle: 'black-translucent'
	}
};

export const coreViewportObject: Viewport = {
	colorScheme: 'light dark'
};
