import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NextLink from 'next/link';
import LogoPNG from '@/images/logo/logo.png';
import EurorentLogoPNG from '@/images/logo/eurorent-logo.png';
import { Link } from '@/i18n/routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	const t = useTranslations('Footer');

	return (
		<div className='bg-base-300'>
			<footer className='footer sm:footer-horizontal text-base-content mx-auto max-w-5xl p-10'>
				<nav>
					<p className='footer-title'>{t('company_title')}</p>
					<Image
						src={LogoPNG}
						alt='EuroPark Logo Najbolji Privatni Parking U Sarajevu Sigurno Jeftino Ljubazno'
						height={40}
						className='mb-5'
					/>
					<p className='footer-title'>{t('partner_company_title')}</p>
					<NextLink href='https://euro-rent.ba/' target='_blank'>
						<Image
							src={EurorentLogoPNG}
							alt='EuroRent Logo Najbolji Privatni Parking U Sarajevu Sigurno Jeftino Ljubazno'
							height={40}
						/>
					</NextLink>
				</nav>
				<nav>
					<p className='footer-title'>{t('links_title')}</p>
					<Link href='/terms-of-service' target='_blank' className='link link-hover'>
						{t('terms_of_service_label')}
					</Link>
					<Link href='/privacy-policy' target='_blank' className='link link-hover'>
						{t('privacy_policy_label')}
					</Link>
					<NextLink href='/sitemap.xml' target='_blank' className='link link-hover'>
						{t('sitemap_label')}
					</NextLink>
				</nav>
				<nav>
					<p className='footer-title'>{t('social_title')}</p>
					<div className='grid grid-flow-col gap-4'>
						<NextLink href='https://www.instagram.com/europark_sarajevo/' target='_blank'>
							<FontAwesomeIcon icon={faInstagram} className='stroke-base-content size-8' />
						</NextLink>
						<NextLink href='https://facebook.com/europark.doo.sarajevo' target='_blank'>
							<FontAwesomeIcon icon={faFacebookF} className='stroke-base-content size-8' />
						</NextLink>
						<NextLink href='viber://chat/?number=+38761487818' target='_blank'>
							<FontAwesomeIcon icon={faViber} className='stroke-base-content size-8' />
						</NextLink>
						<NextLink href='https://wa.me/38761487818' target='_blank'>
							<FontAwesomeIcon icon={faWhatsapp} className='stroke-base-content size-8' />
						</NextLink>
					</div>
				</nav>
			</footer>
			<footer className='footer sm:footer-horizontal footer-center text-base-content p-4'>
				<aside>
					<p>
						{new Date().getFullYear()} EuroPark &middot; Made By&nbsp;
						<NextLink href='https://bakir.dev' target='_blank' className='link'>
							Bakir
						</NextLink>
					</p>
				</aside>
			</footer>
		</div>
	);
}
