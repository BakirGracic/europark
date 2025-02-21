import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export default function Items() {
	const t = useTranslations('Timeline');

	return (
		<ul className='timeline timeline-vertical lg:timeline-horizontal justify-center'>
			{/* 1 */}
			<li>
				<div className='timeline-start'>{t('step')}&nbsp;1</div>
				<div className='timeline-middle'>
					<CheckCircleIcon className='size-6' />
				</div>
				<div className='timeline-end bg-base-200 timeline-box hover:outline-secondary mt-2 !border-none shadow-md hover:outline-2'>
					<div className='mb-2 text-center text-lg font-medium'>{t('1.title')}</div>
					<div className='max-w-40'>{t('1.text')}</div>
				</div>
				<hr />
			</li>
			{/* 2 */}
			<li>
				<hr />
				<div className='timeline-start bg-base-200 timeline-box hover:outline-secondary mb-2 !border-none shadow-md hover:outline-2'>
					<div className='mb-2 text-center text-lg font-medium'>{t('2.title')}</div>
					<div className='max-w-40'>{t('2.text')}</div>
				</div>
				<div className='timeline-middle'>
					<CheckCircleIcon className='size-6' />
				</div>
				<div className='timeline-end'>{t('step')}&nbsp;2</div>
				<hr />
			</li>
			{/* 3 */}
			<li>
				<hr />
				<div className='timeline-start'>{t('step')}&nbsp;3</div>
				<div className='timeline-middle'>
					<CheckCircleIcon className='size-6' />
				</div>
				<div className='timeline-end bg-base-200 timeline-box hover:outline-secondary mt-2 !border-none shadow-md hover:outline-2'>
					<div className='mb-2 text-center text-lg font-medium'>{t('3.title')}</div>
					<div className='max-w-40'>{t('3.text')}</div>
				</div>
			</li>
		</ul>
	);
}
