import { getMetadataIntlAlts, getPathname } from '@/i18n/routing';
import { coreMetadataObject } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import Navbar from '@/features/navbar/components/Navbar';
import Hero from '@/features/hero/components/Hero';
import Floating from '@/features/floating/components/Floating';

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
			<Floating />
			<Hero>
				<Navbar />
			</Hero>
		</>
	);
}
