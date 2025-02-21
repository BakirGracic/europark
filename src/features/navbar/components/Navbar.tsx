import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LogoPNG from '@/images/logo/logo.png';
import { Link } from '@/i18n/routing';
import ThemeSwitcher from '@/features/navbar/components/ThemeSwitcher';
import LanguageSwitcher from '@/features/navbar/components/LanguageSwitcher';

export default function Navbar() {
	const t = useTranslations('Navbar');

	return (
		<div className='navbar absolute top-0 right-0 left-0 z-50 p-5'>
			<div className='mr-5 flex-1'>
				<Image src={LogoPNG} alt='EuroPark Logo' height={40} />
			</div>
			<div className='flex items-center gap-5'>
				<ThemeSwitcher />
				<LanguageSwitcher />
				<Link href='#reserve' className='btn btn-primary shadow-md'>
					{t('cta')}
				</Link>
			</div>
		</div>
	);
}
