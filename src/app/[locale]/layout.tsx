import '@/css/tailwind.css';
import { InterFont } from '@/lib/fonts';
import { coreViewportObject } from '@/lib/metadata';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Toaster } from 'sonner';
import { type Locale, routing } from '@/i18n/routing';

export const viewport = coreViewportObject;

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
			<body className={`${InterFont.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<Toaster position='bottom-center' expand visibleToasts={3} />
					<main>{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
