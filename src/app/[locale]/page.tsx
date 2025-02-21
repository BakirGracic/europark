import { getMetadataIntlAlts, getPathname } from '@/i18n/routing';
import { coreMetadataObject } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/features/navbar/components/Navbar';
import Hero from '@/features/hero/components/Hero';
import Contact from '@/features/floating/components/Contact';
import Indicator from '@/features/floating/components/Indicator';
import Slideshow from '@/features/hero/components/Slideshow';
import { type Metadata } from 'next';

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const locale = (await params).locale;
	const t = await getTranslations({ locale, namespace: 'Metadata' });

	return {
		...coreMetadataObject,
		title: t('title'),
		description: t('description'),
		alternates: {
			...getMetadataIntlAlts('/')
		},
		openGraph: {
			...coreMetadataObject.openGraph,
			title: t('title'),
			description: t('description'),
			url: getPathname({ href: '/', locale }),
			locale: locale
		}
	};
}

export default function Homepage() {
	return (
		<>
			<Contact />
			<Hero>
				<Slideshow />
				<Navbar />
				<Indicator />
			</Hero>
		</>
	);
}
