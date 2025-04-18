'use client';

import { useActionState, useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { bookAction } from '@/features/book/actions/book';
import { toast } from 'sonner';
import { CheckBadgeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { type DateRange, DayPicker } from 'react-day-picker';
import { bs, enUS, de } from 'react-day-picker/locale';
import { type Locale } from '@/i18n/routing';

export default function Form() {
	const [state, formAction, isPending] = useActionState(bookAction, {});
	const [date, setDate] = useState<DateRange | undefined>();
	const locale = useLocale() as Locale;
	const t = useTranslations('Form');

	const handleSubmit = () => {
		setDate(undefined);
	};

	useEffect(() => {
		if (state.status === undefined) {
			return;
		} else if (state.status === 'ok') {
			toast.custom(() => (
				<div role='alert' className='alert alert-success alert-soft w-sm'>
					<CheckBadgeIcon className='h-6 w-6' />
					<span>{t('success_message')}</span>
				</div>
			));
		} else {
			toast.custom(() => (
				<div role='alert' className='alert alert-error alert-soft w-sm'>
					<ExclamationTriangleIcon className='h-6 w-6' />
					<span>{t('error_message')}</span>
				</div>
			));
		}
	}, [state]);

	const datePickerLocales = {
		bs: bs,
		en: enUS,
		de: de
	};

	return (
		<form action={formAction} className='flex items-center justify-center' onSubmit={handleSubmit}>
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
					disabled={isPending}
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
					disabled={isPending}
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
					disabled={isPending}
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
					defaultValue={
						date?.from?.toLocaleDateString('bs-BA', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric'
						}) || ''
					}
				/>
				<input
					type='hidden'
					name='date_to'
					defaultValue={
						date?.to?.toLocaleDateString('bs-BA', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric'
						}) || ''
					}
				/>

				{/* message */}
				<label className='fieldset-label'>{t('Message.tip')}</label>
				<textarea
					name='message'
					className='textarea h-24 w-full !rounded-xl'
					placeholder={t('Message.placeholder')}
					disabled={isPending}
				></textarea>

				{/* submit */}
				<button type='submit' className='btn btn-primary mt-4 text-center' disabled={isPending}>
					{t('submit_text')}
				</button>
			</div>
		</form>
	);
}
