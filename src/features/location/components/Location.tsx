import { MapPinIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import Map from '@/features/location/components/Map';

export default function Location() {
	const t = useTranslations('Location');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<MapPinIcon className='size-8' />
			</h2>
			<Map />
		</section>
	);
}
