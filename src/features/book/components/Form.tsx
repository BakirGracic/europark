'use client';

import { useActionState, useState, useEffect } from 'react';
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { useLocale, useTranslations } from 'next-intl';
import { sendAction } from '@/features/book/actions/send';
import { type DateRange, DayPicker } from 'react-day-picker';
import { bs, enUS, de } from 'react-day-picker/locale';
import { type Locale } from '@/i18n/routing';

export default function Form() {
	const [state, formAction, isPending] = useActionState(sendAction, undefined);
	const [date, setDate] = useState<DateRange | undefined>();
	const [fingerprint, setFingerprint] = useState('');
	const locale = useLocale() as Locale;
	const t = useTranslations('Form');

	useEffect(() => {
		setHash();
	}, []);

	const setHash = async () => {
		setFingerprint(await getFingerprint());
	};

	const loadHashDate = () => {
		const value = localStorage.getItem(fingerprint);
		try {
			if (value && !isNaN(Date.parse(value))) {
				return value;
			}
		} catch {
			return '';
		}
		return '';
	};

	const handleSubmit = async () => {
		setDate(undefined);
		localStorage.setItem(fingerprint, new Date().toUTCString());
	};

	const datePickerLocales = {
		bs: bs,
		en: enUS,
		de: de
	};

	return (
		<form
			className='flex items-center justify-center'
			action={formAction}
			onSubmit={handleSubmit}
		>
			<div className='fieldset bg-base-200 border-base-300 rounded-box max-w-min border p-4'>
				{/* name */}
				<label className='fieldset-label'>{t('Name.tip')}</label>
				<input
					required
					name='name'
					disabled={isPending}
					type='text'
					className='input mb-2 w-full'
					placeholder={t('Name.placeholder')}
				/>

				{/* contact */}
				<label className='fieldset-label'>{t('Contact.tip')}</label>
				<input
					required
					name='contact'
					disabled={isPending}
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
					className={`react-day-picker outline-base-content/20 mx-auto w-min border-2 border-none outline-2 ${isPending ? 'bg-base-200 outline-none' : ''}`}
					mode='range'
					timeZone='Europe/Sarajevo'
					locale={datePickerLocales[locale]}
					selected={date}
					onSelect={setDate}
				/>
				<input type='hidden' name='date_from' value={date?.from?.toString() ?? ''} />
				<input type='hidden' name='date_to' value={date?.to?.toString() ?? ''} />

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

				{/* fake */}
				<input type='hidden' name='ffamily_name' autoComplete='family-name' />
				<input type='hidden' name='fgiven_name' autoComplete='family-name' />
				<input type='hidden' name='femail' autoComplete='email' />
				<input type='hidden' name='fphone' autoComplete='tel' />
				<input type='hidden' name='faddress' autoComplete='street-address' />
				<input type='hidden' name='fcity' autoComplete='address-level2' />

				{/* hash */}
				<input type='hidden' name='hhash' defaultValue={loadHashDate()} />

				{/* response status */}
				{state === 'success' ? (
					<div role='alert' className='alert alert-success alert-soft mt-4 w-full'>
						<span>{t('response_success')}</span>
					</div>
				) : state ? (
					<div role='alert' className='alert alert-error alert-soft mt-4 w-full'>
						<span>{state}</span>
					</div>
				) : null}
			</div>
		</form>
	);
}
