import { CheckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function Cards() {
	const t = useTranslations('Reasons');

	return [...Array(3)].map((_, i) => (
		<div key={i} className='card hover:outline-secondary hover:outline-2'>
			<div className='card-body bg-base-200 rounded-box max-w-80 grow p-7 shadow-md'>
				<h3 className='text-2xl font-bold'>{t(`${i + 1}.title`)}</h3>
				<ul className='mt-3 flex flex-col gap-3 text-sm'>
					{[t(`${i + 1}.points.1`), t(`${i + 1}.points.2`), t(`${i + 1}.points.3`)].map(
						(point, index) => (
							<li key={index} className='flex items-center'>
								<CheckIcon className='text-success me-2 size-4' />
								<span className='leading-tight'>{point}</span>
							</li>
						)
					)}
				</ul>
			</div>
		</div>
	));
}
