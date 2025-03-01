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
		<form className='flex items-center justify-center' onSubmit={handleSubmit}>
			<div className='fieldset bg-base-200 border-base-300 rounded-box max-w-min border p-4'>
				{/* name */}
				<label className='fieldset-label'>{t('Name.tip')}</label>
				<input
					required
					minLength={2}
					maxLength={100}
					name='name'
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Name.placeholder')}
				/>

				{/* email */}
				<label className='fieldset-label'>{t('Email.tip')}</label>
				<input
					required
					minLength={5}
					maxLength={100}
					name='email'
					type='email'
					className='input mb-2 w-full'
					placeholder={t('Email.placeholder')}
				/>

				{/* phone */}
				<label className='fieldset-label'>{t('Phone.tip')}</label>
				<input
					required
					minLength={6}
					maxLength={30}
					name='phone'
					type='tel'
					className='input mb-2 w-full'
					placeholder={t('Phone.placeholder')}
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
					name='date_from'
					value={
						date?.from?.toLocaleDateString('bs', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric'
						}) ?? ''
					}
				/>
				<input
					type='hidden'
					name='date_to'
					value={
						date?.to?.toLocaleDateString('bs', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric'
						}) ?? ''
					}
				/>

				{/* message */}
				<label className='fieldset-label'>{t('Message.tip')}</label>
				<textarea
					name='message'
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
