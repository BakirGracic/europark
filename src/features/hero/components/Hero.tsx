import { useTranslations } from 'next-intl';

export default function Hero({ children }: { children: React.ReactNode }) {
	const t = useTranslations('Hero');

	return (
		<div className='hero relative min-h-screen'>
			<div className='hero-content text-center'>
				<div className='max-w-xl'>
					<h1 className='text-5xl font-bold'>{t('title')}</h1>
					<p className='py-6'>{t('description')}</p>
					<button className='btn btn-primary'>{t('cta')}</button>
				</div>
			</div>
			{children}
		</div>
	);
}
