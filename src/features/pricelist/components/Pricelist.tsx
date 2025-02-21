import { CurrencyEuroIcon } from '@heroicons/react/24/solid';
import Card from '@/features/pricelist/components/Card';
import { useTranslations } from 'next-intl';

export default function Pricelist() {
	const t = useTranslations('Pricelist');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<CurrencyEuroIcon className='size-8' />
			</h2>
			<div className='flex flex-wrap items-center justify-center gap-5'>
				<Card />
			</div>
		</section>
	);
}
