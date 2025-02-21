import { useTranslations } from 'next-intl';

export default function Accordions() {
	const t = useTranslations('FAQ');

	return (
		<div className='mx-auto max-w-xl'>
			<div className='join join-vertical bg-base-200 rounded-4xl'>
				{[...Array(5)].map((_, index) => (
					<div
						className='collapse-arrow join-item border-base-300 collapse border'
						key={index}
					>
						<input type='checkbox' />
						<div className='collapse-title font-semibold'>{t(index + 1 + '.q')}</div>
						<div className='collapse-content text-sm'>{t(index + 1 + '.a')}</div>
					</div>
				))}
			</div>
		</div>
	);
}
