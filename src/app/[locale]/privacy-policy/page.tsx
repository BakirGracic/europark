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
				<p>Posljednja ažuriranja: 22.02.2025.</p>

				<section>
					<h2>Uvod</h2>
					<p>
						EuroPark (&quot;mi&quot;, &quot;nas&quot; ili &quot;naš&quot;) štiti vašu
						privatnost dok koristite našu uslugu aerodromskog parkiranja. Ova Politika
						privatnosti objašnjava kako prikupljamo i koristimo informacije u skladu sa
						GDPR propisima.
					</p>
				</section>

				<section>
					<h2>Prikupljene Informacije</h2>

					<h3>Kolačići (Cookies)</h3>
					<p>Koristimo jedan funkcionalni kolačić za pamćenje vašeg izbora jezika:</p>
					<ul>
						<li>Postavlja se samo prilikom promjene jezika</li>
						<li>
							Pohranjuje samo jezičku preferencu (npr. &quot;bs&quot; ili
							&quot;en&quot;)
						</li>
						<li>Čuva se lokalno na vašem uređaju</li>
						<li>Možete ga izbrisati preko postavki web preglednika</li>
					</ul>

					<h3>Lokalna Pohrana (LocalStorage)</h3>
					<p>Prilikom slanja obrasca pohranjujemo vremenski pečat:</p>
					<ul>
						<li>Sadrži samo datum/vrijeme posljednjeg slanja obrasca</li>
						<li>Koristi se za sprječavanje duplikata ili zloupotrebe</li>
						<li>Ažurira se pri svakom novom slanju obrasca</li>
						<li>Ostaje u vašem pregledniku dok ga ručno ne obrišete</li>
					</ul>
				</section>

				<section>
					<h2>Osnov za Obradu Podataka</h2>
					<p>Prema GDPR članu 6, obrada podataka se vrši na osnovu:</p>
					<ul>
						<li>Vašeg pristanka</li>
						<li>Legitimnog interesa</li>
					</ul>
				</section>

				<section>
					<h2>Vaša Prava</h2>
					<p>Prema GDPR-u imate pravo na:</p>
					<ul>
						<li>Pristup pohranjenim podacima (dostupni na Vašem uređaju)</li>
						<li>Ispravku podataka (preko postavki web pretraživača Vašeg uređaja)</li>
						<li>Brisanje podataka (preko postavki web pretraživača Vašeg uređaja)</li>
						<li>Ograničenje obrade (brisanjem preko web pretraživača Vašeg uređaja)</li>
						<li>Prigovor na obradu (na email)</li>
					</ul>
					<p>
						Za ostvarivanje ovih prava kontaktirajte nas putem informacija u nastavku.
					</p>
				</section>

				<section>
					<h2>Zaštita Podataka</h2>
					<p>Svi podaci se:</p>
					<ul>
						<li>Ne dijele s trećim stranama</li>
						<li>Ne prenose izvan EU/EEA</li>
						<li>Čuvaju isključivo u vašem pregledniku</li>
						<li>Obrađuju na našim zaštićenim serverima lociranim u BiH</li>
					</ul>
				</section>

				<section>
					<h2>Kontakt</h2>
					<p>
						Za pitanja o privatnosti:
						<br />
						Email: europarkdoo@gmail.com
						<br />
						Adresa: Aleja Bosne Srebrene do br. 109
						<br />
						Telefon: +387 61 487 818
					</p>
				</section>

				<section>
					<h2>Promjene Politike</h2>
					<p>
						Obavijestit ćemo vas o značajnim promjenama putem obavještenja na našoj web
						stranici. Preporučujemo redovnu provjeru ove stranice.
					</p>
				</section>
			</div>
		</div>
	);
}
