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
					id='gtag-fetch'
					strategy='beforeInteractive'
					async
					src='https://www.googletagmanager.com/gtag/js?id=AW-16866396285'
				></Script>
				<Script
					id='gtag-init'
					strategy='beforeInteractive'
				>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16866396285');`}</Script>

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
