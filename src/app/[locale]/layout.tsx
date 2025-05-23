import '@/css/tailwind.css';
import { InterFont } from '@/lib/fonts';
import { coreViewport } from '@/lib/viewport';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';
import { type Locale, routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const viewport = coreViewport;

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const locale = (await params).locale;

	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={`${InterFont.variable} font-body`}>
				<Script
					id='gtag-fetch-ads'
					strategy='beforeInteractive'
					async
					src='https://www.googletagmanager.com/gtag/js?id=AW-16866396285'
				></Script>
				<Script
					id='gtag-init-ads'
					strategy='beforeInteractive'
				>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16866396285');`}</Script>

				<Script
					id='gtag-fetch-analytics'
					strategy='beforeInteractive'
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-E09QZYVM7C'
				></Script>
				<Script
					id='gtag-init-analytics'
					strategy='beforeInteractive'
				>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-E09QZYVM7C');`}</Script>
				
				<Script
					id='homepage-schema-jsonld'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'EuroPark',
							description:
								'Privatni parking aerodrom Sarajevo. 3 minute od aerodroma SSJ. 24/7 video nadzor, besplatan prevoz do aerodroma.',
							url: 'https://www.europark.ba',
							logo: 'https://www.europark.ba/static/logo.png',
							image: [
								'https://www.europark.ba/static/slideshow-1.jpg',
								'https://www.europark.ba/static/slideshow-2.jpg',
								'https://www.europark.ba/static/slideshow-3.jpg',
								'https://www.europark.ba/static/slideshow-4.jpg'
							],
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'Aleja Bosne Srebrene do br. 109',
								addressLocality: 'Sarajevo',
								postalCode: '71000',
								addressCountry: 'BA'
							},
							geo: {
								'@type': 'GeoCoordinates',
								latitude: 43.8281,
								longitude: 18.3315
							},
							hasMap: 'https://www.google.com/maps/place/Aleja+Bosne+Srebrene+109,+Sarajevo',
							openingHoursSpecification: [
								{
									'@type': 'OpeningHoursSpecification',
									dayOfWeek: [
										'Monday',
										'Tuesday',
										'Wednesday',
										'Thursday',
										'Friday',
										'Saturday',
										'Sunday'
									],
									opens: '06:00',
									closes: '22:00'
								}
							],
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+38761487818',
								contactType: 'Customer Service',
								availableLanguage: ['Bosnian', 'English', 'German']
							},
							sameAs: [
								'https://www.instagram.com/europark_sarajevo/',
								'https://www.facebook.com/europark.sarajevo'
							],
							priceRange: '8-11 BAM per day',
							amenityFeature: [
								{
									'@type': 'LocationFeatureSpecification',
									name: '24/7 Video Surveillance',
									value: true
								},
								{
									'@type': 'LocationFeatureSpecification',
									name: 'Free Shuttle Service',
									value: true
								},
								{
									'@type': 'LocationFeatureSpecification',
									name: 'Secure Fencing',
									value: true
								},
								{
									'@type': 'LocationFeatureSpecification',
									name: 'Well-lit Premises',
									value: true
								}
							],
							paymentAccepted: 'Cash',
							currenciesAccepted: 'BAM',
							areaServed: {
								'@type': 'Place',
								name: 'Sarajevo International Airport'
							},
							offers: {
								'@type': 'Offer',
								name: 'Long-Term Parking Discount',
								description: 'Discounted rates for stays longer than 5 days.',
								priceCurrency: 'BAM',
								price: '8.00',
								eligibleDuration: {
									'@type': 'QuantitativeValue',
									minValue: 6,
									unitCode: 'DAY'
								}
							}
						})
					}}
				/>

				<NextIntlClientProvider messages={messages}>
					<Toaster position='top-center' expand visibleToasts={3} />
					<main>
						{children}
						<Analytics />
					</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
