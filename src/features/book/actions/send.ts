'use server';

import { type BookFormResponse, type BookFormStatus } from '@/features/book/types/status';

export async function sendAction(
	state: BookFormStatus,
	formData: FormData
): Promise<BookFormResponse> {
	const formFields = {
		name: formData.get('name') || '',
		contact: formData.get('contact') || '',
		date_from: formData.get('date_from') || '',
		date_to: formData.get('date_to') || '',
		message: formData.get('message') || ''
	};

	console.log('formFields', formFields);

	const formattedMessage = `
<b>Ime:</b> ${formFields.name}
<b>Kontakt:</b> ${formFields.contact}
<b>Od:</b> ${new Date(formFields.date_from.toString()).toLocaleDateString('bs')}
<b>Do:</b> ${new Date(formFields.date_to.toString()).toLocaleDateString('bs')}
<b>Napomena:</b> ${formFields.message}
    `;

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

	if (!response.ok) {
		return 'error';
	}

	return 'success';
}
