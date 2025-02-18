import { getSitemapIntlAlts } from '@/i18n/routing';
import { type MetadataRoute } from 'next';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			...getSitemapIntlAlts('/'),
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
			priority: 1
		}
	];
}
