'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitcher() {
	return (
		<label className='swap swap-rotate'>
			<input type='checkbox' className='theme-controller' value='silk' />

			<MoonIcon className='swap-on h-6 w-6' />

			<SunIcon className='swap-off h-6 w-6' />
		</label>
	);
}
