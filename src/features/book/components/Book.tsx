import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import Form from '@/features/book/components/Form';

export default function Book() {
	const t = useTranslations('Form');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<ArrowDownOnSquareIcon className='size-8' />
			</h2>
			<Form />
		</section>
	);
}
