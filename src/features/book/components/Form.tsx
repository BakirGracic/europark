'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { type DateRange, DayPicker } from 'react-day-picker';
import { bs, enUS, de } from 'react-day-picker/locale';
import { type Locale } from '@/i18n/routing';

export default function Form() {
	const [date, setDate] = useState<DateRange | undefined>();
	const locale = useLocale() as Locale;
	const t = useTranslations('Form');

	const handleSubmit = () => {
		setDate(undefined);
	};

	const datePickerLocales = {
		bs: bs,
		en: enUS,
		de: de
	};

	return (
		<form
			className='flex items-center justify-center'
			action='https://api.web3forms.com/submit'
			method='POST'
			onSubmit={handleSubmit}
		>
			<div className='fieldset bg-base-200 border-base-300 rounded-box max-w-min border p-4'>
				{/* key */}
				<input
					type='hidden'
					name='access_key'
					value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
				/>

				{/* meta */}
				<input type='hidden' name='subject' value='Nova kontak forma EUROPARK' />
				<input type='hidden' name='from_name' value='EuroPark.ba' />

				{/* honeypot */}
				<input type='checkbox' name='botcheck' className='hidden' />

				{/* name */}
				<label className='fieldset-label'>{t('Name.tip')}</label>
				<input
					required
					name='Ime/Prezime'
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Name.placeholder')}
				/>

				{/* contact */}
				<label className='fieldset-label'>{t('Contact.tip')}</label>
				<input
					required
					name='Kontakt Podatak'
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Contact.placeholder')}
				/>

				{/* date */}
				<label className='fieldset-label'>{t('Date.tip')}</label>
				<DayPicker
					required={true}
					min={1}
					disabled={{ before: new Date() }}
					className='react-day-picker outline-base-content/20 mx-auto mb-2 w-min border-2 border-none outline-2'
					mode='range'
					timeZone='Europe/Sarajevo'
					locale={datePickerLocales[locale]}
					selected={date}
					onSelect={setDate}
				/>
				<input
					type='hidden'
					name='Datum od'
					defaultValue={date?.from?.toLocaleDateString('bs', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					})}
				/>
				<input
					type='hidden'
					name='Datum do'
					defaultValue={date?.to?.toLocaleDateString('bs', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					})}
				/>

				{/* message */}
				<label className='fieldset-label'>{t('Message.tip')}</label>
				<textarea
					name='Napomena'
					className='textarea h-24 w-full !rounded-xl'
					placeholder={t('Message.placeholder')}
				></textarea>

				{/* submit */}
				<button type='submit' className='btn btn-primary mt-4 text-center'>
					{t('submit_text')}
				</button>
			</div>
		</form>
	);
}
