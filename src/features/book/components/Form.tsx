'use client';

import { useActionState, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { sendAction } from '@/features/book/actions/send';
import { type DateRange, DayPicker } from 'react-day-picker';
import { bs, enUS, de } from 'react-day-picker/locale';
import { type Locale } from '@/i18n/routing';

export default function Form() {
	const [state, formAction, isPending] = useActionState(sendAction, undefined);
	const [date, setDate] = useState<DateRange | undefined>();
	const locale = useLocale() as Locale;

	const t = useTranslations('Form');

	const datePickerLocales = {
		bs: bs,
		en: enUS,
		de: de
	};

	return (
		<form className='flex items-center justify-center' action={formAction}>
			<div className='fieldset bg-base-200 border-base-300 rounded-box max-w-min border p-4'>
				{/* name */}
				<label className='fieldset-label'>{t('Name.tip')}</label>
				<input
					name='name'
					disabled={isPending}
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Name.placeholder')}
				/>

				{/* contact */}
				<label className='fieldset-label'>{t('Contact.tip')}</label>
				<input
					name='contact'
					disabled={isPending}
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Contact.placeholder')}
				/>

				{/* date */}
				<label className='fieldset-label'>{t('Date.tip')}</label>
				<DayPicker
					className='react-day-picker border-base-content/20 mx-auto w-min border-2'
					mode='range'
					timeZone='Europe/Sarajevo'
					locale={datePickerLocales[locale]}
					selected={date}
					onSelect={setDate}
				/>
				<input type='hidden' name='date-from' defaultValue={date?.from?.toString()} />
				<input type='hidden' name='date-to' defaultValue={date?.to?.toString()} />

				{/* message */}
				<label className='fieldset-label'>{t('Message.tip')}</label>
				<textarea
					name='message'
					disabled={isPending}
					className='textarea h-24 w-full !rounded-xl'
					placeholder={t('Message.placeholder')}
				></textarea>

				{/* submit */}
				<button
					type='submit'
					className='btn btn-primary mt-4 text-center'
					disabled={isPending}
				>
					{isPending ? (
						<span className='loading loading-spinner loading-md'></span>
					) : (
						t('submit_text')
					)}
				</button>

				{/* response status */}
				{state === 'error' ? (
					<div role='alert' className='alert alert-error alert-soft mt-4 w-full'>
						<span>{t('response_error')}</span>
					</div>
				) : state === 'success' ? (
					<div role='alert' className='alert alert-success alert-soft mt-4 w-full'>
						<span>{t('response_success')}</span>
					</div>
				) : null}
			</div>
		</form>
	);
}
