import { getMetadataIntlAlts, getPathname, Link } from '@/i18n/routing';
import { coreMetadataObject } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const locale = (await params).locale;
	const t = await getTranslations({ locale, namespace: 'Metadata' });

	return {
		...coreMetadataObject,
		title: t('title'),
		description: t('description'),
		alternates: {
			...getMetadataIntlAlts('/')
		},
		openGraph: {
			...coreMetadataObject.openGraph,
			title: t('title'),
			description: t('description'),
			url: getPathname({ href: '/', locale }),
			locale: locale
		}
	};
}

export default function TermsOfService() {
	const t = useTranslations('TermsOfService');

	return (
		<div className='prose mx-auto max-w-prose p-5'>
			<div className='flex w-full justify-center'>
				<Link href='/' className='btn btn-primary mb-20 !no-underline'>
					{t('cta')}
				</Link>
			</div>
			<h1 className='text-center'>{t('title')}</h1>

			<div>
				<p>Datum stupanja na snagu: 22.02.2025</p>

				<section>
					<h2>Prihvaćanje Uvjeta</h2>
					<p>
						Korištenjem usluga EuroPark (&quot;usluga&quot;, &quot;servis&quot;) smatra
						se da ste pročitali, razumjeli i pristali na ove Uvjete. Ako ne prihvatate
						ove uvjete, nemojte koristiti naš servis.
					</p>
				</section>

				<section>
					<h2>Opis Usluge</h2>
					<p>
						Pružamo uslugu rezervacije parking mjesta u blizini &quot;Međunarodni
						aerodrom Sarajevo&quot; (ili &quot;Sarajevo International Airport&quot;
						kooda &quot;SJJ&quot;), uključujući:
					</p>
					<ul>
						<li>Online rezervaciju parking termina</li>
						<li>Besplatan transfer do/od aerodroma po potrebi</li>
						<li>Sigurno čuvanje vozila</li>
					</ul>
				</section>

				<section>
					<h2>Rezervacije i Otkazivanje</h2>
					<ul>
						<li>
							Otkazivanje rezervacije mora biti obavljeno najmanje{' '}
							<strong>72 sata</strong> prije početka rezervacije
						</li>
						<li>
							Kašnjenje u preuzimanju vozila: Naplaćuje se{' '}
							<strong>10 KM po danu</strong> za svaki dan kašnjenja
						</li>
						<li>
							Plaćanje se vrši <strong>gotovinom u BAM valuti</strong> nakon
							parkiranja vozila
						</li>
					</ul>
				</section>

				<section>
					<h2>Obaveze Korisnika</h2>
					<p>Korisnik je dužan:</p>
					<ul>
						<li>Ispuniti sve podatke tačno i istinito</li>
						<li>Posjedovati važeću vozačku dozvolu</li>
						<li>Biti stariji od 18 godina</li>
						<li>Poštivati pravila ponašanja u skladu s javnim redom</li>
						<li>Preuzeti vozilo u zakazano vrijeme</li>
					</ul>
				</section>

				<section>
					<h2>Odgovornost</h2>
					<ul>
						<li>
							Ne snosimo odgovornost za štetu nastalu uslijed:
							<ul>
								<li>
									Vanjskih faktora (prirodne nepogode, ekstremni vremenski uslovi)
								</li>
								<li>Krađe ili oštećenja vozila izvan našeg nadzora</li>
								<li>Kašnjenja koja nisu posljedica naše nemarnosti</li>
							</ul>
						</li>
						<li>
							Obavezujemo se na:
							<ul>
								<li>Osiguranje adekvatnih sigurnosnih mjera</li>
								<li>Besplatan transfer do/od aerodroma po zahtjevu</li>
								<li>Pružanje potvrde o rezervaciji</li>
							</ul>
						</li>
					</ul>
				</section>

				<section>
					<h2>Plaćanje</h2>
					<ul>
						<li>
							Cijene su izražene u <strong>konvertibilnim markama (BAM)</strong>
						</li>
						<li>
							Referentne cijene su izražene u <strong>eurima (EUR)</strong>
						</li>
						<li>
							Prihvaćamo isključivo <strong>gotovinsko plaćanje</strong> na licu
							mjesta
						</li>
						<li>Ne naplaćujemo prethodnu kaparu</li>
					</ul>
				</section>

				<section>
					<h2>Ostale Odredbe</h2>
					<ul>
						<li>Sporovi se rješavaju po zakonima Bosne i Hercegovine</li>
						<li>Zabranjeno je korištenje usluga u ilegalne svrhe</li>
						<li>Zadržavamo pravo odbijanja usluge bez obrazloženja</li>
					</ul>
				</section>

				<section>
					<h2>Kontakt</h2>
					<p>
						Za sva pitanja u vezi sa Uvjetima korištenja:
						<br />
						EuroRent
						<br />
						Adresa: Braće Mulić BB
						<br />
						Telefon: +387 61 487 818
						<br />
						Email: harunkarahmet81@gmail.com
					</p>
				</section>
			</div>
		</div>
	);
}
