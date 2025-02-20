import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LogoPNG from '@/images/logo/logo.png';

export default function Navbar() {
	const t = useTranslations('Navbar');

	return (
		<div className='navbar absolute top-0 right-0 left-0 p-5'>
			<div className='flex-1'>
				<Image src={LogoPNG} alt='EuroPark Logo' height={40} />
			</div>
			<div className='flex-none'>
				<div className='btn btn-primary'>{t('cta')}</div>
			</div>
		</div>
	);
}
