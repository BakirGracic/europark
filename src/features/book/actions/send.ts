'use server';

import { type BookFormResponse, type BookFormStatus } from '@/features/book/types/status';
import { getTranslations } from 'next-intl/server';

export async function sendAction(
	state: BookFormStatus,
	formData: FormData
): Promise<BookFormResponse> {
	const t = await getTranslations('Form');

	const formFields = {
		name: formData.get('name') || '',
		contact: formData.get('contact') || '',
		date_from: formData.get('date_from') || '',
		date_to: formData.get('date_to') || '',
		message: formData.get('message') || '',
		// honeypot fields
		ffamily_name: formData.get('ffamily_name'),
		fgiven_name: formData.get('fgiven_name'),
		femail: formData.get('femail'),
		fphone: formData.get('fphone'),
		faddress: formData.get('faddress'),
		fcity: formData.get('fcity'),
		// browser fingerprint
		hhash: formData.get('hhash')
	};

	// validate honeypot
	if (
		formFields.ffamily_name ||
		formFields.fgiven_name ||
		formFields.femail ||
		formFields.fphone ||
		formFields.faddress ||
		formFields.fcity
	) {
		return t('response_error_bot');
	}

	// validate rate limit by browser fingerprint
	if (!isNaN(Date.parse(String(formFields.hhash)))) {
		const hashTime = new Date(String(formFields.hhash));
		const hourAgo = new Date(Date.now() - 180000);
		if (hashTime > hourAgo) return t('response_error_cooldown');
	}

	// format message
	const formattedMessage = `
<b>Ime:</b> ${formFields.name}
<b>Kontakt:</b> ${formFields.contact}
<b>Od:</b> ${new Date(formFields.date_from.toString()).toLocaleDateString('bs')}
<b>Do:</b> ${new Date(formFields.date_to.toString()).toLocaleDateString('bs')}
<b>Napomena:</b> ${formFields.message}
    `;

	// send message
	const response = await fetch(
		`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: process.env.TELEGRAM_BOT_CHAT_ID,
				text: formattedMessage,
				parse_mode: 'HTML'
			})
		}
	);

	// check response & return
	return response.ok ? 'success' : t('response_error_send');
}
