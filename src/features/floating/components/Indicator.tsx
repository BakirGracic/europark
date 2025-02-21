import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Indicator() {
	return (
		<div className='fixed bottom-0 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-3 p-4'>
			<ArrowDownIcon className='size-7 animate-bounce stroke-2' />
		</div>
	);
}
