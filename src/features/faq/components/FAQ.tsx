import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import Accordions from '@/features/faq/components/Accordions';

export default function FAQ() {
	const t = useTranslations('FAQ');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<ChatBubbleBottomCenterTextIcon className='size-8' />
			</h2>
			<Accordions />
		</section>
	);
}
