import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import Cards from '@/features/reasons/components/Cards';
import { useTranslations } from 'next-intl';

export default function Reasons() {
	const t = useTranslations('Reasons');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<QuestionMarkCircleIcon className='size-8' />
			</h2>
			<div className='flex flex-wrap items-center justify-center gap-5'>
				<Cards />
			</div>
		</section>
	);
}
