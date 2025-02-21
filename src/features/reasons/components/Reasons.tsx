import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import Card from '@/features/reasons/components/Card';
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
				<Card
					title={t('1.title')}
					points={[t('1.points.1'), t('1.points.2'), t('1.points.3')]}
				/>
				<Card
					title={t('2.title')}
					points={[t('2.points.1'), t('2.points.2'), t('2.points.3')]}
				/>
				<Card
					title={t('3.title')}
					points={[t('3.points.1'), t('3.points.2'), t('3.points.3')]}
				/>
			</div>
		</section>
	);
}
