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
			image: BAPNG,
			alt: 'Slika Bosanskog Jezika Za Najbolji Privatni Parking U Sarajevu'
		},
		en: {
			label: 'English',
			image: ENPNG,
			alt: 'Slika Engleskog Jezika Za Najbolji Privatni Parking U Sarajevu'
		},
		de: {
			label: 'Deutsch',
			image: DEPNG,
			alt: 'Slika Njemačkog Jezika Za Najbolji Privatni Parking U Sarajevu'
		}
	};

	return (
		<div className='dropdown dropdown-end'>
			<div tabIndex={0} role='button' className='cursor-pointer rounded-full shadow-md'>
				<Image src={languages[locale].image} width={30} height={30} alt={languages[locale].alt} />
			</div>
			<ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box w-32 p-2 shadow-md'>
				{Object.entries(languages).map(([key, { label, image, alt }]) => (
					<li key={key}>
						<div
							onClick={() => handleChange(key as Locale)}
							title={label}
							className='flex justify-end'
						>
							<p>{label}</p>
							<Image src={image} alt={alt} height={24} width={24} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
