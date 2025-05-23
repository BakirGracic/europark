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

export default function PrivacyPolicy() {
	const t = useTranslations('PrivacyPolicy');

	return (
		<div className='prose mx-auto max-w-prose p-5'>
			<div className='flex w-full justify-center'>
				<Link href='/' className='btn btn-primary mb-20 !no-underline'>
					{t('cta')}
				</Link>
			</div>
			<h1 className='text-center'>{t('title')}</h1>
			<div>
				<p>Posljednje izmjene: 23.05.2025.</p>

				<section>
					<h2>Uvod</h2>
					<p>
						EuroPark (&quot;mi&quot;, &quot;nas&quot; ili &quot;naš&quot;) štiti vašu privatnost
						dok koristite našu uslugu aerodromskog parkinga. Ova Politika privatnosti objašnjava
						kako prikupljamo i koristimo informacije u skladu sa GDPR propisima Europske unije.
					</p>
				</section>

				<section>
					<h2>Prikupljene Informacije</h2>

					<h3>Kolačići (Cookies)</h3>
					<p>Koristimo jedan (1) funkcionalni kolačić za pamćenje vašeg izbora jezika:</p>
					<ul>
						<li>Postavlja se isključivo prilikom promjene jezika</li>
						<li>Pohranjuje samo jezičku preferencu (npr. &quot;bs&quot; ili &quot;en&quot;)</li>
						<li>Čuva se lokalno na vašem uređaju</li>
						<li>Možete ga izbrisati preko postavki web preglednika</li>
					</ul>
				</section>

				<section>
					<h2>Osnov za Obradu Podataka</h2>
					<p>
						Prema{' '}
						<a target='_blank' href='https://gdpr-info.eu/art-6-gdpr/'>
							GDPR članu 6
						</a>
						, obrada podataka se vrši na osnovu:
					</p>
					<ul>
						<li>Vašeg pristanka</li>
						<li>Legitimnog interesa</li>
						<li>Neophodnosti</li>
					</ul>
				</section>

				<section>
					<h2>Vaša Prava</h2>
					<p>Prema GDPR-u imate pravo na:</p>
					<ul>
						<li>Pristup pohranjenim podacima -&gt; dostupni na Vašem uređaju</li>
						<li>Ispravku podataka -&gt; preko postavki web pretraživača Vašeg uređaja</li>
						<li>Brisanje podataka -&gt; preko postavki web pretraživača Vašeg uređaja</li>
						<li>Ograničenje obrade -&gt; na kontakt email</li>
						<li>Prigovor na internu obradu -&gt; na kontakt email</li>
					</ul>
					<p>Za ostvarivanje ovih prava kontaktirajte nas putem konkatk informacija u nastavku.</p>
				</section>

				<section>
					<h2>Zaštita Podataka</h2>
					<p>Svi podaci se:</p>
					<ul>
						<li>Ne dijele s trećim stranama i prenose izvan EU/EEA</li>
						<li>Čuvaju isključivo u vašem pregledniku</li>
						<li>Obrađuju na našim zaštićenim serverima i servisima</li>
					</ul>
				</section>

				<section>
					<h2>Promjene Politike</h2>
					<p>
						Obavijestit ćemo vas o značajnim promjenama putem obavještenja na našoj web stranici.
						Preporučujemo redovnu provjeru ove stranice.
					</p>
				</section>

				<section>
					<h2>Kontakt</h2>
					<p>
						EuroPark
						<br />
						Adresa: Aleja Bosne Srebrene do br. 109
						<br />
						Telefon: +387 61 487 818
						<br />
						Email: europarkdoo@gmail.com
					</p>
				</section>
			</div>
		</div>
	);
}
