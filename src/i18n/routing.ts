import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	locales: ['bs', 'en', 'de'],
	defaultLocale: 'bs',
	localeDetection: false,
	localePrefix: 'as-needed',
	localeCookie: {
		name: process.env.NEXT_PUBLIC_LANGUAGE_COOKIE
	}
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export type Locale = (typeof routing.locales)[number];

export type IntlHref = Parameters<typeof getPathname>[0]['href'];

export function getSitemapIntlAlts(href: IntlHref) {
	return {
		url: `${process.env.NEXT_PUBLIC_APP_URL}${getPathname({ href, locale: routing.defaultLocale })}`,
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((locale) => [
					locale,
					`${process.env.NEXT_PUBLIC_APP_URL}${getPathname({ href, locale })}`
				])
			)
		}
	};
}

export function getMetadataIntlAlts(href: IntlHref) {
	return {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}${getPathname({ href, locale: routing.defaultLocale })}`,
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((locale) => [
					locale,
					`${process.env.NEXT_PUBLIC_APP_URL}${getPathname({ href, locale })}`
				])
			)
		}
	};
}

export function getRobtosIntlAlts(href: IntlHref, suffix: string = '') {
	return routing.locales.map((locale) => `${getPathname({ href, locale })}${suffix}`);
}
