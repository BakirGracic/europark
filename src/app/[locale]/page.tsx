import { getMetadataIntlAlts, getPathname } from '@/i18n/routing';
import { coreMetadataObject } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import Navbar from '@/features/navbar/components/Navbar';
import Hero from '@/features/hero/components/Hero';
import Contact from '@/features/floating/components/Contact';
import Indicator from '@/features/hero/components/Indicator';
import Slideshow from '@/features/hero/components/Slideshow';
import Reasons from '@/features/reasons/components/Reasons';
import Timeline from '@/features/timeline/components/Timeline';
import Pricelist from '@/features/pricelist/components/Pricelist';
import FAQ from '@/features/faq/components/FAQ';
// forma ovdje
import Footer from '@/features/footer/components/Footer';

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
			<Reasons />
			<Timeline />
			<Pricelist />
			{/* forma ovdje */}
			<FAQ />
			<Footer />
		</>
	);
}
