'use server';

import path from 'path';
import { readFileSync } from 'fs';
import { type BookFormStatus } from '@/features/book/types/status';

export async function bookAction(state: BookFormStatus, formData: FormData): Promise<BookFormStatus> {
	const formFields = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
		date_from: new Date(formData.get('date_from') as string).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		date_to: new Date(formData.get('date_to') as string).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		message: (formData.get('message') as string) || '<nema poruke>'
	};

	try {
		const nodemailer = require('nodemailer');

		const transporter = await nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.NODEMAILER_GMAIL,
				pass: process.env.NODEMAILER_PASSWORD
			}
		});

		await transporter.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_GMAIL}>`,
			to: formFields.email,
			subject: 'Vaša rezervacija je uspješno spašena!',
			text: readFileSync(
				path.join(process.cwd(), 'src/features/book/templates/confirmation.txt'),
				'utf8'
			),
			html: readFileSync(
				path.join(process.cwd(), 'src/features/book/templates/confirmation.html'),
				'utf8'
			)
		});

		const reservation_text = Object.entries({
			'{{NAME}}': formFields.name,
			'{{EMAIL}}': formFields.email,
			'{{PHONE}}': formFields.phone,
			'{{DATE_FROM}}': formFields.date_from,
			'{{DATE_TO}}': formFields.date_to,
			'{{MESSAGE}}': formFields.message
		}).reduce(
			(txt, [placeholder, value]) => txt.replace(new RegExp(placeholder, 'g'), value),
			readFileSync(path.join(process.cwd(), 'src/features/book/templates/reservation.txt'), 'utf8')
		);
		const reservation_html = Object.entries({
			'{{NAME}}': formFields.name,
			'{{EMAIL}}': formFields.email,
			'{{PHONE}}': formFields.phone,
			'{{DATE_FROM}}': formFields.date_from,
			'{{DATE_TO}}': formFields.date_to,
			'{{MESSAGE}}': formFields.message
		}).reduce(
			(html, [placeholder, value]) => html.replace(new RegExp(placeholder, 'g'), value),
			readFileSync(path.join(process.cwd(), 'src/features/book/templates/reservation.html'), 'utf8')
		);

		await transporter.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_GMAIL}>`,
			to: process.env.NODEMAILER_GMAIL,
			replyTo: formFields.email,
			subject: 'Nova Rezervacija [europark.ba]',
			text: reservation_text,
			html: reservation_html
		});
	} catch {
		return { status: 'error' };
	}

	return { status: 'ok' };
}
