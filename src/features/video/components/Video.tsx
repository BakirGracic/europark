import { useTranslations } from 'next-intl';
import { TruckIcon } from '@heroicons/react/24/solid';

export default function Video() {
	const t = useTranslations('Video');

	return (
		<section className='SectionBox'>
			<h2 className='SectionTitle'>
				<span>{t('section_title')}</span>
				<TruckIcon className='size-8' />
			</h2>
			<iframe
				width='720'
				height='405'
				src='https://www.youtube.com/embed/JigVBj6Pd9I?si=LWZB8sEh0Q-osUc9'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen
				className='rounded-box mx-auto shadow-md'
			></iframe>
		</section>
	);
}
