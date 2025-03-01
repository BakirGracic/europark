import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero({ children }: { children: React.ReactNode }) {
	const t = useTranslations('Hero');

	return (
		<div className='hero relative min-h-screen'>
			<div className='hero-content z-50 text-center text-[#f7f5f3]'>
				<div className='max-w-xl'>
					<h1 className='break-word text-5xl font-bold'>{t('title')}</h1>
					<p className='break-word py-6 font-medium'>{t('description')}</p>
					<Link href='#reserve' className='btn btn-primary shadow-md'>
						{t('cta')}
					</Link>
				</div>
			</div>
			{children}
		</div>
	);
}
