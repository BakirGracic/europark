import { CheckIcon } from '@heroicons/react/24/outline';

export default function Card({ title, points }: { title: string; points: string[] }) {
	return (
		<div className='card hover:outline-secondary hover:outline-2'>
			<div className='card-body bg-base-200 rounded-box max-w-80 grow p-7 shadow-md'>
				<h3 className='text-2xl font-bold'>{title}</h3>
				<ul className='mt-3 flex flex-col gap-3 text-sm'>
					{points.map((point, index) => (
						<li key={index} className='flex items-center'>
							<CheckIcon className='text-success me-2 size-4' />
							<span className='leading-tight'>{point}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
