import { useTranslations } from 'next-intl';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Description() {
	const t = useTranslations('Description');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<AcademicCapIcon className='size-8' />
			</h2>
			<p className='prose mx-auto max-w-prose text-center text-white'>{t('p')}</p>
		</section>
	);
}
