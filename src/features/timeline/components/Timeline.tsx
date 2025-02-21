import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Items from '@/features/timeline/components/Items';
import { useTranslations } from 'next-intl';

export default function Timeline() {
	const t = useTranslations('Timeline');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<CheckCircleIcon className='size-8' />
			</h2>
			<Items />
		</section>
	);
}
