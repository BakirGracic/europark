import { getMetadataIntlAlts, getPathname } from '@/i18n/routing';
import { coreMetadataObject } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import Script from 'next/script';
import Contact from '@/features/floating/components/Contact';
import Hero from '@/features/hero/components/Hero';
import Slideshow from '@/features/hero/components/Slideshow';
import Navbar from '@/features/navbar/components/Navbar';
import Indicator from '@/features/hero/components/Indicator';
import Reasons from '@/features/reasons/components/Reasons';
import Timeline from '@/features/timeline/components/Timeline';
import Pricelist from '@/features/pricelist/components/Pricelist';
import Book from '@/features/book/components/Book';
import FAQ from '@/features/faq/components/FAQ';
import Location from '@/features/location/components/Location';
import Description from '@/features/description/components/Description';
import Video from '@/features/video/components/Video';
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
			<Script id='conversion-tag' strategy='beforeInteractive'>
				{`gtag('event', 'conversion', {'send_to': 'AW-16866396285/VmY2CKCR-8QaEP2Qw-o-'});`}
			</Script>
			<Contact />
			<Hero>
				<Slideshow />
				<Navbar />
				<Indicator />
			</Hero>
			<Reasons />
			<Timeline />
			<Pricelist />
			<Book />
			<FAQ />
			<Location />
			<Description />
			<Video />
			<Footer />
		</>
	);
}
