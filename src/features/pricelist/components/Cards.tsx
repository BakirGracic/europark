import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function Cards() {
	const t = useTranslations('Pricelist');

	const ranges = ['1to5', '6to10', '11to15', '16to30'];

	return ranges.map((range, i) => (
		<div key={i} className='card bg-base-200 shadow-md'>
			<div className='card-body p-5'>
				<span className='badge badge-sm badge-success gap-1'>
					<LightBulbIcon className='stroke-success-content size-4' />
					{t(range + '.tip')}
				</span>
				<h2 className='my-5 text-center text-3xl font-medium'>{t(range + '.label')}</h2>
				<div className='bg-secondary text-secondary-content rounded-xl px-10 py-4'>
					<div className='text-center text-4xl font-bold'>
						{t(range + '.price_bam')}&nbsp;KM
					</div>
					<div className='text-center text-2xl font-semibold'>
						{t(range + '.price_eur')}&nbsp;&euro;
					</div>
				</div>
			</div>
		</div>
	));
}
