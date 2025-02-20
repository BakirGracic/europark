'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, type Locale } from '@/i18n/routing';
import Image from 'next/image';
import BAPNG from '@/images/flags/bih.png';
import ENPNG from '@/images/flags/usa.png';
import DEPNG from '@/images/flags/ger.png';

export default function LanguageSwitcher() {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (l: Locale) => {
		router.replace(pathname, { locale: l });
	};

	const languages = {
		bs: {
			label: 'Bosanski',
			image: BAPNG
		},
		en: {
			label: 'English',
			image: ENPNG
		},
		de: {
			label: 'Deutsch',
			image: DEPNG
		}
	};

	return (
		<div className='dropdown dropdown-end'>
			<div tabIndex={0} role='button' className='cursor-pointer'>
				<Image
					src={languages[locale].image}
					width={30}
					height={30}
					alt='Current Language Flag'
				/>
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-200 rounded-box w-32 p-2 shadow-md'
			>
				{Object.entries(languages).map(([key, { label, image }]) => (
					<li key={key}>
						<div
							onClick={() => handleChange(key as Locale)}
							title={label}
							className='flex justify-end'
						>
							<p>{label}</p>
							<Image src={image} alt={label} height={24} width={24} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
